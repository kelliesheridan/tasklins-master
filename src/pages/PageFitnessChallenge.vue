<template>
  <q-page padding>

    <div class="q-pa-md q-gutter-sm">

    </div>

  <div class="row">
  <div class="col-8">

    <div class="q-pa-md">
      Kellie <q-linear-progress rounded size="15px" :value="kellieProgress" color="deep-purple" class="q-mt-sm" :key="update"/>
    </div>

    <div class="q-pa-md">
      Matt <q-linear-progress rounded size="15px" :value="mattProgress" color="teal" class="q-mt-sm"  :key="update"/>
    </div>

    <div class="q-pa-md">
      Kaitlyn <q-linear-progress rounded size="15px" :value="kaitlynProgress" color="pink-12" class="q-mt-sm" :key="update"/>
    </div>  

    <div class="q-pa-md">
      Adam <q-linear-progress rounded size="15px" :value="adamProgress" color="blue-grey-7" class="q-mt-sm" :key="update"/>
    </div>
        </div>

  <div class="col bg-grey-4">

    <q-card dense flat square class="my-card q-pa-xs">
      <q-card-section class="bg-pink-12 text-white">
        <div class="text-h7">{{firstActivity}}

      <q-card-actions align="right">
        <q-btn dense flat>Cheer!</q-btn>
      </q-card-actions>
        </div>
      </q-card-section>


    </q-card>

    <q-card dense flat square class="my-card q-pa-xs">
      <q-card-section class="bg-teal text-white">
        <div class="text-h7">{{secondActivity}}

      <q-card-actions align="right">
        <q-btn dense flat>Cheer!</q-btn>
      </q-card-actions>

        </div>
      </q-card-section>
    </q-card>

        <q-card dense flat square class="my-card q-pa-xs">
      <q-card-section class="bg-deep-purple text-white">
        <div class="text-h7">{{thirdActivity}}

      <q-card-actions align="right">
        <q-btn dense flat>Cheer!</q-btn>
      </q-card-actions>

        </div>
      </q-card-section>
    </q-card>

      </div>
    </div>
  <div class="q-pa-md absolute-bottom text-center">
    <q-btn-dropdown class="q-mr-sm" color="light-green" label="I Worked Out" dropdown-icon="fitness_center">
      <q-list>
        <q-item clickable v-close-popup @click="submit('gym')">
          <q-item-section>
            <q-item-label>Went to the Gym</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="submit('run')">
          <q-item-section>
            <q-item-label>Went for a Run</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="submit('yoga')">
          <q-item-section>
            <q-item-label>Did Some Yoga</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>

  </q-page>
</template>


<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  data: () => ({
    update: 0
  }),
  computed: {
    ...mapGetters('fitness', ['fitness']),
    firstActivity: function () {
      this.update;
      return this.getUsername(0);
    },
    secondActivity: function () {
      this.update;
      return this.getUsername(1);
    },
    thirdActivity: function () {
      this.update;
      return this.getUsername(1);
    },
    mattProgress: function () {
      this.update;
      return this.calculateValues('matt');
    },
    kellieProgress: function () {
      this.update;
      return this.calculateValues('kellie');
    },
    kaitlynProgress: function () {
      this.update;
      return this.calculateValues('kaitlyn');
    },
    adamProgress: function () {
      this.update;
      return this.calculateValues('adam');
    }
  },
  methods: {
      ...mapActions('fitness', ['addFitnessTask', 'readFitnessTasks']),
      submit(event) {
        console.debug('fitness event: ', event)
        this.addFitnessTask(event);
        this.update += 1;
      },
      calculateValues(user) {
        let intensityCount = 0.0;
        let fitness = this.fitness.fitness;
        if (fitness != undefined) {
            Object.keys(fitness).forEach(element => {
              if (fitness[element].username == user) {
                intensityCount += fitness[element].intensity
            }
            })
        }
        return intensityCount;
      },
      getUsername(value) {
        let activity = "";
        let fitness = this.fitness.fitness;
        if (fitness != undefined) {
        let elementToCheck = value === 0 ? Object.keys(fitness).length - 1 : Object.keys(fitness).length - 2;
        if (fitness != undefined) {
          Object.keys(fitness).forEach(element => {
            if (Object.keys(fitness).indexOf(element) == elementToCheck) {
            activity = fitness[element].username; 
            switch (fitness[element].type) {
              case "run": 
                activity += " went for a run!"
                break;
              case "yoga": 
                activity += " did some yoga"
                break;
              case "gym": 
                activity += " lifted heavy things!"
                break;
            } }})
        }
        
        return activity;
        }
        return activity;
      }
      }
}
</script>

<style lang="sass" scoped>
.row > div
  padding: 10px 10px
.row + .row
  margin-top: 1rem
</style>