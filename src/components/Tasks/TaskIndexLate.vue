<template>
  <q-item class="task task-late" 

  	@click="updateTask({ id: id, updates: { completed: !task.completed, dueDate: task.dueDate, task: task } }); addLin(task.completed);"
  	:class="{ 'late-highlight' : !task.completed }"

    v-touch-hold:1000.mouse="showEditTaskModal"
  	clickable
  	v-ripple>
    <q-item-section side top>
      <q-checkbox 
        v-model="task.completed"
        keep-color
        color="red" 
        class="no-pointer-events late-warning" />
    </q-item-section>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

    <q-item-section>             
      <q-item-label
      	:class="{ 'text-strikethrough' : task.completed }"
        v-html="$options.filters.searchHighlight(task.name, search)">        
      </q-item-label>      
    </q-item-section>

    <q-item-section  side>
      <q-item-label
        v-if="showProjects"
      	:class="{ 'text-strikethrough' : task.completed }"
        v-html="$options.filters.searchHighlight(task.project, search)">
      </q-item-label>

      <q-item-label class="late-warning">
        <span v-if="task.dueDate != ''">
        # Days Late: {{this.getDaysLate(task.dueDate)}}
        </span>
      </q-item-label>
    </q-item-section>


    <q-item-section side>
      <div class="row">
        <q-btn class="task-btn"
          @click.stop="showEditTask = true"
          flat
          round
          dense
          color="primary"
          icon="edit">
        <q-tooltip content-class="bg-secondary">Edit Task</q-tooltip>
        </q-btn>

        <q-btn class="task-btn"
          @click.stop="promptToDelete(id)"
          flat
          round
          dense
          color="red"
          icon="delete">
          <q-tooltip content-class="bg-secondary">Delete</q-tooltip>
          </q-btn>

          <q-btn class="task-btn"
          @click.stop="pushDueDate({ id: id, dueDate: task.dueDate, nrepeating: task.nrepeating })"
          flat
          round
          dense
          color="blue"
          icon="rotate_right"
          >
          <q-tooltip content-class="bg-secondary">Postpone</q-tooltip>
          </q-btn>
      </div>
    </q-item-section>

    <q-dialog v-model="showEditTask">
      <edit-task 
        @close="showEditTask = false"
        :task="task"
        :id="id" />
    </q-dialog>
    
  </q-item>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  import { date } from 'quasar'
  const moment = require('moment') 

	export default {
		props: ['task', 'id'],
    data() {
      return {
        showEditTask: false
      }
    },
    computed: {
      ...mapState('tasks', ['search']),
      ...mapGetters('settings', ['settings']),
      taskDueTime() {
        if (this.settings.show24hrTimeFormat) {
        return this.task.dueTime
        }
        return moment(this.task.dueDate + ' ' + this.task.dueTime).format('h:mmA')
      },
      showProjects() {
        if (this.settings.showProjectsOnPage != undefined) {
          return this.settings.showProjectsOnPage;
        } else {
          return false;
        }
      }
    },
    methods: {
      ...mapActions('tasks', ['updateTask', 'deleteTask', 'pushDueDate']),
      ...mapActions('profile', ['addXP', 'addLin']),
      showEditTaskModal() {
        this.showEditTask = true
      },
      promptToDelete(id) {
        this.$q.dialog({
          title: 'Confirm',
          message: 'Really delete?',
          ok: {
            push: true
          },
          cancel: {
            color: 'negative'
          },
          persistent: true
        }).onOk(() => {
          this.deleteTask(id)
        })
      },
      getDaysLate(taskDueDate) {
        return moment(moment().format("YYYY-MM-DD")).diff(moment(moment(taskDueDate).format("YYYY-MM-DD")), 'days');
        }
    },
    filters: {
      niceDate(value) {
        return moment(value).format('ddd MMM D')
      },
      searchHighlight(value, search) {
        if (search) {
          let searchRegExp = new RegExp(search, 'ig')
          return value.replace(searchRegExp, (match) => {
            return '<span class="bg-yellow-6">' + match + '</span>'
          })
        }
        return value
      }
    },
    components: {
      'edit-task': require('components/Tasks/Modals/editTask.vue').default   
    }
	}
</script>

<style>
.late-highlight {
  border: 2px dotted red;
  margin: 0px;
}

.late-warning {
  animation: .4s jump ease 10 alternate;
}

@keyframes jump {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.15);
  }
}

</style>