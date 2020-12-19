<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list padding>
      <q-item-label header>User Controls</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>24hr Clock</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="primary" v-model="show24hrTimeFormat" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show Projects on Tasks</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="primary" v-model="showProjectsOnPage" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Week Start Day</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="primary" v-model="hideCompletedTasks" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Hide Completed Tasks</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="primary" v-model="hideCompletedTasks" />
        </q-item-section>
      </q-item>

      <!-- <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Hide Tips</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="primary" v-model="hideTips" />
        </q-item-section>
      </q-item> -->

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Dark Mode</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="red" v-model="darkMode" />
        </q-item-section>
      </q-item>

      <div class="row q-mb-md">
        <q-space />
        <q-btn color="primary" label="Save Settings" @click="submit()" />
      </div>

      <!-- <q-separator spaced />
      <q-item-label header>Notifications</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Battery too low</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="blue" v-model="notif1" val="battery" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Friend request</q-item-label>
          <q-item-label caption>Allow notification</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="green" v-model="notif2" val="friend" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Picture uploaded</q-item-label>
          <q-item-label caption>Allow notification when uploading images</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-toggle color="red" v-model="notif3" val="picture" />
        </q-item-section>
      </q-item> -->
    </q-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("settings", ["settings"]),
    show24hrTimeFormat: {
      get() {
        return this.settings.show24hrTimeFormat;
      },
      set(value) {
        this.setShow24hrTimeFormat(value);
      }
    },
    showProjectsOnPage: {
      get() {
        return this.settings.showProjectsOnPage;
      },
      set(value) {
        this.setShowProjectsOnPage(value);
      }
    },
    hideCompletedTasks: {
      get() {
        return this.settings.hideCompletedTasks;
      },
      set(value) {
        this.setHideCompletedTasks(value);
      }
    },
    darkMode: {
      get() {
        return this.settings.darkMode;
      },
      set(value) {
        this.setDarkMode(value);
      }
    }
  },
  methods: {
    ...mapActions("settings", [
      "setShow24hrTimeFormat",
      "setShowProjectsOnPage",
      "setHideCompletedTasks",
      "setDarkMode",
      "fbUpdateSettings"
    ]),
    submit() {
      this.fbUpdateSettings();
      this.$q.notify({
        message: "Your Settings Have Been Updated",
        color: "primary",
        icon: "settings"
      });
    }
  }
};
</script>
