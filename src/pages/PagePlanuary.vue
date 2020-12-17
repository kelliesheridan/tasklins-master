<template>
  <q-page padding>
    <div class="planuaryDay day-1">
      <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayOne = !dayOne">
                Planuary. Day One.
              </q-btn>                  
              <q-space />       
              <q-btn v-if="dayOne" flat round dense icon="edit" />
              <q-btn @click="dayOne = !dayOne" v-if="!dayOne" padding="none" class="no-margin" flat color="secondary" round dense icon="add" />
            </div>
          </q-card-section>

          <q-card-section v-if="dayOne">
            <p>It's a new year! There are 365 days ahead of us, each one as full of possibility as the night sky. We're going to spend a lot of time this month making goals and turning those goals into plans, while also focusing on ways to find balance in our day to day lives. But goals and plans aren't the only things that matter here at Tasklins. Your heart is just as important as your head.</p>
            <p>So, before we get started on planning our years, all you need to do today is make a wish! A wish can be whatever you want it to be. The important part is sending it out into the universe, which is exactly what we're going to do today. Send your wish out into the world and make it real. With a little luck, someone else who is working hard on their dreams this year too will see it and send a little extra luck your way.</p>
            <p><i>Please keep in mind that other Tasklins users will be able to see your wish (but not your name or which wish belongs to which user). So with that in mind, please avoid using any inappropriate language, or sharing information you wouldn't want others to see.</i></p>
            
            <div>
            <div class="text-h7 focus-boxes center">
              <q-input class="q-m-xs" rounded label="Make a Wish!" outlined v-model="yourWish"></q-input>
            </div>
            <div class="center q-pa-md">
              <q-btn @click="'wishSubmitted == true' && submitWish()"  class="q-pa-xs" color="primary" size="md" label="Send Your Wish!" />              
            </div>
            </div>

            <div class="center" v-show="wishSubmitted">
              <p>That's all for today! Check back tomorrow, or visit the explore page and look up at the night's sky. <i>Hint: This will only work in dark mode, which you can access through settings.</i></p>
            </div>          
          </q-card-section>
      </q-card>
    </div>

    <div class="planuaryDay day-2">
      <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayTwo = !dayTwo">
                Planuary. Day Two.
              </q-btn>
              <q-space />         

              <q-btn v-if="dayTwo" class="no-margin no-padding" flat round dense icon="edit" />
              <q-btn @click="dayTwo = !dayTwo" v-if="!dayTwo" color="secondary" padding="none" class="no-margin no-padding" flat round dense icon="add" />
            </div>
          </q-card-section>

          <q-card-section v-if="dayTwo">
            <p>Our wishes are now out there in the universe, but it's time to focus our efforts. Today's task is all about honing in on which areas of our life we most want to focus on for the new year. Take some time to come up with three to five general areas you want to focus your goals on this year. These can be anything from school to a side buisness to a skill you want to learn... anything! But don't worry too much about including the things you HAVE TO work on this year. They're going to be there no matter what, so instead try to focus on areas of your life you <i>want</i> to put more energy toward.</p>
            
            <div>
              <div class="text-h7 focus-boxes center">
                <q-input class="q-pa-xs" rounded label="Focus One" outlined v-model="focusOne"></q-input>
                <q-input class="q-pa-xs" rounded label="Focus Two" outlined v-model="focusTwo"></q-input>
                <q-input class="q-pa-xs" rounded label="Focus Three" outlined v-model="focusThree"></q-input>
                <q-input class="q-pa-xs" v-if="focusThree != null" rounded label="Focus Four" outlined v-model="focusFour"></q-input>
                <q-input class="q-pa-xs" v-if="focusFour != null" rounded label="Focus Five" outlined v-model="focusFive"></q-input>
              </div>
              <div class="center q-pa-md">
                <q-btn class="q-pa-xs" color="primary" size="md" label="Let's Go!" />
              </div>
            </div>

            <div v-show="focusThree != null">
              Done! If you haven't already, consider creating new projects here on Tasklins to go along with each of your focus areas, which you can do from the journal page.
            </div>
          </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      dayOne: false,
      wishSubmitted: false,
      dayTwo: false,
      focusOne: "",
      focusTwo: "",
      focusThree: null,
      focusFour: null,
      focusFive: "",
      dayThree: false,
      dayFour: false,
      dayFive: false,
      daySix: false,
      daySeven: false,
      dayEight: false,
      dayNine: false,
      dayTen: false,
      dayEleven: false,
      dayTwelve: false,
      dayThirteen: false,
      dayFourteen: false,
      dayFifteen: false,
      daySixteen: false,
      daySeventeen: false,
      dayEighteen: false,
      dayNineteen: false,
      dayTwenty: false,
      dayTwentyOne: false,
      dayTwentyTwo: false,
      dayTwentThree: false,
      dayTwentyFour: false,
      dayTwentyFive: false,
      dayTwentySix: false,
      dayTwentySeven: false,
      dayTwentyEight: false,
      dayTwentyNine: false,
      dayThirty: false,
      dayThrtyOne: false,
    };
  },
   computed: {
    ...mapGetters("planuary", ["planuary"]),
    ...mapGetters("community", ["community"]),

    planuaryWish: {
      get() {
        return this.planuary.planuaryWish;
      },
      set(value) {
        this.setPlanuaryWish(value);
      }
    },
    // showProjectsOnPage: {
    //   get() {
    //     return this.settings.showProjectsOnPage;
    //   },
    //   set(value) {
    //     this.setShowProjectsOnPage(value);
    //   }
    // },
    // hideCompletedTasks: {
    //   get() {
    //     return this.settings.hideCompletedTasks;
    //   },
    //   set(value) {
    //     this.setHideCompletedTasks(value);
    //   }
    // },
    // darkMode: {
    //   get() {
    //     return this.settings.darkMode;
    //   },
    //   set(value) {
    //     this.setDarkMode(value);
    //   }
    // }
  },
    methods: {
    ...mapActions("community", [
      "setPlanuaryWish"
    ]),
    submitWish() {
      this.fbUpdateWish();
    }
  }
}
</script>
