<template>
  <q-page padding>

    <div style="width: 100%; max-width: 500px; margin: 0 auto;" v-if="this.tasklin.name !== ''">
      <div>
        <list-header class="textureBar">
          <div class="index-header">We might be lost.</div>
        </list-header>
      </div>                 
      <div style="width: 100%; max-width: 500px; margin-top: -150px;">
        <tasklin />
      </div>
      <div class="text-center" style="width: 100%; max-width: 500px">
        <q-btn
          label="Take Me Home"
          @click="backToHome"
          type="submit"
          class="textureBar"
          text-color="accent"          
        />
      </div>       
    </div>

    <div v-cloak v-if="this.tasklin.name == ''">
    <div class="text-center" v-if="showNewUser1">
      <q-card class="card center">
        <q-card-section class="bg-primary u-center-text text-white">
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
              label="Next"
              color="primary"
              @click="showNewUser2 = true; showNewUser1 = false"
              v-close-popup
            />
          </q-card-actions>
        </q-card-section>
      </q-card>
    </div>

    <div class="text-center" v-if="showNewUser2">
      <q-card class="card center">
        <div>
          <q-item>
            <q-avatar rounded class="pip-avatar ">
              <img src="statics/Piper.jpg" />
            </q-avatar>

            <q-item-section class="q-pa-sm" top side>
              <q-item-label v-if="hatched === false"
                >All Tasklins start out as eggs. You can store as many eggs as
                you want to, but to meet the Tasklin inside, you're going to
                have to give it something to work on. Use the + button to
                <strong>add your first five tasks</strong>.<br><br> These can be any
                things you need to complete, such as 'Go for a walk' or 'Finish
                Math Homework'.
                <strong
                  >Once you've added all five tasks, you'll be able to hatch your Tasklin!</strong
                ></q-item-label
              >
              <q-item-label v-if="hatched === true"
                >Well done!<br><br>
                It's time to name your first Tasklin, and then
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
        <div>
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#f44336'"
            src="/statics/eggs/Red.png"
          />
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#e91e63'"
            src="/statics/eggs/Pink.png"
          />
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#9c27b0'"
            src="/statics/eggs/Purple.png"
          />
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#3f51b5'"
            src="/statics/eggs/Blue.png"
          />
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#00bcd4'"
            src="/statics/eggs/Cyan.png"
          />
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#4caf50'"
            src="/statics/eggs/Green.png"
          />
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#ffeb3b'"
            src="/statics/eggs/Yellow.png"
          />
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#ff9800'"
            src="/statics/eggs/Orange.png"
          />
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#795548'"
            src="/statics/eggs/Brown.png"
          />
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#9e9e9e'"
            src="/statics/eggs/Grey.png"
          />
        </div>

        <div v-if="newTasks >= 5 && hatched != true">
          <q-btn
            color="primary"
            @click="hatched = true"            
            label="Hatch"
          />
        </div>

        <div v-if="newTasks <= 4">
          <q-btn          
          round
          color="primary"
          size="18px"
            @click="
              showAddTask = true;
              newTasks++;"            
            icon="add"
          />
        </div>

        <div
          class="initial-box col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-md"
          style="overflow: auto; height: 90%"
        >
          <tasks-initial
            v-if="Object.keys(tasksTodo).length"
            :tasksTodo="tasksTodo"
          />
        </div>

      </div>

      <div
        class="q-pa-sm tasklinDisplayInitialBox"
        v-if="hatched === true"
      >
        <div class="q-pa-xs center tasklinDisplayInitial" style="width: 240px !important; height: 240px !important">
          <tasklin />
        </div>

        <div class="q-pa-sm center" style="max-width: 300px">
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
      eggColor: "eggStarter",
      hatched: false,
      hex: "ff00ff",
      tasklinName: "",
      tasklinType: "Monster",
      color: "blue",
      newTasks: 0,
      tasksFive: false,
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
        backToHome() {
      this.$router.push("/index");
    },
    showLoading () {
      this.$q.loading.show()

      // hiding in 2s
      this.timer = setTimeout(() => {
        this.$q.loading.hide()
        this.timer = void 0
      }, 2000)
    },
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
    tasklin: require("components/Tasklins/Tasklin.vue").default,
    "list-header": require("components/Shared/ListHeader.vue").default,
  },
  beforeDestroy () {
    if (this.timer !== void 0) {
      clearTimeout(this.timer)
      this.$q.loading.hide()
    }
  }
};
</script>