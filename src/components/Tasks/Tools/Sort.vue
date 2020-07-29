<template>
      <q-select filled
      transition-show="scale"
      transition-hide="scale"
      map-options emit-value class="col" v-model="sortBy" :options="options" label="Sort By"/>
    
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      options: [
        {
            label: 'Name',
            value: 'name'
        },
        {
            label: 'Due Date',
            value: 'dueDate'
        }
        // {
        //     label: 'Date Created',
        //     value: 'createdDate'
        // },
        // {
        //     label: 'Date Last Edited',
        //     value: 'lastModified'
        // },
      ]
    }
  },
  computed: {
      ...mapState('tasks', ['sort']),
      sortBy: {
          get() {
              return this.sort
          },
          set(value) {
              this.setSort(value)
          }
      }
  },
  methods: {
    ...mapActions('tasks', ['setSort']),  
  }
}
</script>

<style scoped>
.q-select {
    flex: 0 0 150px;
    float: right;
}

</style>