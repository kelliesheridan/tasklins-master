<template>
        <div>
          <!-- <div class="egg">
          <img
            class="tasklin"
            v-if="Object.keys(tasksCompletedToday).length === 1"
            src="/statics/eggs/crack1.png"
          />          
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#b15858'"
            src="/statics/eggs/crack2.png"
          />
          <img           
            class="tasklin"
            v-if="this.tasklin.color === '#b15858'"
            src="/statics/eggs/crack3.png"
          />       
          </div> -->

          <div>
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#b15858'"
            src="/statics/eggs/Red.png"
          />
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#cf7d95'"
            src="/statics/eggs/Pink.png"
          />
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#8c5688'"
            src="/statics/eggs/Purple.png"
          />
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#589fb1'"
            src="/statics/eggs/Blue.png"
          />
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#5cdcc4'"
            src="/statics/eggs/Cyan.png"
          />
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#7eb158'"
            src="/statics/eggs/Green.png"
          />
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#f9f871'"
            src="/statics/eggs/Yellow.png"
          />
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#fa9f53'"
            src="/statics/eggs/Orange.png"
          />
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#bc987e'"
            src="/statics/eggs/Brown.png"
          />
          <img
            class="tasklin"
            v-if="this.tasklin.color === '#8c8c8c'"
            src="/statics/eggs/Grey.png"
          />
          </div>


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
    ...mapGetters("tasklins", ["tasklin"]),
    ...mapGetters("tasks", ["tasksTodo"])
  }
};
</script>