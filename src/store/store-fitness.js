import Vue from "vue";
import { uid, date } from "quasar";
import { LocalStorage, SessionStorage } from "quasar";
import { firebaseAuth, firebaseDb } from "boot/firebase";
import moment from "moment";

const state = {
  // kellieprogress: 0.3,
  // mattprogress: 0.9,
  // kaitlynprogress: 0.8,
  // adamprogress: 0.4,
  // fitness: {
  // // 	date: null,
  // // 	username: '',
  // // 	type: '',
  // // 	intensity: 0.0,
  // // 	goal: 0,
  // // 	cheers: 0,
  // }
};

const mutations = {
  setFitnessTask(state, payload) {
    state.fitness = payload;
  },
  setFitnessChallengeTask(state, payload) {
    state.fitnessChallenge = payload;
  },
  addFitnessTask(state, payload) {
    if (state.fitness != undefined) 
    Vue.set(state.fitness, payload.id, payload.fitnessTask);
  },
  updateFitnessTask(state, payload) {
    Object.assign(state.fitness[payload.userId], payload);
  },
  setSortedFitnessTask(state, payload) {
    let sortedArray = new Array();
    sortedArray = payload.sort();
    state.fitnessSorted = payload;
  }
};

const actions = {
  addFitnessTask({ commit, dispatch }, fitnessTask) {
    dispatch("fbAddFitnessTask", fitnessTask);
    dispatch("fbReadFitnessTasks");
  },
  readFitnessTasks({ dispatch }) {
    dispatch("fbReadFitnessTasks");
  },
  readFitnessLevels({ dispatch }) {
    dispatch("fbReadFitnessLevels");
  },
  cheer({ dispatch }, value) {
    dispatch("fbCheerFitnessTask", value)
  },
  fbReadFitnessTasks({ commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let fitnessTasks = firebaseDb.ref("fitness").orderByKey().limitToLast(10);
    fitnessTasks.once("value").then(function(snapshot) {
      let fitnessRecord = snapshot.val();
      commit("setFitnessTask", fitnessRecord);
    });
    // child added
    fitnessTasks.on("child_added", snapshot => {
      let fitnessRecord = snapshot.val();
      let payload = {
        id: snapshot.key,
        fitnessTask: fitnessRecord
      };
      commit("addFitnessTask", payload);
    });
  },

  fbReadFitnessLevels({ commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let fitnessTasks = firebaseDb.ref("fitnessChallenge");
    fitnessTasks.once("value").then(function(snapshot) {
      let fitnessRecord = snapshot.val();
      commit("setFitnessChallengeTask", fitnessRecord);
    });
  },

  fbAddFitnessTask({ dispatch }, fitnessTask) {
    let userId = firebaseAuth.currentUser.uid;
    let username = this.state.profile.profile.user.name;
    let userColor = this.state.profile.profile.user.color;
    let date = moment().format("YYYY-MM-DD HH:mm:ss:SS");
    let payload = {
      date: date,
      username: username.toLowerCase(),
      userId: userId,
      type: fitnessTask,
      intensity: 0.01,
      goal: 10,
      cheers: 0,
      color: userColor
    };
    let taskFitness = firebaseDb.ref("fitness/" + date);
    taskFitness.set(payload);

    var intensityCount = 0.0;
    Object.keys(this.state.fitness.fitness).forEach(element => {
      if (this.state.fitness.fitness[element].userId == userId) {
        intensityCount += this.state.fitness.fitness[element].intensity;
      }
    });

    let taskFitnessChallenge = firebaseDb.ref("fitnessChallenge/" + userId);
    let fitnessActivity = {
      username: username.toLowerCase(),
      intensity: intensityCount + 0.01,
      color: userColor
    };
    taskFitnessChallenge.set(fitnessActivity);

    dispatch("fbReadFitnessTasks");
    dispatch("fbReadFitnessLevels");
    //dispatch("profile/addXP", true, { root: true })
    dispatch("tasklins/addXP", true, { root: true })
    dispatch("profile/addLin", true, { root: true })
  },
  fbCheerFitnessTask({dispatch}, payload) {
    let fitnessTasks = firebaseDb.ref("fitness/" + payload.date);
    fitnessTasks.once("value").then(function(snapshot) {
      let fitnessRecord = snapshot.val();
      fitnessRecord.cheers += 1;
    let taskRef = firebaseDb.ref("fitness/" + payload.date);
    taskRef.update(fitnessRecord, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        dispatch("fbReadFitnessTasks");
      }
    });
    });
  }
}
const getters = {
  fitness: state => {
    return state;
  },
  fitnessChallenge: state => {
    return state.fitness.fitnessChallenge;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
