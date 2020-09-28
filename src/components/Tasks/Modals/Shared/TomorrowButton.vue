<template>
        <q-btn
          @click.stop="pushDueDate({ id: id, dueDate: task.dueDate, nrepeating: task.nrepeating })"
          flat
          round
          dense
          color="blue"
          icon="rotate_right"
          >
          <q-tooltip content-class="bg-secondary">+1 Day/Tomorrow</q-tooltip>
          </q-btn>
</template>

<script>
import { mapActions } from 'vuex'

export default {
props: ['task', 'id'],
    data() {
        return {

        }
    },
    methods: {
      ...mapActions('tasks', ['updateTask', 'deleteTask', 'pushDueDate']),
            },

        }

</script>