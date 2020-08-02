<template>
  <q-page padding>
  <div class="q-pa-md" style="max-width: 400px">


    </div>

    <q-dialog v-model="showNewUser1" persistent transition-show="scale" transition-hide="scale">
      <q-card class="card">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">Welcome to Tasklins!</div>
        </q-card-section>

        <q-card-section class="q-pt-md">
          <div>
            <q-item>
              <q-item-section side top>
                <q-avatar rounded class="pip-avatar">
                  <img src="statics/Piper.jpg" />
                </q-avatar>
              </q-item-section>
              <q-item-section top>
                <q-item-label>Hi, I'm Piper! I'll be showing you around. Don't mind the dust, things are still pretty heavily under construction around here, but we're happy to have you!</q-item-label>
              </q-item-section>
            </q-item>
          </div>

        <q-card-actions align="right">
          <q-btn flat label="Next" color="primary" @click="showNewUser2 = true" v-close-popup />
        </q-card-actions>

        </q-card-section>


      </q-card>
    </q-dialog>


    <q-dialog v-model="showNewUser2" persistent transition-show="scale" transition-hide="scale">
      <q-card class="card">

        <q-card-section class="q-pt-md">
          <div>
            <q-item>
              <q-item-section side top>
                <q-avatar rounded class="pip-avatar">
                  <img src="statics/Piper.jpg" />
                </q-avatar>
              </q-item-section>
              <q-item-section top>
                <q-item-label>Now, before you start adding in your tasks, we need to know a little more about you.</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-md">
              <q-form
      @submit.prevent="submitForm"
      class="q-gutter-md"
    >
      <div class="row">
        <q-input class="col q-ma-sm"
        filled
        v-model="changeName"
        label="Your First Name*"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input class="col q-ma-sm"
        filled
        v-model="changeUsername"
        label="Username*"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      
      </div>

      <q-input
        filled        
        v-model="changeAbout"
        label="What's the most exciting goal you're currently working toward?"
        :rules="[ val => val.length <= 250 || 'No more than 250 characters']"
      />

      <div class="q-pa-md">
        <q-badge :style="{ 'background-color': this.profile.color }" text-color="black" class="q-mb-sm">
          {{ this.profile.color }}
        </q-badge>

        <q-color
          :color="changeColor" 
          v-model="changeColor"
          no-footer
          no-header
          default-view="palette"
          class="my-picker"
        />
      </div>

      <!-- <q-toggle v-model="togglePrivate" label="My profile is public" /> -->

      </q-form>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Next" color="primary" @click="showNewUser3 = true" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showNewUser3" persistent transition-show="scale" transition-hide="scale">
      <q-card class="card">

        <q-card-section class="q-pt-md">
          <div>
            <q-item>
              <q-item-section side top>
                <q-avatar rounded class="pip-avatar">
                  <img src="statics/Piper.jpg" />
                </q-avatar>
              </q-item-section>
              <q-item-section top>
                <q-item-label>Next up, it's time to meet your first Tasklin. Eventually, you'll be able to collect a wide variety of creatures, but as Tasklins continues to grow, your first pet will be here growing along with you.</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </q-card-section>
        
        <div class="thinger">
        <q-card-section class="q-pt-md">
          <div>
            <img src="statics/eggs/blue3.png" class="responsive egg">
            <img src="statics/eggs/purple3.png" class="responsive egg">            
            <img src="statics/eggs/green3.png" class="responsive egg">
            <img src="statics/eggs/pink3.png" class="responsive egg">                 
          </div>
        </q-card-section>

        <q-card-section class="q-pt-md">
          <div class="q-pa-md">
            <div class="q-gutter-sm">
              <q-radio v-model="color" val="blue" label="Blue" color="blue" />
              <q-radio v-model="color" val="purple" label="Purple" color="purple" />
              <q-radio v-model="color" val="green" label="Green" color="green" />
              <q-radio v-model="color" val="pink" label="Pink" color="pink" />
            </div>
          </div>
        </q-card-section>
        </div>
    
        <q-card-actions align="right">
          <q-btn v-if="showNewUser3" label="Next" @click="updateUserProfile; showNewUser4 = true" v-close-popup color="primary"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

      <div class="col text-center" v-if="showNewUser4">

        <q-card class="my-card">
          <div>
            <q-item>
              <q-item-section side top>
                <q-avatar rounded class="pip-avatar">
                  <img src="statics/Piper.jpg" />
                </q-avatar>
              </q-item-section>
              <q-item-section top side>
                <q-item-label v-if="hatched === false">All Tasklins start out as eggs. You can store as many eggs as you want to, but to meet the Tasklin inside, you're going to have to give it something to work on. Use the + button to add your first five tasks. These can be any things you need to complete, such as 'Go for a walk' or 'Finish Math Homework'.</q-item-label>
                <q-item-label v-if="hatched === true">Well done! Now it's time to name your first Tasklin, and then we're ready to start our adventure! And judging by the things you need to get done, there's no time to waste.</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        
        </q-card>

      <div v-if="this.tasklin.color === 'blue' || color == 'blue'">
          <div id="cf2" class="shadow">
          <img v-if="hatched === false" class="responsive egg2 animate__animated animate__bounce" src="statics/eggs/blue3.png"/>
          <img v-if="hatched === true" class="responsive egg2" src="statics/placeholder/blue3a.png" />
        </div>
      </div>

      <div v-if="this.tasklin.color === 'purple' || color == 'purple'">
          <div id="cf2" class="shadow">
          <img v-if="hatched === false" class="responsive egg2" src="statics/eggs/purple3.png"/>
          <img v-if="hatched === true" class="responsive egg2" src="statics/placeholder/purple3a.png" />
        </div>
      </div>

      <div v-if="this.tasklin.color === 'green' || color === 'green'">
          <div id="cf2" class="shadow">
          <img v-if="hatched === false" class="responsive egg2" src="statics/eggs/green3.png"/>
          <img v-if="hatched === true" class="responsive egg2" src="statics/placeholder/green3a.png" />
        </div>
      </div>

      <div v-if="this.tasklin.color === 'pink' || color == 'pink'">
          <div id="cf2" class="shadow">
          <img v-if="hatched === false" class="responsive egg2" src="statics/eggs/pink3.png"/>
          <img v-if="hatched === true" class="responsive egg2" src="statics/placeholder/pink3a.png" />
        </div>
      </div>

      <div v-else>
          
      </div>

          <q-btn v-if="newTasks <= 4" color="secondary" @click="showAddTask = true; newTasks ++" glossy icon="add" />
          <q-btn v-if="newTasks >= 5 && hatched !=true" color="secondary" @click="hatched = true;" glossy label="Hatch" />

      <div class="q-pa-sm thinger" v-if="hatched === true" style="max-width: 300px">
        <form class="q-gutter-md">
          <p>Species: Monster</p>
          <q-input
            ref="tasklinName"
            filled
            v-model="tasklinName"
            label="Name Your Tasklin"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <div>
            <q-btn label="Let's Go" @click="updateUserProfile" type="submit" color="primary" />
          </div>
        </form>
  </div>
      </div>
        <q-dialog v-model="showAddTask">
          <add-task @close="showAddTask=false;"
          />
        </q-dialog>

  </q-page>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  data() {
        return {
            showNewUser1: true,
            showNewUser2: false,
            showNewUser3: false,
            showNewUser4: false,
            showAddTask: false,
            hatched: false,
            hex: 'ff00ff',
            tasklinName: "",
            tasklinType: "Monster",
            color: 'blue',
            newTasks: 0
        }
    },
    computed: {
      ...mapGetters('profile', ['profile']),      
      ...mapGetters('tasklins', ['tasklin']),      
      ...mapGetters('settings', ['fbReadSettings']),
    changeAbout: {
      get () {
        return this.profile.about
      },
      set (value) {
        this.updateAbout(value)
      }
    },
    changeName: {
      get () {
        return this.profile.name
      },
      set (value) {
        this.updateName(value)
      }
    },
  changeUsername: {
    get () {
      return this.profile.username
    },
    set (value) {
      this.updateUsername(value)
    }
  },
  togglePrivate: {
    get () {
      return this.profile.private
    },
    set (value) {
      this.togglePrivateValue(value)
    }
    },
  changeColor: {
    get () {
      return this.tasklin.color
    },
    set (value) {
      this.updateColor(value)
      this.hex = value;
    }
    },
  },
  methods: {
      ...mapActions('profile', ['fbReadProfile', 'updateAbout', 'updateName', 'updateUsername', 'updateProfile', 'togglePrivateValue', 'updateTasklins', 'updateColor']),
      ...mapActions('tasklins', ['addTasklin', 'updateTasklin']),
      updateUserProfile() {
        let profile = {
                  name: this.profile.name,
                  username: this.profile.username,
                  id: this.profile.id,
                  about: this.profile.about,
                  avatar: this.profile.avatar,
                  lin: this.profile.lin,
                  xp: this.profile.xp,
                  level: this.profile.level,
                  friends: this.profile.friends,
                  inventory: this.profile.inventory,
                  private: this.profile.private,
                  signup: false,
                  admin: this.profile.admin,
                  color: this.profile.color
        }
        
        this.updateProfile(profile);
        let tasklin = {
              name: this.tasklinName,
              color: this.color,
              type: this.tasklinType,
              xp: 0,
              creation_date: Date.now() 
        }
        this.addTasklin(tasklin)
        this.$router.push("/index")
      },
    },
    components: {
    'add-task' : require('components/Tasks/Modals/addTask.vue').default,
    }
}
</script>

<style>
  @media screen and (min-width: 768px) {
    .card {
        width: 700px;
        max-width: 80vw;
    }

    .pip-avatar {
      size: 50px;
    }
  }

  @media screen and (max-width: 767px) {
    .card {
        width: 80%;
    }

    .pip-avatar {
      size: 150px;
    }
  }    

  .egg {
  width: 20%;
  max-width: 50%;
  height: auto;
  margin: auto;
  margin-left: 10px;
  padding: 10px;
  display: inline-block;
}

  .egg2 {
  width: 20%;
  max-width: 50%;
  height: auto;
  margin: auto;
  padding: 10px;
  display: inline-block;
}
.thinger {
  text-align: center;
  height: auto;
  margin: auto;
  display: inline-block;
}

.my-picker {
 max-width: 250px;
}

</style>