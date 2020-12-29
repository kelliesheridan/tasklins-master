<template>
  <q-card style="width: 420px">
      <list-header class="textureBar">
        {{ mood }} 
      </list-header>

    <div class="q-pa-md">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
      <q-img
        src="/statics/moods/happy.png"
        spinner-color="white"
        style="height: 100px; max-width: 100px"
        @click="mood = 'happy'; setUserMood(mood)"
      />
      <q-img
        src="/statics/moods/fine.png"
        spinner-color="white"
        style="height: 100px; max-width: 100px"
        @click="mood = 'fine'; setUserMood(mood)"
      />
      <q-img
        src="/statics/moods/glum.png"
        spinner-color="white"
        style="height: 100px; max-width: 100px"
        @click="mood = 'glum'; setUserMood(mood)"
      />
      
        <q-input filled v-model="date" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
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
          <q-btn label="Submit" type="submit" color="primary"/>
        </div>
      </q-form>

    </div>
    </q-card>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      mood: " ",
      date: null,
    }
  },
  computed: {

  },
  components: {
        "list-header": require("components/Shared/ListHeader.vue").default,
  },
  methods: {
    ...mapActions("profile", ["setMood"]),
    setUserMood(mood) {
      this.setMood(mood);
    }
  }
};
</script>
