<template>
	<q-card style="width: 350px">
    
    <modal-header>Edit Task</modal-header>

		<q-form @submit.prevent="submitForm">
	    <q-card-section>
	    	

        <modal-task-name
        :name.sync="taskToSubmit.name"
        ref="modalTaskName"
        />

        <q-select
            outlined
            v-model="taskToSubmit.project"
            autofocus
            label="Project"
            class="col"
            :options="this.$store.state.tasks.projects">
        </q-select>

        </q-card-section>
        
        <q-card-section class="q-pt-none">
        <modal-task-due-date :dueDate.sync="taskToSubmit.dueDate"/>
            <!-- <q-btn class="task-btn"
                @click.stop="dueDateToday({ id: id, dueDate: task.dueDate })"
                flat
                round
                dense
                color="purple"
                icon="today">
                <q-tooltip content-class="bg-secondary">Do Today</q-tooltip>
            </q-btn> -->
        </q-card-section>

        <q-card-section>
            <!-- <modal-task-due-time v-if="taskToSubmit.dueDate" :dueTime.sync="taskToSubmit.dueTime" />  -->
        </q-card-section>
        
        <!-- <div class="q-mb-sm">
            <modal-task-npublic :npublic.sync="taskToSubmit.npublic"/>
            <modal-task-nrepeating :nrepeating.sync="taskToSubmit.nrepeating"/> 
        </div> -->
        
        <modal-task-save></modal-task-save>

        </q-form>


    </q-card>
</template>

<script>
import { mapActions } from 'vuex'
const moment = require('moment') 

export default {
    props: ['task', 'id'],
    data() {
        return {
            model: null,
            options: ['None', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
            taskToSubmit: {}
        }
        },
        computed: {
          taskDueTime() {
            if (this.settings.show24hrTimeFormat) {
            return this.task.dueTime
            }
            return moment(this.task.dueDate + ' ' + this.task.dueTime).format('LT')
            },  
        },
		methods: {
			...mapActions('tasks', ['updateTask', 'dueDateToday']),
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
		'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
		'modal-task-due-date': require('components/Tasks/Modals/Shared/ModalTaskDueDate.vue').default,
		// 'modal-task-due-time': require('components/Tasks/Modals/Shared/ModalTaskDueTime.vue').default,
		// 'modal-task-npublic': require('components/Tasks/Modals/Shared/ModalTaskPublic.vue').default,
		// 'modal-task-nrepeating': require('components/Tasks/Modals/Shared/ModalTaskRepeating.vue').default,
		'modal-task-save': require('components/Tasks/Modals/Shared/ModalTaskSave.vue').default,
				},
		mounted() {
			this.taskToSubmit = Object.assign({}, this.task)
		}
	}
</script>