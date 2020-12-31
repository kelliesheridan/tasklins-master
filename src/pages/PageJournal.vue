<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height gopher">
      <!-- <div class="row q-mb-md">
        <sort />
        <projectList class="col-3 project-select" />
      </div> -->

      <template v-if="tasksDownloaded">
        <div class="col-6" style="overflow: auto;">
          <div class="notebookMain">
            <div v-show="pageNumber == 0" class="notebookTitle">
              <div class="notebookPage0 center">
                <h1 class="traced-header">Journal</h1>
              </div>
            </div>

            <div v-show="pageNumber !== 0" class="notebookInner">
              <div class="notebookPages">
                <div
                  v-show="pageNumber == 1"
                  class="notebookPage1"
                  style="margin-top: -80%"
                >
                  <h4>Index</h4>
                  <br />
                  <p>Projects</p>
                  <p>This Week</p>
                </div>
                <div
                  v-show="pageNumber == 2"
                  class="notebookPage2"
                  style="margin-top: -80%"
                >
                  <div>
                    <h4>Projects</h4>
                    <project></project>

                    <br />
                    <q-btn
                      @click="showAddProject = true"
                      class="new-project-btn"
                      color="primary"
                      label="New Project"
                    />

                  </div>
                  <div>
                    <br />
                    <tasks-todo
                      class="toDoScroll"
                      v-if="Object.keys(tasksTodo).length"
                      :tasksTodo="tasksTodo"
                    />
                  </div>
                </div>
                <div
                  v-show="pageNumber == 3"
                  class="notebookPage3"
                  style="margin-top: -80%"
                >
                  <h4>This Week</h4>
                </div>
              </div>
            </div>
            <div>
              <div class="q-pa-sm row buttonRowJournal">
                <div class="col-6 center">
                  <q-btn
                    color="secondary"
                    v-show="pageNumber >= 1"
                    push
                    icon="keyboard_arrow_left"
                    @click="pageNumber--"
                  />
                  <span class="q-pa-md"> {{ pageNumber }} </span>
                  <q-btn
                    color="secondary"
                    v-show="pageNumber <= 8"
                    push
                    icon="keyboard_arrow_right"
                    @click="pageNumber++"
                  />
                </div>
              </div>
            </div>
          </div>

          <!--         <tasks-completed-this-week
            class="toDoScroll"
            :tasksCompletedThisWeek="tasksCompletedThisWeek"
          /> -->
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
      showAddProject: false,
      showMoodPicker: false,
      pageNumber: 1
    };
  },
  computed: {
    ...mapGetters("profile", ["profile"]),
    ...mapGetters("tasks", [
      "tasksTodo",
      "tasksCompleted",
      "tasksSorted",
      "projectsFiltered",
      "tasksCompletedToday",
      "tasksCompletedThisWeek",
      "tasksThisWeek"
    ]),
    ...mapState("tasks", ["search", "projectSearch", "tasksDownloaded"])
  },
  components: {
    "add-project": require("components/Tasks/Modals/addProject.vue").default,
    project: require("components/Tasks/Tools/ProjectList.vue").default,
    "tasks-todo": require("components/Tasks/TasksTodo.vue").default
    // "tasks-todo": require("components/Tasks/TasksTodo.vue").default,
    // "tasks-completed": require("components/Tasks/TasksCompleted.vue").default,
    //"tasks-completed-today": require("components/Tasks/TasksCompletedToday.vue").default,
    //"tasks-completed-this-week": require("components/Tasks/TasksCompletedThisWeek.vue").default,
    // "sort": require("components/Tasks/Tools/Sort.vue").default,
    // "projectList": require("components/Tasks/Tools/ProjectList.vue").default,
    // "no-tasks": require("components/Tasks/NoTasks.vue").default,
  }
};
</script>

<style>
.section {
  overflow: auto;
  flex: auto;
}

.toDoScroll {
  padding-bottom: 25px;
}
</style>
