<template>
  <q-page padding>

  <div>
    
  </div>  

  <div class="row justify-center q-pa-md" >

    <div class="col-xs-12 col-sm-6 col-md-6 q-pa-md">
        <div>
        <list-header bgColor="bg-orange-4">Today's Tasks</list-header>
        <no-tasks
					v-if="!Object.keys(tasksToday).length && !Object.keys(tasksLate).length"></no-tasks>
          <tasks-late
					v-if="Object.keys(tasksLate).length"
					:tasksLate="tasksLate" />
        	<tasks-today
					v-if="Object.keys(tasksToday).length"
					:tasksToday="tasksToday" />
        </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-6 justify-center q-pa-md">
        <list-header bgColor="bg-orange-4">Your Tasklin</list-header>
        <div class="text-center">
              <img v-if="this.tasklin.color === 'blue'" src="statics/placeholder/blue3b.png"/>
              <img v-if="this.tasklin.color === 'pink'" src="statics/placeholder/pink3b.png"/>
              <img v-if="this.tasklin.color === 'purple'" src="statics/placeholder/purple3b.png"/>
              <img v-if="this.tasklin.color === 'green'" src="statics/placeholder/green3b.png"/>
            <p>
              Name: {{tasklin.name}}
              <br>
              Type: {{tasklin.type}}
              <br>
              Mood: So happy!
            </p>
        </div>
    </div>

  </div>

  <div class="row justify-center q-pa-md" >

        <div class="col-xs-12 col-sm-12 col-md-6 news q-pa-md">
        <list-header bgColor="bg-orange-4">Social Feed</list-header>
        <div class="text-left">
        <h6>Social Feed</h6>
        </div>
        </div>


        <div class="col-xs-12 col-sm-12 col-md-6 news q-pa-md">
        <list-header bgColor="bg-orange-4">News</list-header>
    <div class="text-left">
      <div class="q-pa-md" style="max-width: 350px">
        <q-list dense padding class="rounded-borders">
          <q-item>
            <q-item-section>
              <q-item-label overline><b>Next Steps</b></q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Help Button</q-item-label>
              <q-item-label caption>Button on help page to submit issues</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Social Feed</q-item-label>
              <q-item-label caption>See updates from other users</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>
              <q-item-label>Happiness Meter</q-item-label>
              <q-item-label caption>Get things done... happy Tasklin!</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
        </div>
        </div>
    </div>

  </q-page>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { date } from 'quasar'

export default {
    props: ['tasksTodo'],
    components: {
        'tasks-today' : require('components/Tasks/TasksToday.vue').default,
        'tasks-late' : require('components/Tasks/TasksLate.vue').default,
        'list-header' : require('components/Shared/ListHeader.vue').default,
        'no-tasks' : require('components/Tasks/NoTasks.vue').default
		},
	  computed: {
    ...mapGetters('profile', ['profile']),
    ...mapGetters('tasks', ['tasksToday', 'tasksLate']),
    ...mapGetters('tasklins', ['tasklin']),
    },
      methods: {
	...mapActions('profile', ['addXP']),
	 	},
    }
    
</script>

<style scoped>

img {
  border-radius: 8px;
  padding: 10px;
  max-width: 50%;
}

.news {
  margin:0%;

}

</style>
