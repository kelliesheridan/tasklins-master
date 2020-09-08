import Vue from "vue";
import moment from "moment";

const state = {
  news: {
    ID1: {
      title: "All new Tasklins! (okay, 50% new)",
      date: "2020-09-13",
      text: false    
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
