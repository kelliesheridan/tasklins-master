<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height">
      <div class="row q-mb-md">
        <sort />
        <projectList class="col-8" />
        <q-btn @click="showAddProject = true" class="new-project" color="secondary" glossy label="New Project" />
      </div>

      <template v-if="tasksDownloaded">
        <div class="section col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-xs" style="overflow: auto; height: 90%">
          <p
            v-if="(search || projectSearch) && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length"
          >
            No search results.
          </p>

          <no-tasks v-if="!Object.keys(tasksTodo).length && !search"></no-tasks>

          <tasks-todo
            v-if="Object.keys(tasksTodo).length"
            :tasksTodo="tasksTodo"
          />

          <tasks-completed
            v-if="Object.keys(tasksCompleted).length"
            :tasksCompleted="tasksCompleted"
          />
        </div>

        <q-dialog v-model="showAddProject">
          <add-project @close="showAddProject = false" />
        </q-dialog>
      </template>

      <template v-else>
        <span class="absolute-center">
          <q-spinner-audio size="3em" color="secondary" />
        </span>
      </template>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      showAddProject: false
    };
  },
  computed: {
    ...mapGetters("profile", ["profile"]),
    ...mapGetters("tasks", ["tasksTodo", "tasksCompleted", "tasksSorted", "projectsFiltered"]),
    ...mapState("tasks", ["search", "projectSearch", "tasksDownloaded"])
  },
  components: {
    "add-project": require("components/Tasks/Modals/addProject.vue").default,
    "tasks-todo": require("components/Tasks/TasksTodo.vue").default,
    "tasks-completed": require("components/Tasks/TasksCompleted.vue").default,
    "sort": require("components/Tasks/Tools/Sort.vue").default,
    "projectList": require("components/Tasks/Tools/ProjectList.vue").default,
    "no-tasks": require("components/Tasks/NoTasks.vue").default,
  }
};
</script>

<style>
.new-project {
  height: 50%;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
}

.section {
  overflow: auto;
  flex: auto;
}
</style>
