<template>
  <q-page padding>
    <div class="q-pa-xs" style="max-width: 400px">
      <q-form @submit.prevent="submitForm" class="q-gutter-md">
        <q-input
          filled
          v-model="changeName"
          label="Your Name"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          v-model="changeUsername"
          label="Username *"
          ref="username"
          lazy-rules
          :rules="[val => val.length >= 1 || 'Please enter your username!', disable => !disableUsername || 'Username in use']"
        />

        <!-- <q-select
          id="userID"
          outlined
          v-model="changePronouns"          
          label="Your Pronouns"
          :options="filterOptions"
          style="width: 50%"
        >
        </q-select> -->

        <p><strong>Current Level: {{ this.profile.level }}</strong></p>

        <!-- <q-input
          filled
          v-model="changeAbout"
          label="A little about you"
          lazy-rules
        /> -->

        <div>
              <q-badge
                :style="{ 'background-color': this.profile.color }"
                text-color="black"
                class="q-mb-sm"
              >
                Your Current Color
              </q-badge>

              <q-color
                :color="changeColor"
                v-model="changeColor"
                no-footer
                no-header
                :palette="[
                '#b15858', '#cf7d95', '#8c5688', '#589fb1', '#5cdcc4', '#7eb158', '#f9f871', '#fa9f53', '#bc987e','#8c8c8c']"
                default-view="palette"
                class="my-picker"
              />
            </div>

        <!-- <q-toggle v-model="togglePrivate" label="My profile is public" /> -->

        <div>
          <q-btn @click="updateUserProfile" label="Save" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

const stringOptions = ["She/Her", "He/Him", "They/Them", "Other/Prefer Not to Say"];


export default {
  data() {
    return {
      disableUsername: false
    };
  },
  computed: {
    ...mapGetters("profile", ["profile", "profiles"]),
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
      }
    },
    changePronouns: {
      get() {
        return this.profile.prnouns;
      },
      set(value) {
        this.updatePronouns(value);
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
    }
  },
  methods: {
    ...mapActions("profile", [
      "updateAbout",
      "updateName",
      "updateUsername",
      "updateProfile",
      "updateColor",
      "togglePrivateValue"
    ]),
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
        signup: this.profile.signup,
        color: this.profile.color,
        admin: this.profile.admin
      };
      console.debug("profile", profile);
      this.updateProfile(profile);
    },
    submitForm() {
    		this.fbUpdateProfile();
    },
     checkUsername() {
      this.disableUsername = false;
  
      let allProfiles = this.profiles;
        if (allProfiles != undefined) {
          Object.keys(allProfiles).forEach(element => {
            if (allProfiles[element].username.toLowerCase() == this.profile.username.toLowerCase() && allProfiles[element].id != this.profile.id) {
              this.disableUsername = true;
              return;
            }
          });
        }
    }
  }
};
</script>
