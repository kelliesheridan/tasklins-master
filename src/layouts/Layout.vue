<template>
  <q-layout view="hHh lpR fFf" class="gopher">
    <q-header v-if="loggedIn" elevated class="bg-primary text-white">
      <q-toolbar class="textureBar">
        <!-- <q-btn dense flat round color="accent" icon="notifications"/> -->
        <q-btn
          v-if="loggedIn"
          dense
          flat
          round
          class="side-menu"
          icon="games"
          color="positive"
          @click="left = !left"
        />
        <!-- <q-btn dense flat round icon="done" color="accent" @click="right = !right" /> -->
        <q-toolbar-title class="text-center">
          <q-img class="mainLogo" src="statics/tasklinslogo.png"></q-img>
        </q-toolbar-title>
        <q-btn
          v-if="loggedIn"
          dense
          flat
          to="/help"
          round
          color="warning"
          icon="help"
        />
        <q-btn
        v-if="loggedIn" 
        dense 
        flat 
        round 
        color="info" 
        @click="settings = true"
        icon="settings"
        />        
        <q-btn
          v-if="loggedIn"
          @click="logoutUser"
          dense
          flat
          round
          color="negative"
          icon="exit_to_app"
        />
        <q-btn
          v-if="!loggedIn"
          dense
          flat
          to="/auth"
          round
          color="positive"
          icon="account_circle"
        />
      </q-toolbar>
    </q-header>

    <q-footer v-if="loggedIn" class="text-center transparent">
      <div class="row transparent">

        <q-space/>

        <img src="statics/items/scroll-1.png" v-show="showBonusItem" class="bonusImg2" @click="showBonus = true" />
      </div>
      <div class="row textureBar">
        <q-btn
          color="accent" text-color="primary"
          round          
          @click="showAddTask = true"
          class="q-pa-lg add-task-btn-footer"
          icon="add">
        </q-btn>

        <q-space/>
        <q-tabs
          align="center"
          mobile-arrows
          shadow-2
          background-color="transparent"
          indicator-color="transparent"
          active-color="accent"
          class="text-secondary col-10"
        >
          <q-route-tab class="q-pa-xs" dense to="/index" icon="home" />
          <q-route-tab class="q-pa-xs" dense to="/journal" icon="menu_book" />
          <!-- <q-route-tab class="q-pa-xs" dense to="/tasklins" icon="pets" />
          <q-route-tab class="q-pa-xs" dense to="/community" icon="chat" /> -->
          <q-route-tab class="q-pa-xs" dense to="/explore" icon="explore" />
          <q-route-tab class="q-pa-xs" dense to="/challenges" icon="assessment" />
          <q-route-tab class="q-pa-xs" dense to="/profile" icon="person" />
        </q-tabs>
        <q-space/>
      </div>
    </q-footer>

    <q-drawer
      v-if="loggedIn"
      :breakpoint="767"
      show-if-above
      bordered
      content-class="felt"
      v-model="left"
      side="left"
    >
      <div>
        <q-img :class="!darkMode ? 'town-day' : 'town-night'" style="height: 250px;">
          <div class="eventBox bg-transparent">                 
              <img src="statics/items/scroll-1.png" v-show="showBonusItem" style="margin-top: 50px; margin-left: 50px" class="bonusImg" @click="showBonus = true" />
          </div>
        </q-img>
      </div>

      <!-- <div class="text-center q-pa-md">
        <search />
      </div> -->
      <div class="textureBar">
        <q-tabs
          outside-arrows
          indicator-color="transparent"
          active-color="secondary"
          background-color="transparent"
          class="col-10 text-accent"
        >
          <q-route-tab class="q-pa-xs" dense to="/index" icon="home" />
          <q-route-tab class="q-pa-xs" dense to="/journal" icon="menu_book" />
          <!-- <q-route-tab class="q-pa-xs" dense to="/tasklins" icon="pets" />
          <q-route-tab class="q-pa-xs" dense to="/community" icon="chat" /> -->
          <q-route-tab class="q-pa-xs" dense to="/explore" icon="explore" />
          <q-route-tab class="q-pa-xs" dense to="/challenges" icon="assessment" />
          <q-route-tab class="q-pa-xs" dense to="/profile" icon="person" />
          <!-- <q-route-tab class="q-pa-xs" dense to="/planuary" icon="eco" /> -->
        </q-tabs>
      </div>

      <div class="text-center q-mb-lg">
        <q-btn
          @click="showAddTask = true"         
          class="add-task-btn textureBar"
          round
          text-color="accent"
          size="18px"
          icon="add"
        >
        <q-tooltip content-class="bg-primary">Add New Task</q-tooltip>
        </q-btn>
      </div>

      <div class="q-ma-sm layout-details">
        <div>{{ profile.name }} (@{{ profile.username }})</div>
        <div>Level: {{ profile.level }}</div>
        <div>{{ profile.lin }}
          <q-img
        src="statics/items/lin.PNG"
        style="width:15px;">
        <q-tooltip content-class="bg-primary">{{ profile.lin }} Lin.</q-tooltip>
        </q-img>
        </div>
        <div>Tasks Completed Today: {{Object.keys(tasksCompletedToday).length}} </div>
      </div>

      <br />
      <div class="q-pa-lg text-center fixed-center-bottom">
            <a href="https://www.patreon.com/bePatron?u=9215033" target="_blank"
              >
              <q-btn class="textureBar" dense text-color="secondary" label="- Become a Patron -" /></a>
      </div>
    </q-drawer>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>

    <q-dialog
      v-model="showBonus"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
    <div class="text-center">
      <q-card class="randomEvent center">
        <q-card-section class="bg-primary u-center-text text-white">
          <div class="text-h5 bonusHeader">Happy New Year</div>
        </q-card-section>

        <q-card-section class="q-pt-md">
          <div>
            <q-item>
              <q-item-section side top>
                <!-- <q-avatar class="bonusImgFocus">
                  <img src="statics/items/scroll-1.png" />
                </q-avatar> -->
              </q-item-section>
              <q-item-section top>
                <q-item-label class="bonusBox" />
                  <p>Happy New Year! 2020 is finally over and an exciting new year has begun, along with big changes here at Tasklins. 
                  Most importantly, we are now open for new friends! We're open for new signups and are looking forward to seeing how our community grows and changes over the course of the year.</p>
                  <p>We've also launched the first over several big updates! Our challenges are more dynamic, our task page has taken its first steps toward its new journal form, and your Tasklins can now (start) to evolve as they level up. There's so much more to come, and we can't wait to share it with you!</p>
                  <p>Finally, our last big news... Planuary is here! Throughout the entire month of January, we'll be posting daily planning and goal setting exercises, along with new features and tools to help make your 2021 dreams into a reality.</p>
                  <p>That's all for now, but there will be plenty of more details to come over the course of the next week. For now, happy new year, happy planning, and thank you so very, very much for being here with us on this exciting new adventure.</p>
            </q-item-section>
            </q-item>
          </div>

        <q-card-actions align="right" class="bg-white text-teal" style="margin-top: -25px;">
          <q-btn label="OK" color="primary" v-close-popup @click="showBonusItem = false"/>
        </q-card-actions>

        </q-card-section>
      </q-card>
    </div>
    </q-dialog>

    <q-dialog v-if="settings" v-model="settings" >
      <settingsModal />
    </q-dialog>


    <q-page-container v-if="loggedIn">
      <router-view />
    </q-page-container>

    <q-page-container v-if="!loggedIn" class="bg-image">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink";
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  name: "Layout",
  data() {
    return {
      showAddTask: false,
      settings: false,
      levelUp: false,
      problem: null,
      accept: false,
      left: false,
      right: false,
      showBonus: false,
      showBonusItem: true,
      essentialLinks: [
        {
          title: "Home",
          icon: "home",
          link: "/index"
        },
        {
          title: "Todo",
          icon: "done",
          link: "/todo"
        },
        // {
        //   title: 'Tasklins',
        //   icon: 'pets',
        //   link: '/tasklins'
        // },
        {
          title: "Profile",
          icon: "person",
          link: "/profile"
        },
        {
          title: 'Explore',
          icon: 'explore',
          link: '/explore'
        },
        // {
        //   title: 'Community',
        //   icon: 'chat',
        //   link: '/community'
        // },
        {
          title: "Fitness",
          icon: "fitness_center",
          link: "/fitness"
        },
        // {
        //   title: "Writing",
        //   icon: "create",
        //   link: "/writing"
        // },
        {
          title: "Help",
          icon: "help",
          link: "/help"
        }
      ]
    };
  },
  computed: {
    ...mapGetters("profile", ["profile"]),
    ...mapGetters("tasklins", ["tasklin"]),
    ...mapGetters("settings", ["darkMode"]),
    ...mapGetters("tasks", ["tasksCompletedToday", "tasksCreatedToday", "tasksToday"]),
    ...mapState("auth", ["loggedIn"])
  },

  methods: {
    ...mapActions("profile", ["addXP", "changeLevel"]),
    ...mapActions("auth", ["logoutUser"]),
    onReset() {
      this.problem = null;
      this.accept = false;
    },
    generateRandomTasklin() {
      const colorArray = ["#b15858", "#cf7d95", "#8c5688", "#589fb1", "#5cdcc4", "#7eb158", "#f9f871", "#fa9f53", "#bc987e","#8c8c8c"];
      const bodyShapeArray = ["Ghost", "Round", "Squat"];
      const bodyTextureArray = ["Charred", "Crumpled", "Stitched"];
      const eyeArray = ["1", "2", "3", "4", "5"];
      const noseArray = ["1", "2", "3", "4"]
      const mouthArray = 5;
      const tongueArray = ["happy1", "happy2", "shock1", "shock2", "worried"]
      const tongueArrayColors = ["cyan", "green", "pink", "red"]
      let tasklin = {
        name: "",
        creation_date: Date.now(),
        type: "Monster",
        project: "Tasks",
        xp: 0,
        level: 1,
        color: this.profile.color,
        color2: colorArray[Math.floor(Math.random() * colorArray.length)],
        color3: colorArray[Math.floor(Math.random() * colorArray.length)],
        bodyShape: bodyShapeArray[Math.floor(Math.random() * bodyShapeArray.length)],
        bodyTexture: bodyTextureArray[Math.floor(Math.random() * bodyTextureArray.length)],
        eyeColor: colorArray[Math.floor(Math.random() * colorArray.length)],
        eyeType: "eyes" + eyeArray[Math.floor(Math.random() * eyeArray.length)],
        nose: "",
        mouth: "mouth" + mouthArray[Math.floor(Math.random() * mouthArray.length)],
        pattern1: "",
        eyebrowsOrTail: "",
        earsOrHorns: "",
        bodyShape2: "",
        pattern2: "",
        hatched: false,
        tongue: tongueArrayColors[Math.floor(Math.random() * tongueArrayColors.length)]
      };

      console.debug(tasklin);
    }
  },

  components: {
    "add-task": require("components/Tasks/Modals/addTask.vue").default,
    "settingsModal": require("components/Help/SettingsModal.vue").default,
    // search: require("components/Tasks/Tools/Search.vue").default,
    // 'new-user-info' : require('components/NewUserInfo.vue').default,
    // 'lin' : require('components/Shared/Lin.vue').default,
    // EssentialLink
  }
};
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  .side-menu {
    display: none;
  }
}

.bg-image {
  background-image: url(https://www.testingtheapp.tasklins.com/statics/trees.jpg);
  background-size: contain;
}

.felt {  
  background-color: $secondary;
}

.loggedIn {    
    background-color: $accent;
  }
  
.loggedInDark { 
    background-color: $dark;
}

.bg-image2 {
  background-image: url(https://www.testingtheapp.tasklins.com/statics/trees2.jpg);
  background-size: contain;
}

.layout-details {  
  color: #607d8b;  
  padding: 1rem;
  margin: 0 auto;
}

.eventBox {  
  margin: 0 auto;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

.town-day {
  background-image: url("/statics/backgrounds/TownBackground1Day.jpg");   
  background-size: cover;
}

.town-night {
  background-image: url("/statics/backgrounds/TownBackground1Night.jpg");  
  background-size: cover; 
}
</style>
