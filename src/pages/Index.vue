<template>
  <q-page padding>
    <template v-if="tasksDownloaded">
      <div class="row main justify-center q-pa-md">
        <div class="section col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-xs" style="overflow: auto; height: 50%">
          <div>
            <list-header class="textureBar">
              <div class="index-header">Today's Tasks</div>
            </list-header>
            <no-tasks
              v-if="
                !Object.keys(tasksToday).length &&
                  !Object.keys(tasksLate).length
              "
            ></no-tasks>
            <tasks-late 
              v-if="Object.keys(tasksLate).length"
              :tasksLate="tasksLate"
              class="lateTasks task-box"
            />
            <tasks-today class="task-box"
              v-if="Object.keys(tasksToday).length"
              :tasksToday="tasksToday"
            />
          </div>
        </div>

        <div
          class="section col-xs-12 col-sm-12 col-md-6 col-lg-6 justify-center q-pa-xs"
        >
          <list-header class="textureBar">
            <div class="index-header">Your Tasklin</div>
          </list-header>
          <div class="section tasklin-section">
          <div class="">
            <tasklin />
            <p class="tasklin-details">
              <q-item-label
                ><b>Name: </b> {{ tasklin.name }}</q-item-label
              >              
              <q-item-label
                ><b>Type: </b>{{ tasklin.type }}</q-item-label
              >
              <q-item-label><b>Mood: </b>So Happy!</q-item-label>
            </p>
          </div>
          </div>

        </div>
      </div>

      <div class="row main justify-center q-pa-md">
        <div class="section col-xs-12 col-sm-12 col-md-6 news q-pa-xs">
          <list-header class="textureBar">
            <div class="index-header">Follow Tasklins on Social Media</div>
          </list-header>
          <div class="text-center">
            <a
              href="https://www.facebook.com/Tasklins-123005292837764"
              target="_blank"
              ><img
                src="statics/social/facebook.png"
                width="82"
                height="86"
                title="Facebook"
                alt="Tasklins on Facebook"
            /></a>
            <a href="https://twitter.com/tasklins" target="_blank"
              ><img
                src="statics/social/twitter.png"
                width="82"
                height="86"
                title="Facebook"
                alt="Tasklins on Facebook"
            /></a>
            <a href="https://www.instagram.com/tasklins/" target="_blank"
              ><img
                src="statics/social/instagram.png"
                width="82"
                height="86"
                title="Facebook"
                alt="Tasklins on Facebook"
            /></a>
            <a href="https://www.pinterest.ca/Tasklins/" target="_blank"
              ><img
                src="statics/social/pinterest.png"
                width="82"
                height="86"
                title="Facebook"
                alt="Tasklins on Facebook"
            /></a>
          </div>
        </div>

        <div class="section col-xs-12 col-sm-12 col-md-6 news q-pa-xs">
          <list-header class="textureBar">
            <div class="index-header">News</div>
          </list-header>
          <div class="text-left row">
            <div class="col q-pa-md" style="max-width: 350px">
              <q-list dense padding class="rounded-borders">
                <q-item>
                  <q-item-section>
                    <q-item-label><strong>Recent Updates</strong></q-item-label>
                  </q-item-section>
                </q-item>

                <q-item>
                  <q-item-section>
                    <q-item-label><strong>Challenge Open to All</strong></q-item-label>
                    <q-item-label>Now anyone who participates in either challenge via the green button will automatically be added to the challenge tracker.</q-item-label>
                  </q-item-section>
                </q-item>
                
                <q-item>
                  <q-item-section>
                    <q-item-label><strong>Fixed Some Bugs</strong></q-item-label>
                    <q-item-label>Less Things Are Broken!</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item> 
                  <q-item-section>
                    <q-item-label><strong>Help Button</strong></q-item-label>
                    <q-item-label>
                      Found a bug or have a question? You can submit any issues from the help page (top right hand corner).</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="col q-pa-md" style="max-width: 350px">

            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <span class="absolute-center">
        <q-spinner-audio size="3em" color="secondary" />
      </span>
    </template>
  </q-page>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { openURL } from "quasar";

export default {
  props: ["tasksTodo"],
  mounted() {
    // if (this.profile.signup) {
    //   this.$router.push("/initial")
    // }
    this.setProjectSearch("");
  },
  components: {
    "tasks-today": require("components/Tasks/TasksToday.vue").default,
    "tasks-late": require("components/Tasks/TasksLate.vue").default,
    "list-header": require("components/Shared/ListHeader.vue").default,
    "no-tasks": require("components/Tasks/NoTasks.vue").default,
    "tasklin": require("components/Tasklins/Tasklin.vue").default
  },
  computed: {
    ...mapGetters("profile", ["profile"]),
    ...mapGetters("tasks", ["tasksToday", "tasksLate"]),
    ...mapGetters("tasklins", ["tasklin"]),
    ...mapState("tasks", ["search", "tasksDownloaded"])
  },
  methods: {
    ...mapActions("profile", ["addXP"]),
    ...mapActions('tasks', ['setProjectSearch'])
  }
};
</script>

<style scoped>
img {
  border-radius: 8px;
  padding: 10px;
  max-width: 50%;
}

.news {
  margin: 0%;
}

.section {
  overflow: auto;
  height: 50%;
  display: inline-block;
  flex: auto;
}

.tasklin-section {
  background-image: url("/statics/backgrounds/backgroundTown2.jpg");   
  background-color: #eceff1;
  margin: 1rem;
  border-radius: 1rem;
  height: 100%; 
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
}


.tasklin-details {
  background-color: #eceff190; 
  width: 30%;
  border-radius: 1.5rem;
  padding: 4px;
  margin: 0 auto;
  margin-top: -1rem;
  margin-bottom: 2rem;
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
}

.icon-s {
  height: 10%;
  width: 10%;
}
</style>
