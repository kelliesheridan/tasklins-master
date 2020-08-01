<template>
		<q-select
			outlined
			v-model="name"
			@change="$emit('update:name', $event)"
			:rules="[val => !!val || 'Field is required']"
			autofocus
			v-select-all
			ref="name"
			label="Task name"
			class="col"
			:options="this.$store.state.tasks.projects">
		</q-select>
        
</template>

<script>
	import { selectAll } from 'src/directives/directive-select-all'

	export default {
		props: ['name'],
		directives: {
			selectAll
		}
	}
</script>