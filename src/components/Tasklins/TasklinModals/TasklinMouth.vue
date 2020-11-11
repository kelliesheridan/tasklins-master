<template>
  <div>
    <div>
      <div>
        <img class="tasklin" :src="this.getMouth(this.tasklin.mouth)" />
      </div>
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
    ...mapGetters("tasks", [
      "tasksCompletedToday",
      "tasksTodayNotCompleted",
      "tasksCreatedToday",
      "tasksLate"
    ])
  },
  methods: {
    getMouth(mouthType) {
      if (Object.keys(this.tasksCompletedToday).length <= 3 && Object.keys(this.tasksLate).length == 0) {
        switch (mouthType) {
          case "mouth1":
          case "mouth3":
          case "mouth5":
            return "/statics/tasklins/mouth/mouth" +
              mouthType.charAt(mouthType.length - 1) +
              "/neutral.png";
            break;
          case "mouth2":
          case "mouth4":
            return "/statics/tasklins/mouth/mouth" +
              mouthType.charAt(mouthType.length - 1) +
              "/neutral.png";
            break;
        }
      } else {
        if (mouthType != undefined) {
          if (
            Object.keys(this.tasksCompletedToday).length > 3 &&
            Object.keys(this.tasksTodayNotCompleted).length == 0 &&
            Object.keys(this.tasksCreatedToday).length >= 2 &&
            Object.keys(this.tasksLate).length == 0
          ) {
            return (
              "/statics/tasklins/mouth/mouth" +
              mouthType.charAt(mouthType.length - 1) +
              "/happy2.png"
            );
          } else if (
            Object.keys(this.tasksLate).length > 0
          ) {
            return (
              "/statics/tasklins/mouth/mouth" +
              mouthType.charAt(mouthType.length - 1) +
              "/worried.png"
            );
          } else {
            return (
              "/statics/tasklins/mouth/mouth" +
              mouthType.charAt(mouthType.length - 1) +
              "/happy1.png"
            );
          }
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
