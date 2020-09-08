<template>
  <q-page padding>
    <template v-if="tasksDownloaded">
      <div class="row main justify-center q-pa-md">
        <div class="section col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-xs" style="overflow: auto; height: 50%">
          <div>
            <list-header bgColor="bg-primary">
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
          <list-header bgColor="bg-primary">
            <div class="index-header">Your Tasklin</div>
          </list-header>
          <div class="section tasklin-section">
          <div class="text-center">
            <img
              v-if="this.tasklin.color === 'blue'"
              src="statics/placeholder/blue3a.png"
            />
            <img
              v-if="this.tasklin.color === 'pink'"
              src="statics/placeholder/pink3a.png"
            />
            <img
              v-if="this.tasklin.color === 'purple'"
              src="statics/placeholder/purple3a.png"
            />
            <img
              v-if="this.tasklin.color === 'green'"
              src="statics/placeholder/green3a.png"
            />
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
          <list-header bgColor="bg-primary">
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
          <list-header bgColor="bg-primary">
            <div class="index-header">News</div>
          </list-header>
          <div class="text-left">
            <div class="q-pa-md" style="max-width: 350px">
              <q-list dense padding class="rounded-borders">
                <q-item>
                  <q-item-section>
                    <q-item-label><strong>Recent Updates</strong></q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label><strong>XP Updates</strong></q-item-label>
                    <q-item-label 
                      >We've changed how xp works.</q-item-label
                    >
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label><strong>See Projects on Tasks</strong></q-item-label>
                    <q-item-label>In settings, you can now turn on the ability to see which project a task belongs to.</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                  <q-item-section>
                    <q-item-label><strong>Profile Page</strong></q-item-label>
                    <q-item-label 
                      >See your current level and change your username/name/color on the profile page.</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </q-list>
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
    "no-tasks": require("components/Tasks/NoTasks.vue").default
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
  background-image: url("http://www.testingtheapp.tasklins.com/statics/background-forest.jpg");   
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
