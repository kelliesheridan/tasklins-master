<template>
  <q-page padding>
    <div class="q-ma-lg">
      <div class="town-map" :class="!darkMode ? 'town-map-day' : 'town-map-night'"></div> 
      <!-- <div v-show="showTown" class="world-map map-town map-size" style="margin-top: 0%;  position: absolute;"></div> -->
    </div>
   </q-page>
</template>

<script >
import { mapGetters} from "vuex";

export default {
    data() {
    return {

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