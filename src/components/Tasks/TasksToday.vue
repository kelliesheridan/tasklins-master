<template>
	<div>
		<q-list
		separator
		>

			<task
				v-for="(task, key) in tasksToday"
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
    props: ['tasksToday'],
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