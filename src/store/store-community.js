import Vue from "vue";
import moment from "moment";
import { firebaseDb, firebaseAuth } from "boot/firebase";
import { showErrorMessage } from "src/functions/function-show-error-message";

const state = {
  community: {}
};

const mutations = {
  addFitnessLikes(state, likes) {
    if (state.fitnessLikes != undefined) 
    Vue.set(state.fitnessLikes, likes.id, likes);
  },
  setFitnessLikes(state, likes) {
    if (likes != undefined)
      state.fitnessLikes = likes;
  },
  addEncouragement(state, encouragement) {
    if (state.community.encouragement != undefined) 
    Vue.set(state.community.encouragement, encouragement.id, encouragement.community);
  },
  addCommunity(state, community) {
    if (state.community.communityUpdate != undefined) 
    Vue.set(state.community.communityUpdate, community.id, community.community);
  },
  setEncouragement(state, encouragement) {
    if (encouragement != undefined)
      state.community.encouragement = encouragement;
  },
  setCommunity(state, community) {
    if (community != undefined) state.community.communityUpdate = community;
  }
};

const actions = {
  addLike({ dispatch, commit}, payload) {
    let like = {
      type: payload.type,
      id: payload.id,
    };
    dispatch("fbAddLike", like);
  },
  updateLike({ dispatch, commit}, payload) {
    let like = {
      username: payload.username,
      type: payload.type,
      id: payload.id,
      createdDate: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    dispatch("fbAddLike", like);
  },
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
    const format1 = "YYYY-MM-DD HH:mm:ss"
    let payload = {
      username: community.username,
      communityUpdate: community.communityUpdate,
      color: community.color,
      createdDate: moment().format(),
      type: "communityUpdate"
    };
    dispatch("fbAddCommunity", payload);
  },
  fbAddLike({ dispatch }, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let likeRef = firebaseDb.ref("likes/" + payload.type + "/" + payload.id);
    let like = {
      userId: userId
    }
    likeRef.set(like, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
      }
    });
  },
  fbReadLikes({ commit }, type) {
    let likes = firebaseDb.ref("likes/fitness");

    //initial check for data
    likes.once(
      "value",
      snapshot => {
        let likes = snapshot.val();
        console.debug("likes is: ", likes);
        commit("setFitnessLikes", likes);
      },
      error => {
        showErrorMessage(error.message);
      }
    );

    // child added
    likes.on("child_added", snapshot => {
      let likes = snapshot.val();
      commit("addFitnessLikes", likes);
    });

    // child changed
    likes.on("child_changed", snapshot => {
      let likes = snapshot.val();
      commit("setFitnessLikes", likes);
    });

    // child removed
    likes.on("child_removed", snapshot => {
      let likes = snapshot.val();
      commit("deleteLike", taskId);
    });
  },
  fbAddCommunity({ dispatch }, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let createdDate = moment().format("YYYY-MM-DD HH:mm:ss");
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
  fbReadEnouragement({ commit }) {
    let encouragement = firebaseDb.ref("encouragement");

    //initial check for data
    encouragement.once(
      "value",
      snapshot => {
        let encouragement = snapshot.val();
        console.debug("encouragement is: ", encouragement);
        commit("setEncouragement", encouragement);
      },
      error => {
        showErrorMessage(error.message);
      }
    );

    // child added
    encouragement.on("child_added", snapshot => {
      let encouragement = snapshot.val();
      commit("addEncouragement", encouragement);
    });

    // child changed
    encouragement.on("child_changed", snapshot => {
      let encouragement = snapshot.val();
      commit("setEncouragement", encouragement);
    });

    // child removed
    encouragement.on("child_removed", snapshot => {
      let encouragement = snapshot.val();
      commit("deleteEncouragement", taskId);
    });
  },
  fbReadCommunity({ commit }, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let community = firebaseDb.ref("community/" + payload.type);
    community.once(
      "value",
      snapshot => {
        let community = snapshot.val();
        let payload = {
          id: snapshot.key,
          community: community
        };
        //console.debug("community: " + payload.type + " are: ", community);
        switch (payload.id) {
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
      let payload = {
        id: snapshot.key,
        community: community
      };
      switch (community.type) {
        case "encouragement":
          commit("addEncouragement", payload);
          break;
        case "communityUpdate":
          commit("addCommunity", payload);
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
  },
  randomEncouragement: state => {
    var array = state.community.encouragement;
    if (array != undefined) {
      array = Object.entries(array).sort(() => Math.random() - 0.5);
      return array;
    }
  },
  updatesSorted: state => {
    let updatesSorted = {},
      keysOrdered = Object.keys(state.community.communityUpdate).reverse();
    if (keysOrdered.length > 0) {
      keysOrdered.forEach(key => {
        updatesSorted[key] = state.community.communityUpdate[key];
      });
    }
    return updatesSorted;
  },
  likedFitness: state => {
    return state.likedFitness;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
