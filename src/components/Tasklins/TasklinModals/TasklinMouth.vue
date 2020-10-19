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
    ...mapGetters("tasks", ["tasksCompletedToday"])
  },
  methods: {
    getMouth(mouthType) {
      if (Object.keys(this.tasksCompletedToday).length == 0) {
        switch (mouthType) {
          case "mouth1":
          case "mouth3":
          case "mouth5":
            return "/statics/tasklins/mouth/mouth1/neutral.png";
            break;
          case "mouth2":
          case "mouth4":
            return "/statics/tasklins/mouth/mouth4/neutral.png";
            break;
        }
      } else {
        if (mouthType != undefined) {
          // return (
          //   "/statics/tasklins/eyes/babyeyes" +
          //   mouthType.charAt(mouthType.length - 1) +
          //   ".png"
          // );
          return "/statics/tasklins/mouth/mouth4/neutral.png";
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
