<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <h5>Community</h5>
    </div>
    <div v-for="n in 16" :key="n">
      <q-card dense flat square class="my-card q-pa-xs">
        <q-card-section
          :style="{ 'background-color': getCardColor(n - 1) }"
          class="text-white"
        >
          <div class="text-h7">
            {{ getWish(n - 1) }}
          </div>
        </q-card-section>
      </q-card>
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
    ...mapGetters("profile", ["profile"]),
  },
    methods: {
    getWish(number) {
      return this.random16[number];
    },
  }
}
</script>
