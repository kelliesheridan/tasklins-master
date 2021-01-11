import Vue from "vue";
import moment from "moment";
import { firebaseDb, firebaseAuth } from "boot/firebase";
import { showErrorMessage } from "src/functions/function-show-error-message";

const state = {
  community: {}
};

const mutations = {
  setEncouragement(state, encouragement) {
    if (encouragement != undefined)
      state.community.encouragement = encouragement;
  },
  setCommunity(state, community) {
    if (community != undefined) state.community.communityUpdate = community;
  }
};

const actions = {
  addEncouragement({ dispatch, commit }, encouragement) {
    let payload = {
      username: encouragement.username,
      encouragement1: encouragement.encouragement1,
      encouragement2: encouragement.encouragement2,
      encouragement3: encouragement.encouragement3,
      encouragement4: encouragement.encouragement4,
      encouragement5: encouragement.encouragement5,
      type: "encouragement"
    };
    dispatch("fbAddCommunity", payload);
  },
  setCommunityUpdate({ dispatch, commit }, community) {
    let payload = {
      username: community.username,
      communityUpdate: community.communityUpdate,
      createdDate: moment().format(),
      type: "communityUpdate"
    };
    dispatch("fbAddCommunity", payload);
  },
  fbAddCommunity({ dispatch }, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let createdDate = moment().format("YYYY-MM-DD hh:mm:ss");
    let communityRef = firebaseDb.ref(
      "community/" + payload.type + "/" + createdDate
    );
    payload.createdDate = moment().format();
    communityRef.set(payload, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        dispatch("fbReadCommunity", payload);
      }
    });
  },
  fbReadCommunity({ commit }, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let community = firebaseDb.ref("community/" + payload.type);
    community.once(
      "value",
      snapshot => {
        let community = snapshot.val();
        console.debug("community: " + payload.type + " are: ", community);
        switch (payload.type) {
          case "encouragement":
            commit("setEncouragement", community);
            break;
          case "communityUpdate":
            commit("setCommunity", community);
            break;
        }
      },
      error => {
        showErrorMessage(error.message);
      }
    );

    // child added
    community.on("child_added", snapshot => {
      let community = snapshot.val();
      switch (community.type) {
        case "encouragement":
          commit("setEncouragement", community);
          break;
        case "communityUpdate":
          commit("setCommunity", community);
          break;
      }
    });

    // child changed
    community.on("child_changed", snapshot => {
      let community = snapshot.val();
      switch (community.type) {
        case "encouragement":
          commit("setEncouragement", community);
          break;
        case "communityUpdate":
          commit("setCommunity", community);
          break;
      }
    });
  }
};

const getters = {
  community: state => {
    return state.community;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
