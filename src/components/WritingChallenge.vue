<template>
  <q-page padding>
    <q-dialog v-if="addChallengeTask" v-model="addChallengeTask">
      <challengeModal />
    </q-dialog>

    <div class="q-pa-md text-center">
      <q-btn
        class="q-mr-sm"
        color="light-green"
        label="I Did Something"
        icon="create"
        @click="addChallengeTask = true"
      >
      </q-btn>
    </div>

    <div class="row">
      <div
        class="col-xs-12 col-sm-12 col-md-6 col-lg-4 q-pa-xs"
        :class="!settings.darkMode ? 'bg-accent' : 'bg-dark'"
        style="overflow: auto; max-height: 65vh;"
      >
        <div v-for="n in this.count" :key="n">
          <q-card dense flat square class="my-card q-pa-xs">
            <q-card-section
              :style="{ 'background-color': getCardColor(n - 1) }"
              class="text-black"
            >
              <div class="text-h7">
                {{ getActivity(n - 1) }}
              </div>
              <!-- <div style="position: relative; float: right; color: white; margin-left: 5px; margin-top: -5px"> {{ likes }}</div>
              <div style="position: relative; float: right; color: white; margin-right: -2px; margin-top: -2px" class="fas fa-thumbs-up" @click="increaseLike()"></div> -->
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 q-pa-xs">
        <div v-for="n in this.writing.writingChallenge" :key="n.username">
          <div v-if="getIntensity(getProfileName(n))">
            {{ getProfileName(n) }}
            <q-linear-progress
              rounded
              size="15px"
              :value="getProgress(getProfileName(n))"
              :style="{ color: getUserColor(getProfileName(n)) }"
              :key="update"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
const moment = require("moment");

export default {
  data: () => ({
    update: 0,
    addChallengeTask: false,
    count: 12,
    likes: 0
    //cheer: false
  }),
  components: {
    challengeModal: require("components/Tasks/Modals/addWritingTask.vue")
      .default
  },
  computed: {
    ...mapGetters("writing", ["writing", "writingChallenge"]),
    ...mapGetters("settings", ["settings"]),
    ...mapGetters("profile", ["profile", "profiles", "profileIDs"])
  },
  methods: {
    ...mapActions("writing", ["addWritingTask", "readWritingTasks"]),
    submit(event) {
      console.debug("writing event: ", event);
      this.addWritingTask(event);
      this.update += 1;
      this.count += 1;
    },
    cheer() {
      this.update += 1;
    },
    calculateValues(user) {
      let intensityCount = 0.0;
      if (user) {
        let writing = this.writing.writing;
        if (writing != undefined) {
          Object.keys(writing).forEach(element => {
            if (writing[element].username == user.toLowerCase()) {
              intensityCount += writing[element].intensity;
            }
          });
        }
      }
      return intensityCount / 3;
    },
    getIntensity(user) {
      let intensityCount = 0.0;
      if (user) {
        let writing = this.writing.writingChallenge;
        if (writing != undefined) {
          Object.keys(writing).forEach(element => {
            if (writing[element].username == user.toLowerCase()) {
              intensityCount = writing[element].intensity;
            }
          });
        }
      }
      return intensityCount;
    },
    getActivity(number) {
      this.update;
      return this.getUsername(number);
    },
    getProgress(username) {
      this.update;
      //return this.calculateValues(username);
      return this.getIntensity(username);
    },
    getUserColor(user) {
      let color = "";
      if (user) {
        let profiles = this.profiles;
        if (profiles != undefined) {
          Object.keys(profiles).forEach(element => {
            if (profiles[element].name.toLowerCase() == user.toLowerCase()) {
              color = profiles[element].color;
              if (color !== "") {
                return color;
              }
            }
          });
          return color;
        }
      }
    },
    getCardColor(value) {
      let color = "";
      let writing = this.writing.writing;
      if (writing != undefined) {
        let elementToCheck =
          value === 0
            ? Object.keys(writing).length - 1
            : Object.keys(writing).length - 1 - value;
        if (writing != undefined) {
          Object.keys(writing).forEach(element => {
            if (Object.keys(writing).indexOf(element) == elementToCheck) {
              color = this.getUserColor(writing[element].username);
            }
          });
        }
        if (color == "") {
          color = "rgb(240,240,240)";
        }
        return color;
      }
    },
    getTaskDate(value) {
      let date = "";
      let cheer = "";
      let fitness = this.writing.writing;
      if (fitness != undefined) {
        let elementToCheck =
          value === 0
            ? Object.keys(writing).length - 1
            : Object.keys(writing).length - 1 - value;
        if (writing != undefined) {
          Object.keys(writing).forEach(element => {
            if (Object.keys(writing).indexOf(element) == elementToCheck) {
              if (date == "") date = fitness[element].date;
              if (cheer == "") cheer = fitness[element].cheers;
            }
          });
        }
        return { date, cheer };
      }
    },
    getUsername(value) {
      let activity = "";
      let writing = this.writing.writing;
      if (writing != undefined) {
        let elementToCheck =
          value === 0
            ? Object.keys(writing).length - 1
            : Object.keys(writing).length - 1 - value;
        if (writing != undefined) {
          Object.keys(writing).forEach(element => {
            if (Object.keys(writing).indexOf(element) == elementToCheck) {
              activity = writing[element].username;
              switch (writing[element].type) {
                case "writing":
                  activity += " wrote 250 words!";
                  break;
                case "editing":
                  activity += " did some editing";
                  break;
                case "plotting":
                  activity += " did some brainstorming!";
                  break;
                case "reading":
                  activity += " spent time reading!";
                  break;
                case "query":
                  activity += " sent a query letter!";
                  break;
                case "homework":
                  activity += " did homework! There was writing involved.";
                  break;
                default:
                  activity += " " + writing[element].type;
                  break;
              }
            }
          });
        }

        return activity;
      }
      return activity;
    },
    getProfileName(value) {
      if (value) {
        return value.username;
      }
    },
    increaseLike() {
      this.likes += 1;
    }
  }
};
</script>

<style lang="sass" scoped>
.row > div
  padding: 10px 10px
.row + .row
  margin-top: 1rem
</style>
