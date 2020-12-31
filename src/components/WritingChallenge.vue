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

      <!-- <q-btn-dropdown
        class="q-mr-sm"
        color="light-green"
        label="I Did Something"
        dropdown-icon="create">
        <q-list>
          <q-item clickable v-close-popup @click="submit('writing')">
            <q-item-section>
              <q-item-label>Wrote 250 Words</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="submit('editing')">
            <q-item-section>
              <q-item-label>Edited for 20 Minutes</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="submit('plotting')">
            <q-item-section>
              <q-item-label>Plotted for 20 Minutes</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="submit('reading')">
            <q-item-section>
              <q-item-label>Read for 20 Minutes</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="submit('query')">
            <q-item-section>
              <q-item-label>Sent a Query Letter</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="submit('homework')">
            <q-item-section>
              <q-item-label>Did Homework</q-item-label>
            </q-item-section>
          </q-item>
          

        </q-list>
      </q-btn-dropdown> -->
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
              class="text-white"
            >
              <div class="text-h7">
                {{ getActivity(n - 1) }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 q-pa-xs">
        <div v-for="n in this.profileIDs" :key="n">
          <div v-if="getIntensity(getProfileName(n - 1))">
            {{ getProfileName(n - 1) }}
            <q-linear-progress
              rounded
              size="15px"
              :value="getProgress(getProfileName(n - 1))"
              :style="{ color: getUserColor(getProfileName(n - 1)) }"
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
    count: 12
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
      if (this.profiles != undefined && value.toString() != "NaN") {
        return this.profiles[value].name;
      } else {
        return "";
      }
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
