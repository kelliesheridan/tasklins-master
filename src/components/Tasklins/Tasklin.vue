<template>
  <div id="tasklinContainer">
    <div id="tasklinContainer2">
      <div id="tasklinContainer3">
        <tasklin-body class="tasklinBody" />
        <tasklin-eyes class="tasklinEyes" style="margin-top: -100%;" />
        <tasklin-mouth class="tasklinMouth" style="margin-top: -100%;" />
        <tasklin-nose class="tasklinNose" style="margin-top: -100%;" v-if="showNose()" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { date } from "quasar";
const moment = require("moment");

export default {
  components: {
    "tasklin-body": require("components/Tasklins/TasklinModals/TasklinBody.vue")
      .default,
    "tasklin-eyes": require("components/Tasklins/TasklinModals/TasklinEyes.vue")
      .default,
    "tasklin-mouth": require("components/Tasklins/TasklinModals/TasklinMouth.vue")
      .default,
    "tasklin-nose": require("components/Tasklins/TasklinModals/TasklinNose.vue")
      .default
  },
  computed: {
    ...mapGetters("tasklins", ["tasklin"])
  },
  methods: {
    showNose() {
      if (this.tasklin.level >= 3) {
        return true;
      } else {
        return false
      }
    }
  }
};
</script>
