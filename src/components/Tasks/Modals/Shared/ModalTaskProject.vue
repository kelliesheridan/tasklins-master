<template>

    <q-input
    	outlined
    	v-model="projectName"
    	@input="$emit('projectName', $event)"
    	:rules="[val => !!val || 'Field is required']"
    	autofocus
		v-select-all
    	ref="projectName"
    	label="Project name*"
    	class="col">
        </q-input>
        
</template>

<script>
	import { selectAll } from 'src/directives/directive-select-all'

	export default {
		props: ['projectName'],
		directives: {
			selectAll
		}
	}
</script>