<template>
  <q-card style="width: 550px">
    <modal-header>Delete Project</modal-header>

    <q-form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <q-select
          outlined
          label="Project to Delete"
          v-model="project.projectName"
          :options="this.$store.state.tasks.projects"
          @input="setProjectCount()"
        >
        </q-select>
        <p v-if="this.projectCount > 0 && this.project.projectName != 'Tasks'">
          Sorry, can't delete. Project has {{ projectCount }} associated tasks!
        </p>
        <p v-if="this.project.projectName == 'Tasks'">
          Sorry, you can't delete Tasks!
        </p>
      </q-card-section>

      <div class="center q-pt-sm">
      <q-btn 
        padding
        color="secondary"
        :disable="this.projectCount > 0 || this.project.projectName == 'Tasks'"
        @click="submitDelete()"
        >Delete</q-btn>
      </div>  
      <br>
    </q-form>
  </q-card>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      project: {
        projectName: "",
        color: ""
      },
      projectCount: 0,
      val: "",
      options: ["Tasks"]
    };
  },
  computed: {
    ...mapState({
      message: state => state.state
    })
  },
  components: {
    "modal-header": require("components/Tasks/Modals/Shared/ModalHeader.vue")
      .default
  },
  methods: {
    ...mapActions("tasks", ["addProject", "deleteProject"]),
    ...mapGetters("profile", ["profile"]),
    submitDelete() {
      this.deleteProject(this.project.projectName);
      this.$emit("close");
    },
    setProjectCount() {
      if (this.project.projectName) {
        var count = Object.values(this.$store.state.tasks.tasks).filter(x => x.project == this.project.projectName && !x.completed).length;
        this.projectCount = count;
      }
    }
  }
};
</script>
