<template>
  <q-layout view="hHh lpR fFf" class="gopher">
    <q-header v-if="loggedIn" elevated class="bg-primary text-white">
      <q-toolbar class="textureBar">
        <!-- <q-btn dense flat round color="accent" icon="notifications"/> -->
        <q-btn
          v-if="loggedIn && this.tasklin.name !== ''"
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
          v-if="loggedIn && this.tasklin.name !== ''"
          dense
          flat
          to="/help"
          round
          color="warning"
          icon="help"
        />        
        <q-btn
          v-if="loggedIn && this.tasklin.name !== ''"
          dense
          flat
          to="/settings"
          round
          color="info"
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

        <img src="statics/items/chest-1.png" v-show="showBonusItem" class="bonusImg2" @click="showBonus = true" />
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
          <q-route-tab class="q-pa-xs" dense to="/todo" icon="done" />
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
        <q-img :class="!settings.darkMode ? 'town-day' : 'town-night'" style="height: 250px;">
          <div class="eventBox bg-transparent">                 
              <img src="statics/items/chest-1.png" v-show="showBonusItem" style="margin-top: 50px; margin-left: 50px" class="bonusImg" @click="showBonus = true" />
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
          <q-route-tab class="q-pa-xs" dense to="/todo" icon="done" />
          <!-- <q-route-tab class="q-pa-xs" dense to="/tasklins" icon="pets" />
          <q-route-tab class="q-pa-xs" dense to="/explore" icon="explore" />
          <q-route-tab class="q-pa-xs" dense to="/community" icon="chat" /> -->
          <q-route-tab class="q-pa-xs" dense to="/explore" icon="explore" />
          <q-route-tab class="q-pa-xs" dense to="/challenges" icon="assessment" />
          <q-route-tab class="q-pa-xs" dense to="/profile" icon="person" />
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
        src="statics/items/lin.png"
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
          <div class="text-h5 bonusHeader">Something Happened</div>
        </q-card-section>

        <q-card-section class="q-pt-md">
          <div>
            <q-item>
              <q-item-section side top>
                <q-avatar class="bonusImgFocus">
                  <img src="statics/items/chest-1.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section top>
                <q-item-label class="bonusBox">
                  You found a chest! There's nothing in it because Kellie hasn't figured out how to do that yet. But yay! Finding stuff! Have an excellent day!
                </q-item-label>
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
      levelUp: false,
      problem: null,
      accept: false,
      left: false,
      right: false,
      showBonus: false,
      showBonusItem: false,
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
    ...mapGetters("settings", ["settings"]),
    ...mapGetters("tasks", ["tasksCompletedToday"]),
    ...mapState("auth", ["loggedIn"])
  },

  methods: {
    ...mapActions("profile", ["addXP", "changeLevel"]),
    ...mapActions("auth", ["logoutUser"]),
    onReset() {
      this.problem = null;
      this.accept = false;
    },
  },

  components: {
    "add-task": require("components/Tasks/Modals/addTask.vue").default
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
