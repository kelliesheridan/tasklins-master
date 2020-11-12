<template>
  <q-page padding>
    <div class="row section-world justify-center">

      <div class="section-world-menu col-xs-12 col-sm-12 col-md-2 col-lg-2 q-pa-xs">
        <div class="q-pa-md q-gutter-sm">
          <q-btn @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width block q-pa-xs" push to="/start/pick-quasar-flavour" label="Town" color="secondary" />
          <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width block q-pa-xs" push to="/start/pick-quasar-flavour" label="Forest" color="secondary" />
          <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width block q-pa-xs" push to="/start/pick-quasar-flavour" label="Mountain" color="secondary" />
          <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width block q-pa-xs" push to="/start/pick-quasar-flavour" label="City" color="secondary" />
          <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width block q-pa-xs" push to="/start/pick-quasar-flavour" label="Island" color="secondary" />
          <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width block q-pa-xs" push to="/start/pick-quasar-flavour" label="Mountains" color="secondary" />
          <q-btn disable @mouseover="showTown = true" @mouseleave="showTown = false" class="btn-fixed-width block q-pa-xs" push to="/start/pick-quasar-flavour" label="Floating" color="secondary" />
          
        </div>
      </div>

      
      
      <div class="world-map col-xs-12 col-sm-12 col-md-10 col-lg-10 q-pa-xs" :class="!darkMode ? 'world-day' : 'world-night'">   
      <div class="world-map map-town col-xs-12 col-sm-12 col-md-10 col-lg-10 q-pa-xs" style="margin-top: -100%;"></div> 
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