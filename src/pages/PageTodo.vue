<template>
  <q-page>

	  <div class="q-pa-md absolute full-width full-height column">

		  <div class="row q-mb-md">
			<sort />
			<q-btn @click="showAddProject = true" class="new-project" color="secondary" glossy label="New Project" />

		  </div>

		  <template v-if="tasksDownloaded">
			<p v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length">No search results.</p>

			<q-scroll-area class="q-scroll-area-tasks">
				<no-tasks
					v-if="!Object.keys(tasksTodo).length && !search"></no-tasks>

				<tasks-todo
					v-if="Object.keys(tasksTodo).length"
					:tasksTodo="tasksTodo" />

				<tasks-completed 
					v-if="Object.keys(tasksCompleted).length"
					:tasksCompleted="tasksCompleted" />

			</q-scroll-area>

        <q-dialog v-model="showAddProject">
          <add-project @close="showAddProject=false"
          />
        </q-dialog>    

		  </template>

		  <template v-else>
			  <span class="absolute-center">
				<q-spinner-audio size="3em" color="secondary" />
			  </span>
		  </template>
	  </div>
  </q-page>
</template>

<script>
	import { mapGetters, mapState } from 'vuex'

	export default {
	 data () {
      return {
     showAddProject: false,
    }
  },
		
	mounted() {
    	if (this.profile.signup) {
    		this.$router.push("/initial");
  		}
  	},
		computed: {
			...mapGetters('profile', ['profile']),
			...mapGetters('tasks', ['tasksTodo', 'tasksCompleted', 'tasksSorted']),
			...mapState('tasks', ['search', 'tasksDownloaded'])
		},
		components: {
			'add-project' : require('components/Tasks/Modals/addProject.vue').default,
			'tasks-todo' : require('components/Tasks/TasksTodo.vue').default,
			'tasks-completed' : require('components/Tasks/TasksCompleted.vue').default,
			'sort' : require('components/Tasks/Tools/Sort.vue').default,
			'no-tasks' : require('components/Tasks/NoTasks.vue').default
		}
	}
</script>

<style>
	.q-scroll-area-tasks {
		display: flex;
		flex-grow: 1;
	}

	.new-project {
		height: 50%;
		margin-top: auto;
		margin-bottom: auto;
		margin-left: 10px;
	}
</style>
