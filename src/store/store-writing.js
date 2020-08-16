import Vue from "vue";
import { uid, date } from "quasar";
import { LocalStorage, SessionStorage } from "quasar";
import { firebaseAuth, firebaseDb } from "boot/firebase";

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
  }
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
      commit("setWritingTask", writingRecord);
    });
  },
  fbAddWritingTask({ dispatch }, writingTask) {
    let userId = firebaseAuth.currentUser.uid;
    let username = this.state.profile.profile.user.name;
    let userColor = this.state.profile.profile.user.color;
    let date = Date.now();
    let payload = {
      date: date,
      username: username.toLowerCase(),
      type: writingTask,
      intensity: 0.01,
      goal: 10,
      cheers: 0,
      color: userColor
    };
    let taskWriting = firebaseDb.ref("writing/" + date);
    taskWriting.set(payload);
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
