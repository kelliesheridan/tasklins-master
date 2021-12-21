<template>
      <q-item      
      :key="key"
      :class="!ticket.completed ? 'bg-blue-1' : ticket.completed ? 'bg-green-1' : bg-yellow-1"
      >
        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">{{ ticket.name }}</span>
            <span class="text-grey-8">{{ ticket.user }}</span>
          </q-item-label>
          <q-item-label caption lines="1">
            {{ ticket.problem }}
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn @click="promptToDelete(id)" class="gt-xs" size="12px" flat dense round icon="delete" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="autorenew" />
            <q-btn :value="ticket.completed" @click="updateTicket({ id: id, updates: {completed: !ticket.completed} })" class="gt-xs" size="12px" flat dense round icon="done" />
          </div>
        </q-item-section>
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
          return moment(this.task.dueDate + ' ' + this.task.dueTime).format('LT')
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
      
    }
	}
</script>