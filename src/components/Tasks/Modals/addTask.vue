<template>
  <q-card class="popup-box">
    <modal-header>Add Task</modal-header>

    <q-form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <modal-task-name :name.sync="taskToSubmit.name" ref="modalTaskName" />

        <q-select
          outlined
          v-model="taskToSubmit.project"
          label="Project"
          class="col"
          :options="this.$store.state.tasks.projects"
        >
        </q-select>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <modal-task-due-date :dueDate.sync="taskToSubmit.dueDate" 
        :weekly.sync="taskToSubmit.nrepeating.weekly"/>
        <modal-task-due-time
          v-if="taskToSubmit.dueDate"
          :dueTime.sync="taskToSubmit.dueTime"
        />

      </q-card-section>

      <q-separator class="popup-seperator"/>

      <q-card-section class="q-pt-none">
        <modal-task-nrepeating
          :nrepeating.sync="taskToSubmit.nrepeating"
          ref="modalTaskRepeating"
        />
      </q-card-section>

      <modal-task-save class="popup-save-btn"></modal-task-save>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import moment from "moment";

export default {
  data() {
    return {
      model: null,
      options: ["None", "Facebook", "Twitter", "Apple", "Oracle"],
      taskToSubmit: {
        name: "",
        project: "Tasks",
        npublic: false,
        nrepeating: {
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false,
          numDay: "",
          numDaySet: false,
          monthly: false
        },
        dueDate: "",
        dueTime: "",
        completed: false,
        createdDate: "",
        lastModified: ""
      }
    };
  },
  components: {
    "modal-header": require("components/Tasks/Modals/Shared/ModalHeader.vue")
      .default,
    "modal-task-name": require("components/Tasks/Modals/Shared/ModalTaskName.vue")
      .default,
    "modal-task-due-date": require("components/Tasks/Modals/Shared/ModalTaskDueDate.vue")
      .default,
    "modal-task-due-time": require("components/Tasks/Modals/Shared/ModalTaskDueTime.vue")
      .default,
    // 'modal-task-npublic': require('components/Tasks/Modals/Shared/ModalTaskPublic.vue').default,
    "modal-task-nrepeating": require("components/Tasks/Modals/Shared/ModalTaskRepeating.vue")
      .default,
    "modal-task-save": require("components/Tasks/Modals/Shared/ModalTaskSave.vue")
      .default
  },
  methods: {
    ...mapActions("tasks", ["addTask", "pushDueDate"]),
    ...mapActions("profile", ["addXPValue"]),
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.addXPValue(1);
      this.$emit("close");
    },
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    }
  }
};
</script>
