<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <q-banner dense class="settings.darkMode ? 'bg-black-3' : 'bg-grey-3'">
      <template v-slot:avatar>
        <q-icon name="done" color="primary" />
      </template>
      You have completed all of your tasks for this week!
    </q-banner>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("settings", ["settings"])
  }
};
</script>
