import Vue from "vue";
import { uid, Notify } from "quasar";
import { firebaseDb, firebaseAuth } from "boot/firebase";
import { showErrorMessage } from "src/functions/function-show-error-message";
import { date } from "quasar";
import moment from "moment";

const { addToDate } = date;
const state = {
  tasks: {},
  projects: {},
  search: "",
  projectSearch: "",
  sort: "dueDate",
  tasksDownloaded: false
};

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id);
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task);
  },
  clearTasks(state) {
    state.tasks = {};
  },
  setSearch(state, value) {
    state.search = value;
  },
  setSort(state, value) {
    state.sort = value;
  },
  setTasksDownloaded(state, value) {
    state.tasksDownloaded = value;
  },
  setProjects(state, value) {
    state.projects = value;
  },
  setProjectSearch(state, value) {
    state.projectSearch = value;
  }
};

const actions = {
  updateTask({ dispatch }, payload) {
    dispatch("fbUpdateTask", payload);
    dispatch("profile/updateXPFromTask", payload, { root: true });
  },
  deleteTask({ dispatch }, id) {
    dispatch("fbDeleteTask", id);
    dispatch("profile/addXPValue", -1, { root: true });
  },
  pushDueDate({ dispatch }, payload) {
    dispatch("fbPushDueDate", payload);
    dispatch("profile/addXPValue", -1, { root: true });
  },
  dueDateToday({ dispatch }, payload) {
    dispatch("fbDueDateToday", payload);
  },
  addTask({ dispatch, commit }, task) {
    let taskId = uid();
    let payload = {
      id: taskId,
      task: task
    };
    dispatch("fbAddTask", payload);
  },
  addProject({ dispatch, commit }, project) {
    dispatch("fbAddProject", project);
  },
  setSearch({ commit }, value) {
    commit("setSearch", value);
  },
  setProjectSearch({ commit }, value) {
    commit("setProjectSearch", value);
  },
  setSort({ commit }, value) {
    commit("setSort", value);
  },
  fbReadData({ commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let userTasks = firebaseDb.ref("tasks/" + userId);

    //initial check for data
    userTasks.once(
      "value",
      snapshot => {
        commit("setTasksDownloaded", true);
      },
      error => {
        showErrorMessage(error.message);
        this.$router.replace("/auth");
      }
    );

    // child added
    userTasks.on("child_added", snapshot => {
      let task = snapshot.val();
      let payload = {
        id: snapshot.key,
        task: task
      };
      commit("addTask", payload);
    });

    // child changed
    userTasks.on("child_changed", snapshot => {
      let task = snapshot.val();
      let payload = {
        id: snapshot.key,
        updates: task
      };
      commit("updateTask", payload);
    });

    // child removed
    userTasks.on("child_removed", snapshot => {
      let taskId = snapshot.key;
      commit("deleteTask", taskId);
    });
  },
  fbAddTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
    payload.task.createdDate = moment().format();
    if (payload.task.dueDate !== "") {
      payload.task.dueDate = moment(payload.task.dueDate).format("YYYY-MM-DD");
    }
    if (payload.task.project == "") {
      payload.task.project = "Tasks";
    }
    taskRef.set(payload.task, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        //Notify.create('New Task Added - + 1xp')
      }
    });
  },
  fbAddProject({ dispatch }, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref(
      "projects/" + userId + "/" + payload.projectName
    );
    console.debug("project:", payload);
    payload.createdDate = moment().format();
    taskRef.set(payload, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        dispatch("fbReadProjects");
        //Notify.create('New Task Added - + 1xp')
      }
    });
  },
  fbReadProjects({ commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let projects = firebaseDb.ref("projects/" + userId).orderByKey();
    let projectsArray = new Array();
    projectsArray.push("Tasks");
    projects.once("value").then(function(snapshot) {
      let projectRecords = snapshot.val();
      if (projectRecords) {
        Object.keys(projectRecords).forEach(element => {
          projectsArray.push(element);
        });
        commit("setProjects", projectsArray);
      }
    });
  },
  fbUpdateTask({dispatch}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
    payload.updates.lastModified = moment().format();
    taskRef.update(payload.updates, error => {
      if (error) {
        showErrorMessage(error.message);
      }
    })
    // check for repeating task
    if (payload.updates.completed) {
      if (payload.updates.task.nrepeating.monday || 
        payload.updates.task.nrepeating.tuesday ||
        payload.updates.task.nrepeating.wednesday ||
        payload.updates.task.nrepeating.thursday ||
        payload.updates.task.nrepeating.friday ||
        payload.updates.task.nrepeating.saturday ||
        payload.updates.task.nrepeating.sunday) {
      var dayNeeded = 0;
      var currentDay = moment().day();
      var newTask = {
        name: payload.updates.task.name,
        project: payload.updates.task.project,
        npublic: payload.updates.task.npublic,
        nrepeating: {
          monday: payload.updates.task.nrepeating.monday,
          tuesday: payload.updates.task.nrepeating.tuesday,
          wednesday: payload.updates.task.nrepeating.wednesday,
          thursday: payload.updates.task.nrepeating.thursday,
          friday: payload.updates.task.nrepeating.friday,
          saturday: payload.updates.task.nrepeating.saturday,
          sunday: payload.updates.task.nrepeating.sunday
        },
        dueDate: "",
        dueTime: "",
        completed: false,
        createdDate: moment().format(),
        lastModified: moment().format()
      };

      if (payload.updates.task.nrepeating.monday) {
        dayNeeded = 1;
      } else if (payload.updates.task.nrepeating.tuesday) {
        dayNeeded = 2;
      } else if (payload.updates.task.nrepeating.wednesday) {
        dayNeeded = 3;
      } else if (payload.updates.task.nrepeating.thursday) {
        dayNeeded = 4;
      } else if (payload.updates.task.nrepeating.friday) {
        dayNeeded = 5;
      } else if (payload.updates.task.nrepeating.saturday) {
        dayNeeded = 6;
      } else if (payload.updates.task.nrepeating.sunday) {
        dayNeeded = 7;
      }
      newTask.dueDate = moment(payload.updates.task.dueDate)
        .day(dayNeeded + 7)
        .format("YYYY-MM-DD");
      var newPayload = {};
      newPayload.task = newTask;
      newPayload.id = uid();

      dispatch("fbAddTask", newPayload);
    };
  }
  },
  fbPushDueDate({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
    payload.dueDate = moment(payload.dueDate)
      .add(1, "days")
      .format("YYYY-MM-DD");
    taskRef.update(payload, error => {
      if (error) {
        showErrorMessage(error.message);
      }
    });
  },
  fbDueDateToday({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
    payload.dueDate = moment().format("YYYY-MM-DD");
    taskRef.update(payload, error => {
      if (error) {
        showErrorMessage(error.message);
      }
    });
  },
  fbDeleteTask({}, taskId) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref("tasks/" + userId + "/" + taskId);
    taskRef.remove(error => {
      if (error) {
        showErrorMessage(error.message);
      }
    });
  }
};
const getters = {
  tasksSorted: state => {
    let tasksSorted = {},
      keysOrdered = Object.keys(state.tasks);
    if (keysOrdered.length > 0) {
      keysOrdered.sort((a, b) => {
        let taskAProp = state.tasks[a][state.sort],
          taskBProp = state.tasks[b][state.sort];

        if (
          moment(taskAProp).format("YYYY-MM-DD") >
          moment(taskBProp).format("YYYY-MM-DD")
        )
          return 1;
        else if (
          moment(taskAProp).format("YYYY-MM-DD") <
          moment(taskBProp).format("YYYY-MM-DD")
        )
          return -1;
        else return 0;
      });

      keysOrdered.forEach(key => {
        tasksSorted[key] = state.tasks[key];
      });
    }
    return tasksSorted;
  },

  tasksFiltered: (state, getters) => {
    let tasksSorted = getters.tasksSorted,
      tasksFiltered = {};
    if (state.search) {
      Object.keys(tasksSorted).forEach(function(key) {
        let task = tasksSorted[key],
          taskNameLowerCase = task.name.toLowerCase(),
          searchLowerCase = state.search.toLowerCase();
        if (taskNameLowerCase.includes(searchLowerCase)) {
          tasksFiltered[key] = task;
        }
      });
      return tasksFiltered;
    } else if (state.projectSearch) {
      Object.keys(tasksSorted).forEach(function(key) {
        let task = tasksSorted[key],
          taskProjectNameLowerCase = task.project.toLowerCase(),
          searchLowerCase = state.projectSearch.toLowerCase();
        if (taskProjectNameLowerCase.includes(searchLowerCase)) {
          tasksFiltered[key] = task;
        }
      });
      return tasksFiltered;
    }
    return tasksSorted;
  },
  tasksTodo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key];
      if (!task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  },
  tasksCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key];
      if (task.completed) {
        tasks[key] = task;
      }
    });
    return tasks;
  },
  tasksToday: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key];
      let taskDueDate = task.dueDate;
      let today = moment().format();
      //console.debug("moment date: " +  moment().format() + ", normal date:" + today);

      let formattedTaskDueDate = moment(taskDueDate).format("YYYY-MM-DD");
      let formattedToday = moment(today).format("YYYY-MM-DD");

      if (moment(formattedTaskDueDate).isSame(formattedToday, "day")) {
        tasks[key] = task;
      }
    });

    return tasks;
  },
  tasksLate: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key];
      let taskDueDate = task.dueDate;
      let today = moment().format();

      let formattedTaskDueDate = moment(taskDueDate).format("YYYY-MM-DD");
      let formattedToday = moment(today).format("YYYY-MM-DD");

      if (
        moment(formattedTaskDueDate).isBefore(formattedToday) &&
        !task.completed
      ) {
        tasks[key] = task;
      }
    });

    return tasks;
  },
  projects: state => {
    return state.projects;
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
