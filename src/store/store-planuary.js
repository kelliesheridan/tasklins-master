import Vue from "vue";
import moment from "moment";

const state = {
  planuary: {
    wish: "my wish",
  }
};

const mutations = {
  setPlanuaryWish(state, value) {
    state.planuary.planuaryWish = value;
  },
};

const actions = {
  setPlanuaryWish({ commit, dispatch }, value) {
    commit("setPlanuaryWish", value);    
  },
  fbUpdateSettings({}) {
    let userId = firebaseAuth.currentUser.uid;
    let planuaryUpdate = firebaseDb.ref("planuary/" + userId);
    planuaryUpdate.update(state.planuary, error => {
      if (error) {
        showErrorMessage(error.message);
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
