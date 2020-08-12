<template>
  <q-page padding>
    <div class="q-pa-md" style="max-width: 400px">
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
          lazy-rules
        />

        <!-- <q-input
          filled
          v-model="changeAbout"
          label="A little about you"
          lazy-rules
        /> -->

        <div class="q-pa-md">
              <q-badge
                :style="{ 'background-color': this.profile.color }"
                text-color="black"
                class="q-mb-sm"
              >
                {{ this.profile.color }}
              </q-badge>

              <q-color
                :color="changeColor"
                v-model="changeColor"
                no-footer
                no-header
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

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("profile", ["profile"]),
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
    }
  }
};
</script>
