<template>
	<q-card>
    
    <modal-header>Register</modal-header>

		<q-form @submit.prevent="submitForm">
	    <q-card-section>
	    	

        <modal-user-name
        :name.sync="userInformation.name"
        ref="userInfoName"
        />

        <modal-user-username
        :username.sync="userInformation.username"
        ref="userInfoUserName"
        />

        <modal-user-about
        :about.sync="userInformation.about"
        ref="userInfoName"
        />

        <pre>{{ taskToSubmit }}</pre>

        </q-form>


    </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['task', 'id'],
    data() {
        return {
            model: null,
            userInformation: {
				name: "",
                username: "",
                about: "",
                avatar: "",
                friends: "",
                inventory: "",
                tasklins: "",
                private: false,
                signup: true,
                admin: false,
            }
            }
    },
		methods: {
			...mapActions('profile', ['updateProfile']),
			submitTask() {
				this.updateTask({
					id: this.id,
                    updates: this.taskToSubmit
                })
				this.$emit('close')
            },
            submitForm() {
			this.$refs.modalTaskName.$refs.name.validate()
			if (!this.$refs.modalTaskName.$refs.name.hasError) {
				this.submitTask()
			}
		}
        },
        components: {
		'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
        'modal-user-name': require('components/Users/Modals/ModalName.vue').default,
        'modal-user-username': require('components/Users/Modals/ModalUserName.vue').default,
        'modal-user-about': require('components/Users/Modals/ModalAbout.vue').default,
				},
		mounted() {
			this.taskToSubmit = Object.assign({}, this.task)
		}
	}
</script>