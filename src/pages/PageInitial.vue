<template>
  <q-page padding class="bg-auth">
    <div class="q-pa-md" style="max-width: 400px"></div>

    <q-dialog
      v-model="showNewUser1"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="card">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Welcome to Tasklins!</div>
        </q-card-section>

        <q-card-section class="q-pt-md">
          <div>
            <q-item>
              <q-item-section side top>
                <q-avatar class="pip-avatar" rounded>
                  <img src="statics/Piper.jpg" />
                </q-avatar>
              </q-item-section>
              <q-item-section top>
                <q-item-label
                  >Hi, I'm Piper! I'll be showing you around. Don't mind the
                  dust, things are still pretty heavily under construction
                  around here, but we're happy to have you!
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>

          <q-card-actions align="right">
            <q-btn
              flat
              label="Next"
              color="primary"
              @click="showNewUser2 = true"
              v-close-popup
            />
          </q-card-actions>
        </q-card-section>
      </q-card>
    </q-dialog>

    <div class="col text-center" v-if="showNewUser2">
      <q-card class="my-card">
        <div>
          <q-item>
            <q-avatar rounded class="pip-avatar">
              <img src="statics/Piper.jpg" />
            </q-avatar>

            <q-item-section top side>
              <q-item-label v-if="hatched === false"
                >All Tasklins start out as eggs. You can store as many eggs as
                you want to, but to meet the Tasklin inside, you're going to
                have to give it something to work on. Use the + button to
                <strong>add your first five tasks</strong>. These can be any
                things you need to complete, such as 'Go for a walk' or 'Finish
                Math Homework'.
                <strong
                  >Once you've added all five tasks, the hatch button will
                  appear!</strong
                ></q-item-label
              >
              <q-item-label v-if="hatched === true"
                >Well done! Now it's time to name your first Tasklin, and then
                we're ready to start our adventure! And judging by the things
                you need to get done, there's no time to waste. And keep an eye
                out for the + button to add more tasks in the future. You can
                find it on your menu bar.</q-item-label
              >
            </q-item-section>
          </q-item>
        </div>
      </q-card>

      <div v-if="hatched === false">
        <div id="cf2" :class="eggColor" class="shadow">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            class="responsive egg2"
            viewBox="0 0 300 300"
            style="enable-background:new 0 0 300 300;"
            xml:space="preserve"
          >
            <g>
              <path
                class="st0"
                d="M236.39,82.84c19.41,43.02,21.09,77.63,12.42,115.93c-8.68,38.39-33.04,62.5-56,75.65
            c-47.27,27.08-89.36,10.14-118.47-24.18C28.4,196.09,43.65,100.61,84.53,49.26C138.86-19,206.09,15.69,236.39,82.84L236.39,82.84z"
              />
              <path
                class="st1 eggHighlight"
                d="M185.54,84.21c4.65,26.89,0.58,46.51-9.81,66.71c-10.41,20.24-27.54,30.22-42.3,34.26
            c-30.39,8.33-51.5-7.25-62.84-30.67c-17.89-36.97,4.45-88.22,34.76-111.07C145.66,13.08,178.29,42.22,185.54,84.21L185.54,84.21z"
              />
              <path
                class="st2 eggShadow"
                d="M236.39,82.84c19.41,43.02,21.09,77.63,12.42,115.93c-8.68,38.39-33.04,62.5-56,75.65
            c-47.27,27.08-89.36,10.14-118.47-24.18c-1.97-2.33-3.83-4.74-5.58-7.21c51.54,34.83,89.11,26.34,121.36-0.87
            c64.22-54.17,55.21-141.91,20.6-199.1C220.78,54.12,229.53,67.64,236.39,82.84L236.39,82.84z"
              />
            </g>
          </svg>
        </div>

        <div
          class="initial-box col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-xs"
          style="overflow: auto; height: 90%"
        >
          <tasks-initial
            v-if="Object.keys(tasksTodo).length"
            :tasksTodo="tasksTodo"
          />
        </div>

        <div v-if="newTasks >= 5 && hatched != true">
          <q-btn
            color="secondary"
            @click="hatched = true"
            glossy
            label="Hatch"
          />
        </div>

        <div v-if="newTasks <= 4">
          <q-btn
            color="secondary"
            @click="
              showAddTask = true;
              newTasks++;
            "
            glossy
            icon="add"
          />
        </div>
      </div>

      <div
        class="q-pa-sm thinger tasklinDisplayInitialBox"
        v-if="hatched === true"
      >
        <div class="q-pa-xs tasklinDisplayInitial" style="width: 240px !important; height: 240px !important">
          <tasklin />
        </div>

        <div class="q-pa-sm" style="max-width: 300px">
          <form class="q-gutter-md">
            <p>Species: Monster</p>
            <q-input
              ref="tasklinName"
              filled
              v-model="tasklinName"
              label="Name Your Tasklin"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
            />

            <div>
              <q-btn
                label="Let's Go"
                @click="updateUserProfile"
                type="submit"
                color="primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      showNewUser1: true,
      showNewUser2: false,
      showAddTask: false,
      eggColor: "eggStarterPurple",
      hatched: false,
      hex: "ff00ff",
      tasklinName: "",
      tasklinType: "Monster",
      color: "blue",
      newTasks: 0
    };
  },
  computed: {
    ...mapGetters("profile", ["profile"]),
    ...mapGetters("tasklins", ["tasklin"]),
    ...mapGetters("settings", ["fbReadSettings"]),
    ...mapGetters("tasks", ["tasksTodo", "tasksSorted", "projectsFiltered"])
  },
  methods: {
    ...mapActions("profile", [
      "fbReadProfile",
      "updateAbout",
      "updateName",
      "updateUsername",
      "updateProfile",
      "togglePrivateValue",
      "updateTasklins",
      "updateColor"
    ]),
    ...mapActions("tasklins", ["updateTasklin"]),
    updateUserProfile() {
      let profile = {
        name: this.profile.name,
        username: this.profile.username,
        id: this.profile.id,
        about: this.profile.about,
        avatar: this.profile.avatar,
        lin: this.profile.lin,
        xp: this.profile.xp,
        level: this.profile.level,
        friends: this.profile.friends,
        inventory: this.profile.inventory,
        private: this.profile.private,
        signup: false,
        admin: this.profile.admin,
        color: this.profile.color
      };

      this.updateProfile(profile);
      this.updateExistingTasklin();
      this.$router.push("/index");
    },
    updateExistingTasklin() {
      let tasklin = {
        name: this.tasklinName,
        creation_date: Date.now(),
        type: "Monster",
        project: "Tasks",
        xp: 0,
        level: 1,
        color: this.profile.color,
        color2: "",
        color3: "",
        bodyShape: "",
        bodyTexture: "",
        eyeColor: this.profile.color,
        eyeType: "",
        nose: "",
        mouth: "",
        pattern1: "",
        eyebrowsOrTail: "",
        earsOrHorns: "",
        bodyShape2: "",
        pattern2: ""
      };

      this.updateTasklin(tasklin);
    }
  },
  components: {
    "add-task": require("components/Tasks/Modals/addTask.vue").default,
    "tasks-initial": require("components/Tasks/TasksInitial.vue").default,
    tasklin: require("components/Tasklins/Tasklin.vue").default
  }
};
</script>

<style>
.initial-box {
  overflow: auto;
  flex: auto;
  margin: 0 auto;
}

@media screen and (min-width: 768px) {
  .card {
    width: 700px;
    max-width: 80vw;
  }

  .pip-avatar {
    width: 200px;
    height: auto;
  }

  .my-picker {
    max-width: 250px;
  }

  .initial-box {
    max-width: 20%;
  }
}

@media screen and (max-width: 767px) {
  .card {
    width: 85%;
  }

  .pip-avatar {
    width: 100px;
    height: auto;
  }

  .my-picker {
    max-width: 200px;
  }

  .initial-box {
    max-width: 80%;
  }
}

.egg {
  width: 20%;
  max-width: 50%;
  height: auto;
  margin: auto;
  margin-left: 10px;
  padding: 10px;
  display: inline-block;
}

.egg2 {
  width: 20%;
  max-width: 50%;
  height: auto;
  margin: auto;
  padding: 10px;
  display: inline-block;
}

.egg1 {
  max-width: 250px;
}
.st0 {
  fill-rule: evenodd;
  clip-rule: evenodd;
}
.st1 {
  fill-rule: evenodd;
  clip-rule: evenodd;
}
.st2 {
  fill-rule: evenodd;
  clip-rule: evenodd;
}

.eggShadow {
  fill: black;
  opacity: 0.3;
}

.eggHighlight {
  fill: white;
  opacity: 0.3;
}

.thinger {
  text-align: center;
  height: auto;
  margin: auto;
  display: inline-block;
}

.tasklin-size {
  max-width: 1rem;
  height: auto;
}

.tasklinDisplayInitialBox {
  margin: 1rem;
  max-width: 100%;
  height: auto;
}

.tasklinDisplayInitial {
  margin: 1rem;
  max-width: 100%;
  height: auto;
  display: inline-block;
  flex: auto;
}
</style>
