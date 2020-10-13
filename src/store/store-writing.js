import Vue from "vue";
import { uid, date } from "quasar";
import { LocalStorage, SessionStorage } from "quasar";
import { firebaseAuth, firebaseDb } from "boot/firebase";
import moment from "moment";

const state = {
  writing: {}
};

const mutations = {
  setWritingTask(state, payload) {
    state.writing = payload;
  },
  setSortedWritingTask(state, payload) {
    let sortedArray = new Array();
    sortedArray = payload.sort();
    state.writingSorted = payload;
  },
  addWritingTask(state, payload) {
    if (state.writing != undefined) 
    Vue.set(state.writing, payload.id, payload.writingTask);
  },
  updateWritingTask(state, payload) {
    Object.assign(state.writing[payload.userId], payload);
  },
};

const actions = {
  addWritingTask({ commit, dispatch }, writingTask) {
    dispatch("fbAddWritingTask", writingTask);
    dispatch("fbReadWritingTasks");
  },
  readWritingTasks({ dispatch }) {
    dispatch("fbReadWritingTasks");
  },
  fbReadWritingTasks({ commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let writingTasks = firebaseDb.ref("writing").orderByKey();
    let writingArray = new Array();
    writingTasks.once("value").then(function(snapshot) {
      let writingRecord = snapshot.val();
      commit("setWritingTask", writingRecord);
    });

    // child added
    writingTasks.on("child_added", snapshot => {
      let writingRecord = snapshot.val();
      let payload = {
        id: snapshot.key,
        writingTask: writingRecord
      };
      commit("addWritingTask", payload);
    });      
  },
  fbAddWritingTask({ dispatch }, writingTask) {
    let userId = firebaseAuth.currentUser.uid;
    let username = this.state.profile.profile.user.name;
    let userColor = this.state.profile.profile.user.color;
    let date = moment().format("YYYY-MM-DD HH:mm:ss:SS");
    let payload = {
      date: date,
      username: username.toLowerCase(),
      userId: userId,
      type: writingTask,
      intensity: 0.01,
      goal: 10,
      cheers: 0,
      color: userColor,
    };
    let taskWriting = firebaseDb.ref("writing/" + date);
    taskWriting.set(payload);

    var intensityCount = 0.0;
    Object.keys(this.state.writing.writing).forEach(element => {
      if (this.state.writing.writing[element].userId == userId) {
        intensityCount += this.state.writing.writing[element].intensity;
      }
    });

    let taskWritingChallenge = firebaseDb.ref("writingChallenge/" + userId);
    let writingActivity = {
      username: username.toLowerCase(),
      intensity: intensityCount + 0.01,
      color: userColor
    };
    taskWritingChallenge.set(writingActivity);

    dispatch("profile/addXP", true, { root: true })
    dispatch("profile/addLin", true, { root: true })
    dispatch("fbReadWritingTasks");
  }
};

const getters = {
  writing: state => {
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
