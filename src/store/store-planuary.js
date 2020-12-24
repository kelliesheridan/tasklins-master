import Vue from "vue";
import moment from "moment";
import { firebaseDb, firebaseAuth } from "boot/firebase";

const state = {
  planuary: {
   
  }
};

const mutations = {
  setPlanuaryWish(state, value) {
    state.planuary.planuaryWish = value;
  },
  setWishes(state, wishes) {
    Object.assign(state.planuary, wishes);
  },
  addWish(state, wishes) {
    Vue.set(state.planuary, wishes, wishes);
    console.debug("state.planuary are: ", state.planuary);
  },
};

const actions = {
  addWish({ dispatch, commit }, wish) {
    let payload = {
      username: wish.username,
      wish: wish.wish
    };
    dispatch("fbAddWish", payload);
  },
  fbAddWish({ dispatch }, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let wishRef = firebaseDb.ref("planuary/" + userId);
    payload.createdDate = moment().format();
    wishRef.set(payload, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
      }
    });
  },
  fbReadWishes({ commit }) {
    let wishes = firebaseDb.ref("planuary");

    //initial check for data
    wishes.once("value", snapshot => {
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
    let taskRef = firebaseDb.ref("planuary/" + userId);
      
    taskRef.update(payload, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        dispatch("fbReadWishes");
      }
    });
  },
};

const getters = {
  planuary: state => {
    return state.planuary;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
