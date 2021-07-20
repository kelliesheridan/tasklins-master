<template>
  <q-page padding>
    <q-dialog v-if="newUserWalkthrough" v-model="newUserWalkthrough">
      <new-user />
    </q-dialog>

    <q-dialog v-if="settings" v-model="settings">
      <settingsModal />
    </q-dialog>

    <template v-if="tasksDownloaded">
      <index-menu />

      <q-card
        bordered
        flat
        v-if="showNewUserPanel() && !hideNewUserPanel"
        class="card center"
      >
        <q-card-section>
          <div class="text-h6">Let's Get Started</div>
          <div class="text-subtitle2">
            Welcome to Tasklins! Let's kick things off with a quick walkthrough
            of how everything works. You can also close this panel for now, and
            it will disappear after your first day here.
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions vertical>
          <q-btn
            class="q-mt-xs"
            padding
            color="secondary"
            @click="newUserWalkthrough = true"
            flat
            >New User Walkthrough</q-btn
          >
          <q-btn
            class="q-mt-xs"
            padding
            color="secondary"
            flat
            @click="showNewUserPanel(true)"
            >Hide Panel</q-btn
          >
        </q-card-actions>
      </q-card>

      <div class="row main justify-center q-pa-md">
        <div
          class="section col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-xs"
          style="overflow: auto;"
        >
          <div>
            <!-- <div v-if="!Object.keys(tasksWeeklyByProject).length">

            </div>
            <div v-if="Object.keys(tasksWeeklyByProject).length">

            </div> -->
            <list-header class="textureBar">
              <!-- <div class="index-header">Your Tasks</div> -->
              <!-- <div v-show="viewType == 'today1'" class="index-header">
                Daily View
              </div>
              <div v-show="viewType == 'weekly2'" class="index-header">
                Weekly View
              </div> -->
              <div class="index-header">
                <q-btn-toggle
                  v-model="viewType"
                  size="0.8rem"                  
                  no-caps
                  :options="[
                    {label: 'Daily View', value: 'daily'},
                    {label: 'Weekly View', value: 'weekly'},
                  ]"
                />
              </div>
            </list-header>
            <no-tasks
              v-if="!Object.keys(tasksToday).length &&
                  !Object.keys(tasksLate).length && viewType == 'daily'"
            >
            </no-tasks>
            <tasks-late
              v-if="Object.keys(tasksLate).length"
              v-show="tomorrow == false && viewType == 'daily'"
              :tasksLate="tasksLate"
              class="lateTasks task-box"
            />
            <tasks-today
              class="task-box"
              v-if="Object.keys(tasksToday).length"
              v-show="tomorrow == false && viewType == 'daily'"
              :tasksToday="tasksToday"
            />
            <tasks-tomorrow
              class="task-box"
              v-if="Object.keys(tasksTomorrow).length"
              v-show="tomorrow == true && viewType == 'daily'"
              :tasksTomorrow="tasksTomorrow"
            />
            <!-- <tasks-weekly
              class="task-box"
              v-if="Object.keys(tasksWeeklyByProject).length"
              v-show="viewType == 'weekly'"
              :tasksWeekly="tasksWeeklyByProject"
            /> -->
            <tasks-weekly-by-project
              class="task-box"
              v-if="Object.keys(tasksWeeklyByProject).length"
              v-show="viewType == 'weekly'"
              :tasksWeekly="tasksWeeklyByProject"
            />
            <!-- <project v-show="viewType == 'weekly'"></project> -->
            
            <no-tasks-weekly v-if="!Object.keys(tasksWeeklyByProject).length && viewType == 'weekly'">
            </no-tasks-weekly>
            <div class="q-pa-sm u-center-text" v-show="viewType == 'weekly'">
              Remaining Tasks ({{Object.keys(tasksWeeklyByProject).length}})
            </div>

            <div v-show="tomorrow == false && viewType == 'daily'" class="q-pa-sm u-center-text">
              Remaining Tasks ({{
                Object.keys(tasksTomorrowNotCompleted).length +
                  Object.keys(tasksLate).length
              }})
            </div>
            <div v-show="tomorrow == true && viewType == 'daily'" class="q-pa-sm u-center-text">
              Remaining Tasks ({{
                Object.keys(tasksTomorrowNotCompleted).length
              }})
            </div>
            <div v-show="tomorrow == false && viewType == 'daily'" class="q-pa-sm u-center-text">
              <q-btn
                @click="tomorrow = !tomorrow"
                dense
                label="Show Tomorrow's Tasks"
              />
            </div>
            <div v-show="tomorrow == true && viewType == 'daily'" class="q-pa-sm u-center-text">
              <q-btn
                @click="tomorrow = !tomorrow"
                dense
                label="Show Today's Tasks"
              />
            </div>
          </div>
        </div>

        <div
          class="section col-xs-12 col-sm-12 col-md-6 col-lg-6 justify-center q-pa-xs"
        >
          <list-header class="textureBar">
            <div class="index-header">Your Tasklin</div>
          </list-header>
          <div
            class="tasklin-section"
            :class="!darkMode ? 'tasklin-section-day' : 'tasklin-section-night'"
          >
            <div class="">
              <tasklin v-if="tasklin.hatched" />
              <egg v-if="!tasklin.hatched" />
              <div v-if="tasklin.name" class="tasklin-details">
                <q-item-label><b>Name: </b> {{ tasklin.name }}</q-item-label>
                <q-item-label v-if="tasklin.level >= 2"
                  ><b>Mood: </b>
                  {{
                    this.getMood(
                      Object.keys(this.tasksCompletedToday).length,
                      Object.keys(this.tasksLate).length,
                      Object.keys(this.tasksCreatedToday).length,
                      Object.keys(this.tasksTodayNotCompleted).length,
                      Object.keys(this.tasksCompletedYesterday).length,
                      Object.keys(this.tasksCompletedTwoDaysAgo).length,
                      Object.keys(this.projectsCreatedToday).length
                    )
                  }}
                  <!-- {{this.getMood}} -->
                </q-item-label>
                <!-- <q-item-label><b>XP: </b> {{ tasklin.xp }}</q-item-label> -->
                <q-item-label><b>Level: </b> {{ tasklin.level }}</q-item-label>
              </div>
              <div
                v-if="!tasklin.name && !tasklin.hatched"
                class="tasklin-details"
              >
                <q-item-label
                  >Use the + button to add your first 5 tasks to hatch your
                  Tasklin</q-item-label
                >
              </div>
              <div
                v-if="!tasklin.name && tasklin.hatched"
                class="justify-center tasklin-details"
              >
                <q-form @submit="onSubmit()" class="tasklinName">
                  <q-input
                    filled
                    v-model="tasklinName"
                    label="Tasklin Name"
                    bg-color="accent"
                    class="tasklinNameBox"
                    lazy-rules
                    :rules="[
                      val => (val && val.length > 0) || 'Please type something'
                    ]"
                  />
                </q-form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row main justify-center q-pa-md">
        <div class="section q-pa-xs">
          <list-header class="textureBar">
            <div class="index-header">Extras!</div>
          </list-header>
          <div class="text-center">
            <a
              href="https://www.facebook.com/Tasklins-123005292837764"
              target="_blank"
              ><img
                src="statics/social/facebook.png"
                width="62"
                height="66"
                title="Facebook"
                alt="Tasklins on Facebook"
            /></a>
            <a href="https://twitter.com/tasklins" target="_blank"
              ><img
                src="statics/social/twitter.png"
                width="62"
                height="66"
                title="Facebook"
                alt="Tasklins on Facebook"
            /></a>
            <a href="https://www.instagram.com/tasklins/" target="_blank"
              ><img
                src="statics/social/instagram.png"
                width="62"
                height="66"
                title="Facebook"
                alt="Tasklins on Facebook"
            /></a>
            <a href="https://www.pinterest.ca/Tasklins/" target="_blank"
              ><img
                src="statics/social/pinterest.png"
                width="62"
                height="66"
                title="Facebook"
                alt="Tasklins on Facebook"
            /></a>
          </div>
          <div class="text-center">
            <q-btn
              dense
              flat
              to="/help"
              rounded
              color="primary"
              label="Help"
              icon="help"
            />
            <q-btn
              dense
              flat
              rounded
              label="Settings"
              color="primary"
              @click="settings = true"
              icon="settings"
            />
          </div>
          <div>
            <div class="q-pa-lg text-center fixed-center-bottom">
              <a
                href="https://www.patreon.com/bePatron?u=9215033"
                target="_blank"
              >
                <q-btn
                  class="textureBar"
                  dense
                  text-color="white"
                  label="- Become a Patron -"
              /></a>
            </div>
          </div>
          <br />
        </div>
      </div>
    </template>

    <template v-else>
      <span class="absolute-center">
        <q-spinner-audio size="3em" color="secondary" />
      </span>
    </template>
    <q-dialog v-model="register2" transition-hide="scale">
      <register2 v-if="register2" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { openURL } from "quasar";
import { getMood } from "src/functions/function-get-mood";
import moment from "moment";

export default {
  props: ["tasksTodo"],

  data() {
    return {
      newUserWalkthrough: false,
      hideNewUserPanel: false,
      tasklinName: "",
      settings: false,
      slide: "style",
      tomorrow: false,
      register2: false,
      lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
      viewType: "daily"
    };
  },
  mounted() {
    // if (this.tasklin.eyeType == undefined || this.tasklin.eyeType == "") {
    //   this.register2 = true;
    // }
    this.setProjectSearch("");
    //this.getData(false);
  },
  watch: {
    "$q.dark.isActive"(val) {}
  },
  components: {
    "tasks-today": require("components/Tasks/TasksToday.vue").default,
    "tasks-tomorrow": require("components/Tasks/TasksToday.vue").default,
    // "tasks-weekly": require("components/Tasks/TasksWeekly.vue").default,
    "tasks-weekly-by-project": require("components/Tasks/TasksWeeklyByProject.vue").default,
    "tasks-late": require("components/Tasks/TasksLate.vue").default,
    "list-header": require("components/Shared/ListHeader.vue").default,
    settingsModal: require("components/Help/SettingsModal.vue").default,
    "no-tasks": require("components/Tasks/NoTasks.vue").default,
    "no-tasks-weekly": require("components/Tasks/NoTasksWeekly.vue").default,
    tasklin: require("components/Tasklins/Tasklin.vue").default,
    "new-user": require("components/Help/NewUser.vue").default,
    egg: require("components/Tasklins/egg.vue").default,
    register2: require("components/Auth/Register2.vue").default,
    "index-menu": require("components/IndexMenu.vue").default
  },
  computed: {
    ...mapGetters("profile", ["profile"]),
    ...mapGetters("settings", ["darkMode"]),
    ...mapGetters("tasks", [
      "tasksToday",
      "tasksTomorrow",
      "tasksTodayNotCompleted",
      "tasksTomorrowNotCompleted",
      "tasksLate",
      "tasksCompletedToday",
      "tasksSorted",
      "tasksCreatedToday",
      "tasksCompletedYesterday",
      "tasksCompletedTwoDaysAgo",
      "projectsCreatedToday",
      "tasksWeekly",
      "tasksWeeklyByProject"
    ]),
    ...mapGetters("tasklins", ["tasklin"]),
    ...mapState("tasks", ["search", "tasksDownloaded"])
  },
  methods: {
    ...mapActions("profile", ["addXP"]),
    ...mapActions("tasks", ["readData", "setProjectSearch"]),
    ...mapActions("tasklins", ["updateTasklin"]),

    showNewUserPanel(hidePanel) {
      if (this.tasklin.eyeType == undefined || this.tasklin.eyeType == "") {
        this.register2 = true;
      } else {
        this.register2 = false;
      }

      if (hidePanel != undefined) {
        this.hideNewUserPanel = true;
      }
      if (this.profile.createdDate) {
        if (
          moment(this.profile.createdDate).format("YYYY-MM-DD") ==
          moment().format("YYYY-MM-DD")
        ) {
          return true;
        }
      } else {
        return false;
      }
    },
    showTasklin(numTasks) {},
    onSubmit() {
      if (this.tasklinName != "") {
        let tasklin = {
          name: this.tasklinName
        };
        this.updateTasklin(tasklin);
      }
    },
    getMood(completedToday, lateToday, createdToday, tasksDueTodayButNotCompleted, completedYesterday, completedTwoDaysAgo, projectsCreatedToday) {
      return getMood(completedToday, lateToday, createdToday, tasksDueTodayButNotCompleted, completedYesterday, completedTwoDaysAgo, projectsCreatedToday);
    }
  }
};
</script>

<style scoped>
img {
  border-radius: 8px;
  padding: 10px;
  max-width: 50%;
}

.news {
  margin: 0%;
}

.my-custom-toggle {
  margin: 1px;
  }

.section {
  overflow: auto;
  height: 50%;
  display: inline-block;
  flex: auto;
}

.tasklin-section {
  /* background-image: url("/statics/backgrounds/TownBackground2Day.jpg");    */
  background-color: #eceff1;
  margin: 1rem;
  border-radius: 1rem;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.tasklin-section-day {
  background-image: url("/statics/backgrounds/TownBackground2Day.jpg");
}

.tasklin-section-night {
  background-image: url("/statics/backgrounds/TownBackground2Night.jpg");
}

.icon-s {
  height: 10%;
  width: 10%;
}
</style>
