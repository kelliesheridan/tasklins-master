<template>
  <div>
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#b15858'"
      src="/statics/tasklins/body/RoundCrumpled/Red.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#cf7d95'"
      src="/statics/tasklins/body/SquatCrumpled/Pink.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#8c5688'"
      src="/statics/tasklins/body/RoundStitched/Purple.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#589fb1'"
      src="/statics/tasklins/body/GhostCrumpled/Blue.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#5cdcc4'"
      src="/statics/tasklins/body/RoundStitched/Cyan.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#7eb158'"
      src="/statics/tasklins/body/GhostStitched/Green.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#f9f871'"
      src="/statics/tasklins/body/RoundCrumpled/Yellow.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#fa9f53'"
      src="/statics/tasklins/body/RoundStitched/Orange.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#bc987e'"
      src="/statics/tasklins/body/SquatStitched/Brown.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#8c8c8c'"
      src="/statics/tasklins/body/SquatCrumpled/Grey.png"
    />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { date } from "quasar";
const moment = require("moment");

export default {
  components: {},
  computed: {
    ...mapGetters("tasklins", ["tasklin"])
  }
};
</script>
