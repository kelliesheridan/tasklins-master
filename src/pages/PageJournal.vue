<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height gopher">
      <!-- <div class="row q-mb-md">
        <sort />
        <projectList class="col-3 project-select" />
      </div> -->

      <template v-if="tasksDownloaded">
        <div class="col-xs-12 col-sm-12 col-md-6 " style="overflow: auto;">
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
                      Overview
                    </q-btn>
                    <br>
                    
                    <q-btn dense flat @click="pageNumber = 4">
                      Mood Tracker
                    </q-btn>
                    <br>

                    <q-btn dense flat @click="pageNumber = 5">
                      This Week
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
                  <h4>Overview</h4>
                  <br>
                  <div>
                    <div>Tasks Completed Today: {{Object.keys(tasksCompletedToday).length}} </div>
                    <div>Tasks Completed This Week: {{Object.keys(tasksCompletedThisWeek).length}} </div>
                    <div>Tasks Completed This Month: {{Object.keys(tasksCompletedThisMonth).length}} </div>
                    <div>Tasks Completed This Year: {{Object.keys(tasksCompletedThisYear).length}} </div>
                    <br>
                    <div>Uncompleted Tasks: {{Object.keys(tasksTodo).length}} </div>
                  </div>
                </div>

                <div
                  v-show="pageNumber == 4"
                  class="notebookPage3 notebookMargin"
                  style="margin-top: -80%"
                >
                  <h4>Mood Tracker</h4>
                  <br>
                  <div class="row-xs-12 row-sm-10 row-md-6 row-lg-6">
                    <div class="row">
                      <div class="col ">
                      <q-img
                        src="/statics/moods/happy.png"
                        spinner-color="white"
                        style="height: 80px; max-width: 80px"
                        class="row"
                      />
                      <div class="row">
                          Happy
                      </div>
                      </div>

                      <div class="col">
                      <q-img
                        src="/statics/moods/fine.png"
                        spinner-color="white"
                        style="height: 80px; max-width: 80px"
                        class="row"
                      />
                      <div class="row text-center">
                          Fine
                      </div>
                      </div>

                      <div class="col">
                      <q-img
                        src="/statics/moods/glum.png"
                        spinner-color="white"
                        style="height: 80px; max-width: 80px"
                        class="row"
                      />
                      <div class="row text-center">
                          Glum
                      </div>
                      </div>
                      
                      <div class="col" v-if="this.profile.memberType > 1">
                      <q-img
                        src="/statics/moods/tired.png"
                        spinner-color="white"
                        style="height: 80px; max-width: 80px"
                        class="row"
                      />
                      <div class="row text-center">
                          Tired
                      </div>
                      </div>                             

                    
                    </div>

                  </div>
                  <div>
                  <div class="row moodTracker items-start">

                    <div class="col items-start"> 
                      <div class="row">-</div>
                      <div class="row">1</div>
                      <div class="row">2</div>
                      <div class="row">3</div>
                      <div class="row">4</div>
                      <div class="row">5</div>
                      <div class="row">6</div>
                      <div class="row">7</div>
                      <div class="row">8</div>
                      <div class="row">9</div>
                      <div class="row">10</div>
                      <div class="row">11</div>
                      <div class="row">12</div>
                      <div class="row">13</div>
                      <div class="row">14</div>
                      <div class="row">15</div>
                      <div class="row">16</div>
                      <div class="row">17</div>
                      <div class="row">18</div>
                      <div class="row">19</div>
                      <div class="row">20</div>
                      <div class="row">21</div>
                      <div class="row">22</div>
                      <div class="row">23</div>
                      <div class="row">24</div>
                      <div class="row">25</div>
                      <div class="row">26</div>
                      <div class="row">27</div>
                      <div class="row">28</div>
                      <div class="row">29</div>
                      <div class="row">30</div>
                      <div class="row">31</div>
                    </div>

                    <div class="januaryMoods col"> J
                      <div class="moodSquare moodTired row"></div>
                      <div class="moodSquare moodGlum row"></div>
                    </div>

                    <div class="februaryMoods col"> F
                      <div class="moodSquare row"></div>
                      <div class="moodSquare row"></div>
                    </div>

                    <div class="marchMoods col"> M
                      <div class="moodSquare row"></div>
                      <div class="moodSquare row"></div>
                    </div>

                    <div class="marchMoods col"> A
                      <div class="moodSquare row"></div>
                      <div class="moodSquare row"></div>
                    </div>

                    <div class="marchMoods col"> M
                      <div class="moodSquare row"></div>
                      <div class="moodSquare row"></div>
                    </div>

                    <div class="januaryMoods col"> J
                      <div class="moodSquare row"></div>
                      <div class="moodSquare row"></div>
                    </div>

                    <div class="februaryMoods col"> J
                      <div class="moodSquare row"></div>
                      <div class="moodSquare row"></div>
                    </div>

                    <div class="marchMoods col"> A
                      <div class="moodSquare row"></div>
                      <div class="moodSquare row"></div>
                    </div>

                    <div class="marchMoods col"> S
                      <div class="moodSquare row"></div>
                      <div class="moodSquare row"></div>
                    </div>

                    <div class="marchMoods col"> O
                      <div class="moodSquare row"></div>
                      <div class="moodSquare row"></div>
                    </div>
                    
                    <div class="marchMoods col"> N
                      <div class="moodSquare row"></div>
                      <div class="moodSquare row"></div>
                    </div>

                    <div class="marchMoods col"> D
                      <div class="moodSquare row"></div>
                      <div class="moodSquare row"></div>
                    </div>                                                        

                    </div>

                  </div>
                  <div class="q-pa-md">
                    <q-btn
                      @click="showMoodPicker = true"
                      class="new-project-btn"
                      color="primary"
                      label="Add a Mood"
                    />
                  </div>
                </div>
              </div>

                          <div
                  v-show="pageNumber == 5"
                  class="notebookPage3 notebookMargin"
                  style="margin-top: -80%"
                >
                  <h4>This Week</h4>
                  <div>
                    Coming Soon!
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
      "tasksCompletedThisMonth",
      "tasksCompletedThisYear",
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
