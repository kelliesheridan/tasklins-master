<template>
    <div class="q-gutter-md row items-start">
      <q-img
        :src="url"
        style="width: 150px"
        :ratio="1"
        basic
        spinner-color="white"
        class="rounded-borders"
      >
      </q-img>
     </div> 
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
    
	export default {
    data() {
      return {      
       moods: [
            'https://placeimg.com/500/300/nature',
            'slide-left',
            'slide-up',
            'slide-down',
            'fade',
            'scale',
            'rotate',
            'flip-right',
            'flip-left',
            'flip-up',
            'flip-down',
            'jump-right',
            'jump-left',
            'jump-up',
            'jump-down'
        ]
    }

    }
  }
</script>