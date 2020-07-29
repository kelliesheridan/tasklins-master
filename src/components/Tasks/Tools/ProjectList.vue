<template>
      <q-select filled
      transition-show="flip-up"
      transition-hide="flip-down"
      :options="options"
      label="Projects"/>
    
</template>

<script>
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
      ]
    }
  }
}
</script>

<style scoped>


</style>