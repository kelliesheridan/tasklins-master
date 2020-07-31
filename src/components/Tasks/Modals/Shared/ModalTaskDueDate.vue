<template>
  
        <div class="row q-mb-sm">
        <q-input
    	outlined
    	label="Due date"
    	:value="dueDate"
    	@input="$emit('update:dueDate', $event)">
                <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy>
            <q-date
            	:value="dueDate"
            	@input="$emit('update:dueDate', $event)" />
          </q-popup-proxy>
        </q-icon>
                </template>
            </q-input>
        <!-- <q-btn
          @click.stop="$emit('update:dueDate', $event)"       
          @click.stop="dueDateToday({ id: id, dueDate: task.dueDate })"
          flat
          round
          dense
          color="purple"
          icon="today" />
            <q-btn
            flat
            dense
            color="green"
            icon="event" /> -->
        </div>

</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['dueDate', 'task', 'id'],
        methods: {
      ...mapActions('tasks', ['pushDueDate', 'dueDateToday']),
    },
}  
</script>