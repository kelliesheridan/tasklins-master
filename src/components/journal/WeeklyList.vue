<template>
  <div id="journalWeeklyList">
    <div class="sundayTasks"></div>
    <div class="mondayTasks"></div>
    <div class="tuesdayTasks"></div>
    <div class="wednesdayTasks"></div>
    <div class="thursdayTasks"></div>
    <div class="fridayTasks"></div>
    <div class="saturdayTasks"></div>
    <div class="sundayTasks"></div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { date } from "quasar";
const moment = require("moment");

export default {
  components: {

  },
  computed: {
    ...mapGetters("settings", ["settings"])
  }
};
</script>