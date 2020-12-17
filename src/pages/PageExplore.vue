<template>
  <q-page padding>
    <div class="q-gutter-sm" style="width: 75%;">
    <div class="center">
      <q-btn @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width q-ma-sm" push to="/town" label="Town" color="secondary" />
      <q-btn disable @mouseover="showForest = true" @mouseleave="showForest = false" class="btn-fixed-width q-ma-sm" push to="/start/pick-quasar-flavour" label="???" color="secondary" />
      <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width q-ma-sm" push to="/start/pick-quasar-flavour" label="???" color="secondary" />
      <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width q-ma-sm" push to="/start/pick-quasar-flavour" label="???" color="secondary" />
      <!-- <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width q-ma-sm" push to="/start/pick-quasar-flavour" label="Island" color="secondary" />
      <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width q-ma-sm" push to="/start/pick-quasar-flavour" label="Mountains" color="secondary" /> -->
      <q-btn v-if="darkMode" @mouseover="showMoon = true" @mouseleave="showMoon = false" class="btn-fixed-width q-ma-sm" push to="/wish-sky" label="Look Up" color="secondary" /> 
    </div>

    <div>
      <div class="world-map map-size" style="position: absolute;" :class="!darkMode ? 'world-day' : 'world-night'">   </div> 
      <div v-show="showTown" class="world-map map-town map-size" style="margin-top: 0%;  position: absolute;"></div>
      <div v-show="showForest" class="world-map map-forest map-size" style="margin-top: 0%;  position: absolute;"></div>
      <div v-show="showMoon" class="world-map map-moon map-size" style="margin-top: 0%;  position: absolute;"></div>         
    </div>
    </div>

  </q-page>
</template>

<script>
import { mapGetters} from "vuex";

export default {

  data() {
    return {
      showTown: false,
      showForest: false,
      showMoon: false
    };
  },
  computed: {
    ...mapGetters("settings", ["darkMode"])
  },
}
</script>