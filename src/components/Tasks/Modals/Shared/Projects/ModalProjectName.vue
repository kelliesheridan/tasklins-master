<template>

            <div class="row q-mb-sm">
                <q-select
                outlined
                @input="$emit('update:project', $event)"
                class="col"
                :value="project"
                :options="options"
                label="Project" />
            </div>
        
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