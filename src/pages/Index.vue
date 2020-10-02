<template>
  <q-page padding>
    <q-dialog v-if="newUserWalkthrough" v-model="newUserWalkthrough">
      <new-user />
    </q-dialog>

    <template v-if="tasksDownloaded">
      <q-card bordered flat v-if="showNewUserPanel()" class="card center">
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
            @click="!showNewUserPanel()"
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
                    this.getMood(Object.keys(this.tasksCompletedToday).length)
                  }}</q-item-label
                >
              </div>
              <div v-if="!tasklin.name" class="justify-center tasklin-details">
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
            <div class="index-header">Follow Tasklins on Social Media</div>
          </list-header>
          <div class="text-center">
            <a
              href="https://www.facebook.com/Tasklins-123005292837764"
              target="_blank"
              ><img
                src="statics/social/facebook.png"
                width="82"
                height="86"
                title="Facebook"
                alt="Tasklins on Facebook"
            /></a>
            <a href="https://twitter.com/tasklins" target="_blank"
              ><img
                src="statics/social/twitter.png"
                width="82"
                height="86"
                title="Facebook"
                alt="Tasklins on Facebook"
            /></a>
            <a href="https://www.instagram.com/tasklins/" target="_blank"
              ><img
                src="statics/social/instagram.png"
                width="82"
                height="86"
                title="Facebook"
                alt="Tasklins on Facebook"
            /></a>
            <a href="https://www.pinterest.ca/Tasklins/" target="_blank"
              ><img
                src="statics/social/pinterest.png"
                width="82"
                height="86"
                title="Facebook"
                alt="Tasklins on Facebook"
            /></a>
          </div>
        </div>

        <div class="section col-xs-12 col-sm-12 col-md-6 news q-pa-xs">
          <list-header class="textureBar">
            <div class="index-header">News</div>
          </list-header>
          <div class="text-left">
            <div class="col q-pa-md">
              <q-list dense padding class="rounded-borders">
                <q-item>
                  <q-item-section>
                    <q-item-label
                      ><strong>Dark Mode Works Now!</strong></q-item-label
                    >
                    <q-item-label> Huzzah!</q-item-label>
                  </q-item-section>
                </q-item>
                <br />

                <q-item>
                  <q-item-section>
                    <q-item-label
                      ><strong>New User Walkthrough</strong></q-item-label
                    >
                    <q-item-label
                      >We've added a new user walkthrough to demonstrate the
                      basics of Tasklins! For existing users, you can click here
                      to see it.<br /><br />
                      <q-btn
                        class="q-mt-xs"
                        padding
                        color="secondary"
                        @click="newUserWalkthrough = true"
                        label="?"
                      />
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <br />
                <q-item>
                  <q-item-section>
                    <q-item-label><strong>New Art</strong></q-item-label>
                    <q-item-label
                      >Changed the art for Tasklins to better fit our long term
                      plan. There are now over 500 possible
                      Tasklins.</q-item-label
                    >
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
      "tasksLate",
      "tasksCompletedToday",
      "tasksSorted"
    ]),
    ...mapGetters("tasklins", ["tasklin"]),
    ...mapState("tasks", ["search", "tasksDownloaded"])
  },
  methods: {
    ...mapActions("profile", ["addXP"]),
    ...mapActions("tasks", ["setProjectSearch"]),
    ...mapActions("tasklins", ["updateTasklin"]),
    getMood(numToday) {
      if (numToday == 0) {
        return "Asleep";
      } else {
        return "Okay.";
      }
    },
    showNewUserPanel() {
      if (this.profile.dateCreated) {
        if (moment(this.profile.dateCreated).format("YYYY-MM-DD") == moment().format("YYYY-MM-DD")) {
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
