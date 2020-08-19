<template>
  <q-page padding>

    <div class="q-gutter-y-md" style="max-width: 600px">
      
    <q-card>
      <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          
        >
          <q-tab name="help" label="Help" />
          <q-tab name="news" label="News" />
          <q-tab name="members" label="Members" />
      </q-tabs>

      <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="help">
            <div class="text-h6">Help</div>
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
            <q-btn class="gt-xs" size="12px" flat dense round icon="autorenew" />
            <q-btn :value="ticket.completed" @click="updateTicket({ id: id, updates: {completed: !ticket.completed} })" class="gt-xs" size="12px" flat dense round icon="done" />
          </div>
        </q-item-section>
      </q-item>
    </q-list> 
          </q-tab-panel>

          <q-tab-panel name="news">
            <div class="text-h6">News</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="members">
            <div class="text-h6">Members</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>      

</div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    tab: 'help'
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

