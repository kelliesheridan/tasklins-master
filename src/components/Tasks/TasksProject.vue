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

				 <q-input class="col q-ma-sm"
					filled
					v-model="projectName"
					label="Project*"
					lazy-rules
					:rules="[ val => val && val.length > 0 || 'Please type a project']"
				/>
				</q-list>
		</div>
	</transition>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
const moment= require('moment') 

export default {

    components: {
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