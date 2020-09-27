<template>
<div>
    <div v-if="tasksCompletedToday !== 0">
    <img
      class="tasklin"
      v-if="this.tasklin.eyeType === 'eyes1' || 'eyes3' || 'eyes5'"
      src="/statics/tasklins/eyes/sleepingeyes1.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.eyeType === 'eyes2' || 'eyes4'"
      src="/statics/tasklins/eyes/sleepingeyes2.png"
    />
    </div>

    <div v-if="tasksCompletedToday === 0">
    <img
      class="tasklin"
      v-if="this.tasklin.eyeType === 'eyes1'"
      src="/statics/tasklins/eyes/babyeyes1.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.eyeType === 'eyes2'"
      src="/statics/tasklins/eyes/babyeyes2.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.eyeType === 'eyes3'"
      src="/statics/tasklins/eyes/babyeyes3.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.eyeType === 'eyes4'"
      src="/statics/tasklins/eyes/babyeyes4.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.eyeType === 'eyes5'"
      src="/statics/tasklins/eyes/babyeyes5.png"
    />
  </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { date } from "quasar";
const moment = require("moment");

export default {
  components: {},
  computed: {
    ...mapGetters("tasklins", ["tasklin"]),
    ...mapGetters("tasks", ["tasksCompletedToday"]),
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
