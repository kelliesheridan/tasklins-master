import { uid, date } from "quasar";
import { LocalStorage, SessionStorage } from "quasar";
import { firebaseAuth, firebaseDb } from "boot/firebase";
import moment from "moment";

const state = {
  tasklin: {
    name: "",
    color: "",
    type: "",
    xp: 0,
    creation_date: ""
  }
};

const mutations = {
  setTasklin(state, payload) {
    state.tasklin = payload;
  }
};

const actions = {
  addTasklin({ dispatch }, tasklin) {
    dispatch("fbAddTasklin", tasklin);
    dispatch("profile/fbReadProfile", null, { root: true });
    this.$router.replace("/todo");
  },
  updateTasklin({ dispatch }, tasklin) {
    dispatch("fbUpdateTasklin", tasklin);
    dispatch("profile/fbReadProfile", null, { root: true });
  },
  getTasklin({ dispatch }, payload) {
    dispatch("fbReadTasklins", {});
  },
  fbReadTasklins({ commit }) {
    let userId = firebaseAuth.currentUser.uid;
    
    let userSettings = firebaseDb.ref("tasklins/" + userId);

    userSettings.once("value", snapshot => {
      let tasklinInfo = snapshot.val();
      if (tasklinInfo) {
        let payload = {
          name: tasklinInfo.name,
          color: tasklinInfo.color,
          type: tasklinInfo.type,
          xp: tasklinInfo.xp,
          creation_date: moment(tasklinInfo.creation_date).format("YYYY-MM-DD")
        };
        commit("setTasklin", payload);
      }
    });
  },
  fbUpdateTasklin({}, tasklin) {
    let userId = firebaseAuth.currentUser.uid;
    let tasklinUpdate = firebaseDb.ref("tasklins/" + userId);
    tasklinUpdate.update(tasklin, error => {
      if (error) {
        showErrorMessage(error.message);
      }
    });
  },
  fbAddTasklin({ commit }, tasklin) {
    let userId = firebaseAuth.currentUser.uid;
    let payload = {
      name: tasklin.name,
      color: tasklin.color,
      type: tasklin.type,
      xp: tasklin.xp,
      creation_date: moment(tasklin.creation_date).format("YYYY-MM-DD")
    };
    let fbTasklin = firebaseDb.ref("tasklins/" + userId);
    fbTasklin.set(payload);
    commit("setTasklin", payload);
  }
};

const getters = {
  tasklin: state => {
    return state.tasklin;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
