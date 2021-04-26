<template>
  <div class="tasklin">
    <img class="baseType" :src="this.getEyes('base', this.tasklin.eyeType, this.tasklin.color)" />
    <img
      class="colorType"
      :src="this.getEyes('color', this.tasklin.eyeType, this.tasklin.color)"
    />
    <img class="pupilType" :src="this.getEyes('pupil', this.tasklin.eyeType, this.tasklin.color)" />
    <img
      class="highlightType"
      :src="this.getEyes('highlight', this.tasklin.eyeType, this.tasklin.color)"
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
    ...mapGetters("tasklins", ["tasklin"]),
    ...mapGetters("tasks", ["tasksToday",
      "tasksTomorrow",
      "tasksTodayNotCompleted",
      "tasksTomorrowNotCompleted",
      "tasksLate",
      "tasksCompletedToday",
      "tasksSorted",
      "tasksCreatedToday",
      "tasksCompletedYesterday",
      "tasksCompletedTwoDaysAgo",
      "projectsCreatedToday"])
  },
  methods: {
    getEyes(layerNumber, eyeType, arg) {
      if (Object.keys(this.tasksCompletedToday).length == 0) {
        if (eyeType) {
          return "/statics/tasklins/eyes/eyes" + eyeType.charAt(eyeType.length - 1) + "/Moods/Asleep.png"
        } else 
          return "/statics/tasklins/eyes/eyes1/Moods/Asleep.png"
      } else {
        // we've completed a task, so.. build this up.
        if (eyeType != undefined) {
          return "/statics/tasklins/eyes/eyes" + eyeType.charAt(eyeType.length - 1) + "/1-" + this.getColour(arg) +  this.getEyeType() + ".png";
        } else {
          return "/statics/tasklins/eyes/eyes1/1-" + this.getColour(arg) +  this.getEyeType() + ".png"
        }
      }
    },
    getColour(colourString) {
      if (colourString != undefined) {
        switch (colourString) {
          case "#b15858":
            return "Red";
          case "#cf7d95":
            return "Pink";
          case "#8c5688":
            return "Purple";
          case "#589fb1":
            return "Blue";
          case "#5cdcc4":
            return "Cyan";
          case "#7eb158":
            return "Green";
          case "#f9f871":
            return "Yellow";
          case "#fa9f53":
            return "Orange";
          case "#bc987e":
            return "Brown";
          case "#8c8c8c":
            return "Grey";
        }
      }
    },
    getEyeType() {
      const eyeTypeArray = ["A", "B"];
       return eyeTypeArray[Math.floor(Math.random() * eyeTypeArray.length)]
    },
  }
};
</script>
