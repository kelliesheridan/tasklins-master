<template>
  <q-page padding>
    <q-card class="card center bg-accent" flat bordered>
        <q-card-section class="q-pt-md" >
          <div>
            <q-item>
              <q-item-section side top>
                <q-avatar class="pip-avatar" rounded>
                  <img src="statics/characters/Piper.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section top>
                <q-item-label>
                 <div>
                  Looking for some help? You've come to the right place. What do you want to know more about? You can select a topic below, rewatch the new user walkthrough, or use the bottom at the bottom of this page to ask for more help.
                 </div>
                 <div class="q-mt-md">
                   <div>
                     <q-btn class="q-mt-sm q-ma-sm" padding color="secondary" @click="newUserWalkthrough = true" label="New User Walkthrough" />
                    </div>
                   <div>
                     <q-btn class="q-mt-sm q-ma-sm" padding color="secondary" @click="showAbout = !showAbout" label="About Tasklins" />
                     <q-btn class="q-mt-sm q-ma-sm" padding color="secondary" @click="showBugsFeatures = !showBugsFeatures" label="Bugs & Features" />                     
                   </div>
                 </div>
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </q-card-section>
      </q-card>

      <div class="q-pa-md" v-if="showAbout" style="max-width: 350px">
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              expand-separator              
              label="Gaining Experience"              
            >
            <p>
                
            </p>
            <q-list dense padding>
                <q-item>
                  <q-item-section>                    
                    <q-item-label>Gaining experience points are how your Tasklins level up. (right now, this is how you, the user levels up, but this will be changing fairly soon)
                    Almost every time you interact with a task, the Tasklin associated with that project will gain or lose experience depending on what you did. 
                    Once they reach a certain amount of experience, they will gain a level. Once a Tasklin levels up, losing experience will not cause them to lose that level.
                    </q-item-label>
                    <br>                                
                  </q-item-section>
                </q-item>

                <q-item>
                    <q-item-section>
                    <q-item-label><strong>Ways to Gain and Lose XP</strong></q-item-label>
                    <q-item-label>Add New Task +1xp</q-item-label>
                    <q-item-label>Delete Task -2xp</q-item-label>
                    <q-item-label>Finish a Challenge Task +5xp</q-item-label>
                    <q-item-label>Complete Task On Time +5xp</q-item-label>
                    <q-item-label>Complete Task Late +3xp</q-item-label>
                    <q-item-label>Postpone Task -1xp</q-item-label>
                    </q-item-section>
               </q-item>
               <br>
               <q-separator />
               <br>

                <q-item>
                    <q-item-section>
                    <q-item-label><strong>What's stopping someone from creating and completing tasks just to gain xp</strong></q-item-label>
                    <q-item-label>Nothing. Everyone is free to play Tasklins however makes the most sense for them. If people want to endlessly click buttons just to get Tasklins xp, their results won't effect those who are playing as intended.</q-item-label>
                    </q-item-section>
                </q-item>
                <br>
               <q-separator />
               <br>    

                  <q-item>
                    <q-item-section>
                    <q-item-label><strong>Whick Tasklin gains XP when I complete challenge tasks.</strong></q-item-label>
                    <q-item-label>Since challenges aren't part of any project, that xp currently goes to your default Tasklin (assigned to project Tasks)</q-item-label>
                    </q-item-section>
                </q-item>

                </q-list>
            </q-expansion-item>

            <q-expansion-item
              expand-separator              
              label="Exploring the World"
            >
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label><strong>Coming Soon!</strong></q-item-label>
                  <!-- <q-item-label>Cheer your friends on as they complete challenge tasks.</q-item-label> -->
                </q-item-section>
              </q-item>

            </q-list>
            </q-expansion-item>

            <q-expansion-item label="Tasklins">
              <q-list >
              <q-item>
                <q-item-section>
                  <q-item-label><strong>Coming Soon!</strong></q-item-label>
                  <!-- <q-item-label>Cheer your friends on as they complete challenge tasks.</q-item-label> -->
                </q-item-section>
              </q-item>         

              </q-list>
            </q-expansion-item>
          </q-list>
        </div>

        <div class="q-pa-md" v-if="showBugsFeatures" style="max-width: 350px">
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              expand-separator              
              label="Known Bugs"              
            >
                <q-list>
                  <q-item>
                    <q-item-section>
                      <q-item-label><strong>Challenge Page Clearing</strong></q-item-label>
                      <q-item-label>If someone else enters a task on a challenge page, anyone currently on the page has their page cleared.</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section>
                      <q-item-label><strong>Creating Extra Repeating Tasks</strong></q-item-label>
                      <q-item-label>There have been some instances of repeating tasks making too many versions.</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
            </q-expansion-item>

            <q-expansion-item
              expand-separator              
              label="Features In Progress"
            >
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label><strong>Cheer Button</strong></q-item-label>
                  <q-item-label>Cheer your friends on as they complete challenge tasks.</q-item-label>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section>
                  <q-item-label><strong>Better Projects</strong></q-item-label>
                  <q-item-label>Color code tasks by project. Better sorting on Todo Page.</q-item-label>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section>
                  <q-item-label><strong>User Stats</strong></q-item-label>
                  <q-item-label>Keep track of how many tasks you're getting done each day.</q-item-label>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section>
                  <q-item-label><strong>Tasklin Evolution</strong></q-item-label>
                  <q-item-label>Tasklins will start gaining experience, and level up over time, changing their appearance as they do.</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
            </q-expansion-item>

            <q-expansion-item label="Upcoming Features">
              <q-list >
                    <q-item>
                      <q-item-section>
                        <q-item-label><strong>Social Feed</strong></q-item-label>
                        <q-item-label>Share what you're working on. Celebrate your accomplishments. Stay accountable.</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item>
                      <q-item-section>
                        <q-item-label><strong>In Game Items</strong></q-item-label>
                        <q-item-label>Either find or use Lin to purchase in game items for your Tasklins.</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item>
                      <q-item-section>
                        <q-item-label><strong>More Tasklins</strong></q-item-label>
                        <q-item-label>Find or purchase eggs to have more than one Tasklins.</q-item-label>
                      </q-item-section>
                    </q-item>

                    <q-item>
                      <q-item-section>
                        <q-item-label><strong>Avatars</strong></q-item-label>
                        <q-item-label>Customize your own appearance in the game world.</q-item-label>
                      </q-item-section>
                    </q-item>            

              </q-list>
            </q-expansion-item>
          </q-list>
        </div>

    <q-dialog v-if="newUserWalkthrough" v-model="newUserWalkthrough" >
    <new-user />
    </q-dialog>

    <q-dialog v-model="help">
      <q-card>
        <q-card-section>
          <div class="text-h6">Has something gone wrong?</div>
          <div class="text-subtitle2">
            Questions? Suggestions? Problems? Let us know.
          </div>
        </q-card-section>

        <q-card-section>
          <q-form class="q-gutter-md">
            <q-input
              filled
              v-model="problemText"
              label="What can we help you with?"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
            />

            <div>
              <q-btn label="Submit" type="submit" color="primary" @click="sendHelp(); help = false" />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

       <div class="text-center q-pa-md absolute-bottom">
           <q-btn rounded padding @click="help = true" class="text-center q-pa-sm" color="red-4" label="Help! Something is Broken!" /> 
      </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    problemText: "",
    help: false,
    showAbout: false,
    newUserWalkthrough: false,
    showBugsFeatures: false,
    showLongterm: false,
  }),
  components: {
    "new-user": require("components/Help/NewUser.vue").default,
  },
  computed: {
    ...mapGetters("tickets", ["tickets"])
  },
  methods: {
    ...mapActions("tickets", ["updateTicket", "deleteTicket"]),
    ...mapActions("settings", ["addHelp"]),
  
    sendHelp() {
      let help = {
        problem: this.problemText
      }
      this.addHelp(help);
    },
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are you sure?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.deleteTicket(id);
        });
    }
  }
};
</script>
