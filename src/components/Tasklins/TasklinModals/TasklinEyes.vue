<template>
  <div>
    <img class="tasklin" :src="this.getEyes(this.tasklin.eyeType)" />
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
    ...mapGetters("tasks", ["tasksCompletedToday"])
  },
  methods: {
    getEyes(eyeType) {
      if (Object.keys(this.tasksCompletedToday).length == 0) {
        switch (eyeType) {
          case "eyes1":
          case "eyes3":
          case "eyes5":
            return "/statics/tasklins/eyes/sleepingeyes1.png";
            break;
          case "eyes2":
          case "eyes4":
            return "/statics/tasklins/eyes/sleepingeyes2.png";
            break;
        }
      } else {
        if (eyeType != undefined) {
          return (
            "/statics/tasklins/eyes/babyeyes" +
            eyeType.charAt(eyeType.length - 1) +
            ".png"
          );
        }
      }
    }
  }
};
</script>

<style>
.tasklin {
  width: 100%;
  height: 100%;
  position: relative;
  color: black !important;
}
</style>
