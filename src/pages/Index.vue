<template>
  <q-page padding>

    <q-dialog v-if="newUserWalkthrough" v-model="newUserWalkthrough" >
    <q-carousel
      v-model="slide"
      swipeable
      animated
      padding
      arrows
      navigation
      class="bg-primary starterInfo text-accent rounded-borders"
    >
      <q-carousel-slide name="style" class="text-center">
        <div class="col-4 q-pa-xs">
        <strong>Getting Started</strong>
        </div>
        <div>
        <q-img
          src="statics/newTask.jpg"
          draggable="false"
          class="infoImg"
        />
      </div>
          <div class="q-mt-md text-left">
            You have your first Tasklin, and you're ready to get started! The Tasklins world works by, you guessed it, tasks. And you're going to want more than those first five. Use the <q-icon size="sm" name="add" /> to create all your future tasks.
            <br><br>
            From there, you can create tasks, set due dates (and times), assign your tasks to projects, and even set your tasks to repeat on a regular schedule with the <q-icon size="sm" name="repeat_one" /> button. Just click which days you want the task to repeat on.
          </div>
      </q-carousel-slide>

      <q-carousel-slide name="layers" class="text-center">
        <div class="col-4 q-pa-xs">
          <strong>Experience and Lin</strong>
        </div>

        <div class="q-mt-md text-left">
          As you interact with Tasklins (adding tasks, completing tasks, participating in challenges) you will gain experience points in the game world. Gaining more experience means reaching a higher level. You can see your current level on the menu bar (or your profile page on mobile). You also gain Lin which is the Tasklins in game currency. Soon, you'll be able to use Lin to feed your pets and explore our world.
        </div>
        <br>

        <div class="col-4 q-pa-xs">
        <strong>Projects</strong>
        </div>
        <div>
        <q-img
          src="statics/ProjectInfo.jpg"
          draggable="false"          
        />
      </div>
          <div class="q-mt-md text-left">
            Projects are how you keep all the different areas of your life organized. From the Todo page (use the <q-icon size="sm" name="done" /> button on the main menu) you can see all of your tasks, create new projects, and sort tasks by project.
            <br><br>
              <div>
                <q-img
                  src="statics/NewProject.jpg"
                  draggable="false"          
                />
              </div>
          </div>
      </q-carousel-slide>

      <q-carousel-slide name="tv" class="text-center">
        <div class="col-4 q-pa-xs">
        <strong>Tasklins</strong>
        </div>
        <div>
        <tasklin />
      </div>
          <div class="q-mt-md text-left">
            Right now, you have one Tasklin, but soon you'll be able to collect and care for more! You'll be able to pair your Tasklins with various projects so that they level up and grow as you make progress through the game. For now, complete your first task of the day to wake your Tasklin up.
          </div>
      </q-carousel-slide>

      <q-carousel-slide name="map" class="text-center">
        <div class="col-4 q-pa-sm">
        <strong>Need More Help?</strong>
        </div>
        <div>
          <q-icon name="help" color="warning" size="56px" />
        </div>
          <div class="q-mt-md text-left">
            Use the ? icon in the top right corner of your screen to access the help page. From there, you can learn more about Tasklins and how everything works!            
          </div><br>
        <div>
        <q-btn rounded padding color="red-10" label="Help! Something is broken!" />
        </div>
          <div class="q-mt-md text-left">
            If something goes wrong, you can also submit a help ticket on this same page. If you have any ideas or suggestions, please feel very much encouraged to submit them this way as well!           
          </div>
          <q-btn class="q-mt-xl" padding color="secondary" @click="newUserWalkthrough = false" label="Let's get started!" />  
      </q-carousel-slide>
    </q-carousel>
    </q-dialog>

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
              <q-item-label><b>Name: </b> {{ tasklin.name }}</q-item-label>              
              <q-item-label v-if="tasksCompletedToday != 0"><b>Mood: </b>So Happy!</q-item-label>
              <q-item-label v-if="tasksCompletedToday = 0"><b>Mood: </b>Asleep.</q-item-label>
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
                    <q-item-label><strong>New User Walkthrough</strong></q-item-label>
                    <q-item-label>We've added a new user walkthrough to demonstrate the basics of Tasklins! For existing users, you can click here to see it. <q-btn class="q-mt-xs" padding color="secondary" @click="newUserWalkthrough = true" label="?" /> </q-item-label>
                  </q-item-section>
                </q-item>
                
                <q-item>
                  <q-item-section>
                    <q-item-label><strong>New Art</strong></q-item-label>
                    <q-item-label>Changed the art for Tasklins to better fit our long term plan. There are now over 500 possible Tasklins.</q-item-label>
                  </q-item-section>
                </q-item>

                <!-- <q-item> 
                  <q-item-section>
                    <q-item-label><strong>Help Button</strong></q-item-label>
                    <q-item-label>
                      Found a bug or have a question? You can submit any issues from the help page (top right hand corner).</q-item-label>
                  </q-item-section>
                </q-item> -->
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

    data() {
    return {
      newUserWalkthrough: false,
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'  
    };
  },
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
    ...mapGetters("tasks", ["tasksToday", "tasksLate", "tasksCompletedToday"]),
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
  border-radius: 1rem;
  padding: 7px;
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
