<template>
  <q-item class="task"
  	@click="updateTask({ id: id, updates: { completed: !task.completed, dueDate: task.dueDate, task: task } }); addLin(task.completed);"
    :class="[!settings.darkMode ? 'bg-accent' : 'bg-dark', !task.completed ? '' : 'bg-positive']" 
    v-touch-hold:1000.mouse="showEditTaskModal"
  	clickable
  	v-ripple>
    <q-item-section side top>
      <q-checkbox
        size="sm" 
        v-model="task.completed"
        class="no-pointer-events checkbox-style" />
    </q-item-section>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

    <q-item-section class="task-name-section">
      <q-item-label
      	:class="{ 'text-strikethrough' : task.completed }"
        class="task-label"
        v-html="$options.filters.searchHighlight(task.name, search)">
      </q-item-label>

      <q-item-label v-if='task.dueDate && !task.nrepeating.weekly'       
        class="row justify-start">
        <small>{{ task.dueDate | niceDate }}</small>
      </q-item-label>
        
    </q-item-section>

    <!-- <q-item-section v-if="showProjects" side>
      <q-item-label
      	:class="{ 'text-strikethrough' : task.completed }"
        class="project-label"
        v-html="$options.filters.searchHighlight(task.project, search)">
      </q-item-label>
    </q-item-section> -->

    <q-item-section side>
      <div class="row">
        <q-btn class="task-btn"
          @click.stop="showEditTask = true"
          flat
          round
          dense
          color="primary"
          icon="edit">
        <q-tooltip content-class="bg-primary">Edit Task</q-tooltip>
        </q-btn>
        <q-btn class="task-btn"
          @click.stop="promptToDelete(id)"
          flat
          round
          dense
          color="red"
          icon="delete">
          <q-tooltip content-class="bg-primary">Delete</q-tooltip>
          </q-btn>
        <q-btn class="task-btn"
          @click.stop="pushDueDate({ id: id, task: task})"
          flat
          round
          dense
          color="blue"
          icon="rotate_right">
          <q-tooltip content-class="bg-primary">Postpone</q-tooltip>
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
  const moment= require('moment') 

	export default {
		props: ['task', 'id'],
    data() {
      return {
        showEditTask: false,
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
      },
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
    },
    filters: {
      niceDate(value) {
        return moment(value).format('ddd')
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
      'edit-task': require('components/Tasks/Modals/editTask.vue').default,
    }
	}
</script>