<template>
  <div>
    <img
      class="tasklin"
      v-if="this.tasklin.eyeType === 'eyes1'"
      src="/statics/tasklins/eyes/eyes1.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.eyeType === 'eyes2'"
      src="/statics/tasklins/eyes/eyes2.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.eyeType === 'eyes3'"
      src="/statics/tasklins/eyes/eyes3.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.eyeType === 'eyes4'"
      src="/statics/tasklins/eyes/eyes4.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.eyeType === 'eyes5'"
      src="/statics/tasklins/eyes/eyes5.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.eyeType === 'eyes6'"
      src="/statics/tasklins/eyes/eyes6.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.eyeType === 'eyes7'"
      src="/statics/tasklins/eyes/eyes7.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.eyeType === 'eyes8'"
      src="/statics/tasklins/eyes/eyes8.png"
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
