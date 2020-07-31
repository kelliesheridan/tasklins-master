<template>
            <div class="row q-mb-sm">
                 <q-input class="col q-ma-sm"
					filled
					v-model="project.projectName"
					label="Project*"
					lazy-rules
					:rules="[ val => val && val.length > 0 || 'Please type a project']"
				/>
            </div>
        
</template>

<script>
	import { selectAll } from 'src/directives/directive-select-all'

	export default {
        data() {
        return {
            project: {
                projectName: '',
                color: '',
                }
        }
    },
		props: ['name'],
		directives: {
			selectAll
		}
	}
</script>