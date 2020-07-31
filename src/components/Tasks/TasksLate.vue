<template>
	<div>
		<q-list
		separator
		bordered		>

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