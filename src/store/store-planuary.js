import Vue from "vue";
import moment from "moment";
import { firebaseDb, firebaseAuth } from "boot/firebase";
import { showErrorMessage } from "src/functions/function-show-error-message";

const state = {
  planuary: {
    wishes: {}
  }
};

const mutations = {
  setPlanuaryWish(state, value) {
    state.planuary.planuaryWish = value;
  },
  setWishes(state, wishes) {
    state.planuary.wishes = wishes;
  },
  setFocus(state, focus) {
    if (focus != undefined) state.planuary.focus = focus;
  },
  setGoals(state, goals) {
    if (goals != undefined) state.planuary.goals = goals;
  },
  setHighlights(state, highlights) {
    if (highlights != undefined) state.planuary.highlights = highlights;
  },
  setScary(state, scary) {
    if (scary != undefined) state.planuary.scary = scary;
  },
  setWeekOne(state, weekOne) {
    if (weekOne != undefined) state.planuary.weekOne = weekOne;
  },
  setWeekTwo(state, weekTwo) {
    if (weekTwo != undefined) state.planuary.weekTwo = weekTwo;
  },
  setWeekThree(state, weekThree) {
    if (weekThree != undefined) state.planuary.weekThree = weekThree;
  },
  setWeekFour(state, weekFour) {
    if (weekFour != undefined) state.planuary.weekFour = weekFour;
  },
  setQuarterlyGoals(state, quarterlyGoals) {
    if (quarterlyGoals != undefined) state.planuary.quarterlyGoals = quarterlyGoals;
  },
  setPractices(state, practices) {
    if (practices != undefined) state.planuary.practices = practices;
  },
  setGratitude(state, gratitude) {
    if (gratitude != undefined) state.planuary.gratitude = gratitude;
  },
  setLetGo(state, letGo) {
    if (letGo != undefined) state.planuary.letGo = letGo;
  },
  setSuperpower(state, superpower) {
    if (superpower != undefined) state.planuary.superpower = superpower;
  },
  setAvoid(state, avoid) {
    if (avoid != undefined) state.planuary.avoid = avoid;
  },
  setTasklinsHelp(state, tasklinsHelp) {
    if (tasklinsHelp != undefined) state.planuary.tasklinsHelp = tasklinsHelp;
  },
  setReward(state, reward) {
    if (reward != undefined) state.planuary.reward = reward;
  },
  setDistraction(state, distraction) {
    if (distraction != undefined) state.planuary.distraction = distraction;
  },
  setPriority(state, priority) {
    if (priority != undefined) state.planuary.priority = priority;
  },
  addWish(state, wishes) {
    Vue.set(state.planuary.wishes, wishes, wishes);
  },
  addFocus(state, focus) {
    state.planuary.focus = focus;
  },
  addGoals(state, goals) {
    state.planuary.goals = goals;
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
  addFocus({ dispatch, commit }, focus) {
    let payload = {
      username: focus.username,
      focus1: focus.focus1,
      focus2: focus.focus2,
      focus3: focus.focus3,
      focus4: focus.focus4,
      focus5: focus.focus5
    };
    dispatch("fbAddFocus", payload);
  },
  addGoals({ dispatch, commit }, goal) {
    let payload = {
      username: goal.username,
      goal1: goal.goal1,
      goal2: goal.goal2,
      goal3: goal.goal3,
      goal4: goal.goal4,
      goal5: goal.goal5
    };
    dispatch("fbAddGoals", payload);
  },
  addHighlights({ dispatch, commit }, highlight) {
    let payload = {
      type: "highlights",
      username: highlight.username,
      highlight1: highlight.highlight1,
      highlight2: highlight.highlight2,
      highlight3: highlight.highlight3,
      highlight4: highlight.highlight4,
      highlight5: highlight.highlight5
    };
    dispatch("fbAddPlanuary", payload);
  },
  addScary({ dispatch, commit }, scary) {
    let payload = {
      type: "scary",
      username: scary.username,
      scary1: scary.scary1,
      scary2: scary.scary2,
      scary3: scary.scary3,
      scary4: scary.scary4,
      scary5: scary.scary5
    };
    dispatch("fbAddPlanuary", payload);
  },
  addWeekOne({ dispatch, commit }, weekOne) {
    let payload = {
      type: "weekOne",
      username: weekOne.username,
      weekOneWin: weekOne.weekOneWin,
      weekOneStruggle: weekOne.weekOneStruggle,
      weekOneMemory: weekOne.weekOneMemory
    };
    dispatch("fbAddPlanuary", payload);
  },
  addWeekTwo({ dispatch, commit }, weekTwo) {
    let payload = {
      type: "weekTwo",
      username: weekTwo.username,
      weekTwoWin: weekTwo.weekTwoWin,
      weekTwoStruggle: weekTwo.weekTwoStruggle,
      weekTwoMemory: weekTwo.weekTwoMemory
    };
    dispatch("fbAddPlanuary", payload);
  },
  addWeekThree({ dispatch, commit }, weekThree) {
    let payload = {
      type: "weekThree",
      username: weekThree.username,
      weekThreeWin: weekThree.weekThreeWin,
      weekThreeStruggle: weekThree.weekThreeStruggle,
      weekThreeMemory: weekThree.weekThreeMemory
    };
    dispatch("fbAddPlanuary", payload);
  },
  addWeekFour({ dispatch, commit }, weekFour) {
    let payload = {
      type: "weekFour",
      username: weekFour.username,
      weekFourWin: weekFour.weekFourWin,
      weekFourStruggle: weekFour.weekFourStruggle,
      weekFourMemory: weekFour.weekFourMemory
    };
    dispatch("fbAddPlanuary", payload);
  },
  addQuarterlyGoals({ dispatch, commit }, quarterlyGoals) {
    let payload = {
      type: "quarterlyGoals",
      username: quarterlyGoals.username,
      quarterOneMilestone: quarterlyGoals.quarterOneMilestone,
      quarterTwoMilestone: quarterlyGoals.quarterTwoMilestone,
      quarterThreeMilestone: quarterlyGoals.quarterThreeMilestone,
      quarterFourMilestone: quarterlyGoals.quarterFourMilestone,
    };
    dispatch("fbAddPlanuary", payload);
  },
  addPractices({ dispatch, commit }, practices) {
    let payload = {
      type: "practices",
      username: practices.username,
      practice1: practices.practiceOne,
      practice2: practices.practiceTwo,
      practice3: practices.practiceThree,
    };
    dispatch("fbAddPlanuary", payload);
  },
  addGratitude({ dispatch, commit }, gratitude) {
    let payload = {
      type: "gratitude",
      username: gratitude.username,
      gratitude1: gratitude.gratitudeOne,
      gratitude2: gratitude.gratitudeTwo,
      gratitude3: gratitude.gratitudeThree,
      gratitude4: gratitude.gratitudeFour,
      gratitude5: gratitude.gratitudeFive,
    };
    dispatch("fbAddPlanuary", payload);
  },
  addLetGo({ dispatch, commit }, letGo) {
    let payload = {
      type: "letGo",
      username: letGo.username,
      letGo1: letGo.letGoOne,
      letGo2: letGo.letGoTwo,
      letGo3: letGo.letGoThree,
    };
    dispatch("fbAddPlanuary", payload);
  },
  addSuperpower({ dispatch, commit }, superpower) {
    let payload = {
      type: "superpower",
      username: superpower.username,
      superpower1: superpower.superpower,
    };
    dispatch("fbAddPlanuary", payload);
  },
  addAvoid({ dispatch, commit }, avoid) {
    let payload = {
      type: "avoid",
      username: avoid.username,
      avoid1: avoid.avoidOne,
      avoid2: avoid.avoidTwo,
      avoid3: avoid.avoidThree,
      avoid4: avoid.avoidFour,
      avoid5: avoid.avoidFive
    };
    dispatch("fbAddPlanuary", payload);
  },
  addTasklinsHelp({ dispatch, commit }, tasklinsHelp) {
    let payload = {
      type: "tasklinsHelp",
      username: tasklinsHelp.username,
      tasklinsHelp1: tasklinsHelp.tasklinsHelp,
    };
    dispatch("fbAddPlanuary", payload);
  },
  addReward({ dispatch, commit }, reward) {
    let payload = {
      type: "reward",
      username: reward.username,
      reward1: reward.rewardOne,
      reward2: reward.rewardTwo,
      reward3: reward.rewardThree,
      reward4: reward.rewardFour,
      reward5: reward.rewardFive
    };
    dispatch("fbAddPlanuary", payload);
  },
  addPriority({ dispatch, commit }, priority) {
    let payload = {
      type: "priority",
      username: priority.username,
      priority1: priority.priorityOne,
      priority2: priority.priorityTwo,
      priority3: priority.priorityThree,
    };
    dispatch("fbAddPlanuary", payload);
  },
  addDistraction({ dispatch, commit }, distraction) {
    let payload = {
      type: "distraction",
      username: distraction.username,
      distraction1: distraction.distractionOne,
      distraction2: distraction.distractionTwo,
      distraction3: distraction.distractionThree,
      distraction4: distraction.distractionFour,
      distraction5: distraction.distractionFive
    };
    dispatch("fbAddPlanuary", payload);
  },
  fbAddPlanuary({ dispatch }, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let planuaryRef = firebaseDb.ref("planuary/" + payload.type + "/" + userId);
    payload.createdDate = moment().format();
    planuaryRef.set(payload, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        dispatch("fbReadPlanuary", payload);
      }
    });
  },
  fbReadPlanuary({ commit }, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let planuary = firebaseDb.ref("planuary/" + payload.type + "/" + userId);

    //initial check for data
    planuary.once(
      "value",
      snapshot => {
        let planuary = snapshot.val();
        console.debug("planuary: " + payload.type + " are: ", planuary);
        switch (payload.type) {
          case "highlights":
            commit("setHighlights", planuary);
            break;
          case "scary":
            commit("setScary", planuary);
            break;
          case "weekOne":
            commit("setWeekOne", planuary);
            break;
          case "weekTwo":
            commit("setWeekTwo", planuary);
            break;
          case "weekThree":
            commit("setWeekThree", planuary);
            break;
          case "weekFour":
            commit("setWeekFour", planuary);
            break;
          case "quarterlyGoals":
            commit("setQuarterlyGoals", planuary);
            break;
          case "practices":
            commit("setPractices", planuary);
            break;
          case "gratitude":
              commit("setGratitude", planuary);
              break; 
          case "letGo":
              commit("setLetGo", planuary);
              break;     
          case "superpower":
                commit("setSuperpower", planuary);
                break;    
          case "avoid":
                commit("setAvoid", planuary);
                break;  
          case "tasklinsHelp":
                commit("setTasklinsHelp", planuary);
                break;   
          case "reward":
                commit("setReward", planuary);
                break;     
          case "priority":
            commit("setPriority", planuary);
            break;    
          case "distraction":
            commit("setDistraction", planuary);
            break;        
    

        }
      },
      error => {
        showErrorMessage(error.message);
      }
    );

    // child added
    planuary.on("child_added", snapshot => {
      let planuary = snapshot.val();
      switch (planuary.type) {
        case "highlights":
          commit("setHighlights", planuary);
          break;
        case "scary":
          commit("setScary", planuary);
          break;
        case "weekOne":
          commit("setWeekOne", planuary);
          break;
        case "weekTwo":
          commit("setWeekTwo", planuary);
          break;
        case "weekThree":
          commit("setWeekThree", planuary);
          break;
        case "weekFour":
          commit("setWeekFour", planuary);
          break;
        case "quarterlyGoals":
          commit("setQuarterlyGoals", planuary);
          break;
        case "practices":
          commit("setPractices", planuary);
          break;
        case "gratitude":
            commit("setGratitude", planuary);
            break;        
        case "letGo":
            commit("setLetGo", planuary);
            break;     
        case "superpower":
                commit("setSuperpower", planuary);
                break;   
        case "avoid":
                commit("setAvoid", planuary);
                break;
        case "tasklinsHelp":
                commit("setTasklinsHelp", planuary);
                break;       
        case "reward":
          commit("setReward", planuary);
          break;         
        case "priority":
          commit("setPriority", planuary);
          break;       
          case "distraction":
            commit("setDistraction", planuary);
            break;                                        
      }
    });

    // child changed
    planuary.on("child_changed", snapshot => {
      let planuary = snapshot.val();
      switch (planuary.type) {
        case "highlights":
          commit("setHighlights", planuary);
          break;
        case "scary":
          commit("setScary", planuary);
          break;
        case "weekOne":
          commit("setWeekOne", planuary);
          break;
        case "weekOne":
          commit("setWeekOne", planuary);
          break;
        case "weekTwo":
          commit("setWeekTwo", planuary);
          break;
        case "weekThree":
          commit("setWeekThree", planuary);
          break;
        case "weekFour":
          commit("setWeekFour", planuary);
          break;
        case "quarterlyGoals":
          commit("setQuarterlyGoals", planuary);
          break;
        case "practices":
          commit("setPractices", planuary);
          break;
        case "gratitude":
          commit("setGratitude", planuary);
          break;      
        case "letGo":
          commit("setLetGo", planuary);
          break;
        case "superpower":
            commit("setSuperpower", planuary);
            break; 
        case "avoid":
              commit("setAvoid", planuary);
              break; 
        case "tasklinsHelp":
              commit("setTasklinsHelp", planuary);
              break; 
        case "reward":
          commit("setReward", planuary);
          break;  
        case "priority":
          commit("setPriority", planuary);
          break;       
          case "distraction":
            commit("setDistraction", planuary);
            break;                                                                
      }
    });
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
        dispatch("fbReadGoals");
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
  },
  fbReadGoals({ commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let goals = firebaseDb.ref("planuary/goals/" + userId);

    //initial check for data
    goals.once(
      "value",
      snapshot => {
        let goals = snapshot.val();
        console.debug("goals are: ", goals);
        commit("setGoals", goals);
      },
      error => {
        showErrorMessage(error.message);
      }
    );

    // child added
    goals.on("child_added", snapshot => {
      let goals = snapshot.val();
      commit("addGoals", goals);
    });

    // child changed
    goals.on("child_changed", snapshot => {
      let goals = snapshot.val();
      commit("setGoals", goals);
    });
  }
};

const getters = {
  planuary: state => {
    return state.planuary;
  },
  random16: state => {
    var array = state.planuary.wishes;
    if (array != undefined) {
      array = Object.entries(array).sort(() => Math.random() - 0.5);
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
