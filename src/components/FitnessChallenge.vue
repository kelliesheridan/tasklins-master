<template>
  <q-page padding>

    <q-dialog v-if="addChallengeTask" v-model="addChallengeTask">
      <challengeModal />
    </q-dialog>

    <div class="q-pa-xs q-gutter-xs">
      <div class="q-pa-xs q-gutter-xs fitness row text-center">
        <div class="col-12">
          <q-btn
            class="q-mr-sm"
            color="light-green"
            label="I Did Something"
            icon="create"
            @click="addChallengeTask = true"
          >
          </q-btn>
        </div>
      </div>

      <div class="row">
        <div
          class="col-xs-12 col-sm-12 col-md-6 col-lg-4 q-pa-xs"
          :class="!settings.darkMode ? 'bg-accent' : 'bg-dark'"
          style="overflow: auto; height: 570px"
        >
          <div v-for="n in 9" :key="n">
            <q-card dense flat square class="my-card q-pa-xs">
              <q-card-section
                :style="{ 'background-color': getCardColor(n - 1) }"
                class="text-black"
              >
                <div class="text-h7">
                  {{ getActivity(n - 1) }}
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 q-pa-xs">
          <div v-for="n in this.fitness.fitnessChallenge" :key="n">
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
  }),
    components: {
    challengeModal: require("components/Tasks/Modals/addFitnessTask.vue")
      .default
  },
  computed: {
    ...mapGetters("fitness", ["fitness", "fitnessChallenge"]),
    ...mapGetters("settings", ["settings"]),
    ...mapGetters("profile", ["profile", "profiles", "profileIDs"])
  },
  methods: {
    ...mapActions("fitness", ["addFitnessTask", "readFitnessTasks", "cheer"]),
    submit(event) {
      console.debug("fitness event: ", event);
      this.addFitnessTask(event);
      this.update += 1;
    },
    calculateValues(user) {
      let intensityCount = 0.0;
      if (user) {
        let fitness = this.fitness.fitness;
        if (fitness != undefined) {
          Object.keys(fitness).forEach(element => {
            if (fitness[element].username == user.toLowerCase()) {
              intensityCount += fitness[element].intensity;
            }
          });
        }
      }
      return intensityCount;
    },
    getIntensity(user) {
      let intensityCount = 0.0;
      if (user) {
        let fitness = this.fitness.fitnessChallenge;
        if (fitness != undefined) {
          Object.keys(fitness).forEach(element => {
            if (fitness[element].username == user.toLowerCase()) {
              intensityCount = fitness[element].intensity;
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
    getCheers(number) {
      this.update;
      return this.getCheerNumber(number);
    },
    increaseCheerLevel(number) {
      this.update;
      let args = this.getTaskDate(number);
      if (args != undefined) this.cheer(args);
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
      let fitness = this.fitness.fitness;
      if (fitness != undefined) {
        let elementToCheck =
          value === 0
            ? Object.keys(fitness).length - 1
            : Object.keys(fitness).length - 1 - value;
        if (fitness != undefined) {
          Object.keys(fitness).forEach(element => {
            if (Object.keys(fitness).indexOf(element) == elementToCheck) {
              color = this.getUserColor(
                fitness[element].username.toLowerCase()
              );
            }
          });
        }
        if (color == "") {
          color = "rgb(0,0,240)";
        }
        return color;
      }
    },
    getTaskDate(value) {
      let date = "";
      let cheer = "";
      let fitness = this.fitness.fitness;
      if (fitness != undefined) {
        let elementToCheck =
          value === 0
            ? Object.keys(fitness).length - 1
            : Object.keys(fitness).length - 1 - value;
        if (fitness != undefined) {
          Object.keys(fitness).forEach(element => {
            if (Object.keys(fitness).indexOf(element) == elementToCheck) {
              if (date == "") date = fitness[element].date;
              if (cheer == "") cheer = fitness[element].cheers;
            }
          });
        }
        return { date, cheer };
      }
    },
    getCheerNumber(value) {
      let cheer = "";
      let fitness = this.fitness.fitness;
      if (fitness != undefined) {
        let elementToCheck =
          value === 0
            ? Object.keys(fitness).length - 1
            : Object.keys(fitness).length - 1 - value;
        if (fitness != undefined) {
          Object.keys(fitness).forEach(element => {
            if (Object.keys(fitness).indexOf(element) == elementToCheck) {
              if (cheer == "") cheer = fitness[element].cheers;
            }
          });
        }
        return cheer;
      }
    },
    getUsername(value) {
      let activity = "";
      let fitness = this.fitness.fitness;
      if (fitness != undefined) {
        let elementToCheck =
          value === 0
            ? Object.keys(fitness).length - 1
            : Object.keys(fitness).length - 1 - value;
        if (fitness != undefined) {
          Object.keys(fitness).forEach(element => {
            if (Object.keys(fitness).indexOf(element) == elementToCheck) {
              activity = fitness[element].username;
              switch (fitness[element].type) {
                case "run":
                  activity += " went for a run!";
                  break;
                case "walk":
                  activity += " went for a walk!";
                  break;
                case "yoga":
                  activity += " did some yoga!";
                  break;
                case "weights":
                  activity += " lifted heavy things!";
                  break;
                case "home":
                  activity += " worked out at home!";
                  break;
                case "sports":
                  activity += " played a sport! Weird.";
                  break;
                case "other":
                  activity +=
                    " did something else? It was probably a healthy thing!";
                  break;
                default:
                  activity += " " + fitness[element].type;
                  break;
                // case "cheer":
                //   activity += " cheered for someone! Who? We'll figure that out later."
                //   break;
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
    }
  }
};
</script>

<style lang="sass" scoped>
.row > div
  padding: 10px 10px
.row + .row
  margin-top: 1rem

  h4
    margin-bottom: 5px
    padding: 0
</style>
