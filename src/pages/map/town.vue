<template>
  <q-page padding>
    <div class="q-ma-lg">
    <div class="center">
      <q-btn @mouseover="showPiper = true" @mouseleave="showPiper = false" class="btn-fixed-width q-ma-sm" push to="/piper-store" label="Piper's Place" color="secondary" />
      <q-btn @mouseover="showBlacksmith = true" @mouseleave="showBlacksmith = false" class="btn-fixed-width q-ma-sm" push to="/town-blacksmith" label="The Blacksmith" color="secondary" />
      <q-btn class="btn-fixed-width q-ma-sm" push to="/explore" label="<--" color="secondary" />
     <!--  <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width q-ma-sm" push to="/start/pick-quasar-flavour" label="Island" color="secondary" />
      <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width q-ma-sm" push to="/start/pick-quasar-flavour" label="Mountains" color="secondary" />
      <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width q-ma-sm" push to="/start/pick-quasar-flavour" label="Floating" color="secondary" /> -->
    </div>

      <div v-show="showPiper" class="map-town town-map town-piper map-size" style="margin-top: 0%;  position: absolute;"></div>
      <div v-show="showBlacksmith" class="map-town town-map town-blacksmith map-size" style="margin-top: 0%;  position: absolute;"></div>
      <div class="town-map" :class="!darkMode ? 'town-map-day' : 'town-map-night'"></div> 
      
    </div>
   </q-page>
</template>

<script >
import { mapGetters} from "vuex";

export default {
    data() {
    return {
      showPiper: false,
      showBlacksmith: false,
    };
  },
  computed: {
    ...mapGetters("settings", ["darkMode"])
  }
}
</script>

<style lang="scss">
.town-map {
    width: 80vw;
    height: 80vh;
    background-repeat: no-repeat;
    background-size: contain;
  }

.town-map-day {
    background-image: url("/statics/backgrounds/town-day.jpg");    
    }
  
.town-map-night {
    background-image: url("/statics/backgrounds/town-night.jpg");  
   }
</style>