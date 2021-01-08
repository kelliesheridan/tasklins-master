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
            <p>We're now a week in to the new year, and what a week it's been. Even aside from everything going on out there in the real world, it's been a hectic week 
              with plenty of changes around here. Whether you're new to Tasklins or have been with us since our closed alpha stage, we're so glad you're here!
            </p>
            <p>
              First off, Planuary is in full swing, and we hope you're having fun exploring the possibilities this new year holds. Don't forget to dream big! We have cleaned up
              some bugs on the Planuary page this week, so have a look through your past entries to make sure everything looks the way it's supposed to. Seeing your wishes
              up in the Taskland sky has been amazing. For anyone unsure how that works, after changing to Dark Mode (in settings) you can visit our explore page and select look 
              up from the menu. Then if you hover/click on any of the stars, you'll be able to see a wish made by someone in the community. Each time the page loads, new wishes
              are randomly selected, so your wish may or may not show up, but know that someone else out there will see it.
            </p>
            <p>
              There's also been some other changes around the site, sometimes small fixes or changes (like this shiny new news page), and some new features like our new Mood 
              Tracker... which I'm very, very excited about. We'll be adding new moods in soon to give you more options moving forward. We'll also be adding more features over 
              time to our bullet journal page, and have lots of hopes for the future!
            </p>
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
      news: 2,
    }
  }
}
</script>
