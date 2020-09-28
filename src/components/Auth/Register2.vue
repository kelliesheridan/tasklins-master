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
          id="userID"
          stack-label
          class="col auth-input"
          bg-color="green-2"
          v-model="changeUsername"
          ref="username"
          placeholder="Choose a Username"
          lazy-rules
          :rules="[val => val.length >= 1 || 'Please enter your username!']"
        />
      </div>

      <div class="row auth-section">
        <q-select
          id="userID"
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
            formData.email2 != formData.email &&
            formData.password2 != formData.email
          "
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
      hex: "#FF00FF"
    };
  },
  computed: {
    ...mapGetters("profile", ["profile"]),
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
        pronouns: this.profile.pronouns == undefined ? "" : this.profile.pronouns
      };

      this.updateProfile(profile);
      this.addNewTasklin();
      this.$router.push("/initial");
    },
    
    addNewTasklin() {
      let tasklin = {
        name: "",
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
        eyeType: "eyes1",
        nose: "",
        mouth: "mouth1",
        pattern1: "",
        eyebrowsOrTail: "",
        earsOrHorns: "",
        bodyShape2: "",
        pattern2: ""
      };

      this.addTasklin(tasklin);
    },
    ...mapActions("auth", ["registerUser"]),
    isValidEmailAddress(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    submitForm() {
      this.$router.push("/initial");
    }
  }
};
// filters: {
// 	titleCase(value) {
// 		return value.charAt(0).toUpperCase() + value.slice(1)
// 	}
// }
</script>
