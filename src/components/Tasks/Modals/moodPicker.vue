<template>
  <q-card style="width: 420px">
    <list-header class="textureBar">
      {{ mood }}
    </list-header>

    <div class="q-pa-md center">      
      <q-form @submit="setUserMood()" class="q-gutter-md">
        <q-img
          src="/statics/moods/happy.png"
          spinner-color="white"
          style="height: 80px; max-width: 80px"
          @click="mood = 'happy'"
        />
        <q-img
          src="/statics/moods/fine.png"
          spinner-color="white"
          style="height: 80px; max-width: 80px"
          @click="mood = 'fine'"
        />
        <q-img
          src="/statics/moods/glum.png"
          spinner-color="white"
          style="height: 80px; max-width: 80px"
          @click="mood = 'glum'"
        />
        <q-img
          src="/statics/moods/tired.png"
          spinner-color="white"
          style="height: 80px; max-width: 80px"
          @click="mood = 'tired'"
          v-if="this.profile.memberType > 1"
        />
        <q-img
          src="/statics/moods/tired.png"
          spinner-color="white"
          style="height: 80px; max-width: 80px; opacity: 20%;" 
          v-if="this.profile.memberType == 1"         
        />

        <div>More moods coming soon as quest rewards. Tired available for $3+ patrons. </div>

        <q-input filled v-model="date" mask="date">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <div>
          <q-btn label="Submit" type="submit" color="primary" />          
        </div>
      </q-form>
    </div>
  </q-card>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
const moment = require("moment");

export default {
  data() {
    return {
      mood: " ",
      date: moment().format("YYYY-MM-DD")
    };
  },
  computed: {
    ...mapGetters("profile", ["profile"]),
  },
  components: {
    "list-header": require("components/Shared/ListHeader.vue").default
  },
  methods: {
    ...mapActions("profile", ["setMood"]),
    setUserMood() {
      if (this.mood != "") {
        let mood = {
          mood: this.mood,
          moodDate: moment(this.date).format("YYYY-MM-DD")
        };
        this.setMood(mood);
        this.$emit("close");
        this.$q.notify({
        message: "Your mood for " + mood.moodDate + " has been set!",
        color: "primary",
        icon: "settings"
      });
      }
    },
    checkMemberType(memberType) {
      return memberType == 1 ? true : false;
    }
  }
};
</script>
