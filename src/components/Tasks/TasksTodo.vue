<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
    <div>
      <q-list separator bordered>
        <task
          :class="{ hidden: hideTasks }"
          v-for="(task, key) in tasksTodo"
          :key="key"
          :task="task"
          :id="key"
        >
        </task>
      </q-list>
    </div>
  </transition>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
const moment = require("moment");

export default {
  props: ["tasksTodo"],
  data() {
    return {
      hideTasks: false
    };
  },
  components: {
    task: require("components/Tasks/Task.vue").default,
    // "list-header": require("components/Shared/ListHeader.vue").default
  },
  computed: {
    ...mapGetters("profile", ["profile"])
  },
  methods: {
    ...mapActions("profile", ["addXP"])
  }
};
</script>

<style scoped>
.hidden {
  display: none;
}

.late-highlight {
  border: 2px dotted red;
  margin: 0px;
}

.late-warning {
  animation: .4s jump ease 10 alternate;
}

@keyframes jump {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.15);
  }
}
</style>
