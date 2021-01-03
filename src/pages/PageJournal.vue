<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height gopher">
      <!-- <div class="row q-mb-md">
        <sort />
        <projectList class="col-3 project-select" />
      </div> -->

      <template v-if="tasksDownloaded">
        <div class="col-xs-12 col-sm-12 col-md-6" style="overflow: auto;">
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
                  class="notebookPage1 notebookMargin"                  
                >
                  <h4>Index</h4>
                  <br />
                    <q-btn dense flat @click="pageNumber = 2">
                    Projects
                    </q-btn>
                    <br>

                    <q-btn dense flat @click="pageNumber = 3">
                      This Week
                    </q-btn>
                    <br>
                    
                    <q-btn dense flat @click="pageNumber = 4">
                      Mood Tracker
                    </q-btn>
                </div>
                <div
                  v-show="pageNumber == 2"
                  class="notebookPage2 notebookMargin"                  
                >
                  <div>
                    <h4>Projects</h4>
                    <project></project>

                    <br />

                  </div>
                  <div>
                    <tasks-todo                    
                      class="toDoScroll"
                      v-if="Object.keys(tasksTodo).length"
                      :tasksTodo="tasksTodo"
                    />
                  </div>
                  <q-btn
                      @click="showAddProject = true"
                      class="new-project-btn"
                      color="primary"
                      label="New Project"
                    />
                </div>
                <div
                  v-show="pageNumber == 3"
                  class="notebookPage3 notebookMargin"
                  style="margin-top: -80%"
                >
                  <h4>Coming Soon</h4>
                </div>

                <div
                  v-show="pageNumber == 4"
                  class="notebookPage3 notebookMargin"
                  style="margin-top: -80%"
                >
                  <h4>Mood Tracker</h4>
                  <br>
                  <div>
                    <div>More moods and tracking options coming soon!</div>
                    <br>
                    <!-- <div>Recent Moods</div>
                    <q-img
                      src="/statics/moods/happy.png"
                      spinner-color="white"
                      style="height: 80px; max-width: 80px"
                      @click="mood = 'happy'"
                    /> -->
                  </div>
                  <div>
                    <q-btn
                      @click="showMoodPicker = true"
                      class="new-project-btn"
                      color="primary"
                      label="Add a Mood"
                    />
                  </div>
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
                  <br>
                  <q-btn @click="pageNumber = 1" dense flat text-color="black" push icon="home" />
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

        <q-dialog v-model="showMoodPicker">
          <mood-picker @close="showMoodPicker = false" />
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
      showTaskList: false,
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
    "tasks-todo": require("components/Tasks/TasksTodo.vue").default,
    "mood-picker": require("components/Tasks/Modals/moodPicker.vue").default,
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
