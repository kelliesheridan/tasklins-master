<template>
<transition
  appear
  enter-active-class="animated zoomIn"
  leave-active-class="animated zoomOut"
>
<div class="q-mt-lg" v-if="!settings.hideCompletedTasks">
	<list-header
	class="textureBar">Completed Today</list-header>

		<q-list
			separator
			bordered>

			<task
			v-for="(task, key) in tasksCompletedToday"
		  	:key="key"
		  	:task="task"
		  	:id="key"></task>
		</q-list>
</div>
</transition>
</template>

<script>
import { mapGetters } from 'vuex'
const moment= require('moment') 

export default {
	props: ['tasksCompletedToday'],
	computed: {
		...mapGetters('settings', ['settings'])
	},
    components: {
		'task' : require('components/Tasks/Task.vue').default,
		'list-header' : require('components/Shared/ListHeader.vue').default
        }
    }
    
</script>