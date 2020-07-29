<template>
   <q-card>
        <modal-header>Join the World of Tasklins</modal-header>

        <q-form @submit.prevent="submitForm">

            <q-card-section class="q-pt-none">

	    <modal-user-name 
	    	:name.sync="userToSubmit.name"
	    	ref="modalUserName" />

        <modal-user-tag
            :project.sync="taskToSubmit.usertag"/>
        
        <modal-first-tasklin :firstTasklin.sync="userToSubmit.firstTasklin"/>

    </q-card-section>

        <modal-task-save></modal-task-save>	    

        <pre>{{ userToSubmit }}</pre>

        </q-form>


    </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {

    data() {
        return {
            newUserData: {
                name: '',
                usertag: '',
                firstTasklin: '',
            }
        }
    },
        components: {
		'modal-header': require('components/Tasks/Modals/Signup/ModalHeader.vue').default,
		'modal-user-name': require('components/Tasks/Modals/Signup/ModalUserName.vue').default,
		'modal-user-tag': require('components/Tasks/Modals/Signup/ModalTaskProject.vue').default,
		// 'modal-user-avatar': require('components/Tasks/Modals/Signup/ModalAvatar.vue').default,
		'modal-first-tasklin': require('components/Tasks/Modals/Signup/ModalFirstTasklin.vue').default,
		'modal-task-save': require('components/Tasks/Modals/Shared/ModalTaskSave.vue').default,
				},
        methods: {
			...mapActions('profile', ['addNewUser']),
			submitNewUser() {
				this.addUser(this.userToSubmit)
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