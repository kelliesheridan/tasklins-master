<template>
  <q-page padding>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit.prevent="submitForm"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="changeName"
        label="Your Name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="changeUsername"
        label="Username *"
        lazy-rules
      />

       <q-input
        filled
        v-model="changeAbout"
        label="A little about you"
        lazy-rules
      />

      <q-toggle v-model="togglePrivate" label="My profile is public" />

      <div>
        <q-btn @click="updateUserProfile" label="Save" color="primary"/>
      </div>
      
    </q-form>

    </div>

  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
   data () {
    return {
    }
  }, 
  computed: {
  ...mapGetters('profile', ['profile']),
  changeAbout: {
    get () {
      return this.profile.about
    },
    set (value) {
      this.updateAbout(value)
    }
  },
  changeName: {
    get () {
      return this.profile.name
    },
    set (value) {
      this.updateName(value)
    }
  },
  changeUsername: {
    get () {
      return this.profile.username
    },
    set (value) {
      this.updateUsername(value)
    }
  },
  togglePrivate: {
    get () {
      return this.profile.private
    },
    set (value) {
      this.togglePrivateValue(value)
    }
  },
  },
  methods: {
    ...mapActions('profile', ['updateAbout', 'updateName', 'updateUsername', 'updateProfile', 'togglePrivateValue']),
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
                 tasklins: this.profile.tasklins,
                 private: this.profile.private,
                 signup: this.profile.signup,
                 admin: this.profile.admin,
      }
      console.debug("profile", profile)
      this.updateProfile(profile);
    }
		// submitForm() {
		// 		this.fbUpdateProfile();
		// }
   },
}
</script>
