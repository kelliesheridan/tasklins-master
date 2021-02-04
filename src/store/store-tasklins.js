import { uid, date } from "quasar";
import { LocalStorage, SessionStorage } from "quasar";
import { firebaseAuth, firebaseDb } from "boot/firebase";
import moment from "moment";
import { Notify } from 'quasar';

const state = {
  tasklin: {
    // name: "",
    // color: "",
    // type: "",
    // xp: 0,
    // creation_date: "",
    // eyeType: "",
    // mouth: "",
    // nose: "",
    // hatched: "",
    // level: ""
  }
};

const mutations = {
  setTasklin(state, payload) {
    state.tasklin = payload;
  },
  updateXP(state, isCompleted) {
    if (isCompleted) {
      state.tasklin.xp += 1;
    } else {
      state.tasklin.xp -= 1;
    }
  },
  addXP(state) {
    state.tasklin.xp += 1;
  },
  setLevel(state) {
    state.tasklin.level = getLevel();
    if (state.tasklin.maxLevel < state.tasklin.level) {
      state.tasklin.maxLevel = state.tasklin.level;
    }
  },
};

const actions = {
  addTasklin({ dispatch }, tasklin) {
    dispatch("fbAddTasklin", tasklin);
    dispatch("profile/fbReadProfile", null, { root: true });
    this.$router.replace("/index");
  },
  updateTasklin({ dispatch }, tasklin) {
    dispatch("fbUpdateTasklin", tasklin);
    dispatch("profile/fbReadProfile", null, { root: true });
    dispatch("fbReadTasklins", {});
  },
  getTasklin({ dispatch, commit }, payload) {
    dispatch("fbReadTasklins", {});
  },
  addXPToTasklin({ dispatch, commit }, task) {
    commit("updateXP", task.updates.completed);
    commit("setLevel");
    dispatch("fbUpdateTasklin", state.tasklin);
  },
  addXP({ dispatch, commit }, task) {
    commit("addXP");
    dispatch("fbUpdateTasklin", state.tasklin);
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
          creation_date: moment(tasklinInfo.creation_date).format("YYYY-MM-DD"),
          eyeType: tasklinInfo.eyeType,
          mouth: tasklinInfo.mouth,
          nose: tasklinInfo.nose,
          hatched: tasklinInfo.hatched,
          level: tasklinInfo.level,
          maxLevel: tasklinInfo.maxLevel
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
      creation_date: moment(tasklin.creation_date).format("YYYY-MM-DD"),
      project: tasklin.project,
      level: tasklin.level,
      maxLevel: tasklin.maxLevel,
      color: tasklin.color,
      color2: tasklin.color2,
      color3: tasklin.color3,
      bodyShape: tasklin.bodyShape,
      bodyTexture: tasklin.bodyTexture,
      eyeColor: tasklin.eyeColor,
      eyeType: tasklin.eyeType == undefined ? "eyes1" : tasklin.eyeType,
      nose: tasklin.nose,
      mouth: tasklin.mouth == undefined ? "mouth1" : tasklin.mouth,
      tongue: tasklin.tongue,
      pattern1: tasklin.pattern1,
      eyebrowsOrTail: tasklin.eyebrowsOrTail,
      earsOrHorns: tasklin.earsOrHorns,
      bodyShape2: tasklin.bodyShape2,
      pattern2: tasklin.pattern2,
      hatched: false,
      tongue: tasklin.tongue
    };
    let fbTasklin = firebaseDb.ref("tasklins/" + userId);
    fbTasklin.set(payload);
    commit("setTasklin", payload);
  }, 
};

const getters = {
  tasklin: state => {
    return state.tasklin;
  }
};

function getLevel() {
  var xp = parseInt(state.tasklin.xp);
  var level = ""
  if (xp >= 3500) {
    level = "12";
  } else if (xp >= 3000 && xp <= 3499) {
    level = "11";
  } else if (xp >= 2500 && xp <= 2999) {
    level = "10";
  } else if (xp >= 2000 && xp <= 2499) {
    level = "9";
  } else if (xp >= 1500 && xp <= 1999) {
    level = "8";
  } else if (xp >= 1000 && xp <= 1499) {
    level = "7";
  } else if (xp >= 500 && xp <= 999) {
    level = "6";
  } else if (xp >= 250 && xp <= 499) {
    level = "5";
  } else if (xp >= 100 && xp <= 249) {
    level = "4";
  } else if (xp >= 50 && xp <= 99) {
    level = "3";
  } else if (xp >= 25 && xp <= 49) {
    level = "2";
  } else {
    level = "1";
  }
  if (level > state.tasklin.maxLevel) {
    Notify.create({
      icon: 'grade',
      message: "Congratulations! " + state.tasklin.name == '' ? " Your tasklin" : state.tasklin.name + " reached level " + level + "!",
      color: 'primary',
      textColor: 'white'  
    })
  }
  return level;
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
