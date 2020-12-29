<template>
  <q-card style="width: 550px">
    <div class="center">{{ mood }}</div>
    <q-img
      src="/statics/moods/happy.png"
      spinner-color="white"
      style="height: 100px; max-width: 100px"
      @click="mood = 'happy'; setUserMood(mood)"
    />
    <q-img
      src="/statics/moods/fine.png"
      spinner-color="white"
      style="height: 100px; max-width: 100px"
      @click="mood = 'fine'; setUserMood(mood)"
    />
    <q-img
      src="/statics/moods/glum.png"
      spinner-color="white"
      style="height: 100px; max-width: 100px"
      @click="mood = 'glum'; setUserMood(mood)"
    />
  </q-card>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
const moment = require("moment");

export default {
  data() {
    return {
      mood: " ",
    }
  },
  computed: {

  },
  components: {
  },
  methods: {
    ...mapActions("profile", ["setMood"]),
    setUserMood(mood) {
      this.setMood(mood);
    }
  }
};
</script>
