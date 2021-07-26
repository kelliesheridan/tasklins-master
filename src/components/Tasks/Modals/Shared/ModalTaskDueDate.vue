<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      class="due-box"
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

    <div>
      <div>
        <q-btn
          class="task-btn-popup"
          @click="setDueDate()"
          flat
          dense
          size="md"
          color="purple"
          icon="today"
          ><q-tooltip content-class="bg-primary">Due Today</q-tooltip>
        </q-btn>

        <q-btn
          class="task-btn-popup"
          @click.stop="setDueTomorrow()"
          flat
          dense
          color="blue"
          icon="rotate_right"
        >
          <q-tooltip content-class="bg-primary">Due Tomorrow</q-tooltip>
        </q-btn>
      </div>
        <q-btn
          class="task-btn-popup"
          @click="setDueWeekly()"
          flat
          dense
          size="md"
          icon="schedule_send"
          :style="{ 'color': weekly ? '#89be85' : '#bf8686' }" 
          ><q-tooltip content-class="bg-primary">Weekly</q-tooltip>
        </q-btn>     
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import moment from "moment";

export default {
  props: ["dueDate", "task", "id"],
  data() {
    return {
      weekly: false
    };
  },
  methods: {
    ...mapActions("tasks", ["pushDueDate", "dueDateToday", "dueDateTomorrow"]),
    setDueDate() {
      this.$emit("update:dueDate", moment().format("YYYY-MM-DD"));
    },
    setDueTomorrow() {
      this.$emit(
        "update:dueDate",
        moment()
          .add(1, "days")
          .format("YYYY-MM-DD")
      );
    },
    setDueWeekly() {
      this.weekly = !this.weekly
      this.$emit("update:weekly", this.weekly);
    },
  }
};
</script>
