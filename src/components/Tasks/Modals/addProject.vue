<template>
  <q-card style="width: 550px">
    <modal-header>Add New Project</modal-header>

    <q-form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <q-input
          outlined
          v-model="project.projectName"
          :rules="[val => !!val || 'Field is required']"
          autofocus
          ref="name"
          label="Project name *"
          class="col"
        >
        </q-input>

        <!-- <q-select
                outlined
                v-model="project.projectName"
                :options="this.$store.state.tasks.projects">
            </q-select> -->

        <div>
          <div>
            <p class="text-center">
              Soon, you'll be able to assign each project to a Tasklin. For now,
              your starter Tasklin will gain experience on all projects.
            </p>
          </div>
          <div>
            <q-select
              disable
              readonly
              filled
              label="Tasks"
              v-model="project.projectTasklin"
              :options="this.$store.state.tasks.projects"
            />
          </div>
        </div>
      </q-card-section>

      <modal-task-save></modal-task-save>
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
      .default,
    "modal-task-save": require("components/Tasks/Modals/Shared/ModalTaskSave.vue")
      .default
  },
  methods: {
    ...mapActions("tasks", ["addProject"]),
    ...mapGetters("profile", ["profile"]),

    submitProject() {
      this.addProject(this.project);
      this.$emit("close");
    },
    submitForm() {
      this.submitProject();
    }
  }
};
</script>
