<template>
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
        <strong>Welcome to Tasklins</strong>
        </div>
        <div>
        <q-img
          src="statics/characters/Piper.png"
          draggable="false"
          class="infoImg"
        />
      </div>
          <div class="q-mt-md text-left">
            Hi, I'm Piper! I'll be showing you around. Don't mind the dust, things are still pretty heavily under construction around here, but we're happy to have you!
            <br><br>
            All Tasklins start out as eggs. To meet the Tasklin inside, you're going to have to give it something to work on. Use the + button to <strong>add your first five tasks</strong>. These can be any things you need to complete, such as 'Go for a walk' or 'Finish Math Homework'.
          </div>
      </q-carousel-slide>

      <q-carousel-slide name="layers" class="text-center">
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

      <q-carousel-slide name="welcome" class="text-center">
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
        <q-img
           src="/statics/placeholder/SampleTasklin.png"
           draggable="false"/>
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
          <q-btn class="q-mt-xl" padding color="secondary" v-close-popup label="Let's get started!" />  
      </q-carousel-slide>
    </q-carousel>

</template>

<script>
  import { mapState, mapGetters } from 'vuex'
    
	export default {
    data() {
      return {
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'  
      }
    },

    computed: {
      ...mapGetters("tasklins", ["tasklin"])
    }
    }
</script>