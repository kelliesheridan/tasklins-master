<template>
  <q-page padding>
    <div class="q-pa-xs">
      <div class="row q-pa-xs">
        <div class="col-2 newsMenuSection q-pa-sm">

        <div class="col">
        <q-btn class="row newsBtn" color="primary" @click="news = 2">
         One Week Down
        </q-btn>

        <q-btn class="row newsBtn" color="secondary" @click="news = 1">
          Happy New Year
        </q-btn>
        </div>


        </div>
        <div class="col newsSection q-pa-sm">
          <div v-if="news == 2">
            <h4>One Week Down</h4>
            <br>
            <p>We're now a week in to the new year, and what a week it's been. </p>
            <p>We've also launched the first over several big updates! Our challenges are more dynamic, our task page has taken its first steps toward its new journal form, and your Tasklins can now (start) to evolve as they level up. There's so much more to come, and we can't wait to share it with you!</p>
            <p>Finally, our last big news... Planuary is here! Throughout the entire month of January, we'll be posting daily planning and goal setting exercises, along with new features and tools to help make your 2021 dreams into a reality.</p>
            <p>That's all for now, but there will be plenty of more details to come over the course of the next week. For now, happy new year, happy planning, and thank you so very, very much for being here with us on this exciting new adventure.</p>
          </div>

          <div v-if="news == 1">
            <h4>Happy New Year!</h4>
            <br>
            <p>2020 is finally over and an exciting new year has begun, along with big changes here at Tasklins. 
            Most importantly, we are now open for new friends! We're open for new signups and are looking forward to seeing how our community grows and changes over the course of the year.</p>
            <p>We've also launched the first over several big updates! Our challenges are more dynamic, our task page has taken its first steps toward its new journal form, and your Tasklins can now (start) to evolve as they level up. There's so much more to come, and we can't wait to share it with you!</p>
            <p>Finally, our last big news... Planuary is here! Throughout the entire month of January, we'll be posting daily planning and goal setting exercises, along with new features and tools to help make your 2021 dreams into a reality.</p>
            <p>That's all for now, but there will be plenty of more details to come over the course of the next week. For now, happy new year, happy planning, and thank you so very, very much for being here with us on this exciting new adventure.</p>
          </div>
        </div>
      </div>
    
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";


export default {
  data() {
    return {
      news: 1,
    }
  }
}
</script>
