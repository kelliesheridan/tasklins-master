<template>
  <div>
    <div>
      <div>
        <img
          class="tasklin"
          :src="this.getMouth(this.tasklin.mouth, this.tasklin.mood)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { date } from "quasar";
import { getMood } from "src/functions/function-get-mood";
const moment = require("moment");

export default {
  components: {},
  computed: {
    ...mapGetters("tasklins", ["tasklin"]),
    ...mapGetters("tasks", [
      "tasksToday",
      "tasksTomorrow",
      "tasksTodayNotCompleted",
      "tasksTomorrowNotCompleted",
      "tasksLate",
      "tasksCompletedToday",
      "tasksSorted",
      "tasksCreatedToday",
      "tasksCompletedYesterday",
      "tasksCompletedTwoDaysAgo",
      "projectsCreatedToday"
    ])
  },
  methods: {
    getMouth(mouthType) {
      if (mouthType != undefined) {
        var tasklinMood = getMood(
          Object.keys(this.tasksCompletedToday).length,
          Object.keys(this.tasksLate).length,
          Object.keys(this.tasksCreatedToday).length,
          Object.keys(this.tasksTodayNotCompleted).length,
          Object.keys(this.tasksCompletedYesterday).length,
          Object.keys(this.tasksCompletedTwoDaysAgo).length,
          Object.keys(this.projectsCreatedToday).length
        );

        switch (tasklinMood) {
          case "Asleep":
            return (
              "/statics/tasklins/mouth/mouth1/tooth" +
              mouthType.charAt(mouthType.length - 1) +
              "/neutral.png"
            );
            break;
          case "Concerned":
            return (
              "/statics/tasklins/mouth/mouth1/tooth" +
              mouthType.charAt(mouthType.length - 1) +
              "/concerned.png"
            );
            break;
          case "Okay":
            return (
              "/statics/tasklins/mouth/mouth1/tooth" +
              mouthType.charAt(mouthType.length - 1) +
              "/neutral.png"
            );
            break;
          case "Sleepy":
            return (
              "/statics/tasklins/mouth/mouth1/tooth" +
              mouthType.charAt(mouthType.length - 1) +
              "/neutral.png"
            );
            break;
          case "Happy":
            return (
              "/statics/tasklins/mouth/mouth1/tooth" +
              mouthType.charAt(mouthType.length - 1) +
              "/happy1.png"
            );
            break;
          case "Lonely":
            return (
              "/statics/tasklins/mouth/mouth1/tooth" +
              mouthType.charAt(mouthType.length - 1) +
              "/frown.png"
            );
            break;
          case "Intrigued":
            return (
              "/statics/tasklins/mouth/mouth1/tooth" +
              mouthType.charAt(mouthType.length - 1) +
              "/shocked.png"
            );
            break;
          case "Thrilled":
            return (
              "/statics/tasklins/mouth/mouth1/tooth" +
              mouthType.charAt(mouthType.length - 1) +
              "/happy2.png"
            );
            break;
          case "Loved":
            return (
              "/statics/tasklins/mouth/mouth1/tooth" +
              mouthType.charAt(mouthType.length - 1) +
              "/happy1.png"
            );
            break;
          case "Content":
            return (
              "/statics/tasklins/mouth/mouth1/tooth" +
              mouthType.charAt(mouthType.length - 1) +
              "/happy1.png"
            );
            break;
          default:
            return (
              "/statics/tasklins/mouth/mouth1/tooth1/happy1.png"
            );
            break;
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
}
</style>
