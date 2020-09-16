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
  cheer({ dispatch }, value) {
    dispatch("fbCheerFitnessTask", value)
  },
  fbReadFitnessTasks({ commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let fitnessTasks = firebaseDb.ref("fitness").orderByKey();
    fitnessTasks.once("value").then(function(snapshot) {
      let fitnessRecord = snapshot.val();
      commit("setFitnessTask", fitnessRecord);
    });
    // child added
    fitnessTasks.on("child_added", snapshot => {
      let fitnessRecord = snapshot.val();
      commit("setFitnessTask", fitnessRecord);
    });
  },
  fbAddFitnessTask({ dispatch }, fitnessTask) {
    let userId = firebaseAuth.currentUser.uid;
    let username = this.state.profile.profile.user.name;
    let userColor = this.state.profile.profile.user.color;
    let date = moment().format("YYYY-MM-DD HH:mm:ss");
    let payload = {
      date: date,
      username: username.toLowerCase(),
      type: fitnessTask,
      intensity: 0.01,
      goal: 10,
      cheers: 0,
      color: userColor
    };
    let taskFitness = firebaseDb.ref("fitness/" + date);
    taskFitness.set(payload);
    dispatch("fbReadFitnessTasks");
    dispatch("profile/addXP", true, { root: true })
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
    state.kellieprogress = 0.3;
    state.mattprogress = 0.9;
    state.kaitlynprogress = 0.8;
    state.adamprogress = 0.4;
    return state;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
