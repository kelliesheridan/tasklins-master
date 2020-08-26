<template>
	<div>
		<q-list
		separator
		bordered>

			<task
				v-for="(task, key) in tasksTodo"
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
    props: ['tasksInitial'],
    components: {
        'task' : require('components/Tasks/TaskInitial.vue').default,
		},
	computed: {
	...mapGetters('profile', ['profile']),
    },
      methods: {
	...mapActions('profile', ['addXP']),
	 	},
    }
    
</script>