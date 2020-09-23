<template>
  <div id="tasklinContainer">
    <div>
      <div>
        <tasklin-body />
        <tasklin-face style="margin-top: -100%;"/>
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
    "tasklin-face": require("components/Tasklins/TasklinModals/TasklinMouth.vue").default,
  },
  computed: {
    ...mapGetters("tasklins", ["tasklin"])
  }
};
</script>