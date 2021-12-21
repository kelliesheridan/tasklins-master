<template>

    <q-input
    	outlined
    	:value="name"
    	@input="$emit('update:name', $event)"
    	:rules="[val => !!val || 'Field is required']"
    	autofocus
		v-select-all
    	ref="name"
    	label="Task name"
    	class="col task-input">
        </q-input>
        
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