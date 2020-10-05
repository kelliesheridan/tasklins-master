<template>
  <div>
    <div>
    <img
      class="tasklin"
      v-if="this.tasklin.mouth === 'mouth1'"
      src="/statics/tasklins/mouth/mouth1/neutral.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.mouth === 'mouth2'"
      src="/statics/tasklins/mouth/mouth2/neutral.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.mouth === 'mouth3'"
      src="/statics/tasklins/mouth/mouth3/neutral.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.mouth === 'mouth4'"
      src="/statics/tasklins/mouth/mouth4/neutral.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.mouth === 'mouth5'"
      src="/statics/tasklins/mouth/mouth5/neutral.png"
    />
    </div>
    <!-- <div v-else>
    <img
      class="tasklin"
      v-if="this.tasklin.mouth === 'mouth1'"
      src="/statics/tasklins/mouth/mouth1smile.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.mouth === 'mouth2'"
      src="/statics/tasklins/mouth/mouth2smile.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.mouth === 'mouth3'"
      src="/statics/tasklins/mouth/mouth3smile.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.mouth === 'mouth4'"
      src="/statics/tasklins/mouth/mouth4smile.png"
    />      
    </div> -->
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
