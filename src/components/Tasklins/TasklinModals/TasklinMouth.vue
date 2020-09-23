<template>
  <div>
    <img
      class="tasklin"
      v-if="this.tasklin.mouth === 'mouth1'"
      src="/statics/tasklins/mouths/mouth1.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.mouth === 'mouth2'"
      src="/statics/tasklins/mouths/mouth1.png"
    />
    <img
      class="tasklin"
      v-if="this.tasklin.mouth === 'mouth3'"
      src="/statics/tasklins/mouths/mouth1.png"
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
    ...mapGetters("tasklins", ["tasklin"])
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
