<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      label="Due date"
      :value="dueDate"
      @input="$emit('update:dueDate', $event)"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy>
            <q-date :value="dueDate" @input="$emit('update:dueDate', $event)" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

<!-- @click.stop="dueDateToday({ id: id, dueDate: task.dueDate })" -->

        <q-btn class="task-btn"
          @click="setDueDate()"    
          flat
          dense
          size="md"
          color="purple"
          icon="today"
        ><q-tooltip content-class="bg-primary">Due Today</q-tooltip>
        </q-btn>

        <q-btn class="task-btn"
          @click.stop="setDueTomorrow()"  
          flat
          dense
          color="blue"
          icon="rotate_right">
          <q-tooltip content-class="bg-primary">Due Tomorrow</q-tooltip>
        </q-btn> 

        

  </div>
</template>

<script>
import { mapActions } from "vuex";
import moment from "moment";

export default {
  props: ["dueDate", "task", "id"],
  methods: {
    ...mapActions("tasks", ["pushDueDate", "dueDateToday", "dueDateTomorrow"]),
    setDueDate() {
      this.$emit('update:dueDate', moment().format("YYYY-MM-DD"));
    },
    setDueTomorrow() {
      this.$emit('update:dueDate', moment().add(1,'days').format("YYYY-MM-DD"));
    }
  },
};
</script>
