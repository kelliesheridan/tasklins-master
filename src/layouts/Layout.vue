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
        <q-tabs class="col">
          <q-route-tab to="/index" icon="home" label="Home" />
          <q-route-tab to="/todo" icon="done" label="Todo" />
          <q-route-tab to="/fitness" icon="fitness_center" label="Fitness" />
          <q-route-tab to="/writing" icon="create" label="Writing" />
          <q-route-tab to="/help" icon="help" label="Help" />
        </q-tabs>
      </div>
      <div class="row no-wrap q-mb-sm text-center">
        <q-btn
          @click="showAddTask = true"
          rounded
          dense
          class="col-4"
          color="secondary"
          size="18px"
          icon="add"
        />
        <search class="col-8" />
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
      <q-img
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar v-if="this.tasklin != ''" size="80px">
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
            <q-badge align="bottom" floating color="secondary">{{profile.level}}</q-badge>
          </q-avatar>
          <div>{{ profile.name }}</div>
          <div>{{ profile.username }}</div>
          <!-- <div>{{profile.id}}</div> -->
        </div>
      </q-img>

      <div class="text-center q-pa-md">
        <search />
      </div>

      <div class="text-center q-mb-lg">
        <q-btn
          @click="showAddTask = true"
          round
          color="primary"
          size="18px"
          icon="add"
        />
      </div>

      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>

    <q-dialog v-model="levelUp" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-primary text-white" style="width: 400px">
        <q-card-section>
          <div class="text-h6">You Leveled Up!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          You reached level {{ profile.level }}! Right now, this doesn't really mean anything, but good job!
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-page-container v-if="loggedIn" class="loggedIn bg-simple">
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
          title: 'Profile',
          icon: 'person',
          link: '/profile'
        },
        // {
        //   title: 'Explore',
        //   icon: 'explore',
        //   link: '/explore'
        // },
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
        {
          title: "Writing",
          icon: "create",
          link: "/writing"
        },
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
    "add-task": require("components/Tasks/Modals/addTask.vue").default,
    search: require("components/Tasks/Tools/Search.vue").default,
    // 'new-user-info' : require('components/NewUserInfo.vue').default,
    // 'lin' : require('components/Shared/Lin.vue').default,
    EssentialLink
  }
};
</script>

<style scoped>
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

.bg-simple {
  background-color: #F7F7F7;
}

.loggedIn {
  background-color: bg-accent;
}

.bg-image2 {
  background-image: url(http://www.testingtheapp.tasklins.com/statics/trees2.jpg);
  background-size: contain;
}
</style>
