<template>
  <q-page padding>
      <div class="q-pa-xs q-gutter-xs">

    <list-header bgColor="bg-primary">
      <div class="index-header">Global Challenges</div>
    </list-header>

    <q-banner inline-actions rounded class="u-center-text bg-transparent text-primary">      

      <template>
        <q-btn @click="showFitness = !showFitness; showWriting = false" flat icon="fitness_center"/>
        <q-btn @click="showWriting = !showWriting; showFitness = false" flat icon="create" />
      </template>
    </q-banner>
    </div>

    <div v-if="showFitness">
      <fitnessChallenge />
    </div>
    
    <div v-if="showWriting">
      <writingChallenge />
    </div>

    <list-header bgColor="bg-primary">
      <div class="index-header">In the future, you'll be able to create custom and private challenges. For now, you can automatically participate in any of our existing challenge. If you'd like your progress to show on the challenge page, submit a help ticket through the ? icon at the top of the screen. </div>
    </list-header>
    
  </q-page>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
const moment = require('moment') 

export default {
  data: () => ({
    update: 0,
    showFitness: false,
    showWriting: false
  }),
    computed: {
    ...mapGetters("fitness", ["fitness"]),
    ...mapGetters("profile", ["profile", "profiles"])
  },
    components: {
    writingChallenge: require("components/WritingChallenge.vue").default,
    fitnessChallenge: require("components/FitnessChallenge.vue").default,
    "list-header": require("components/Shared/ListHeader.vue").default,
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
            if (fitness[element].username == user) {
              intensityCount += fitness[element].intensity;
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
      return this.calculateValues(username);
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
        let elementToCheck = value === 0 ? Object.keys(fitness).length - 1 : Object.keys(fitness).length - 1 - value;
        if (fitness != undefined) {
          Object.keys(fitness).forEach(element => {
            if (Object.keys(fitness).indexOf(element) == elementToCheck) {
              color = this.getUserColor(fitness[element].username)
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
        return {date, cheer};
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
