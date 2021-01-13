<template>
	<div class="tasks-late-section">
		<q-list
		separator>

			<task
				v-for="(task, key) in tasksLate"
				:key="key"
				:task="task"
				:id="key">
			</task>
		</q-list>
		</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
const moment= require('moment') 

export default {
    props: ['tasksLate'],
    components: {
        'task' : require('components/Tasks/TaskIndexLate.vue').default,
		},
	computed: {
	...mapGetters('profile', ['profile']),
    },
      methods: {
	...mapActions('profile', ['addXP']),
	 	},
    }
    
</script>