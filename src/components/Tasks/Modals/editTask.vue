<template>
  <q-card style="width: 350px">
    <modal-header>Edit Task</modal-header>

    <q-form @submit.prevent="submitForm">
      <q-card-section>
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
        <modal-task-due-date :dueDate.sync="taskToSubmit.dueDate" />
        <modal-task-due-time
          v-if="taskToSubmit.dueDate"
          :dueTime.sync="taskToSubmit.dueTime"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <!-- <modal-task-npublic :npublic.sync="taskToSubmit.npublic"/> -->
        <q-card-section class="q-pt-none">
          <modal-task-nrepeating
            :nrepeating.sync="taskToSubmit.nrepeating"
            ref="modalTaskRepeating"
          />
        </q-card-section>
        <!-- <div>
            <q-btn class="task-btn"                        
            flat                        
            dense
            color="blue"
            icon="repeat_one">
            <q-tooltip content-class="bg-secondary">Repeat Task</q-tooltip>
            </q-btn>

            <q-btn unelevated flat dense text-color="primary" label="Mo"
            :value="taskToSubmit.nrepeating.monday"
            :class="!taskToSubmit.nrepeating.monday? 'bg-red-1' : 'bg-green-1'"
            @click="taskToSubmit.nrepeating.monday = !taskToSubmit.nrepeating.monday"/>
            <q-btn unelevated flat dense text-color="primary" label="Tu"
            :value="taskToSubmit.nrepeating.tuesday"
            :class="!taskToSubmit.nrepeating.tuesday? 'bg-red-1' : 'bg-green-1'"
            @click="taskToSubmit.nrepeating.tuesday = !taskToSubmit.nrepeating.tuesday"/>
            <q-btn unelevated flat dense text-color="primary" label="We"
            :value="taskToSubmit.nrepeating.wednesday"
            :class="!taskToSubmit.nrepeating.wednesday? 'bg-red-1' : 'bg-green-1'"
            @click="taskToSubmit.nrepeating.wednesday = !taskToSubmit.nrepeating.wednesday"/>
            <q-btn unelevated flat dense text-color="primary" label="Th"
            :value="taskToSubmit.nrepeating.thursday"
            :class="!taskToSubmit.nrepeating.thursday? 'bg-red-1' : 'bg-green-1'"
            @click="taskToSubmit.nrepeating.thursday = !taskToSubmit.nrepeating.thursday"/>
            <q-btn unelevated flat dense text-color="primary" label="Fr"
            :value="taskToSubmit.nrepeating.friday"
            :class="!taskToSubmit.nrepeating.friday? 'bg-red-1' : 'bg-green-1'"
            @click="taskToSubmit.nrepeating.friday = !taskToSubmit.nrepeating.friday"/>
            <q-btn unelevated flat dense text-color="primary" label="Sa"
            :value="taskToSubmit.nrepeating.saturday"
            :class="!taskToSubmit.nrepeating.saturday? 'bg-red-1' : 'bg-green-1'"
            @click="taskToSubmit.nrepeating.saturday = !taskToSubmit.nrepeating.saturday"/>
            <q-btn unelevated flat dense text-color="primary" label="Su"
            :value="taskToSubmit.nrepeating.sunday"
            :class="!taskToSubmit.nrepeating.sunday? 'bg-red-1' : 'bg-green-1'"
            @click="taskToSubmit.nrepeating.sunday = !taskToSubmit.nrepeating.sunday"/>
        </div> -->
      </q-card-section>

      <modal-task-save></modal-task-save>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
const moment = require("moment");

export default {
  props: ["task", "id"],
  data() {
    return {
      model: null,
      options: ["None", "Facebook", "Twitter", "Apple", "Oracle"],
      taskToSubmit: {
        name: "",
        project: "",
        npublic: false,
        nrepeating: {
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
          sunday: false
        },
        dueDate: "",
        dueTime: "",
        completed: false,
        createdDate: "",
        lastModified: ""
      }
    };
  },
  computed: {
    taskDueTime() {
      if (this.settings.show24hrTimeFormat) {
        return this.task.dueTime;
      }
      return moment(this.task.dueDate + " " + this.task.dueTime).format("LT");
    }
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "dueDateToday"]),
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      });
      this.$emit("close");
    },
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    }
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
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task);
  }
};
</script>
