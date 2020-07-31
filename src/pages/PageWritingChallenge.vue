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
      Meghan <q-linear-progress rounded size="15px" :value="mattProgress" :style="{ 'color': getUserColor('matt') }" class="q-mt-sm"  :key="update"/>
    </div>

    <div class="q-pa-md">
      Erin <q-linear-progress rounded size="15px" :value="kaitlynProgress" :style="{ 'color': getUserColor('kaitlyn') }" class="q-mt-sm" :key="update"/>
    </div>  

    <div class="q-pa-md">
      Emma <q-linear-progress rounded size="15px" :value="adamProgress" :style="{ 'color': getUserColor('adam') }" class="q-mt-sm" :key="update"/>
    </div>

    <div class="q-pa-md">
      Dez <q-linear-progress rounded size="15px" :value="kylieProgress" :style="{ 'color': getUserColor('kylie') }" class="q-mt-sm" :key="update"/>
    </div>

    <div class="q-pa-md">
      Rachel <q-linear-progress rounded size="15px" :value="francisProgress" :style="{ 'color': getUserColor('francis') }" class="q-mt-sm"  :key="update"/>
    </div>

    <div class="q-pa-md">
      Kyra <q-linear-progress rounded size="15px" :value="gloriaProgress" :style="{ 'color': getUserColor('gloria') }" class="q-mt-sm" :key="update"/>
    </div>  

    <div class="q-pa-md">
      Helen <q-linear-progress rounded size="15px" :value="paulProgress" :style="{ 'color': getUserColor('paul') }" class="q-mt-sm" :key="update"/>
    </div>

    <div class="q-pa-md">
      Calyn <q-linear-progress rounded size="15px" :value="paulProgress" :style="{ 'color': getUserColor('paul') }" class="q-mt-sm" :key="update"/>
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
    <q-btn-dropdown class="q-mr-sm" color="light-green" label="I Did Something" dropdown-icon="create">
      <q-list>
        <q-item clickable v-close-popup @click="submit('writing')">
          <q-item-section>
            <q-item-label>Wrote 250 Words</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="submit('editing')">
          <q-item-section>
            <q-item-label>Edited for 20 Minutes</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="submit('plotting')">
          <q-item-section>
            <q-item-label>Plotted for 2- Minutes</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup @click="submit('query')">
          <q-item-section>
            <q-item-label>Sent a Query Letter</q-item-label>
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
    ...mapGetters('writing', ['writing']),
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
      return this.getUsername(2);
    },
    kellieProgress: function () {
      this.update;
      return this.calculateValues('kellie');
    },
    meghanProgress: function () {
      this.update;
      return this.calculateValues('meghan');
    },
    erinProgress: function () {
      this.update;
      return this.calculateValues('erin');
    },
    emmaProgress: function () {
      this.update;
      return this.calculateValues('emma');
    },
    dezProgress: function () {
      this.update;
      return this.calculateValues('dez');
    },
    rachelProgress: function () {
      this.update;
      return this.calculateValues('rachel');
    },
    kyraProgress: function () {
      this.update;
      return this.calculateValues('kyra');
    },
    helenProgress: function () {
      this.update;
      return this.calculateValues('helen');
    },    
    calynProgress: function () {
      this.update;
      return this.calculateValues('calyn');
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
        if (user) {
        let fitness = this.fitness.fitness;
        if (fitness != undefined) {
            Object.keys(fitness).forEach(element => {
              if (fitness[element].username == user) {
                intensityCount += fitness[element].intensity
            }
            })
        }
        }
        return intensityCount;
      },
      getUserColor(user) {
        let color = ""
        if (user) {
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
        let elementToCheck = value === 0 ? Object.keys(fitness).length - 1 : Object.keys(fitness).length - 1 - value;
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
        let elementToCheck = value === 0 ? Object.keys(fitness).length - 1 : Object.keys(fitness).length - 1 - value;
        if (fitness != undefined) {
          Object.keys(fitness).forEach(element => {
            if (Object.keys(fitness).indexOf(element) == elementToCheck) {
            activity = fitness[element].username; 
            switch (fitness[element].type) {
              case "writing": 
                activity += " wrote 250 words!"
                break;
              case "editing": 
                activity += " did some editing"
                break;
              case "plotting": 
                activity += " did some brainstorming!"
                break;
              case "query": 
                activity += " sent a query letter!"
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