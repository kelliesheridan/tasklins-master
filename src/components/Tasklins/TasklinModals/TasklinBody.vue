<template>
  <div>
    <img
      class="tasklin"
      v-bind:src="'/statics/tasklins/body/' + this.getBodyType(this.tasklin.bodyShape) + '/1-' + this.getColour(this.tasklin.color) + '.png'"
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
  },
  methods: {
     getColour(colourString) {
      if (colourString != undefined) {
        switch (colourString) {
          case "#b15858":
            return "Red";
          case "#cf7d95":
            return "Pink";
          case "#8c5688":
            return "Purple";
          case "#589fb1":
            return "Blue";
          case "#5cdcc4":
            return "Cyan";
          case "#7eb158":
            return "Green";
          case "#f9f871":
            return "Yellow";
          case "#fa9f53":
            return "Orange";
          case "#bc987e":
            return "Brown";
          case "#8c8c8c":
            return "Grey";
        }
      } else {
        return "Blue";
      }
     },
     getBodyType(bodyShape) {
       if (bodyShape != undefined) {
         return bodyShape.toLowerCase();
       } else {
       const bodyShapeArray = ["ghost", "round", "squat"];
       return bodyShapeArray[Math.floor(Math.random() * bodyShapeArray.length)]
       }
     }
  }
};
</script>
