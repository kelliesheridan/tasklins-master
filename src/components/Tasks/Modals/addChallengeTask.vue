<template>
  <q-card style="width: 350px">
    <modal-header>What did you complete?</modal-header>

    <q-form @submit.prevent="submitForm">
      <div class="row q-pa-md">
        <q-input filled standout counter prefix="I" suffix="!" maxlength="100" clearable v-model="text" placeholder="went for a run" dense>
        <template>
        </template>
      </q-input></div>

      <modal-task-save></modal-task-save>
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
      text: "",
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
          numDaySet: false
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
