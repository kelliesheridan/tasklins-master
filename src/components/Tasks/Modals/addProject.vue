<template>
   <q-card style="width: 550px">
        <modal-header>Add New Project</modal-header>

        <q-form @submit.prevent="submitForm">

            <q-card-section class="q-pt-none">

            <q-input
                outlined
                v-model="project.projectName"
                :rules="[val => !!val || 'Field is required']"
                autofocus
                ref="name"
                label="Project name *"
                class="col">
            </q-input>

            <!-- <q-select
                outlined
                v-model="project.projectName"
                :options="this.$store.state.tasks.projects">
            </q-select> -->

            <modal-project-tasklin />    
        
             <table style="width:100%">
                <tr>
                <th><img src="statics/colors/yellow.jpg" class="size"></th>
                <th><img src="statics/colors/blue.jpg" class="size"></th>
                <th><img src="statics/colors/green.jpg" class="size"></th>
                <th><img src="statics/colors/purple.jpg" class="size"></th>
                </tr>
                <tr class="picker">
                <th><q-radio v-model="project.color" val="yellow" color="yellow" /></th>
                <th><q-radio v-model="project.color" val="blue" color="blue" /></th>
                <th><q-radio v-model="project.color" val="green" color="green" /></th>
                <th><q-radio v-model="project.color" val="purple" color="purple" /></th>
                </tr>
            </table>

        </q-card-section>

        <modal-task-save></modal-task-save>	    
        </q-form>
    </q-card>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            project: {
                projectName: '',
            },
            options: [
                
            ]
        }
    },
    computed: {
        ...mapState({
            message: state => state.state
        }),

        },
    components: {
    'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
    'modal-project-tasklin': require('components/Tasks/Modals/Shared/Projects/ModalProjectTasklin.vue').default,
    'modal-task-save': require('components/Tasks/Modals/Shared/ModalTaskSave.vue').default,
    },
    methods: {
        ...mapActions('tasks', ['addProject']),
        ...mapGetters('profile', ['profile']),
        
        
        
        submitProject() {
            this.addProject(this.project)
            this.$emit('close')
        },
        submitForm() {
            this.submitProject()
        },
    },
}
</script>