<template>
	<transition
	appear
	enter-active-class="animated zoomIn"
	leave-active-class="animated zoomOut absolute-top"
	>
	<div>
		<list-header
		clickable
		v-ripple
		@click="hideTasks = !hideTasks"
		bgColor="bg-orange-4">Tasks</list-header>

				<q-list					
					separator
					bordered>

				<task
					:class="{ hidden: !hideTasks }"
					v-for="(task, key) in tasksTodo"
					:key="key"
					:task="task"
					:id="key">
					</task>
				</q-list>
	</div>
	</transition>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
	props: ['tasksTodo'],
	data() {
      return {
        hideTasks: true
      }
    },
    components: {
        'task' : require('components/Tasks/Task.vue').default,
        'list-header' : require('components/Shared/ListHeader.vue').default
		},
	computed: {
    ...mapGetters('profile', ['profile']),
    },
      methods: {
	...mapActions('profile', ['addXP']),
		 },
    }
    
</script>

<style scoped>
.hidden {
	display: none
}
</style>