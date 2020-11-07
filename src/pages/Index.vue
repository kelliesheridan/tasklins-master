<template>
  <q-page padding>
    <q-dialog v-if="newUserWalkthrough" v-model="newUserWalkthrough">
      <new-user />
    </q-dialog>

    <template v-if="tasksDownloaded">
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
          style="overflow: auto; height: 50%"
        >
          <div>
            <list-header class="textureBar">
              <div class="index-header">Today's Tasks</div>
            </list-header>
            <no-tasks
              v-if="
                !Object.keys(tasksToday).length &&
                  !Object.keys(tasksLate).length
              "
            ></no-tasks>
            <tasks-late
              v-if="Object.keys(tasksLate).length"
              :tasksLate="tasksLate"
              class="lateTasks task-box"
            />
            <tasks-today
              class="task-box"
              v-if="Object.keys(tasksToday).length"
              :tasksToday="tasksToday"
            />
          </div>
        </div>

        <div
          class="section col-xs-12 col-sm-12 col-md-6 col-lg-6 justify-center q-pa-xs"
        >
          <list-header class="textureBar">
            <div class="index-header">Your Tasklin</div>
          </list-header>
          <div
            class="section tasklin-section"
            :class="
              !settings.darkMode
                ? 'tasklin-section-day'
                : 'tasklin-section-night'
            "
          >
            <div class="">
              <tasklin v-if="tasklin.hatched" />
              <egg v-if="!tasklin.hatched" />
              <div v-if="tasklin.name" class="tasklin-details">
                <q-item-label><b>Name: </b> {{ tasklin.name }}</q-item-label>
                <q-item-label
                  ><b>Mood: </b
                  >{{
                    this.getMood(Object.keys(this.tasksCompletedToday).length, Object.keys(this.tasksLate).length, Object.keys(this.tasksCreatedToday).length, Object.keys(this.tasksTodayNotCompleted).length)
                  }}</q-item-label
                >
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
                  <q-btn
                    class="tasklinNameBtn"
                    label="Submit"
                    type="submit"
                    color="primary"
                  />
                </q-form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row main justify-center q-pa-md">
        <div class="section col-xs-12 col-sm-12 col-md-6 news q-pa-xs">
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
          <br />
          <div class="text-center">
            <q-btn
              rounded
              label="November Tasklins Progress"
              color="primary"
              to="/november"
            />
          </div>
        </div>

        <div class="section col-xs-12 col-sm-12 col-md-6 news q-pa-xs">
          <list-header class="textureBar">
            <div class="index-header">News</div>
          </list-header>
          <div></div>
          <div class="text-left">
            <div class="col q-pa-md">
              <q-list dense padding class="rounded-borders">
                <q-item>
                  <q-item-section>
                    <q-item-label><strong>Tasklin Moods!</strong></q-item-label>
                    <q-item-label
                      >It's been a hectic/distracting week, but your Tasklins
                      can now be more than just okay! Get those tasks done and
                      see how it changes your Tasklins mood.</q-item-label
                    >
                  </q-item-section>
                </q-item>
                <br />
                <q-item>
                  <q-item-section>
                    <q-item-label
                      ><strong
                        >It's going to be a big month!</strong
                      ></q-item-label
                    >
                    <q-item-label
                      >The new year is coming, and there's still so much we want
                      to have ready here on Tasklins! This month, we're aiming
                      for 30 updates in 30 days. Visit our
                      <a href="/#/november/">November Challenge Page</a> to
                      learn more!</q-item-label
                    >
                  </q-item-section>
                </q-item>
                <br />
                <q-item>
                  <q-item-section>
                    <q-item-label><strong>Patreon Update</strong></q-item-label>
                    <q-item-label>
                      New update on Patreon, going over some of our goals for
                      the rest of the month! Available to all, not just patrons.
                      <a
                        href="https://www.patreon.com/posts/42927673"
                        target="_blank"
                        >Click here to read it!</a
                      >
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="col q-pa-md" style="max-width: 350px"></div>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <span class="absolute-center">
        <q-spinner-audio size="3em" color="secondary" />
      </span>
    </template>
  </q-page>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { openURL } from "quasar";
import moment from "moment";

export default {
  props: ["tasksTodo"],

  data() {
    return {
      newUserWalkthrough: false,
      hideNewUserPanel: false,
      tasklinName: "",
      slide: "style",
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."
    };
  },
  mounted() {
    // if (this.profile.signup) {
    //   this.$router.push("/initial")
    // }
    this.setProjectSearch("");
  },
  watch: {
    "$q.dark.isActive"(val) {}
  },
  components: {
    "tasks-today": require("components/Tasks/TasksToday.vue").default,
    "tasks-late": require("components/Tasks/TasksLate.vue").default,
    "list-header": require("components/Shared/ListHeader.vue").default,
    "no-tasks": require("components/Tasks/NoTasks.vue").default,
    tasklin: require("components/Tasklins/Tasklin.vue").default,
    "new-user": require("components/Help/NewUser.vue").default,
    egg: require("components/Tasklins/egg.vue").default
  },
  computed: {
    ...mapGetters("profile", ["profile"]),
    ...mapGetters("settings", ["settings"]),
    ...mapGetters("tasks", [
      "tasksToday",
      "tasksTodayNotCompleted",
      "tasksLate",
      "tasksCompletedToday",
      "tasksSorted",
      "tasksCreatedToday"
    ]),
    ...mapGetters("tasklins", ["tasklin"]),
    ...mapState("tasks", ["search", "tasksDownloaded"])
  },
  methods: {
    ...mapActions("profile", ["addXP"]),
    ...mapActions("tasks", ["setProjectSearch"]),
    ...mapActions("tasklins", ["updateTasklin"]),
    getMood(completedToday, lateToday, createdToday, tasksDueTodayButNotCompleted) {      
      if (completedToday == 0) {
        return "Asleep";
      } else if (completedToday >= 1 && completedToday <= 3) {
        return "Okay.";
      } else if (
            completedToday > 3 &&
            tasksDueTodayButNotCompleted == 0 &&
            createdToday >= 2 &&
            lateToday == 0
          ) {
        return "Thrilled!";
      } else {
        return "Happy";
      }
    },
    showNewUserPanel(hidePanel) {
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
