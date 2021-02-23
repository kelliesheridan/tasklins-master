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
                  <br />

                  <q-btn dense flat @click="pageNumber = 3">
                    Overview
                  </q-btn>
                  <br />

                  <q-btn dense flat @click="pageNumber = 4">
                    Mood Tracker
                  </q-btn>
                  <br />

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
                  <q-btn
                    @click="showDeleteProject = true"
                    class="new-project-btn"
                    color="primary"
                    label="Delete Project"
                  />
                </div>
                <div
                  v-show="pageNumber == 3"
                  class="notebookPage3 notebookMargin"
                  style="margin-top: -80%"
                >
                  <h4>Overview</h4>
                  <br />
                  <div>
                    <div>
                      Tasks Completed Today:
                      {{ Object.keys(tasksCompletedToday).length }}
                    </div>
                    <div>
                      Tasks Completed This Week:
                      {{ Object.keys(tasksCompletedThisWeek).length }}
                    </div>
                    <div>
                      Tasks Completed This Month:
                      {{ Object.keys(tasksCompletedThisMonth).length }}
                    </div>
                    <div>
                      Tasks Completed This Year:
                      {{ Object.keys(tasksCompletedThisYear).length }}
                    </div>
                    <br />
                    <div>
                      Uncompleted Tasks: {{ Object.keys(tasksTodo).length }}
                    </div>
                    <div>
                      Tasks Completed Late:
                      {{ Object.keys(tasksCompletedLate).length }}
                    </div>
                  </div>
                </div>

                <div v-show="pageNumber == 4" class="notebookPage4">
                  <h4>Mood Tracker</h4>
                  <br />
                  <p>
                    We do still have some final touches to do on this page (for
                    example, if you add a new mood, you won't see it until the
                    next time you visit), but it works! If you're not seeing the
                    any boxes filled in after selecting at least one mood, try
                    refreshing, and we'll get things working a bit more smoothly
                    soon!
                  </p>
                  <div
                    class="moodTrackerHeader row-xs-12 row-sm-10 row-md-6 row-lg-6"
                  >
                    <div class="row">
                      <div class="col ">
                        <q-img
                          src="/statics/moods/happy.png"
                          spinner-color="white"
                          class="row moodImage"
                        />
                        <div class="row moodImageText1">
                          Happy
                        </div>
                      </div>

                      <div class="col">
                        <q-img
                          src="/statics/moods/bored.png"
                          spinner-color="white"
                          class="row moodImage"
                        />
                        <div class="row moodImageText  text-center">
                          Bored
                        </div>
                      </div>

                      <div class="col">
                        <q-img
                          src="/statics/moods/fine.png"
                          spinner-color="white"
                          class="row moodImage"
                        />
                        <div class="row moodImageText text-center">
                          Fine
                        </div>
                      </div>

                      <div class="col">
                        <q-img
                          src="/statics/moods/glum.png"
                          spinner-color="white"
                          class="row moodImage"
                        />
                        <div class="row moodImageText  text-center">
                          Glum
                        </div>
                      </div>

                      <div class="col">
                        <q-img
                          src="/statics/moods/grateful.png"
                          spinner-color="white"
                          class="row moodImage"
                        />
                        <div class="row moodImageText  text-center">
                          Grateful
                        </div>
                      </div>


                      <div class="col" v-if="this.profile.memberType > 1">
                        <q-img
                          src="/statics/moods/tired.png"
                          spinner-color="white"
                          class="row moodImage"
                        />
                        <div class="row moodImageText text-center">
                          Tired
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div>
                    <div class="row moodTracker">
                      <div class="col">
                        <div class="col">
                          <br />
                          <div v-for="n in 31" :key="n">
                            <div style="height: 0px">{{ n }}</div>
                            <br />
                          </div>
                        </div>
                      </div>

                      <div class="col"></div>
                      <div class="januaryMoods col">
                        J
                        <div v-for="n in 31" :key="n">
                          <div v-bind:class="getMoodForDate('01', n)"></div>
                        </div>
                      </div>

                      <div class="februaryMoods col">
                        F
                        <div v-for="n in 28" :key="n">
                          <div v-bind:class="getMoodForDate('02', n)"></div>
                        </div>
                      </div>

                      <div class="marchMoods col">
                        M
                        <div v-for="n in 31" :key="n">
                          <div v-bind:class="getMoodForDate('03', n)"></div>
                        </div>
                      </div>

                      <div class="aprilMoods col">
                        A
                        <div v-for="n in 30" :key="n">
                          <div v-bind:class="getMoodForDate('04', n)"></div>
                        </div>
                      </div>

                      <div class="mayMoods col">
                        M
                        <div v-for="n in 31" :key="n">
                          <div v-bind:class="getMoodForDate('05', n)"></div>
                        </div>
                      </div>

                      <div class="juneMoods col">
                        J
                        <div v-for="n in 30" :key="n">
                          <div v-bind:class="getMoodForDate('06', n)"></div>
                        </div>
                      </div>

                      <div class="julyMoods col">
                        J
                        <div v-for="n in 31" :key="n">
                          <div v-bind:class="getMoodForDate('07', n)"></div>
                        </div>
                      </div>

                      <div class="augustMoods col">
                        A
                        <div v-for="n in 31" :key="n">
                          <div v-bind:class="getMoodForDate('08', n)"></div>
                        </div>
                      </div>

                      <div class="septemberMoods col">
                        S
                        <div v-for="n in 30" :key="n">
                          <div v-bind:class="getMoodForDate('09', n)"></div>
                        </div>
                      </div>

                      <div class="octoberMoods col">
                        O
                        <div v-for="n in 31" :key="n">
                          <div v-bind:class="getMoodForDate(10, n)"></div>
                        </div>
                      </div>

                      <div class="novemberMoods col">
                        N
                        <div v-for="n in 30" :key="n">
                          <div v-bind:class="getMoodForDate(11, n)"></div>
                        </div>
                      </div>

                      <div class="decemberMoods col">
                        D
                        <div v-for="n in 31" :key="n">
                          <div v-bind:class="getMoodForDate(12, n)"></div>
                        </div>
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
                  <br />
                  <q-btn
                    @click="pageNumber = 1"
                    dense
                    flat
                    text-color="black"
                    push
                    icon="home"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <q-dialog v-model="showAddProject">
          <add-project @close="showAddProject = false" />
        </q-dialog>

        <q-dialog v-model="showDeleteProject">
          <delete-project @close="showDeleteProject = false" />
        </q-dialog>

        <q-dialog v-model="showMoodPicker">
          <mood-picker @close="showMoodPicker = false; updateGrid();"
          />
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
import { mapActions, mapGetters, mapState } from "vuex";
import { date } from "quasar";
const moment = require("moment");

export default {
  data() {
    return {
      showAddProject: false,
      showDeleteProject: false,
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
      "tasksThisWeek",
      "tasksCompletedLate"
    ]),
    ...mapState("tasks", ["search", "projectSearch", "tasksDownloaded"]),
    ...mapState("profile", ["moods"])
  },
  components: {
    "add-project": require("components/Tasks/Modals/addProject.vue").default,
    "delete-project": require("components/Tasks/Modals/deleteProject.vue").default,
    project: require("components/Tasks/Tools/ProjectList.vue").default,
    "tasks-todo": require("components/Tasks/TasksTodo.vue").default,
    "mood-picker": require("components/Tasks/Modals/moodPicker.vue").default
    // "tasks-todo": require("components/Tasks/TasksTodo.vue").default,
    // "tasks-completed": require("components/Tasks/TasksCompleted.vue").default,
    //"tasks-completed-today": require("components/Tasks/TasksCompletedToday.vue").default,
    //"tasks-completed-this-week": require("components/Tasks/TasksCompletedThisWeek.vue").default,
    // "sort": require("components/Tasks/Tools/Sort.vue").default,
    // "projectList": require("components/Tasks/Tools/ProjectList.vue").default,
    // "no-tasks": require("components/Tasks/NoTasks.vue").default,
  },
  methods: {
    ...mapActions("profile", ["fbReadAllMoods"]),
    getMoodForDate(month, number) {
      if (this.moods)
        if (month != undefined && number != undefined) {
          var moods = Object.keys(this.moods).filter(
            e =>
              e == moment("2021-" + month + "-" + number).format("YYYY-MM-DD")
          );
          if (moods.length > 0) {
            if (number.toString().length == 1) number = "0" + number;
            var moodOnDate = this.moods["2021-" + month + "-" + number];
            return (
              "moodSquare mood" +
              moodOnDate.charAt(0).toUpperCase() +
              moodOnDate.slice(1) +
              " row"
            );
          } else {
            return "moodSquare row";
          }
        }
    },
    updateGrid() {
      this.$router.push("/journal");
      // this.fbReadAllMoods();
      // setTimeout(() => {
      //   console.debug(this.profile.moodDate);
      //   this.getMoodForDate(
      //     moment(this.profile.moodDate).month() + 1,
      //     moment(this.profile.moodDate).date()
      //   );
      // }, 2000);
    }
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
