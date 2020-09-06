<template>
  <q-page padding>

    
    <div class="help-section">
    <q-btn push label="Known Bugs" 	color="primary" @click="showKnownIssues = !showKnownIssues"/>

    <q-list v-if="showKnownIssues" dense  padding>
      <q-item>
        <q-item-section>
          <q-item-label><strong>Darkmode Doesn't Really Work Yet</strong></q-item-label>
          <q-item-label>It's wonky. We'll get there.</q-item-label>
        </q-item-section>
      </q-item>

      <!-- <q-item>
        <q-item-section>
          <q-item-label><strong>Tasks Late Not Working</strong></q-item-label>
          <q-item-label>Some today tasks are showing up as late tasks.</q-item-label>
        </q-item-section>
      </q-item> -->
    </q-list>

    </div>

    <div class="help-section">
    <q-btn push label="In Progress" color="primary"	@click="showInProgress = !showInProgress"/>

    <q-list v-if="showInProgress" dense  padding>
      <q-item>
        <q-item-section>
          <q-item-label><strong>Repeating Tasks</strong></q-item-label>
          <q-item-label>Repeat the same task as needed instead of having to make new ones.</q-item-label>
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
          <q-item-label><strong>Turn Off Hints</strong></q-item-label>
          <q-item-label>Toggle hints on/off in settings.</q-item-label>
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
          <q-item-label>New art for Tasklins along with the ability to level up and have moods.</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>

    </div>

    <div class="help-section">
    <q-btn push label="Longterm Goals" color="primary"	@click="showLongterm = !showLongterm"/>

    <q-list v-if="showLongterm" dense  padding>
      <q-item>
        <q-item-section>
          <q-item-label><strong>Social Feed</strong></q-item-label>
          <q-item-label>Share what you're working on. Celebrate your accomplishments. Stay accountable.</q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-item-label><strong>Cheer Button</strong></q-item-label>
          <q-item-label>Cheer your friends on as they complete challenge tasks.</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    </div>



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
              v-model="tickets.problem"
              label="What can we help you with?"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
            />

            <div>
              <q-btn label="Submit" type="submit" color="primary" />
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
    help: false,
    showKnownIssues: false,
    showInProgress: false,
    showLongterm: false,
  }),
  computed: {
    ...mapGetters("tickets", ["tickets"])
  },
  methods: {
    ...mapActions("tickets", ["updateTicket", "deleteTicket"]),
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
