<template>
  <div>
            <img
              v-if="this.tasklin.color === '#2196fs'"
              src="/statics/tasklins/StarterBlue1.png"
            />
            <img
              v-if="this.tasklin.color === '#e19e63'"
              src="/statics/tasklins/StarterPink1.png"
            />
            <img
              v-if="this.tasklin.color === '#9c27b0'"
              src="/statics/tasklins/StarterPurple1.png"
            />
            <img
              v-if="this.tasklin.color === '#4caf50'"
              src="/statics/tasklins/StarterGreen1.png"
            />
            <img
              v-if="this.tasklin.color === '#f44336'"
              src="/statics/tasklins/StarterRed1.png"
            />
            <img
              v-if="this.tasklin.color === '#00bcd4'"
              src="/statics/tasklins/StarterCyan1.png"
            />
            <img
              v-if="this.tasklin.color === '#ffeb3b'"
              src="/statics/tasklins/StarterYellow1.png"
            />
            <img
              v-if="this.tasklin.color === '#ff9800'"
              src="/statics/tasklins/StarterOrange1.png"
            />
            <img
              v-if="this.tasklin.color === '#795548'"
              src="/statics/tasklins/StarterBrown1.png"
            />
            <img
              v-if="this.tasklin.color === '#9e9e9e'"
              src="/statics/tasklins/StarterGrey1.png"
            />
  </div>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  import { date } from 'quasar'
  const moment = require('moment') 

	export default {

  components: {

  },
  computed: {
    ...mapGetters("tasklins", ["tasklin"]),
  },

	}
</script>