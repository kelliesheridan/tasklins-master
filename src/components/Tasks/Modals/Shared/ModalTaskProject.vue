<template>
		<q-select
			outlined
			v-model="project"
			@change="$emit('update:project', $event)"
			autofocus
			v-select-all
			ref="project"
			label="Project"
			class="col"
			:options="this.$store.state.tasks.projects">
		</q-select>
        
</template>

<script>
	import { selectAll } from 'src/directives/directive-select-all'

	export default {
		props: ['project'],

		  data () {
			return {
			model: null,
			options: [
				'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
			]
			}
		  },

		directives: {
			selectAll
		}
	}
</script>