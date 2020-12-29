<template>
  <!-- <q-select
      outlined
      v-model="projectSearchField"      
      label="Project"
      class="col"
      :options="projectOptions">
  </q-select> -->

  <ul id="project-list">
    <p v-for="project in this.projectOptions" :key="project">
      <q-btn dense flat @click="projectClick(project)">
        {{ project }}
      </q-btn>
    </p>
  </ul>
</template>

<script>
import { mapStore, mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("tasks", ["projectSearch"]),
    projectOptions: {
      get() {
        if (this.$store.state.tasks.projects.length == undefined) {
          return [];
        } else {
          return this.$store.state.tasks.projects;
        }
      },
      set() {}
    },
    projectSearchField: {
      get() {
        return this.projectSearch;
      },
      set(value) {
        this.setProjectSearch(value);
      }
    }
  },
  methods: {
    ...mapActions("tasks", ["setProjectSearch"]),
    projectClick(project) {
      console.debug(project);
    }
  }
};
</script>
