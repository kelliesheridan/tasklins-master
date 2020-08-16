<template>
	 <q-select
      outlined
      v-model="projectSearchField"
      autofocus
      label="Project"
      class="col"
      :options="projectOptions">
  </q-select>
</template>

<script>
	import { mapStore, mapState, mapActions } from 'vuex'
	
	export default {
		computed: {
      ...mapState('tasks', ['projectSearch']),
      projectOptions: {
        get() {
          if (this.$store.state.tasks.projects.length == undefined) {
            return [];
          } else {
          return this.$store.state.tasks.projects
        }
        },
        set() {

        }
      },
			projectSearchField: {
				get() {
					return this.projectSearch
				},
				set(value) {
					this.setProjectSearch(value)
				}
			}
		},
		methods: {
			...mapActions('tasks', ['setProjectSearch'])
		},
	
	}
</script>