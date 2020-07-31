<template>
  <q-page padding>
<p><strong>Open Issues</strong></p>
<div>
     <q-list separator style="max-width: 600px">

      <q-item
      v-for="(ticket, key) in tickets"
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
            <!-- <q-btn class="gt-xs" size="12px" flat dense round icon="autorenew" /> -->
            <q-btn :value="ticket.completed" @click="updateTicket({ id: id, updates: {completed: !ticket.completed} })" class="gt-xs" size="12px" flat dense round icon="done" />
          </div>
        </q-item-section>
      </q-item>


    </q-list>
</div>
<p><strong>Known Issues</strong></p>
<p>- Dark mode doesn't really work yet</p>
<p>- Form authentification on new user signup and tasklin creation</p>
<p>- Make the help form work</p>
<p>- Select Due Time issue</p>

        <q-dialog v-model="help">

        <q-card>
          <q-card-section>
            <div class="text-h6">Has something gone wrong?</div>
            <div class="text-subtitle2">Questions? Suggestions? Problems? Let us know.</div>
          </q-card-section>


      <q-card-section>
        <q-form
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="tickets.problem"
            label="What can we help you with?"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <div>
            <q-btn label="Submit" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </q-card-section>
        </q-card>
        </q-dialog>

              <div class="text-center q-pa-md absolute-bottom">

          <q-btn rounded padding @click="help = true" class="glossy text-center q-pa-md" color="negative" label="Help! Something is Broken!" />
        
      </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'

export default {
  data: () => ({
    help: false
  }),
    computed: {
        ...mapGetters('tickets', ['tickets'])      
    },
    methods: {
      ...mapActions('tickets', ['updateTicket', 'deleteTicket']),
      promptToDelete(id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTicket(id)
      })
      }
    }
}
  </script>