<template>
<span>{{profile.lin}}</span>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
    
	export default {
    data() {
      return {
      }
    },

    computed: {
      ...mapState('profile', ['profile']),
      ...mapGetters('profile', ['profile']),
      //       addLin: function(min, max) {
      //   min = Math.ceil(1);
      //   max = Math.floor(5);
      //   return Math.floor(Math.random() * (max - min + 1)) + min;
      // }

        // let add = Math.random(1, 5);
        // let subtract = Math.random(3, 5);

    },
      computed: {
    ...mapGetters('profile', ['profile']),
    },

    }
</script>