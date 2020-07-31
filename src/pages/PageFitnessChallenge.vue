<template>
  <q-page padding>

    <div class="q-pa-md q-gutter-sm">

    </div>

  <div class="row">
  <div class="col-8">

    <div class="q-pa-md">
      Kellie <q-linear-progress rounded size="15px" :value="kellieProgress" :style="{ 'color': getUserColor('kellie') }" class="q-mt-sm" :key="update"/>
    </div>

    <div class="q-pa-md">
      Matt <q-linear-progress rounded size="15px" :value="mattProgress" :style="{ 'color': getUserColor('matt') }" class="q-mt-sm"  :key="update"/>
    </div>

    <div class="q-pa-md">
      Kaitlyn <q-linear-progress rounded size="15px" :value="kaitlynProgress" :style="{ 'color': getUserColor('kaitlyn') }" class="q-mt-sm" :key="update"/>
    </div>  

    <div class="q-pa-md">
      Adam <q-linear-progress rounded size="15px" :value="adamProgress" :style="{ 'color': getUserColor('adam') }" class="q-mt-sm" :key="update"/>
    </div>

    <div class="q-pa-md">
      Kylie <q-linear-progress rounded size="15px" :value="kylieProgress" :style="{ 'color': getUserColor('kylie') }" class="q-mt-sm" :key="update"/>
    </div>

    <div class="q-pa-md">
      Francis <q-linear-progress rounded size="15px" :value="francisProgress" :style="{ 'color': getUserColor('francis') }" class="q-mt-sm"  :key="update"/>
    </div>

    <div class="q-pa-md">
      Gloria <q-linear-progress rounded size="15px" :value="gloriaProgress" :style="{ 'color': getUserColor('gloria') }" class="q-mt-sm" :key="update"/>
    </div>  

    <div class="q-pa-md">
      Paul <q-linear-progress rounded size="15px" :value="paulProgress" :style="{ 'color': getUserColor('paul') }" class="q-mt-sm" :key="update"/>
    </div>    
        </div>

  <div class="col bg-grey-4">

    <q-card dense flat square class="my-card q-pa-xs">
      <q-card-section :style="{ 'background-color': getCardColor(0) }" class="text-white">
        <div class="text-h7">{{firstActivity}}

      <q-card-actions align="right">
        <q-btn dense flat>Cheer!</q-btn>
      </q-card-actions>
        </div>
      </q-card-section>


    </q-card>

    <q-card dense flat square class="my-card q-pa-xs">
      <q-card-section :style="{ 'background-color': getCardColor(1) }" class="text-white">
        <div class="text-h7">{{secondActivity}}

      <q-card-actions align="right">
        <q-btn dense flat>Cheer!</q-btn>
      </q-card-actions>

        </div>
      </q-card-section>
    </q-card>

        <q-card dense flat square class="my-card q-pa-xs">
      <q-card-section :style="{ 'background-color': getCardColor(2) }" class="text-white">
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
    ...mapGetters('profile', ['profile']),
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
    },
    kylieProgress: function () {
      this.update;
      return this.calculateValues('kylie');
    },
    francisProgress: function () {
      this.update;
      return this.calculateValues('francis');
    },
    gloriaProgress: function () {
      this.update;
      return this.calculateValues('gloria');
    },
    paulProgress: function () {
      this.update;
      return this.calculateValues('paul');
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
      getUserColor(user) {
        let color = ""
        let fitness = this.fitness.fitness;
        if (fitness != undefined) {
            Object.keys(fitness).forEach(element => {
              if (fitness[element].username == user) {
                if (color === "") {
                  color = fitness[element].color
                }
            }
            })
        }
        if (color === "") {
          color = "rgb(240,240,240)";
        }
        return color;
      },
      getCardColor(value) {
        let color = "";
        let fitness = this.fitness.fitness;
        if (fitness != undefined) {
        let elementToCheck = value === 0 ? Object.keys(fitness).length - 1 : Object.keys(fitness).length - 2;
        if (fitness != undefined) {
          Object.keys(fitness).forEach(element => {
            if (Object.keys(fitness).indexOf(element) == elementToCheck) {
              if (color == "") 
                color = fitness[element].color; 
           }})
        }
        if (color == "") {color = "rgb(240,240,240)"; }
        return color;
        }
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