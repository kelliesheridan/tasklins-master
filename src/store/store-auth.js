import { LocalStorage, Loading } from "quasar";
import { firebaseAuth, firebaseDb } from "boot/firebase";
import { showErrorMessage } from "src/functions/function-show-error-message";
import moment from "moment";

const state = {
  loggedIn: false
};

const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value;
  },
  setProfile(state, value) {
    state.loggedIn = value;
  }
};

const actions = {
  registerUser({ dispatch }, payload) {
    Loading.show();
    firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log("response: ", response);
        dispatch("fbCreateProfile");
        dispatch("fbCreateSettings");
        dispatch("fbCreateOriginalProject");
        this.$router.push("/auth2").catch(err => {});
      })
      .catch(error => {
        this.$router.push("/auth").catch(err => {});
        showErrorMessage(error.message);
      });
  },
  loginUser({}, payload) {
    Loading.show();
    firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log("response: ", response);
      })
      .catch(error => {
        showErrorMessage(error.message);
      });
  },
  logoutUser() {
    console.log("logoutUser");
    firebaseAuth.signOut();
  },
  handleAuthStateChange({ commit, dispatch }) {
    firebaseAuth.onAuthStateChanged(user => {
      Loading.hide();
      if (user) {
        commit("setLoggedIn", true);
        LocalStorage.set("loggedIn", true);
        dispatch("tasks/fbReadData", null, { root: true });
        dispatch("tasks/fbReadProjects", null, { root: true });
        dispatch("profile/fbReadProfile", null, { root: true });
        dispatch("fitness/readFitnessTasks", null, { root: true });
        dispatch("fitness/readFitnessLevels", null, { root: true });
        dispatch("writing/readWritingTasks", null, { root: true });
        dispatch("writing/readWritingLevels", null, { root: true });
        dispatch("settings/fbReadSettings", null, { root: true });
        //dispatch("profile/fbCheckUsername", null, { root: true });
        dispatch("tasklins/getTasklin", null, { root: true });
        if (this.state.profile.profile.user.name !== "") {
          if (this.state.tasklins.tasklin.name === "") {
            this.$router.replace("/index").catch(err => {});
          } else {
            this.$router.replace("/index").catch(err => {});
          }
        } else {
        this.$router.replace("/auth2").catch(err => {});
        }
      } else {
        commit("tasks/clearTasks", null, { root: true });
        commit("tasks/setTasksDownloaded", false, { root: true });
        commit("setLoggedIn", false);
        this.$router.replace("/auth").catch(err => {});
      }
    });
  },
  fbCreateProfile({ commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let payload = {
      name: "",
      username: "",
      id: userId,
      about: "",
      avatar: "",
      lin: 0,
      xp: 0,
      level: 0,
      maxLevel: 0,
      friends: "",
      inventory: "",
      private: "",
      signup: true,
      admin: false,
      createdDate: moment().format("YYYY-MM-DD")
    };
    let taskRef = firebaseDb.ref("profile/" + userId);
    taskRef.set(payload);
    commit("setProfile", payload);
  },
  fbCreateSettings() {
    let userId = firebaseAuth.currentUser.uid;
    let payload = {
      darkMode: false,
      hideCompletedTasks: false,
      hideTips: false,
      show24hrTimeFormat: false
    };
    let taskRef = firebaseDb.ref("settings/" + userId);
    taskRef.set(payload);
  },
  fbCreateOriginalProject({ dispatch }) {
    let userId = firebaseAuth.currentUser.uid;
    let payload = {
      projectName: "Tasks",
      color: ""
    };
    let taskRef = firebaseDb.ref(
      "projects/" + userId + "/" + payload.projectName
    );
    console.debug("project:", payload);
    payload.createdDate = moment().format();
    taskRef.set(payload, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        dispatch("tasks/fbReadProjects", null, { root: true });
        //Notify.create('New Task Added - + 1xp')
      }
    });
  },
};

const getters = {
  profile: state => {
    return state.profile.user;
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
