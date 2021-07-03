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

    <!-- @click.stop="dueDateToday({ id: id, dueDate: task.dueDate })" -->
    <div style="float: right">
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
      <div>
        <q-btn
          class="task-btn-popup"
          @click="setDueWeekly()"
          flat
          dense
          size="md"
          color="blue"
          icon="schedule_send"
          ><q-tooltip content-class="bg-primary">Weekly</q-tooltip>
        </q-btn>

        <q-btn
          class="task-btn-popup"
          @click.stop="setDueEveryWeek()"
          flat
          dense
          color="blue"
          icon="next_week"
        >
          <q-tooltip content-class="bg-primary">Every Week</q-tooltip>
        </q-btn>
      </div>
    </div>
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
      this.$emit(
        "update:dueDate",
        moment()
          .add(1, "days")
          .format("YYYY-MM-DD")
      );
    },
    setDueEveryWeek() {
      this.$emit(
        "update:dueDate",
        moment()
          .add(1, "days")
          .format("YYYY-MM-DD")
      );
    }
  }
};
</script>
