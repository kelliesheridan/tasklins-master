<template>
  <div id="tasklinContainer">
    <div>
      <div>
        <tasklin-body class="tasklinBody" />
        <tasklin-eyes class="tasklinEyes" style="margin-top: -100%;"/>
        <tasklin-mouth class="tasklinMouth" style="margin-top: -100%;"/>
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
    "tasklin-body": require("components/Tasklins/TasklinModals/TasklinBody.vue").default,
    "tasklin-eyes": require("components/Tasklins/TasklinModals/TasklinEyes.vue").default,
    "tasklin-mouth": require("components/Tasklins/TasklinModals/TasklinMouth.vue").default,
  },
  computed: {
    ...mapGetters("tasklins", ["tasklin"])
  }
};
</script>