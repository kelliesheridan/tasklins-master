<template>
  <q-page padding>
    <div>
      <index-menu />
    </div>

    <div class="q-pa-md roadmap-card center" style="width: 50%">
        
      <div class="q-pa-md">
      <q-card dense square class="my-card q-pa-xs">
        <q-card-section class="row bg-secondary">
          <q-icon name="plus_one" class="text-white center" style="font-size: 4rem;" />
          <div class="text-h7">
          <div>
            <h6 class="q-pa-sm">Leveling Up Tasklins</h6>
            <p>
              We're so close on this one. We actually thought we'd had it, but it turned out buggier than anticipated (that happens a lot). Soon, whenever you complete a task, 
              your Tasklin will gain xp, and with certain amounts of xp, reach new levels. With new levels come new features (noses, tails, ears, etc.), and eventually things like 
              hunger levels, more advanced moods, and even breeding (although that part is farther down the road) as before that happens we'll need...
            </p>
          </div>
          </div>

        </q-card-section>
      </q-card>
      </div>

      <div class="q-pa-md">
      <q-card dense square class="my-card q-pa-xs">
        <q-card-section class="row bg-secondary">
          <q-icon name="pets" class="text-white center" style="font-size: 4rem;" />
          <div class="text-h7">
          <div>
            <h6 class="q-pa-sm">Collect Multiple Tasklins!</h6>
            <p>
              Once we have Tasklin levels looking pretty solid, we'll add in the ability to have multiple Tasklins on your account. You can decide which of your Tasklins are connected 
              to which of your projects, and then they'll level up individually based on which Tasklin is connected to each task you complete. 
            </p>
          </div>
          </div>

        </q-card-section>
      </q-card>
      </div>

    </div>  
  </q-page>
</template>

<script>
export default {
  components: {    
    "index-menu": require("components/IndexMenu.vue").default    
  },
}
</script>
