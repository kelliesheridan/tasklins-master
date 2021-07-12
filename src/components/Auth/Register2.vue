<template>
  <q-card bordered class="my-card card-register panel-details">
    <q-card-section>
      <div class="text-h5 text-center">Welcome to Tasklins</div>
    </q-card-section>

    <q-form @submit.prevent="submitForm">
      <div class="row q-mb-xs">
        <q-banner dense class="panel-details col">
          <div class="text-h6">
            We're so excited to have you as part of our community. Before we get
            started, there are a few details we need to get in order.
          </div>
        </q-banner>
      </div>

      <div class="row auth-section">
        <q-input
          stack-label
          class="col auth-input"
          bg-color="green-2"
          v-model="changeName"
          ref="name"
          placeholder="Your Name"
          lazy-rules
          :rules="[val => val.length >= 1 || 'Please enter your name!']"
        />

        <q-input
          id="username"
          stack-label
          class="col auth-input"
          bg-color="green-2"
          v-model="changeUsername"
          ref="username"
          placeholder="Choose a Username"
          lazy-rules
          :rules="[val => val.length >= 1 || 'Please enter your username!', disable => !disableUsername || 'Username in use']"
        />
      </div>

      <div class="row auth-section">
        <q-select
          id="userPronoun"
          outlined
          v-model="changePronouns"
          bg-color="green-2"
          label="Your Pronouns"
          class="col auth-input"
          :options="filterOptions"
          style="width: 50%"
        >
        </q-select>

        <div class="col q-pa-xs">
          <q-badge
            text-color="white"
            class="q-mb-sm"
            :style="{ 'background-color': this.profile.color }"
          >
            <div class="text-h5 text-center" style="color: white">
              Pick a color:
            </div>
          </q-badge>

          <q-color
            :color="changeColor"
            v-model="changeColor"
            no-header
            no-footer
            default-view="palette"
            :palette="[
              '#b15858',
              '#cf7d95',
              '#8c5688',
              '#589fb1',
              '#5cdcc4',
              '#7eb158',
              '#f9f871',
              '#fa9f53',
              '#bc987e',
              '#8c8c8c'
            ]"
            class="my-picker"
          />
        </div>
      </div>

      <div class="row q-mb-md">
        <q-space />
        <q-btn
          color="green-2"
          @click="updateUserProfile"
          text-color="primary"
          class="auth-register-btn"
          label="Register"
          :disable="
            this.profile.name == '' ||
            disableUsername || this.profile.color == undefined"
          type="submit"
        />
      </div>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

const stringOptions = ["She/Her", "He/Him", "They/Them", "Other/Prefer Not to Say"];

export default {
  data() {
    return {
      formData: {
        email: "",
        email2: "",
        password: "",
        password2: "",
        name: "",
        username: "",
        password: "",
        pronouns: "",
        color: ""
      },
      model: null,
      filterOptions: stringOptions,
      hex: "#FF00FF",
      disableUsername: false
    };
  },
  computed: {
    ...mapGetters("profile", ["profile", "profiles"]),
    ...mapGetters("tasklins", ["tasklin"]),
    ...mapGetters("settings", ["fbReadSettings"]),
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
        this.checkUsername();
      },
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
        return this.profile.color;
      },
      set(value) {
        this.updateColor(value);
        this.hex = value;
      }
    },
    changePronouns: {
      get() {
        return this.profile.pronouns;
      },
      set(value) {
        this.updatePronouns(value);
      }
    }
  },
  methods: {
    ...mapActions("profile", [
      "fbReadProfile",
      "updateAbout",
      "updateName",
      "updateUsername",
      "updatePronouns",
      "updateProfile",
      "togglePrivateValue",
      "updateColor"
    ]),
    ...mapActions("tasklins", ["addTasklin"]),
    updateUserProfile() {
      let profile = {
        name: this.profile.name,
        username: this.profile.username,
        id: this.profile.id,
        about: this.profile.about,
        avatar: this.profile.avatar,
        memberType: 1,
        lin: this.profile.lin,
        xp: this.profile.xp,
        level: this.profile.level,
        friends: this.profile.friends,
        inventory: this.profile.inventory,
        private: this.profile.private,
        signup: false,
        admin: this.profile.admin,
        color: this.profile.color,
        pronouns: this.profile.pronouns == undefined ? "" : this.profile.pronouns,
        maxLevel: this.profile.maxLevel
      };

      this.updateProfile(profile);
      this.addNewTasklin();
      //this.$router.push("/initial");
    },
    
    addNewTasklin() {
      // static fields
      const bodyShapeArray = ["Ghost", "Round", "Squat"]
      const bodyShape2Array = ["Tall", "Short"]
      const bodyTextureArray = ["Charred", "Crumpled", "Stitched"]
      const eyeArray = ["1", "2", "3", "4", "5"];
      const mouthArray = ["1", "2", "3", "4", "5"];
      const noseArray =["1", "2", "3", "4"];
      const patternArray =["1", "2", "3", "4"];
      const tongueArray = ["1", "2"]
      const colorArray = ["blue", "brown", "cyan", "green", "grey", "orange", "pink", "purple", "red", "yellow"]
      const tailEyebrowsArray = ["1", "2", "3"];
      const earsHornsArray = ["1", "2", "3"];
      let tasklin = {
        name: "",
        creation_date: Date.now(),
        type: "Monster",
        project: "Tasks",
        xp: 0,
        level: 1,
        maxLevel: 1,
        color: this.profile.color,
        color2: colorArray[Math.floor(Math.random() * colorArray.length)],
        color3: colorArray[Math.floor(Math.random() * colorArray.length)],
        bodyShape: bodyShapeArray[Math.floor(Math.random() * bodyShapeArray.length)],
        bodyTexture: bodyTextureArray[Math.floor(Math.random() * bodyTextureArray.length)],
        eyeColor: this.profile.color,
        eyeType: "eyes" + eyeArray[Math.floor(Math.random() * eyeArray.length)],
        nose: "nose" + noseArray[Math.floor(Math.random() * noseArray.length)],
        mouth: "mouth" + mouthArray[Math.floor(Math.random() * mouthArray.length)],
        pattern1: "pattern" + patternArray[Math.floor(Math.random() * patternArray.length)],
        eyebrowsOrTail: "tailEyebrows" + tailEyebrowsArray[Math.floor(Math.random() * tailEyebrowsArray.length)],
        earsOrHorns: "earsHorns" + earsHornsArray[Math.floor(Math.random() * earsHornsArray.length)],
        bodyShape2: bodyShape2Array[Math.floor(Math.random() * bodyShape2Array.length)],
        pattern2: "pattern" + patternArray[Math.floor(Math.random() * patternArray.length)],
        hatched: false,
        tongue: ""
      };

      this.addTasklin(tasklin);
    },
    ...mapActions("auth", ["registerUser"]),
    isValidEmailAddress(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    submitForm() {
      //this.$router.push("/initial");
    },
    checkUsername() {
      this.disableUsername = false;
  
      let allProfiles = this.profiles;
        if (allProfiles != undefined) {
          Object.keys(allProfiles).forEach(element => {
            if (allProfiles[element].username == this.profile.username) {
              this.disableUsername = true;
              return;
            }
          });
        }
    }
  }
};
// filters: {
// 	titleCase(value) {
// 		return value.charAt(0).toUpperCase() + value.slice(1)
// 	}
// }
</script>
