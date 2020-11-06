<template>
  <div class="tasklin">
    <img class="baseType" :src="this.getEyes('base', this.tasklin.eyeType)" />
    <img class="colorType" :src="this.getEyes('color', this.tasklin.eyeType, this.tasklin.color)"/>
    <img class="pupilType" :src="this.getEyes('pupil', this.tasklin.eyeType)" />
    <img class="highlightType" :src="this.getEyes('highlight', this.tasklin.eyeType)"/>
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
    getEyes(layerNumber, eyeType, arg) {
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
        // we've completed a task, so.. build this up.
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
.baseType {
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
}
.colorType {
  width: 100%;
  height: 100%;
  margin-top: -5px;
  margin-left: -100%;
  display: inline-block;
  position: absolute;
  }
.highlightType {
  width: 100%;
  height: 100%;
  margin-top: -5px;
  margin-left: -100%;
  display: inline-block;
  position: absolute;
  }
.pupilType {
  width: 100%;
  height: 100%;
  margin-top: -5px;
  margin-left: -100%;
  display: inline-block;
  position: absolute;
  }
</style>
