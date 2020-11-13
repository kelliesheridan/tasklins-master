<template>
  <q-page padding>
    <div class="row">
    <div class="col-lg-2">
        <q-btn @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width block q-pa-xs" push to="/start/pick-quasar-flavour" label="Town" color="secondary" />
          <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width block q-pa-xs" push to="/start/pick-quasar-flavour" label="Forest" color="secondary" />
          <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width block q-pa-xs" push to="/start/pick-quasar-flavour" label="Mountain" color="secondary" />
          <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width block q-pa-xs" push to="/start/pick-quasar-flavour" label="City" color="secondary" />
          <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width block q-pa-xs" push to="/start/pick-quasar-flavour" label="Island" color="secondary" />
          <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width block q-pa-xs" push to="/start/pick-quasar-flavour" label="Mountains" color="secondary" />
          <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width block q-pa-xs" push to="/start/pick-quasar-flavour" label="Floating" color="secondary" />
       
    </div>
    <div class="col-lg-10">
            <div class="world-map" style="width: 80%; height: 80%; position: absolute" :class="!darkMode ? 'world-day' : 'world-night'">   </div> 
            <div v-show="showTown" class="world-map map-town" style="width: 80%; height: 80%;  margin-top: 0%;  position: absolute;"></div>   
    </div>
    </div>

  </q-page>
</template>

<script>
import { mapGetters} from "vuex";

export default {

    data() {
    return {
      showTown: false
    };
  },
  computed: {
    ...mapGetters("settings", ["darkMode"])
  },
}
</script>