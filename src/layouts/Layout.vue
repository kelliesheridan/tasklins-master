<template>
  <q-layout view="hHh lpR fFf">
    <q-header v-if="loggedIn" elevated class="bg-primary text-white">
      <q-toolbar>
        <!-- <q-btn dense flat round color="accent" icon="notifications"/> -->
        <q-btn
          v-if="loggedIn && this.tasklin.color !== ''"
          dense
          flat
          round
          class="side-menu"
          icon="games"
          color="accent"
          @click="left = !left"
        />
        <!-- <q-btn dense flat round icon="done" color="accent" @click="right = !right" /> -->
        <q-toolbar-title class="text-center">
          Tasklins
        </q-toolbar-title>
        <q-btn
          v-if="loggedIn && this.tasklin.color !== ''"
          dense
          flat
          to="/help"
          round
          color="accent"
          icon="help"
        />        
        <q-btn
          v-if="loggedIn && this.tasklin.color !== ''"
          dense
          flat
          to="/settings"
          round
          color="accent"
          icon="settings"
        />
        <q-btn
          v-if="loggedIn"
          @click="logoutUser"
          dense
          flat
          round
          color="accent"
          icon="exit_to_app"
        />
        <q-btn
          v-if="!loggedIn"
          dense
          flat
          to="/auth"
          round
          color="accent"
          icon="account_circle"
        />
      </q-toolbar>
    </q-header>

    <q-footer v-if="loggedIn && this.tasklin.color !== ''" class="text-center">
      <div class="row">
        <q-tabs
          align="left"
          mobile-arrows
          shadow-2
          indicator-color="transparent"
          active-color="accent"
          class="text-secondary bg-primary col-10"
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

        <q-space />

        <q-btn
          flat
          @click="showAddTask = true"
          class="q-pa-xs add-task-btn-footer"
          icon="add"
        />
      </div>
    </q-footer>

    <q-drawer
      v-if="loggedIn && this.tasklin.color !== ''"
      :breakpoint="767"
      show-if-above
      content-class="bg-secondary"
      v-model="left"
      side="left"
    >
      <div>
        <q-img src="statics/background-forest.jpg" style="height: 250px">
          <div class="eventBox bg-transparent">                 
              <img src="statics/items/scroll-1.png" v-show="showBonusItem" style="margin-top: 50px; margin-left: 50px" class="scrollImg" @click="showBonus = true" />
          </div>
        </q-img>
      </div>

      <!-- <div class="text-center q-pa-md">
        <search />
      </div> -->
      <div>
        <q-tabs
          outside-arrows
          indicator-color="transparent"
          active-color="accent"
          class="col-10 text-secondary bg-primary"
        >
          <q-route-tab class="q-pa-sm" dense to="/index" icon="home" />
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
          class="add-task-btn"
          round
          color="primary"
          size="18px"
          icon="add"
        />
      </div>

      <div class="q-ma-sm layout-details">
        <div>{{ profile.name }}</div>
        <div>{{ profile.username }}</div>
        <div>Level: {{ profile.level }}</div>
        <div>{{ profile.lin }}</div>
      </div>

      <br />
      <!-- <div class="q-pa-lg fixed-center-bottom">
            <a href="https://www.patreon.com/bePatron?u=9215033" target="_blank"
              >
              <q-btn patron dense text-color="secondary" color="primary" label="Become a Patron" /></a>
      </div> -->
    </q-drawer>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>

    <!-- <q-dialog
      v-model="levelUp"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-primary text-white" style="width: 400px">
        <q-card-section>
          <div class="text-h6">You Leveled Up!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          You reached level {{ profile.level }}! Right now, this doesn't really
          mean anything, but good job!
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog> -->

    <q-dialog
      v-model="showBonus"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-primary text-white" style="width: 400px">
        <q-card-section>
          <div class="text-h6">Something happened!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Soon, this will be the space where you see the game world. Where you can find items and have unexpected things happen to you!
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup @click="showBonusItem = false"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-page-container v-if="loggedIn" class="loggedIn">
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
    ...mapState("auth", ["loggedIn"])
  },

  methods: {
    ...mapActions("profile", ["addXP", "changeLevel"]),
    ...mapActions("auth", ["logoutUser"]),
    onReset() {
      this.problem = null;
      this.accept = false;
    }
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
  background-image: url(http://www.testingtheapp.tasklins.com/statics/trees.jpg);
  background-size: contain;
}

.loggedIn {
  background-color: $accent;
}

.bg-image2 {
  background-image: url(http://www.testingtheapp.tasklins.com/statics/trees2.jpg);
  background-size: contain;
}

.layout-details {
  background-color: #eceff190;
  color: #607d8b;  
  padding: 1rem;
  margin: 0 auto;
}

.eventBox {  
  margin: 0 auto;
}

.scrollImg {
  width: 50%;
  height: auto;
}

.scrollImg:hover {
  animation: bounce;
  animation-duration: 2s;
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
</style>
