<template>
<div>
<span>{{myLevel}}</span>
</div>

</template>

<script>
  import { mapState, mapGetters } from 'vuex'
    
	export default {
    data() {
      return {
        newLevel: 0
      }
    },

    computed: {
      ...mapState('profile', ['profile']),
      ...mapGetters('profile', ['profile']),
      myLevel: function() {
      let profile = this.profile.xp;

      if(profile >= 50){
        return '4';
      }
      if(profile >= 20 && profile <= 50){
        return '3';
      }
      if(profile >= 10 && profile <= 20){
        return '2';
      }
      else {
        return '1';
      }
    }

    }
    }
</script>