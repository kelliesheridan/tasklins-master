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
  addWish(state, wishes) {
    Vue.set(state.planuary, wishes, wishes);
    console.debug("state.planuary are: ", state.planuary);
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
      goal6: goal.goal6,
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
      }
    });
  },
  fbAddGoals({ dispatch }, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let goalsRef = firebaseDb.ref("goals/" + userId);
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
  }
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
