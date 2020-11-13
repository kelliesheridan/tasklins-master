<template>
  <q-page padding>
    <div class="q-gutter-sm" style="width: 75%;">
    <div class="center">
      <q-btn @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width q-ma-sm" push to="/town" label="Town" color="secondary" />
      <q-btn disable @mouseover="showForest = true" @mouseleave="showForest = false" class="btn-fixed-width q-ma-sm" push to="/start/pick-quasar-flavour" label="Forest" color="secondary" />
      <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width q-ma-sm" push to="/start/pick-quasar-flavour" label="Mountain" color="secondary" />
      <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width q-ma-sm" push to="/start/pick-quasar-flavour" label="City" color="secondary" />
      <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width q-ma-sm" push to="/start/pick-quasar-flavour" label="Island" color="secondary" />
      <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width q-ma-sm" push to="/start/pick-quasar-flavour" label="Mountains" color="secondary" />
      <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width q-ma-sm" push to="/start/pick-quasar-flavour" label="Floating" color="secondary" />
    </div>

    <div>
      <div class="world-map" style="width: 90%; height: 90%; position: absolute;" :class="!darkMode ? 'world-day' : 'world-night'">   </div> 
      <div v-show="showTown" class="world-map map-town" style="width: 90%; height: 90%;  margin-top: 0%;  position: absolute;"></div>
      <div v-show="showForest" class="world-map map-forest" style="width: 90%; height: 90%;  margin-top: 0%;  position: absolute;"></div>      
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
      showForest: false
    };
  },
  computed: {
    ...mapGetters("settings", ["darkMode"])
  },
}
</script>