<template>
  <q-page padding>
    <div>
      <index-menu />
    </div>

    <div class="q-pa-md center">

    <div class="q-pa-md roadmap-card">
      <q-card dense square class="my-card q-pa-none">
        <q-card-section class="bg-secondary">
          <div class="text-h6">
           <h6 class="q-pa-xs">Where We're Headed</h6>
          </div>
        </q-card-section>
      </q-card>
    </div>
        
    <div class="q-pa-md roadmap-card">
      <q-card dense square class="my-card q-pa-xs">
        <q-card-section class="bg-secondary">
          <q-icon name="plus_one" class="text-white center" style="font-size: 4rem;" />
          <div>
            <h6 class="q-pa-sm">Leveling Up Tasklins</h6>
            <p>
              We're so close on this one. We actually thought we'd had it, but it turned out buggier than anticipated (that happens a lot). Soon, whenever you complete a task, 
              your Tasklin will gain xp, and with certain amounts of xp, reach new levels. With new levels come new features (noses, tails, ears, etc.), and eventually things like 
              hunger levels, more advanced moods, and even breeding (although that part is farther down the road) as before that happens we'll need...
            </p>
          </div>

        </q-card-section>
      </q-card>
    </div>

    <div class="q-pa-md roadmap-card">
      <q-card dense square class="my-card q-pa-xs">
        <q-card-section class="row bg-secondary">
          <q-icon name="pets" class="text-white center" style="font-size: 4rem;" />
          <div>
            <h6 class="q-pa-sm">Collect Multiple Tasklins!</h6>
            <p>
              Once we have Tasklin levels looking pretty solid, we'll add in the ability to have multiple Tasklins on your account. You can decide which of your Tasklins are connected 
              to which of your projects, and then they'll level up individually based on which Tasklin is connected to each task you complete. 
            </p>
          </div>

        </q-card-section>
      </q-card>
    </div>  

    <div class="q-pa-md roadmap-card">
      <q-card dense square class="my-card q-pa-xs">
        <q-card-section class="row bg-secondary">
          <q-icon name="local_mall" class="text-white center" style="font-size: 4rem;" />
          <div>
            <h6 class="q-pa-sm">Inventory!</h6>
            <p>
              This is the big one! Once we have a game inventory, we have a game! Once we have a system in place where you can keep an inventory of items, that will open 
              up a whole new world of possibilities. Use the Lin you'e been earning to purchase items for your Tasklins, finding random items, trading, selling, the whole 
              nine yards. Eventually, this inventory system will also help us with...
            </p>
          </div>

        </q-card-section>
      </q-card>
    </div>  

    <div class="q-pa-md roadmap-card">
      <q-card dense square class="my-card q-pa-xs">
        <q-card-section class="row bg-secondary">
          <q-icon name="person" class="text-white center" style="font-size: 4rem;" />
          <div>
            <h6 class="q-pa-sm">Avatars!</h6>
            <p>
              Your Tasklins aren't the only beings that exist in this world. Once we have the above features in place, our next goal is to have avatars for our users 
              that you can customize through game play. Express yourself however you see fit as we all work together to reach out goals.
            </p>
          </div>

        </q-card-section>
      </q-card>
    </div>

    <div class="q-pa-md roadmap-card">
      <q-card dense square class="my-card q-pa-xs">
        <q-card-section class="row bg-secondary">
          <q-icon name="stay_primary_portrait" class="text-white center" style="font-size: 4rem;" />
          <div>
            <h6 class="q-pa-sm">Tasklins... The App</h6>
            <p>
              It's hard to say exactly where the app falls in our timeline, but this is absolutely a priority. We'd love to let users have Tasklins on their phone more 
              easily, and somewhat have things in place to do this (though to start, the app version would look fairly similar to the mobile browser version). At this point 
              we just want to have things running slightly more stabley before spending the money we need to to get in both the Apple and Android app stores. We'll likely start 
              with rough versions that you need to manually put onto your phone to make sure everything works, and go from there.
            </p>
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
