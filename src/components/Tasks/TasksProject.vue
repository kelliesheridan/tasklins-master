<template>
	<transition
	appear
	enter-active-class="animated zoomIn"
	leave-active-class="animated zoomOut absolute-top"
	>
		<div>
		<list-header
		bgColor="bg-orange-4">Projects</list-header>

				<q-list
					separator
					bordered>

				<project
					v-for="(task, key) in tasksProject"
					:key="key"
					:task="task"
					:id="key">
					</project>
				</q-list>
		</div>
	</transition>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    props: ['tasksProject'],
    components: {
        'project' : require('components/Tasks/Project.vue').default,
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