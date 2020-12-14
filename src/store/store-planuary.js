import Vue from "vue";
import moment from "moment";

const state = {
  tickets: {
    ID1: {
      user: "Matt",
      problem: "This website sucks",
      completed: false
    },
    ID2: {
      user: "Adam",
      problem: "This website sucks",
      completed: true
    },
    ID3: {
      user: "Kaitlyn",
      problem: "This website sucks",
      completed: false
    },
    ID4: {
      user: "Kellie",
      problem: "This website sucks",
      completed: false
    }
  }
};

const mutations = {

};

const actions = {

};

const getters = {
  tickets: state => {
    
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
