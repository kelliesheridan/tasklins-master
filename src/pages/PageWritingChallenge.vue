<template>
  <q-page padding>
    <div class="q-pa-md text-center">
      <q-btn-dropdown
        class="q-mr-sm"
        color="light-green"
        label="I Did Something"
        dropdown-icon="create"
      >
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
      </q-btn-dropdown>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 bg-grey-4" style="overflow: auto; height: 550px">
        <q-card dense flat square class="my-card q-pa-xs">
          <q-card-section
            :style="{ 'background-color': getCardColor(0) }"
            class="text-white"
          >
            <div class="text-h7">
              {{ this.getActivity(0) }}

              <q-card-actions align="right">
                <!-- <q-btn @click="submit('cheer')" dense flat>Cheer!</q-btn> -->
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
                <!-- <q-btn @click="submit('cheer')" dense flat>Cheer!</q-btn> -->
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
                <!-- <q-btn @click="submit('cheer')" dense flat>Cheer!</q-btn> -->
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
                <!-- <q-btn @click="submit('cheer')" dense flat>Cheer!</q-btn> -->
              </q-card-actions>
            </div>
          </q-card-section>
        </q-card>

        <q-card dense flat square class="my-card q-pa-xs">
          <q-card-section
            :style="{ 'background-color': getCardColor(5) }"
            class="text-white"
          >
            <div class="text-h7">
              {{ this.getActivity(5) }}

              <q-card-actions align="right">
                <!-- <q-btn @click="submit('cheer')" dense flat>Cheer!</q-btn> -->
              </q-card-actions>
            </div>
          </q-card-section>
        </q-card>              

        <q-card dense flat square class="my-card q-pa-xs">
          <q-card-section
            :style="{ 'background-color': getCardColor(6) }"
            class="text-white"
          >
            <div class="text-h7">
              {{ this.getActivity(6) }}

              <q-card-actions align="right">
                <!-- <q-btn @click="submit('cheer')" dense flat>Cheer!</q-btn> -->
              </q-card-actions>
            </div>
          </q-card-section>
        </q-card>  
      </div>

      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">

        <div class="q-pa-md">
          Emma
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('emma')"
            :style="{ color: getUserColor('emma') }"
            class="q-mt-sm"
            :key="update"
          />
        </div>
        
        <div class="q-pa-md">
          Erin
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('erin')"
            :style="{ color: getUserColor('erin') }"
            class="q-mt-sm"
            :key="update"
          />
        </div>

        <div class="q-pa-md">
          Helen
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('helen')"
            :style="{ color: getUserColor('helen') }"
            class="q-mt-sm"
            :key="update"
          />
        </div>

        
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
          Kyra
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('kyra')"
            :style="{ color: getUserColor('kyra') }"
            class="q-mt-sm"
            :key="update"
          />
        </div>

        <div class="q-pa-md">
          Meghan
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('meghan')"
            :style="{ color: getUserColor('meghan') }"
            class="q-mt-sm"
            :key="update"
          />
        </div>



        <!-- <div class="q-pa-md">
          Dez
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('desirae ')"
            :style="{ color: getUserColor('desirae ') }"
            class="q-mt-sm"
            :key="update"
          />
        </div> -->

        <!-- <div class="q-pa-md">
          Rachel
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('rachel')"
            :style="{ color: getUserColor('rachel') }"
            class="q-mt-sm"
            :key="update"
          />
        </div> -->

        <!-- <div class="q-pa-md">
          Calyn
          <q-linear-progress
            rounded
            size="15px"
            :value="this.getProgress('calyn')"
            :style="{ color: getUserColor('calyn') }"
            class="q-mt-sm"
            :key="update"
          />
        </div> -->
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
const moment = require('moment') 

export default {
  data: () => ({
    update: 0
  }),
  computed: {
    ...mapGetters("writing", ["writing"]),
    ...mapGetters("profile", ["profile", "profiles"]),
  },
  methods: {
    ...mapActions("writing", ["addWritingTask", "readWritingTasks"]),
    submit(event) {
      console.debug("writing event: ", event);
      this.addWritingTask(event);
      this.update += 1;
    },
    calculateValues(user) {
      let intensityCount = 0.0;
      if (user) {
        let writing = this.writing.writing;
        if (writing != undefined) {
          Object.keys(writing).forEach(element => {
            if (writing[element].username == user) {
              intensityCount += writing[element].intensity;
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
             color = this.getUserColor(writing[element].username)
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
