<template>
  <q-page padding>
    <div class="q-pa-xs">
      <index-menu />

      <div class="row q-pa-xs">
        <div class="col-2 newsMenuSection q-pa-sm">
          <div class="col center">

            <q-btn class="row newsBtn" color="secondary" @click="news = 7">
              Weekly Mode + Bug Fixes
            </q-btn>

            <q-btn class="row newsBtn" color="primary" @click="news = 6">
              July
            </q-btn>
            
            <q-btn class="row newsBtn" color="secondary" @click="news = 5">
              June
            </q-btn>

            <q-btn class="row newsBtn" color="primary" @click="news = 4">
              February
            </q-btn>

            <q-btn class="row newsBtn" color="secondary" @click="news = 3">
              Some Small Updates
            </q-btn>

            <q-btn class="row newsBtn" color="primary" @click="news = 2">
              One Week Down
            </q-btn>

            <q-btn class="row newsBtn" color="secondary" @click="news = 1">
              Happy New Year
            </q-btn>
          </div>
        </div>

        <div class="col q-pa-sm">

          <div class="newsPost" v-if="news == 7">
            <h4>Weekly Mode + Bug Fixes</h4>
            <br />
            <p>
              Brace yourselves, this is the biggest update we've had in a good long while. It's time 
              for the feature I personally have been "waiting for" (basically waiting for myself to 
              get my act together on) the longest since this is the closest I've gotten to adapting 
              the weekly planner system I use outside of Tasklins to work here on the website. Very 
              much hoping it will be as useful to other people as it has been for me.
            </p>  
            <p>
              From now on, when you're on the home page, you can switch over from daily mode 
              (essentially the default home page task list we've had for a while now) over to 
              weekly mode. While the daily view lets you see what you still need to get done today, 
              your weekly view will show you your whole week at a glance, broken down by project. 
              We've also added a new weekly button on the add/edit task page. You can click the new 
              arrow button which will mark that task as due <i>the week of</i> the due date you 
              select, rather than on the specific due date. This is for all the tasks that you know 
              you need to do at some point this week, but there isn't a specific date associated 
              with it. This is something I use ALL THE TIME to give my weekly schedule's more 
              flexibility. I'm planning a patreon post later this week that goes more in depth 
              on how I use weekly mode and future plans for this new mode.
            </p>
            <p>
              This new update also comes with some bug changes here and there, including some mood 
              fixes (you can now actually see the adorable, sleepy eyelids when your Tasklin is 
              feeling overworked), and a few other little things that have been bugging me, along 
              with some bugs that all of you have reported.
            </p>
            <p>More to come soon. Have a fantastic week!</p>
          
          </div>

          <div class="newsPost" v-if="news == 6">
            <h4>July!</h4>
            <br />
            <p>
              Did I say more frequent updates? *awkward cough*
            </p>  
            <p>
              July is here, along with a small update. Some of these bugs have been tough to crack 
              because I'm very much not a pro at this stuff and am learning as I go. We shouuulldd 
              have a fix for any of you who have been getting invisible Tasklins, along with some 
              mood bugs and some general make things run more smoothly fixes up now.
            </p>
            <p>
              There is also a bigger update on the way that's already close to completion. I'd hoped 
              to have that up today too since it technically works, but am going to try to clean 
              it up a little more first. And that is a new weekly view where you can see your whole 
              week at a glance. This is usually how I like to run my own schedule since I work from 
              home and usually set my own chaos hours, so having tasks that need to be done at some 
              point this week instead of assigning everything to a specific day tends to give me 
              more flexibility. So hopefully you'll all be seeing that shortly.
            </p>
          
          </div>

          <div class="newsPost" v-if="news == 5">
            <h4>June?!</h4>
            <br />
            <p>
              No, seriously... how is it June already? I know it's been a while since we've had 
              an update around here, but we're back in action, so thank you all so much for your 
              patience.
            </p>  
            <p>
              The first thing you're probably going to notice is... the art update! Yup, 
              your Tasklin looks a little different. In order to adjust for future evolutions 
              of all our Tasklins, I ended up changing some of the art around and making some 
              additions. Ultimately, with every other level (up to a point) your Tasklin will 
              gain or change a physical feature, letting them grow up as you get things done. 
              Only the first few levels are in place right now, but more are coming.
            </p>
            <p>
              The next thing you might notice is that there are a few fewer pages to visit on 
              site right now. Both the community and challenges pages have been taken down 
              temporarily. Let's face it, they weren't getting a lot of love, so its time to 
              spruce them up a little.
            </p>
            <p>
              That's all for now, but more to come soon. Hopefully we'll be back to weekly or so 
              updates, rather than monthly! I'm almost positive there are more bugs lurking around 
              here, so if you come up against any issues, please feel free to reach out to me directly 
              on social media (links on the bottom of the home page).
            </p>
          
          </div>

          <div class="newsPost" v-if="news == 4">
            <h4>February</h4>
            <br />
            <p>
              What a month! February has flown by with some personal life things going 
              on behind the scenes... all good, just hectic! I have a new neice in my life 
              (and my house), so that's been exciting, but it's well past time for a 
              Tasklins update.
            </p>  
            <p>
              This week's update is focusing on moods! Your Tasklins are now capable of 
              more moods than ever before, and we've also had to do some tweaking on some 
              of the current possible moods to keep everything nice and balanced. Plus, we've
              added two more possible moods into the mood tracker in your journal with plans 
              for more to come! Enjoy!!
            </p>
            <p>
              If you're looking for a little more detail, we've also had a new
              Patreon post go up today, including a look into what you can expect 
              in next week's update, and a hint about just how moody your Tasklin 
              can be.
            </p>
          </div>

        <div class="newsPost" v-if="news == 3">
          <h4>Some Small Updates</h4>
          <br />
          <p>
            Another week of 2021 in the books, and another week of Planuary up for you to explore. If you haven't gone through and filled 
            out this week's prompts yet, we recommend popping over there whenever you have a minute. We'll be bringing your answers back up 
            throughout the year in some unexpected ways.
          </p>  

          <p>
             We've also made some small improvements and bug fixes this week. Things should look a little cleaner in mobile, load a little faster, 
             and generally, break a little less often. Always a win!
          </p>

          <p>
             In terms of what's next... we're still trying to fix the bug where Tasklins aren't leveling up like they're supposed to. 
             But I'd also really, really like to update the Tasklin art before that happens as well, which is a fairly big task. So far, 
             one of the biggest issues in creating Tasklins has been that how I envision everything looking is still leaps and bounds 
             above my own artistic ability. Of course, I'd love to hire an artist one day and take things to the next level, but we're 
             still a ways away from the happening. So for now, expect all things artistic on the website to change and evolve over time.
          </p>
        </div>
          
        <div class="col q-pa-sm">
          <div class="newsPost" v-if="news == 2">
            <h4>One Week Down</h4>
            <br />
            <p>
              Heyyyy, we think we fixed the thing where everyone using challenges
              was randomly changing to orange. If not, we'll keep trying!
            </p>  
            <p>
              We're now a week in to the new year, and what a week it's been.
              Even aside from everything going on out there in the real world,
              it's been a hectic week with plenty of changes around here.
              Whether you're new to Tasklins or have been with us since our
              closed alpha stage, we're so glad you're here!
            </p>
            <p>
              First off, Planuary is in full swing, and we hope you're having
              fun exploring the possibilities this new year holds. Don't forget
              to dream big! We have cleaned up some bugs on the Planuary page
              this week, so have a look through your past entries to make sure
              everything looks the way it's supposed to. Seeing your wishes up
              in the Taskland sky has been amazing. For anyone unsure how that
              works, after changing to Dark Mode (in settings) you can visit our
              explore page and select look up from the menu. Then if you
              hover/click on any of the stars, you'll be able to see a wish made
              by someone in the community. Each time the page loads, new wishes
              are randomly selected, so your wish may or may not show up, but
              know that someone else out there will see it.
            </p>
            <p>
              There's also been some other changes around the site, sometimes
              small fixes or changes (like this shiny new news page), and some
              new features like our new Mood Tracker... which I'm very, very
              excited about. We'll be adding new moods in soon to give you more
              options moving forward. We'll also be adding more features over
              time to our bullet journal page, and have lots of hopes for the
              future!
            </p>
          </div>

          <div v-if="news == 1">
            <h4>Happy New Year!</h4>
            <br />
            <p>
              2020 is finally over and an exciting new year has begun, along
              with big changes here at Tasklins. Most importantly, we are now
              open for new friends! We're open for new signups and are looking
              forward to seeing how our community grows and changes over the
              course of the year.
            </p>
            <p>
              We've also launched the first over several big updates! Our
              challenges are more dynamic, our task page has taken its first
              steps toward its new journal form, and your Tasklins can now
              (start) to evolve as they level up. There's so much more to come,
              and we can't wait to share it with you!
            </p>
            <p>
              Finally, our last big news... Planuary is here! Throughout the
              entire month of January, we'll be posting daily planning and goal
              setting exercises, along with new features and tools to help make
              your 2021 dreams into a reality.
            </p>
            <p>
              That's all for now, but there will be plenty of more details to
              come over the course of the next week. For now, happy new year,
              happy planning, and thank you so very, very much for being here
              with us on this exciting new adventure.
            </p>
          </div>
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
      news: 4
    };
  },
  computed: {
     ...mapGetters('settings', ['settings']),
  },
  components: {
    "index-menu": require("components/IndexMenu.vue").default
  }
};
</script>
