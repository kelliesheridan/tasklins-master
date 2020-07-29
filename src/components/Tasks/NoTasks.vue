<template>
	<transition
	appear
	enter-active-class="animated zoomIn"
	leave-active-class="animated zoomOut"
	>
    <q-banner dense class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="done" color="primary" />
      </template>
      You have completed all of your tasks for today!
    </q-banner>
  </transition>
</template>

<script>
export default {
    
}
</script>