<template>
  <q-page>
    <div class="q-pa-md communityMain row">
      <div class="col-4">

      </div>
      <div class="col-4">
        <div>
          <h5></h5>
        </div>
        <div>
          <q-card dense square class="my-card q-pa-xs">
            <q-card-section class="row">
              <q-avatar rounded size="55px">
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
              <div class="text-h7">
                <q-input standout="bg-secondary text-white" class="shareUpdate-form" v-model="text" label="Share Your Journey" />
              </div>
              <div>
                <q-btn
                  padding="xs lg"
                  class="shareUpdate-btn"
                  color="primary"
                  icon="send"
                />
              </div>
            </q-card-section>
          </q-card>
        </div>
        <br>

        <div>
          <q-card dense square bg-secondary class="my-card q-m-md">
            <q-card-section class="text-black row">
              <q-avatar rounded size="55px">
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
                <div class="text-h7 q-pa-xs">
                  <p>Name - @Username</p>
                  <p>12:03pm</p>
                </div>                
              </q-card-section>
              <q-card-section>
                <div>Update here</div>
              </q-card-section>
          </q-card>
        </div>
        
      </div>
      <div class="col-4">

      </div>           
      
    </div>

    <div>

    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
    };
  },
   computed: {
    ...mapGetters("planuary", ["planuary", "random16"]),
    ...mapGetters("community", ["community"]),
    ...mapGetters("writing", ["writing", "writingChallenge"]),
    ...mapGetters("profile", ["profile"]),
    ...mapGetters("settings", ["settings"]),
    ...mapGetters("profile", ["profile", "profiles", "profileIDs"])
  },
  methods: {
    ...mapActions("writing", ["addWritingTask", "readWritingTasks"]),

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
}
</script>
