<template>
  <q-item 
  	@click="updateTask({ id: id, updates: { completed: !task.completed } }); addXP(task.completed); addLin(task.completed);"
  	:class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    v-touch-hold:1000.mouse="showEditTaskModal"
  	clickable
  	v-ripple>
    <q-item-section side top>
      <q-checkbox 
        v-model="task.completed"
        class="no-pointer-events" />
    </q-item-section>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

    <q-item-section>
      <q-item-label
      	:class="{ 'text-strikethrough' : task.completed }"
        v-html="$options.filters.searchHighlight(task.name, search)">
      </q-item-label>
    </q-item-section>

    <q-item-section v-if="showProjects" side>
      <q-item-label
      	:class="{ 'text-strikethrough' : task.completed }"
        v-html="$options.filters.searchHighlight(task.project, search)">
      </q-item-label>
    </q-item-section>

    <q-item-section v-if="task.dueDate" side>
      <div class="row">
        <div class="column justify-center">
          <q-icon 
            name="event"
            size="18px"
            class="q-mr-xs" />
        </div>
        <div class="column">
          <q-item-label 
            class="row justify-end"
            caption>
            {{ task.dueDate | niceDate }}
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn
          @click.stop="showEditTask = true"
          flat
          round
          dense
          color="primary"
          icon="edit">
          <q-tooltip content-class="bg-secondary">Edit Task</q-tooltip>
        </q-btn>
        <q-btn
          @click.stop="promptToDelete(id)"
          flat
          round
          dense
          color="red"
          icon="delete">
          <q-tooltip content-class="bg-secondary">Delete</q-tooltip>
          </q-btn>
        <q-btn
          @click.stop="dueDateToday({ id: id, dueDate: task.dueDate })"
          flat
          round
          dense
          color="purple"
          icon="today">
        <q-tooltip content-class="bg-secondary">Do Today</q-tooltip>
          </q-btn>
        <q-btn
          @click.stop="pushDueDate({ id: id, dueDate: task.dueDate })"
          flat
          round
          dense
          color="blue"
          icon="rotate_right"
          >
          <q-tooltip content-class="bg-secondary">+1 Day</q-tooltip>
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
        return date.formatDate(this.task.dueDate + ' ' + this.task.dueTime, 'h:mmA')
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
      ...mapActions('tasks', ['updateTask', 'deleteTask', 'pushDueDate', 'dueDateToday']),
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
      } 
    },
    filters: {
      niceDate(value) {
        return date.formatDate(value, 'ddd MMM D')
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