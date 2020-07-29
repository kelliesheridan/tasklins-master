<template>
   <q-card style="width: 550px">
        <modal-header>Add New Project</modal-header>

        <q-form @submit.prevent="submitForm">

            <q-card-section class="q-pt-none">

	    	<modal-project-name />

            <modal-project-tasklin />    
        
            <modal-project-color />

        </q-card-section>

        <modal-task-save></modal-task-save>	    
        </q-form>
    </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {

    data() {
        return {
            model: null,
            taskToSubmit: {
                name: '',
                project: '',
                npublic: false,
                nrepeating: false,
                dueDate: '',
                dueTime: '',
                completed: false,
                createdDate: '',
                lastModified: ''
            }
        }
    },
        components: {
		'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
		'modal-project-name': require('components/Tasks/Modals/Shared/Projects/ModalProjectName.vue').default,
        'modal-project-tasklin': require('components/Tasks/Modals/Shared/Projects/ModalProjectTasklin.vue').default,
        'modal-project-color': require('components/Tasks/Modals/Shared/Projects/ModalProjectColor.vue').default,
		'modal-task-save': require('components/Tasks/Modals/Shared/ModalTaskSave.vue').default,
				},
        methods: {
			...mapActions('tasks', ['addTask']),
			...mapActions('profile', ['addXPValue']),
			submitTask() {
                this.addTask(this.taskToSubmit)
                this.addXPValue(1)
				this.$emit('close')
            },
            submitForm() {
			this.$refs.modalTaskName.$refs.name.validate()
			if (!this.$refs.modalTaskName.$refs.name.hasError) {
				this.submitTask()
			}
		},
        }
    }
</script>