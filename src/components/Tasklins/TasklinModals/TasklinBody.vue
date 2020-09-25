<template>
  <div>
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#f44336'"
      src="/statics/tasklins/body/RoundCrumpled/Red.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#e91e63'"
      src="/statics/tasklins/body/SquatCrumpled/Pink.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#9c27b0'"
      src="/statics/tasklins/body/RoundStitched/Purple.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#3f51b5'"
      src="/statics/tasklins/body/RoundCrumpled/Blue.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#00bcd4'"
      src="/statics/tasklins/body/SquatStitched/Cyan.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#4caf50'"
      src="/statics/tasklins/body/RoundStitched/Green.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#ffeb3b'"
      src="/statics/tasklins/body/RoundCrumpled/Yellow.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#ff9800'"
      src="/statics/tasklins/body/RoundStitched/Orange.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#795548'"
      src="/statics/tasklins/body/SquatStitched/Brown.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.color === '#9e9e9e'"
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

<style>
.tasklin {
  width: 100%;
  height: 100%;
  position: relative;
  color: black !important
}
</style>
