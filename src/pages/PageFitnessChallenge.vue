<template>
  <q-page padding>
    <div class="q-pa-md text-center">
      <q-btn-dropdown
        class="q-mr-sm"
        color="light-green"
        label="I Worked Out"
        dropdown-icon="fitness_center"
      >
        <q-list>
          <q-item clickable v-close-popup @click="submit('weights')">
            <q-item-section>
              <q-item-label>Lifted Weights</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="submit('run')">
            <q-item-section>
              <q-item-label>Went for a Run</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="submit('walk')">
            <q-item-section>
              <q-item-label>Went for a Walk</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="submit('yoga')">
            <q-item-section>
              <q-item-label>Did Some Yoga</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="submit('home')">
            <q-item-section>
              <q-item-label>Home Workout</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="submit('other')">
            <q-item-section>
              <q-item-label>Did some other healthy thing</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-pa-xs bg-grey-4">
        <q-card dense flat square class="my-card q-pa-xs">
          <q-card-section
            :style="{ 'background-color': getCardColor(0) }"
            class="text-white"
          >
            <div class="text-h7">
              {{ this.getActivity(0) }}

              <q-card-actions align="right">
                <!-- <q-btn dense @click="submit('cheer')" flat>Cheer!</q-btn> -->
              </q-card-actions>
            </div>
          </q-card-section>
        </q-card>

        <q-card dense flat square class="my-card q-pa-xs">
          <q-card-section
            :style="{ 'background-color': getCardColor(1) }"
            class="text-white"
          >
            <div class="text-h7">
              {{ this.getActivity(1) }}

              <q-card-actions align="right">
                <!-- <q-btn @click="submit('cheer')" dense flat>Cheer!</q-btn> -->
              </q-card-actions>
            </div>
          </q-card-section>
        </q-card>

        <q-card dense flat square class="my-card q-pa-xs">
          <q-card-section
            :style="{ 'background-color': getCardColor(2) }"
            class="text-white"
          >
            <div class="text-h7">
              {{ this.getActivity(2) }}

              <q-card-actions align="right">
                <!-- <q-btn dense @click="submit('cheer')" flat>Cheer!</q-btn> -->
              </q-card-actions>
            </div>
          </q-card-section>
        </q-card>

        <q-card dense flat square class="my-card q-pa-xs">
          <q-card-section
            :style="{ 'background-color': getCardColor(3) }"
            class="text-white"
          >
            <div class="text-h7">
              {{ this.getActivity(3) }}

              <q-card-actions align="right">
                <!-- <q-btn dense @click="submit('cheer')" flat>Cheer!</q-btn> -->
              </q-card-actions>
            </div>
          </q-card-section>
        </q-card>

        <q-card dense flat square class="my-card q-pa-xs">
          <q-card-section
            :style="{ 'background-color': getCardColor(4) }"
            class="text-white"
          >
            <div class="text-h7">
              {{ this.getActivity(4) }}

              <q-card-actions align="right">
                <!-- <q-btn dense @click="submit('cheer')" flat>Cheer!</q-btn> -->
              </q-card-actions>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 q-pa-xs">
        <div class="q-pa-md">
          Kellie
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('kellie')"
            :style="{ color: getUserColor('kellie') }"
            class="q-mt-sm"
            :key="update"
          />
        </div>

        <div class="q-pa-md">
          Matt
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('matt')"
            :style="{ color: getUserColor('matt') }"
            class="q-mt-sm"
            :key="update"
          />
        </div>

        <div class="q-pa-md">
          Kaitlyn
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('kaitlyn')"
            :style="{ color: getUserColor('kaitlyn') }"
            class="q-mt-sm"
            :key="update"
          />
        </div>

        <div class="q-pa-md">
          Adam
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('adam')"
            :style="{ color: getUserColor('adam') }"
            class="q-mt-sm"
            :key="update"
          />
        </div>

        <div class="q-pa-md">
          Kylie
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('kylie ')"
            :style="{ color: getUserColor('kylie ') }"
            class="q-mt-sm"
            :key="update"
          />
        </div>

        <div class="q-pa-md">
          Francis
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('francis')"
            :style="{ color: getUserColor('francis') }"
            class="q-mt-sm"
            :key="update"
          />
        </div>

        <div class="q-pa-md">
          Gloria
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('Glorgatron')"
            :style="{ color: getUserColor('Glorgatron') }"
            class="q-mt-sm"
            :key="update"
          />
        </div>

        <div class="q-pa-md">
          Paul
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('paul')"
            :style="{ color: getUserColor('paul') }"
            class="q-mt-sm"
            :key="update"
          />
        </div>

        <div class="q-pa-md">
          Sara
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('sara')"
            :style="{ color: getUserColor('sara') }"
            class="q-mt-sm"
            :key="update"
          />
        </div>

        <div class="q-pa-md">
          Perry
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('perry')"
            :style="{ color: getUserColor('perry') }"
            class="q-mt-sm"
            :key="update"
          />
        </div>

         <div class="q-pa-md">
          Monica
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('MonicaN')"
            :style="{ color: getUserColor('MonicaN') }"
            class="q-mt-sm"
            :key="update"
          />
        </div>

        <div class="q-pa-md">
          Ryan
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('ryan')"
            :style="{ color: getUserColor('ryan') }"
            class="q-mt-sm"
            :key="update"
          />
        </div>
        
        
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  data: () => ({
    update: 0
  }),
  computed: {
    ...mapGetters("fitness", ["fitness"]),
    ...mapGetters("profile", ["profile"])
  },
  methods: {
    ...mapActions("fitness", ["addFitnessTask", "readFitnessTasks"]),
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
    getProgress(username) {
      this.update;
      return this.calculateValues(username);
    },
    getUserColor(user) {
      let color = "";
      if (user) {
        let fitness = this.fitness.fitness;
        if (fitness != undefined) {
          Object.keys(fitness).forEach(element => {
            if (fitness[element].username == user) {
              if (color === "") {
                color = fitness[element].color;
              }
            }
          });
        }
      }
      if (color === "") {
        color = "rgb(240,240,240)";
      }
      return color;
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
              if (color == "") color = fitness[element].color;
            }
          });
        }
        if (color == "") {
          color = "rgb(240,240,240)";
        }
        return color;
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
</style>
