import Vue from "vue";

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
  updateTicket(state, payload) {
    Object.assign(state.tickets[payload.id], payload.updates);
  },
  deleteTicket(state, id) {
    Vue.delete(state.tickets, id);
  }
};

const actions = {
  updateTicket({ commit }, payload) {
    commit("updateTicket", payload);
  },
  deleteTicket({ commit }, id) {
    commit("deleteTicket", id);
  }
};

const getters = {
  tickets: state => {
    return state.tickets;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
