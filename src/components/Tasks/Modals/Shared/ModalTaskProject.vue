<template>
		<q-select
			outlined
			@change="$emit('update:project', $event)"
			v-model="project"
			autofocus
			v-select-all
			label="Project"
			class="col"
			:options="this.$store.state.tasks.projects">
		</q-select>
        
</template>

<script>
	import { selectAll } from 'src/directives/directive-select-all'

	export default {
		props: ['project'],
		directives: {
			selectAll
		}
	}
</script>