<template>
	<div>
		<q-list separator>
			<p v-for="(project, projKey) in tasksWeekly"
				:key="projKey"
				> {{project.name}}
				<task
				v-for="(task, key) in project.task"
				:key="key"
				:task="task"
				:id="key">
			</task>
			</p>
		</q-list>
		</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
const moment= require('moment') 

export default {
    props: ['tasksWeekly'],
    components: {
        'task' : require('components/Tasks/TaskIndex.vue').default,
		},
	computed: {
	...mapGetters('profile', ['profile']),
    },
      methods: {
	...mapActions('profile', ['addXP']),
	 	},
    }
    
</script>