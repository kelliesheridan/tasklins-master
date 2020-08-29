<template>
<transition
  appear
  enter-active-class="animated zoomIn"
  leave-active-class="animated zoomOut"
>
<div class="q-mt-lg" v-if="!settings.hideCompletedTasks">
	<list-header
	bgColor="bg-green-4">Completed</list-header>

		<q-list
			separator
			bordered>

			<task
			v-for="(task, key) in tasksCompleted"
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
	props: ['tasksCompleted'],
	computed: {
		...mapGetters('settings', ['settings'])
	},
    components: {
		'task' : require('components/Tasks/Task.vue').default,
		'list-header' : require('components/Shared/ListHeader.vue').default
        }
    }
    
</script>