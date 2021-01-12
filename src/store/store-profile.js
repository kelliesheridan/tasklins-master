import { firebaseDb, firebaseAuth } from "boot/firebase";
import moment from "moment";
import { Notify } from 'quasar'

const state = {
  profile: {
    user: {
      // 	 name: 'name',
      //   username: '@aTinyDisaster',
      //   id: 1,
      //   about: '',
      //   avatar: '',
      //   lin: 0,
      // 	 xp: 1,
      // 	 level: 0,
      // 	 friends: '',
      // 	 inventory: '',
      //   tasklins: '',
      //   private: false,
      //   signup: false,
      //   admin: true,
    }
  },
  profiles: {}
};

const mutations = {
  setXP(state, isCompleted) {
    if (isCompleted) {
      state.profile.user.xp += 5;
    } else {
      state.profile.user.xp -= 5;
    }
  },
  setXPFromTask(state, task) {
    if (task.updates.completed) {
      if (moment(task.updates.dueDate).isSameOrBefore(moment())) {
        state.profile.user.xp += 5;
      } else {
        state.profile.user.xp += 3;
      }
    } else {
      state.profile.user.xp -= 5;
    }
  },
  setLin(state, isCompleted) {
    if (isCompleted) {
      state.profile.user.lin += mutateLin(1, 5);
    } else {
      state.profile.user.lin -= mutateLin(3, 5);
    }
  },
  setXPValue(state, value) {
    state.profile.user.xp += value;
  },
  setLevel(state) {
    state.profile.user.level = getLevel();
    if (state.profile.user.maxLevel < state.profile.user.level) {
      state.profile.user.maxLevel = state.profile.user.level;
    }
  },
  setLevelValue(state, value) {
    state.profile.user.level = value;
  },
  setAbout(state, value) {
    state.profile.user.about = value;
  },
  setName(state, value) {
    state.profile.user.name = value;
  },
  setUsername(state, value) {
    state.profile.user.username = value;
  },
  setPrivate(state, value) {
    state.profile.user.private = value;
  },
  setColor(state, value) {
    state.profile.user.color = value;
  },
  updateProfile({}, profile) {
    state.profile.user = profile;
  },
  loadAllProfiles({}, profiles) {
    state.profiles = profiles;
  },
  loadAllProfileIDs({}, profileIDs) {
    state.profileIDs = profileIDs;
  },
  loadAllMoods({}, moods) {
    state.moods = moods;
  },
  printUsername({}, userNames) {
    console.debug("usernames: " + userNames);
  },
  setPronouns(state, value) {
    state.profile.user.pronouns = value;
  },
  setMoodDate(state, value, mood) {
    if (value != undefined) {
      state.profile.user.moodDate = value;
      state.profile.user.currentMood = value;
    }
  },
};
// addNewUser(state, payload) {
// 	Vue.set(state.profile, payload.id, payload.task)
// }

const actions = {
  addXP({ commit, dispatch }, isCompleted) {
    commit("setXP", isCompleted);
    commit("setLevel");
    dispatch("fbUpdateProfile");
  },
  updateXPFromTask({ commit, dispatch }, payload) {
    commit("setXPFromTask", payload);
    commit("setLevel");
    dispatch("fbUpdateProfile");
  },
  addLin({ commit, dispatch }, isCompleted) {
    commit("setLin", isCompleted);
    dispatch("fbUpdateProfile");
  },
  addXPValue({ commit, dispatch }, value) {
    commit("setXPValue", value);
    commit("setLevel");
    dispatch("fbUpdateProfile");
  },
  togglePrivateValue({ commit, dispatch }, value) {
    commit("setPrivate", value);
    //dispatch('fbUpdateProfile')
  },
  updateAbout({ commit, dispatch }, value) {
    commit("setAbout", value);
    //dispatch('fbUpdateProfile')
  },
  updateName({ commit, dispatch }, value) {
    commit("setName", value);
    //dispatch('fbUpdateProfile')
  },
  updateUsername({ commit, dispatch }, value) {
    commit("setUsername", value);
    //dispatch('fbUpdateProfile')
  },
  updateColor({ commit, dispatch }, value) {
    commit("setColor", value);
  },
  updatePronouns({ commit, dispatch }, value) {
    commit("setPronouns", value);
    //dispatch('fbUpdateProfile')
  },
  setMood({ commit, dispatch }, value) {
    dispatch("fbSetMood", value);
    //dispatch('fbUpdateProfile')
  },
  fbReadProfile({ dispatch, commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let userProfile = firebaseDb.ref("profile/" + userId);
    userProfile.once("value", snapshot => {
      let profile = snapshot.val();
      let payload = {
        name: profile.name,
        username: profile.username,
        id: profile.id,
        about: profile.about,
        avatar: profile.avatar,
        lin: profile.lin,
        xp: profile.xp,
        level: profile.level,
        maxLevel: profile.maxLevel,
        friends: profile.friends,
        inventory: profile.inventory,
        private: profile.private,
        signup: profile.signup,
        admin: profile.admin,
        color: profile.color == undefined ? "" : profile.color,
        pronouns: profile.pronouns == undefined ? "" : profile.pronouns,
        createdDate: profile.createdDate == undefined ? "" : profile.createdDate,
        memberType: profile.memberType == undefined ? 1 : profile.memberType
      };
      commit("updateProfile", payload);
      dispatch("fbReadAllProfiles")
    });
  },

  fbReadAllProfiles({ dispatch, commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let userProfile = firebaseDb.ref("profile");

    userProfile.once("value", snapshot => {
      let profiles = snapshot.val();
      commit("loadAllProfiles", profiles);
      // load profile IDs in to an array
      let profileArray = new Array();
      Object.keys(profiles).forEach(element => {
        profileArray.push(element);
        commit("loadAllProfileIDs", profileArray);
      });    
    });
  },

  updateProfile({ commit, dispatch }, profile) {
    commit("updateProfile", profile);
    dispatch("fbUpdateProfile");
  },

  fbUpdateProfile({ dispatch }) {
    let userId = firebaseAuth.currentUser.uid;
    let proUpdate = firebaseDb.ref("profile/" + userId);
    proUpdate.update(state.profile.user, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        dispatch("fbReadAllProfiles")
      }
    });
  },

  fbCheckUsername(commit) {
    console.debug("checking usernames");
    let userTasks = firebaseDb.ref("usernames");
    let username = "aTinyDisaster";
    //initial check for data
    userTasks.once("value", snapshot => {
      let userList = [];
      if (snapshot.val()) {
        var result = Object.keys(snapshot.val()).map(function(key) {
          userList.push(snapshot.val()[key]);
          //console.debug(snapshot.val()[key]);
        });
        console.debug("includes username " + username + ": " + userList.includes(username)
        );
      }
    });
  },
  fbSetMood({ dispatch, commit }, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let moodDate = payload.moodDate;
    commit('setMoodDate', moodDate, payload.mood);
    let moodRef = firebaseDb.ref("mood/" + userId + "/" + moodDate);
    moodRef.set(payload.mood, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        dispatch("fbReadAllMoods");
      }
    });
  },
  fbReadAllMoods({ dispatch, commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let userProfile = firebaseDb.ref("mood/" + userId);

    userProfile.once("value", snapshot => {
      let profiles = snapshot.val();
      commit("loadAllMoods", profiles);
    });

    userProfile.on("child_added", snapshot => {
      let profiles = snapshot.val();
      commit("loadAllMoods", profiles);
    });
  },

};
function mutateLin(min, max) {
  var lin = Math.floor(Math.random() * (max - min + 1)) + min;
  return lin;
}
function mutateXP(min, max) {
  var xp = Math.floor(Math.random() * (max - min + 1)) + min;
  return xp;
}

function getLevel() {
  var xp = parseInt(state.profile.user.xp);
  var level = ""
  if (xp >= 3500) {
    level = "12";
  } else if (xp >= 3000 && xp <= 3499) {
    level = "11";
  } else if (xp >= 2500 && xp <= 2999) {
    level = "10";
  } else if (xp >= 2000 && xp <= 2499) {
    level = "9";
  } else if (xp >= 1500 && xp <= 1999) {
    level = "8";
  } else if (xp >= 1000 && xp <= 1499) {
    level = "7";
  } else if (xp >= 500 && xp <= 999) {
    level = "6";
  } else if (xp >= 250 && xp <= 499) {
    level = "5";
  } else if (xp >= 100 && xp <= 249) {
    level = "4";
  } else if (xp >= 50 && xp <= 99) {
    level = "3";
  } else if (xp >= 25 && xp <= 49) {
    level = "2";
  } else {
    level = "1";
  }
  if (level > state.profile.user.maxLevel) {
    Notify.create({
      icon: 'grade',
      message: "Congratulations! You reached level " + level + "!",
      color: 'primary',
      textColor: 'white'  
    })
  }
  return level;
}

const getters = {
  profile: state => {
    return state.profile.user;
  },
  profiles: state => {
    return state.profiles;
  },
  profileIDs: state => {
    return state.profileIDs;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
