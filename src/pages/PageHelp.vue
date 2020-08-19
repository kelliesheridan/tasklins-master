<template>
  <q-page padding>
    <p><strong>Open Issues</strong></p>
    <p>- Dark mode doesn't really work yet</p>
    <p>- Some issues with dates, specifically setting dates using buttons rather than the edit button</p>    

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

       <!-- <div class="text-center q-pa-md absolute-bottom">

           <q-btn rounded padding @click="help = true" class="glossy text-center q-pa-md" color="negative" label="Help! Something is Broken!" /> 
        
      </div> -->
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    help: false
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
