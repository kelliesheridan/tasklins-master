<template>
  <q-card style="width: 550px">
    <div class="center">{{ mood }}</div>
    <q-img
      src="/statics/moods/happy.png"
      spinner-color="white"
      style="height: 100px; max-width: 100px"
      @click="mood = 'happy'"
    />
    <q-img
      src="/statics/moods/fine.png"
      spinner-color="white"
      style="height: 100px; max-width: 100px"
      @click="mood = 'fine'"
    />
    <q-img
      src="/statics/moods/glum.png"
      spinner-color="white"
      style="height: 100px; max-width: 100px"
      @click="mood = 'glum'"
    />
  </q-card>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

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
  }
};
</script>
