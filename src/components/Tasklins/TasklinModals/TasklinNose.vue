<template>
  <div>
    <div>
      <div>
        <img class="tasklin" :src="this.getNose(this.tasklin.nose)" />
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
    getNose(noseType) {
      if (noseType != undefined && noseType != "") {
        return (
          "/statics/tasklins/nose/3-nose" +
          noseType.charAt(noseType.length - 1) +
          ".png"
        );
      } else {
        return "/statics/tasklins/nose/3-nose1.png";
      }
    }
  }
};
</script>

<style>

</style>
