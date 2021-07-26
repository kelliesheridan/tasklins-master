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
  archiveTasks({ dispatch }) {
    dispatch("fbArchiveTasks");
  },
  readData({ dispatch }, today) {
    dispatch("fbReadData", today);
  },
  updateTask({ dispatch }, payload) {
    dispatch("fbUpdateTask", payload);
    dispatch("tasklins/addXPToTasklin", payload, { root: true });
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
  dueDateTomorrow({ dispatch }, payload) {
    dispatch("fbDueDateTomorrow", payload);
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
  deleteProject({ dispatch }, projectName) {
    dispatch("fbDeleteProject", projectName);
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
  fbReadData({ commit }, today) {
    let userId = firebaseAuth.currentUser.uid;
    //let userTasks = today ? firebaseDb.ref("tasks/" + userId).orderByChild("dueDate").equalTo(moment().format("YYYY-MM-DD")) : firebaseDb.ref("tasks/" + userId);
    // let userTasks = firebaseDb.ref("tasks/" + userId).orderByChild("dueDate").equalTo(moment().format("YYYY-MM-DD"));
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
  fbAddTask({ dispatch }, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
    payload.task.createdDate = moment().format();
    if (payload.task.dueDate !== "") {
      payload.task.dueDate = moment(payload.task.dueDate).format("YYYY-MM-DD");
    }
    if (payload.task.dueDate == "" && (payload.task.nrepeating.weekly || payload.task.nrepeating.everyWeek)) {
      payload.task.dueDate = moment().format("YYYY-MM-DD");
    }
    if (payload.task.project == "") {
      payload.task.project = "Tasks";
    }
    if (payload.task.task != undefined) {
    }
    taskRef.set(payload.task, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        //Notify.create('New Task Added - + 1xp')
      }
    });
    // update tasklin to set hatched = true
    if (!this.state.tasklins.tasklin.hatched) {
      if (Object.keys(state.tasks).length > 4) {
        let tasklinRef = firebaseDb.ref("tasklins/" + userId);
        var tasklin = { hatched: true };
        tasklinRef.update(tasklin, error => {
          if (error) {
            showErrorMessage(error.message);
          } else {
            Notify.create("Your tasklin has hatched!");
            dispatch("tasklins/getTasklin", null, { root: true });
          }
        });
      }
    }
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
    //projectsArray.push("Tasks");
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
  fbDeleteProject({ dispatch }, projectName) {
    let userId = firebaseAuth.currentUser.uid;
    let projectRef = firebaseDb.ref("projects/" + userId + "/" + projectName);
    projectRef.remove(error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        dispatch("fbReadProjects");
      }
    });
  },
  fbUpdateTask({ dispatch, commit }, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
    payload.updates.lastModified = moment().format("YYYY-MM-DD HH:mm:ss");
    if (payload.updates.completed) {
      payload.updates.completedDate = moment().format("YYYY-MM-DD HH:mm:ss");
    } else {
      payload.updates.completedDate = "";
    }
    var payloadOld = payload.updates;
    if (payload.updates.task != undefined) {
      payload.updates = {};
      payload.updates.completed = payloadOld.completed;
      payload.updates.completedDate = payloadOld.completedDate;
      payload.updates.dueDate = payloadOld.dueDate;
      payload.updates.lastModified = payloadOld.lastModified;
    }

    taskRef.update(payload.updates, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        //dispatch("fbReadData");
      }
    });
    payload.updates = payloadOld;
    // check for repeating task
    if (payload.updates.completed) {
      if (
        payload.updates.task.nrepeating.monday ||
        payload.updates.task.nrepeating.tuesday ||
        payload.updates.task.nrepeating.wednesday ||
        payload.updates.task.nrepeating.thursday ||
        payload.updates.task.nrepeating.friday ||
        payload.updates.task.nrepeating.saturday ||
        payload.updates.task.nrepeating.sunday
      ) {
        var newPayload = {};
        newPayload = getRepeatingTask(payload.updates.task);
        dispatch("fbAddTask", newPayload);
      } else if (payload.updates.task.nrepeating.numDay > "0") {
        newPayload = getNumDayTask(payload.updates.task);
        dispatch("fbAddTask", newPayload);
      } else if (payload.updates.task.nrepeating.monthly) {
        newPayload = getMonthlyTask(payload.updates.task);
        dispatch("fbAddTask", newPayload);
      } else if (payload.updates.task.nrepeating.everyWeek) {
        newPayload = getWeeklyTask(payload.updates.task);
        dispatch("fbAddTask", newPayload);
      }
    }
  },
  fbPushDueDate({ dispatch }, payload) {
    let userId = firebaseAuth.currentUser.uid;
    //let taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
    // check for repeating to get next required date, otherwise just move til tomorrow.
    if (
      payload.task.dueDate == undefined ||
      payload.task.dueDate == "Invalid date"
    ) {
      payload.task.dueDate = moment().format("YYYY-MM-DD");
    }
    if (
      payload.task.nrepeating.monday ||
      payload.task.nrepeating.tuesday ||
      payload.task.nrepeating.wednesday ||
      payload.task.nrepeating.thursday ||
      payload.task.nrepeating.friday ||
      payload.task.nrepeating.saturday ||
      payload.task.nrepeating.sunday
    ) {
      var newPayload = {};
      newPayload = getRepeatingTask(payload.task);
      payload.task = newPayload.task;
    } else if (payload.task.nrepeating.numDay) {
      console.debug(
        "repeat every " + payload.task.nrepeating.numDay + " number of days."
      );
      // if it's before today, add one to today
      if (
        moment(moment(payload.task.dueDate).format("YYYY-MM-DD")).isBefore(
          moment().format("YYYY-MM-DD"),
          "day"
        )
      ) {
        payload.task.dueDate = moment()
          .add(payload.task.nrepeating.numDay, "days")
          .format("YYYY-MM-DD");
      } else {
        // else add one to due date
        payload.task.dueDate = moment(payload.task.dueDate)
          .add(payload.task.nrepeating.numDay, "days")
          .format("YYYY-MM-DD");
      }
    } else if (
      moment(moment(payload.task.dueDate).format("YYYY-MM-DD")).isBefore(
        moment().format("YYYY-MM-DD"),
        "day"
      )
    ) {
      payload.task.dueDate = moment()
        .add(1, "days")
        .format("YYYY-MM-DD");
    } else {
      payload.task.dueDate = moment(payload.task.dueDate)
        .add(1, "days")
        .format("YYYY-MM-DD");
    }

    var task = {};
    task.updates = {};
    task.updates.dueDate = payload.task.dueDate;
    task.id = payload.id;
    dispatch("fbUpdateTask", task);
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
  },
  fbArchiveTasks() {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref("tasks/" + userId);
    let taskArchiveRef = firebaseDb.ref("taskArchive/" + userId);
    taskRef.once("value").then(function(snapshot) {
      let payload = snapshot.val();
      taskArchiveRef.set(payload, error => {
        if (error) {
          showErrorMessage(error.message);
        } else {
          // go through payload and delete all completed tasks over 3 months old
          let tasks = Object.keys(payload);
          let tasksToDelete = [];
          tasks.forEach(taskID => {
            if (
              payload[taskID].completed &&
              moment(payload[taskID].dueDate).isBefore(
                moment().subtract(3, "month")
              )
            ) {
              tasksToDelete.push(taskID);
            }
          });

          // if (tasksToDelete.length > 0) {
          //   tasksToDelete.forEach(deleteID => {
          //     let taskRef = firebaseDb.ref("tasks/" + userId + "/" + deleteID);
          //     taskRef.remove(error => {
          //       if (error) {
          //         showErrorMessage(error.message);
          //       }
          //     });
          //   });
          // }

          Notify.create("Tasks archived!");
        }
      });
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
  tasksNoDate: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key];
      if ((task.dueDate = "")) {
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

      let formattedTaskDueDate = moment(taskDueDate).format("YYYY-MM-DD");
      let formattedToday = moment(today).format("YYYY-MM-DD");

      if (moment(formattedTaskDueDate).isSame(formattedToday, "day") && (!task.nrepeating.weekly && !task.nrepeating.everyWeek)) {
        tasks[key] = task;
      }

      if (task.completedDate != undefined) {
        if (
          task.completedDate &&
          moment(moment(task.completedDate).format("YYYY-MM-DD")).isSame(
            moment().format("YYYY-MM-DD"),
            "day"
          )
        ) {
          tasks[key] = task;
        }
      }
    });

    return tasks;
  },
  tasksTomorrow: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key];
      let taskDueDate = task.dueDate;
      let tomorrow = moment()
        .add(1, "days")
        .format();

      let formattedTaskDueDate = moment(taskDueDate).format("YYYY-MM-DD");
      let formattedTomorrow = moment(tomorrow).format("YYYY-MM-DD");

      if (moment(formattedTaskDueDate).isSame(formattedTomorrow, "day")) {
        tasks[key] = task;
      }
    });

    return tasks;
  },
  tasksTodayNotCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key];
      let taskDueDate = task.dueDate;
      let today = moment().format();
      //console.debug("moment date: " +  moment().format() + ", normal date:" + today);

      let formattedTaskDueDate = moment(taskDueDate).format("YYYY-MM-DD");
      let formattedToday = moment(today).format("YYYY-MM-DD");

      if (
        moment(formattedTaskDueDate).isSame(formattedToday, "day") &&
        !task.completed && !task.nrepeating.weekly
      ) {
        tasks[key] = task;
      }
    });

    return tasks;
  },
  tasksTomorrowNotCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key];
      let taskDueDate = task.dueDate;
      let tomorrow = moment()
        .add(1, "days")
        .format();

      let formattedTaskDueDate = moment(taskDueDate).format("YYYY-MM-DD");
      let formattedTomorrow = moment(tomorrow).format("YYYY-MM-DD");

      if (
        moment(formattedTaskDueDate).isSame(formattedTomorrow, "day") &&
        !task.completed
      ) {
        tasks[key] = task;
      }
    });

    return tasks;
  },
  tasksCompletedToday: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key];
      if (task.completedDate != undefined) {
        if (
          task.completed &&
          moment(moment(task.completedDate).format("YYYY-MM-DD")).isSame(
            moment().format("YYYY-MM-DD"),
            "day"
          )
        ) {
          tasks[key] = task;
        }
      }
    });
    return tasks;
  },
  tasksNotCompletedToday: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key];
      if (task.completedDate != undefined) {
        if (
          !task.completed &&
          moment(moment(task.completedDate).format("YYYY-MM-DD")).isSame(
            moment().format("YYYY-MM-DD"),
            "day"
          )
        ) {
          tasks[key] = task;
        }
      }
    });
    return tasks;
  },
  tasksCreatedToday: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key];
      if (task.createdDate != undefined) {
        if (
          moment(moment(task.createdDate).format("YYYY-MM-DD")).isSame(
            moment().format("YYYY-MM-DD"),
            "day"
          )
        ) {
          tasks[key] = task;
        }
      }
    });
    return tasks;
  },
  tasksThisWeek: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key];
      let taskDueDate = task.dueDate;
      let today = moment().format();
      //console.debug("moment date: " +  moment().format() + ", normal date:" + today);

      let formattedTaskDueDate = moment(taskDueDate).format("YYYY-MM-DD");
      let formattedToday = moment(today).format("YYYY-MM-DD");

      if (moment(formattedTaskDueDate).isSame(formattedToday, "week")) {
        tasks[key] = task;
      }
    });

    return tasks;
  },
  tasksCompletedThisWeek: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key];
      if (task.completedDate != undefined) {
        if (
          task.completed &&
          moment(moment(task.completedDate).format("YYYY-MM-DD")).isSame(
            moment().format("YYYY-MM-DD"),
            "week"
          )
        ) {
          tasks[key] = task;
        }
      }
    });
    return tasks;
  },
  tasksCompletedThisMonth: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key];
      if (task.completedDate != undefined) {
        if (
          task.completed &&
          moment(moment(task.completedDate).format("YYYY-MM-DD")).isSame(
            moment().format("YYYY-MM-DD"),
            "month"
          )
        ) {
          tasks[key] = task;
        }
      }
    });
    return tasks;
  },
  tasksCompletedThisYear: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key];
      if (task.completedDate != undefined) {
        if (
          task.completed &&
          moment(moment(task.completedDate).format("YYYY-MM-DD")).isSame(
            moment().format("YYYY-MM-DD"),
            "year"
          )
        ) {
          tasks[key] = task;
        }
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
        !task.completed && !task.nrepeating.weekly
      ) {
        tasks[key] = task;
      }
    });

    return tasks;
  },
  tasksCompletedLate: (state, getters) => {
    let tasksCompleted = getters.tasksCompleted;
    let tasks = {};
    Object.keys(tasksCompleted).forEach(function(key) {
      let task = tasksCompleted[key];
      let taskDueDate = task.dueDate;
      let taskCompletedDate = task.completedDate;

      let formattedTaskDueDate = moment(taskDueDate).format("YYYY-MM-DD");
      let formattedTaskCompletedDate = moment(taskCompletedDate).format(
        "YYYY-MM-DD"
      );

      if (
        moment(formattedTaskDueDate).isBefore(formattedTaskCompletedDate) &&
        task.completed
      ) {
        tasks[key] = task;
      }
    });
    return tasks;
  },
  tasksCompletedYesterday: (state, getters) => {
    let tasksCompleted = getters.tasksCompleted;
    let tasks = {};
    Object.keys(tasksCompleted).forEach(function(key) {
      let task = tasksCompleted[key];
      let taskCompletedDate = task.completedDate;
      let yesterday = moment().subtract(1, "days");

      let formattedTaskCompletedDate = moment(taskCompletedDate).format("YYYY-MM-DD");

      if (
        moment(formattedTaskCompletedDate).isSame(yesterday) &&
        task.completed
      ) {
        tasks[key] = task;
      }
    });
    return tasks;
  },
  tasksCompletedTwoDaysAgo: (state, getters) => {
    let tasksCompleted = getters.tasksCompleted;
    let tasks = {};
    Object.keys(tasksCompleted).forEach(function(key) {
      let task = tasksCompleted[key];
      let taskCompletedDate = task.completedDate;
      let twoDaysAgo = moment().subtract(2, "days");

      let formattedTaskCompletedDate = moment(taskCompletedDate).format("YYYY-MM-DD");

      if (
        moment(formattedTaskCompletedDate).isSame(twoDaysAgo) &&
        task.completed
      ) {
        tasks[key] = task;
      }
    });
    return tasks;
  },
  tasksWeekly: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered;
    let tasks = {};
    Object.keys(tasksFiltered).forEach(function(key) {
      let task = tasksFiltered[key];
      let today = moment().format();
      let formattedTaskCreatedWeek = moment(task.createdDate, "YYYY-MM-DD").week();
      let formattedTaskDueDateWeek = moment(task.dueDate, "YYYY-MM-DD").week();
      let formattedCurrentWeek = moment(today, "YYYY-MM-DD").week();
      
      if (formattedTaskDueDateWeek == formattedCurrentWeek) {
        tasks[key] = task;

        // if ((task.nrepeating.weekly || task.nrepeating.everyWeek) && (formattedTaskDueDateWeek == formattedCurrentWeek)) {
        //   tasks[key] = task;
      }
    });

    return tasks;
  },
  tasksWeeklyByProject: (state, getters) => {
    let projects = getters.projects;
    let tasksFiltered = getters.tasksWeekly;
    let projectTasks = {};
    Object.keys(projects).forEach(function(projKey) { 
      projectTasks[projects[projKey]] = {};
      projectTasks[projects[projKey]].name = projects[projKey];
      projectTasks[projects[projKey]].task = {};
      console.debug(projects[projKey]);//projectTasks.push(projKey);
      Object.keys(tasksFiltered).forEach(function(key) {
        let task = tasksFiltered[key];
        if (task.project == projects[projKey]) {
          projectTasks[projects[projKey]].task[key] = task;
      }});
    });
    let projectsWithTasks = [];
    Object.keys(projectTasks).forEach(function(proj) {
      if (Object.keys(projectTasks[proj].task).length > 0) {
        projectsWithTasks.push(projectTasks[proj]);
      }
     })
    return projectsWithTasks;
  },
  projectsCreatedToday: (state, getters) => {
    let projects = getters.projects;
    let projectsCreatedToday = {};
    Object.keys(projects).forEach(function(key) {
      let proj = projects[key];
      let formattedProjectCreatedDate = moment(proj.createdDate).format("YYYY-MM-DD");

      if (
        moment(moment(formattedProjectCreatedDate).format("YYYY-MM-DD")).isSame(moment().format("YYYY-MM-DD"),"day")
      ) {
        projectsCreatedToday[key] = proj.createdDate;
      }
    });
    return projectsCreatedToday;
  },
  projects: state => {
    return state.projects;
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

function getRepeatingTask(task) {
  var daysNeeded = [];
  var currentDay = moment().day();
  if (currentDay == 0) currentDay = 7;
  var requiredDay = -1;
  var newTask = {
    name: task.name,
    project: task.project,
    npublic: task.npublic,
    nrepeating: {
      monday: task.nrepeating.monday,
      tuesday: task.nrepeating.tuesday,
      wednesday: task.nrepeating.wednesday,
      thursday: task.nrepeating.thursday,
      friday: task.nrepeating.friday,
      saturday: task.nrepeating.saturday,
      sunday: task.nrepeating.sunday
    },
    dueDate: "",
    dueTime: "",
    completed: false,
    createdDate: task.createdDate,
    lastModified: moment().format()
  };

  if (task.nrepeating.monday) {
    daysNeeded.push(1);
  }
  if (task.nrepeating.tuesday) {
    daysNeeded.push(2);
  }
  if (task.nrepeating.wednesday) {
    daysNeeded.push(3);
  }
  if (task.nrepeating.thursday) {
    daysNeeded.push(4);
  }
  if (task.nrepeating.friday) {
    daysNeeded.push(5);
  }
  if (task.nrepeating.saturday) {
    daysNeeded.push(6);
  }
  if (task.nrepeating.sunday) {
    daysNeeded.push(7);
  }

  if (daysNeeded.length > 0) {
    if (
      moment(moment(task.dueDate).format("YYYY-MM-DD")).isBefore(
        moment().format("YYYY-MM-DD"),
        "day"
      )
    ) {
      daysNeeded.reverse();
    }
    try {
      daysNeeded.forEach(element => {
        if (element > currentDay) {
          requiredDay = element;
        } else if (requiredDay == -1) {
          //requiredDay = daysNeeded(daysNeeded.length - 1);
          //requiredDay = daysNeeded.remove(element);
          //throw BREAKEXCEPTION;
        }
      });
    } catch (e) {
      //
    }
  }

  // if task.dueDate.day == requiredDay && daysNeeded.count > 1, skip

  if (requiredDay == -1) {
    var dueDateDay = moment(task.dueDate).day();
    if (daysNeeded.length > 0 && dueDateDay == daysNeeded[0]) {
      for (let i = 0; i < daysNeeded.length; i++) {
        if (daysNeeded[i] >= dueDateDay) {
          requiredDay = daysNeeded[i];
        }
      }
    } else {
      requiredDay = daysNeeded[0];
    }

    if (task.dueDate == undefined) {
      newTask.dueDate = moment()
        .add(1, "weeks")
        .isoWeekday(requiredDay)
        .format("YYYY-MM-DD");
    } else {
      newTask.dueDate = moment(task.dueDate)
        .add(1, "weeks")
        .isoWeekday(requiredDay)
        .format("YYYY-MM-DD");
    }
  } else if (
    requiredDay > currentDay &&
    task.dueDate >= moment().format("YYYY-MM-DD")
  ) {
    // check the daysNeeded.
    if (daysNeeded.length > 1) {
    }
    newTask.dueDate = moment(task.dueDate)
      .add(1, "day")
      .isoWeekday(requiredDay)
      .format("YYYY-MM-DD");
  } else if (task.dueDate < moment().format("YYYY-MM-DD")) {
    // if task repeats monday and thursday, and i complete the thursday on wednesday, I want the next on the following monday.
    daysNeeded.reverse();
    try {
      daysNeeded.forEach(element => {
        if (element > currentDay) {
          newTask.dueDate = moment()
            .add(1, "weeks")
            .isoWeekday(element)
            .format("YYYY-MM-DD");
          throw BREAKEXCEPTION;
        } else {
          newTask.dueDate = moment()
            .add(1, "weeks")
            .isoWeekday(element)
            .format("YYYY-MM-DD");
          throw BREAKEXCEPTION;
        }
      });
    } catch (e) {
      //
    }
  } else if (
    moment(moment().format("YYYY-MM-DD")).isBefore(
      moment(task.dueDate).format("YYYY-MM-DD"),
      "day"
    )
  ) {
    newTask.dueDate = moment(task.dueDate)
      .add(1, "weeks")
      .isoWeekday(requiredDay)
      .format("YYYY-MM-DD");
  } else {
    newTask.dueDate = moment()
      .add(1, "weeks")
      .isoWeekday(requiredDay)
      .format("YYYY-MM-DD");
  }

  var newPayload = {};
  newPayload.task = newTask;
  newPayload.id = uid();
  return newPayload;
}
function getNumDayTask(task) {
  // task.nrepeating.numDay
  // moment addNum of days - check to make sure it handles the month carry-over
  var newTask = {
    name: task.name,
    project: task.project,
    npublic: task.npublic,
    nrepeating: {
      monday: task.nrepeating.monday,
      tuesday: task.nrepeating.tuesday,
      wednesday: task.nrepeating.wednesday,
      thursday: task.nrepeating.thursday,
      friday: task.nrepeating.friday,
      saturday: task.nrepeating.saturday,
      sunday: task.nrepeating.sunday,
      numDay: task.nrepeating.numDay
    },
    dueDate: "",
    dueTime: "",
    completed: false,
    createdDate: moment().format(),
    lastModified: moment().format()
  };
  newTask.dueDate = moment(
    task.dueDate == "" ? moment().format("YYYY-MM-DD") : task.dueDate
  )
    .add(task.nrepeating.numDay, "days")
    .format("YYYY-MM-DD");

  var newPayload = {};
  newPayload.task = newTask;
  newPayload.id = uid();
  return newPayload;
};
function getMonthlyTask(task) {
  // task.nrepeating.numDay
  // moment addNum of days - check to make sure it handles the month carry-over
  var newTask = {
    name: task.name,
    project: task.project,
    npublic: task.npublic,
    nrepeating: {
      monday: task.nrepeating.monday,
      tuesday: task.nrepeating.tuesday,
      wednesday: task.nrepeating.wednesday,
      thursday: task.nrepeating.thursday,
      friday: task.nrepeating.friday,
      saturday: task.nrepeating.saturday,
      sunday: task.nrepeating.sunday,
      numDay: task.nrepeating.numDay,
      monthly: task.nrepeating.monthly
    },
    dueDate: "",
    dueTime: "",
    completed: false,
    createdDate: moment().format(),
    lastModified: moment().format()
  };
  // if dueDate is last day of the month, set dueDate to last day of NEXT month 
  var endOfMonth = moment(task.dueDate).endOf('month').format("YYYY-MM-DD");
  if (moment(task.dueDate).isSame(endOfMonth)) {
    var nextMonth = moment(task.dueDate).add(1, 'month');
    newTask.dueDate = moment(nextMonth).endOf('month').format("YYYY-MM-DD");
  } else {
    newTask.dueDate = moment(task.dueDate == "" ? moment().format("YYYY-MM-DD") : task.dueDate).add(1, "month").format("YYYY-MM-DD");
  }
  
  var newPayload = {};
  newPayload.task = newTask;
  newPayload.id = uid();
  return newPayload;
}

function getWeeklyTask(task) {
  var newTask = {
    name: task.name,
    project: task.project,
    npublic: task.npublic,
    nrepeating: {
      weekly: true,
      everyWeek: true
    },
    dueDate: "",
    dueTime: "",
    completed: false,
    createdDate: moment().format(),
    lastModified: moment().format()
  };

  newTask.dueDate = moment(task.dueDate == "" ? moment().format("YYYY-MM-DD") : task.dueDate).add(1, "week").format("YYYY-MM-DD");
  
  var newPayload = {};
  newPayload.task = newTask;
  newPayload.id = uid();
  return newPayload;
}

