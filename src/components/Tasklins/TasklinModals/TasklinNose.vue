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
      if (this.tasklin.level >= 3 && (noseType != undefined || noseType != "")) {
        return (
          "/statics/tasklins/nose/nose" +
          noseType.charAt(noseType.length - 1) +
          "/black.png"
        );
      }
    }
  }
};
</script>

<style>

</style>
