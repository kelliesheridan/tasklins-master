<template>
  <q-item class="task"      	
  	v-ripple>
    <q-item-section side top>
    </q-item-section>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

    <q-item-section>
      <q-item-label      	
        v-html="$options.filters.searchHighlight(task.name, search)">
      </q-item-label>        
      <div v-if="task.dueDate">
          <q-item-label
            class="task-date">
            {{ task.dueDate | niceDate }}
          </q-item-label>
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