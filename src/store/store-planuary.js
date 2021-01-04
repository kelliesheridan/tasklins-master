import Vue from "vue";
import moment from "moment";
import { firebaseDb, firebaseAuth } from "boot/firebase";
import { showErrorMessage } from "src/functions/function-show-error-message";

const state = {
  planuary: {}
};

const mutations = {
  setPlanuaryWish(state, value) {
    state.planuary.planuaryWish = value;
  },
  setWishes(state, wishes) {
    state.planuary = wishes;
  },
  setFocus(state, focus) {
    state.planuary.focus = focus;
  },
  addWish(state, wishes) {
    Vue.set(state.planuary, wishes, wishes);
    //console.debug("state.planuary are: ", state.planuary);
  },
  addFocus(state, focus) {
    state.planuary.focus = focus;
    //Vue.set(state.planuary, focus, focus);
    //console.debug("state.planuary are: ", state.planuary);
  }
};

const actions = {
  addWish({ dispatch, commit }, wish) {
    let payload = {
      username: wish.username,
      wish: wish.wish
    };
    dispatch("fbAddWish", payload);
  },
  addFocus({ dispatch, commit }, focus) {
    let payload = {
      username: focus.username,
      focus1: focus.focus1,
      focus2: focus.focus2,
      focus3: focus.focus3,
      focus4: focus.focus4,
      focus5: focus.focus5,
    };
    dispatch("fbAddFocus", payload);
  },
  addGoals({ dispatch, commit }, goal) {
    let payload = {
      username: goal.username,
      goal1:  goal.goal1,
      goal2: goal.goal2,
      goal3: goal.goal3,
      goal4: goal.goal4,
      goal5: goal.goal5,
    };
    dispatch("fbAddGoals", payload);
  },
  fbAddWish({ dispatch }, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let wishRef = firebaseDb.ref("wishes/" + userId);
    payload.createdDate = moment().format();
    wishRef.set(payload, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
      }
    });
  },
  fbAddFocus({ dispatch }, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let focusRef = firebaseDb.ref("focus/" + userId);
    payload.createdDate = moment().format();
    focusRef.set(payload, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        dispatch("fbReadFocus");
      }
    });
  },
  fbAddGoals({ dispatch }, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let goalsRef = firebaseDb.ref("planuary/goals/" + userId);
    payload.createdDate = moment().format();
    goalsRef.set(payload, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
      }
    });
  },
  fbReadWishes({ commit }) {
    let wishes = firebaseDb.ref("wishes");

    //initial check for data
    wishes.once(
      "value",
      snapshot => {
        let wishes = snapshot.val();
        console.debug("wishes are: ", wishes);
        commit("setWishes", wishes);
      },
      error => {
        showErrorMessage(error.message);
      }
    );

    // child added
    wishes.on("child_added", snapshot => {
      let wishes = snapshot.val();
      commit("addWish", wishes);
    });

    // child changed
    wishes.on("child_changed", snapshot => {
      let wishes = snapshot.val();
      commit("setWishes", wishes);
    });

    // child removed
    wishes.on("child_removed", snapshot => {
      let wishes = snapshot.val();
      commit("deleteWish", taskId);
    });
  },
  fbUpdateWish({ dispatch, commit }, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref("wishes/" + userId);

    taskRef.update(payload, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        dispatch("fbReadWishes");
      }
    });
  },
  fbReadFocus({ commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let focuses = firebaseDb.ref("focus/" + userId);

    //initial check for data
    focuses.once(
      "value",
      snapshot => {
        let focuses = snapshot.val();
        console.debug("focuses are: ", focuses);
        commit("setFocus", focuses);
      },
      error => {
        showErrorMessage(error.message);
      }
    );

    // child added
    focuses.on("child_added", snapshot => {
      let focuses = snapshot.val();
      commit("addFocus", focuses);
    });

    // child changed
    focuses.on("child_changed", snapshot => {
      let focuses = snapshot.val();
      commit("setFocus", focuses);
    });

    // child removed
    focuses.on("child_removed", snapshot => {
      let focuses = snapshot.val();
      commit("deleteFocus", focuses);
    });
  },
};

const getters = {
  planuary: state => {
    return state.planuary;
  },
  random16: state => {
    var array = state.planuary;
    if (array != undefined) {
      array = Object.entries(array).sort( () => Math.random() - 0.5);
      return array;
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
