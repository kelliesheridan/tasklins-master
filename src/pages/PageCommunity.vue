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
    Î
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
    ...mapGetters("planuary", ["planuary"]),
    ...mapGetters("community", ["community"]),
    ...mapGetters("profile", ["profile"]),
    // showProjectsOnPage: {
    //   get() {
    //     return this.settings.showProjectsOnPage;
    //   },
    //   set(value) {
    //     this.setShowProjectsOnPage(value);
    //   }
    // },
    // hideCompletedTasks: {
    //   get() {
    //     return this.settings.hideCompletedTasks;
    //   },
    //   set(value) {
    //     this.setHideCompletedTasks(value);
    //   }
    // },
    // darkMode: {
    //   get() {
    //     return this.settings.darkMode;
    //   },
    //   set(value) {
    //     this.setDarkMode(value);
    //   }
    // }
  },
    methods: {
    getWish(number) {
      
      Object.entries(this.planuary).forEach(element => {
       console.debug(element);
      })
    },
  }
}
</script>
