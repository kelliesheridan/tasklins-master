import { LocalStorage, SessionStorage } from "quasar";
import { Dark } from "quasar";
import { firebaseAuth, firebaseDb } from "boot/firebase";
import moment from "moment";

const state = {
  settings: {
    show24hrTimeFormat: false,
    showProjectsOnPage: false,
    hideCompletedTasks: false,
    darkMode: false,
    sundayStart: false
  }
};

const mutations = {
  setShow24hrTimeFormat(state, value) {
    state.settings.show24hrTimeFormat = value;
  },
  setShowProjectsOnPage(state, value) {
    state.settings.showProjectsOnPage = value;
  },
  setHideCompletedTasks(state, value) {
    state.settings.hideCompletedTasks = value;
  },
  setDarkMode(state, value) {
    Dark.toggle();
    state.settings.darkMode = value;
  },
  setSundayStart(state, value) {
    state.settings.sundayStart = value;
  },
  setSettings(state, settings) {
    if (
      (!Dark.isActive && settings.darkMode) ||
      (Dark.isActive && !settings.darkMode)
    ) {
      Dark.toggle();
    }
    Object.assign(state.settings, settings);
  }
};

const actions = {
  setShow24hrTimeFormat({ commit, dispatch }, value) {
    commit("setShow24hrTimeFormat", value);
    // dispatch('saveSettings')
  },
  setShowProjectsOnPage({ commit, dispatch }, value) {
    commit("setShowProjectsOnPage", value);
    // dispatch('saveSettings')
  },
  setHideCompletedTasks({ commit, dispatch }, value) {
    commit("setHideCompletedTasks", value);
    // dispatch('saveSettings')
  },
  setDarkMode({ commit, dispatch }, value) {
    commit("setDarkMode", value);
    // dispatch('saveSettings')
  },
  setSundayStart({ commit, dispatch }, value) {
    commit("setSundayStart", value);
    // dispatch('saveSettings')
  },
  saveSettings({ state, dispatch }) {
    LocalStorage.set("settings", state.settings);
    dispatch("fbUpdateSettings");
  },
  addHelp({ dispatch }, value) {
    dispatch("fbAddHelp", value);
  },
  fbReadSettings({ commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let userSettings = firebaseDb.ref("settings/" + userId);

    userSettings.once("value", snapshot => {
      let settings = snapshot.val();
      let payload = {
        darkMode: settings.darkMode,
        showProjectsOnPage: settings.showProjectsOnPage,
        sundayStart: settings.sundayStart,
        hideCompletedTasks: settings.hideCompletedTasks,
        show24hrTimeFormat: settings.show24hrTimeFormat
      };
      console.debug("settings are: ", payload);
      commit("setSettings", payload);
    });
  },
  fbUpdateSettings({}) {
    let userId = firebaseAuth.currentUser.uid;
    let settingsUpdate = firebaseDb.ref("settings/" + userId);
    settingsUpdate.update(state.settings, error => {
      if (error) {
        showErrorMessage(error.message);
      }
    });
  },
  fbAddHelp({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let date = moment().format("YYYY-MM-DD HH:mm:ss");
    let taskRef = firebaseDb.ref("help/" + date);
    let help = {
      problem: payload.problem,
      createdDate: moment().format("YYYY-MM-DD HH:mm:ss"),
      name: this.state.profile.profile.user.name,
      userame: this.state.profile.profile.user.username,
      userid: userId
    };
    taskRef.set(help, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        
      }
    });
  }
};

const getters = {
  settings: state => {
    return state.settings;
  },
  darkMode: state => { 
    return state.settings.darkMode;
    }
  };

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
