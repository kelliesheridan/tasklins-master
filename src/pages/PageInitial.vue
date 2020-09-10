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

    <q-dialog
      v-model="showNewUser2"
      persistent
      transition-show="scale"
      transition-hide="scale">
    
    <div class="col text-center" v-if="showNewUser4">
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

      <div v-if="color == 'blue'">
        <div id="cf2" class="shadow">
          <img
            v-if="hatched === false"
            class="responsive egg2 animate__animated animate__bounce"
            src="statics/eggs/blue3.png"
          />
          <img
            v-if="hatched === true"
            class="responsive egg2"
            src="statics/placeholder/blue3a.png"
          />
        </div>
      </div>

      <div v-if="color == 'purple'">
        <div id="cf2" class="shadow">
          <img
            v-if="hatched === false"
            class="responsive egg2"
            src="statics/eggs/purple3.png"
          />
          <img
            v-if="hatched === true"
            class="responsive egg2"
            src="statics/placeholder/purple3a.png"
          />
        </div>
      </div>

      <div v-if="color === 'green'">
        <div id="cf2" class="shadow">
          <img
            v-if="hatched === false"
            class="responsive egg2"
            src="statics/eggs/green3.png"
          />
          <img
            v-if="hatched === true"
            class="responsive egg2"
            src="statics/placeholder/green3a.png"
          />
        </div>
      </div>

      <div v-if="color == 'pink'">
        <div id="cf2" class="shadow">
          <img
            v-if="hatched === false"
            class="responsive egg2"
            src="statics/eggs/pink3.png"
          />
          <img
            v-if="hatched === true"
            class="responsive egg2"
            src="statics/placeholder/pink3a.png"
          />
        </div>
      </div>

      <div v-else></div>

      <div
        class="initial-box col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-xs"
        style="overflow: auto; height: 90%">
        <tasks-initial
          v-if="Object.keys(tasksTodo).length"
          :tasksTodo="tasksTodo"
        />
      </div>

      <div v-if="newTasks >= 5 && hatched != true">
        <q-btn color="secondary" @click="hatched = true" glossy label="Hatch" />
      </div>

      <div v-if="newTasks <= 4">
        <q-btn
          color="secondary"
          @click="
            showAddTask = true;
            newTasks++;
          "
          glossy
          icon="add"/>
      </div>

      <div
        class="q-pa-sm thinger"
        v-if="hatched === true"
        style="max-width: 300px"
      >
        <form class="q-gutter-md">
          <p>Species: Monster</p>
          <q-input
            ref="tasklinName"
            filled
            v-model="tasklinName"
            label="Name Your Tasklin"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type something']"
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
      showNewUser3: false,
      showNewUser4: false,
      showAddTask: false,
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
    ...mapGetters("tasks", ["tasksTodo", "tasksSorted", "projectsFiltered"]),
    changeAbout: {
      get() {
        return this.profile.about;
      },
      set(value) {
        this.updateAbout(value);
      }
    },
    changeName: {
      get() {
        return this.profile.name;
      },
      set(value) {
        this.updateName(value);
      }
    },
    changeUsername: {
      get() {
        return this.profile.username;
      },
      set(value) {
        this.updateUsername(value);
      }
    },
    togglePrivate: {
      get() {
        return this.profile.private;
      },
      set(value) {
        this.togglePrivateValue(value);
      }
    },
    changeColor: {
      get() {
        return this.tasklin.color;
      },
      set(value) {
        this.updateColor(value);
        this.hex = value;
      }
    }
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
    ...mapActions("tasklins", ["addTasklin", "updateTasklin"]),
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

      let tasklin = {
        name: this.tasklinName,
        creation_date: Date.now(),
        type: "Creature",
        project: "Tasks",
        xp: 0,
        level: 1,
        color1: this.color,
        color2: this.color2,
        color3: this.color3,
        bodyShape: this.bodyShape,
        bodyTexture: this.bodyTexture,
        eyeColor: this.color1,
        eyeType: this.eyeType,
        nose: this.nose,
        mouth: this.mouth,
        pattern1: this.pattern1,
        eyebrowsOrTail: "",
        earsOrHorns: "",
        bodyShape2: "",
        pattern2: ""
      };

      this.addTasklin(tasklin);
      this.$router.push("/todo");
    }
  },
  components: {
    "add-task": require("components/Tasks/Modals/addTask.vue").default,
    "tasks-initial": require("components/Tasks/TasksInitial.vue").default
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
.thinger {
  text-align: center;
  height: auto;
  margin: auto;
  display: inline-block;
}
</style>
