<template>
  <q-page padding>
    <div class="planuaryDay day-1">
      <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn  v-show="!wishSubmitted" dense flat @click="dayOne = !dayOne">
                Planuary. Day One.
              </q-btn>
              <p class="center" v-show="wishSubmitted">That's all for today! Check back tomorrow, or visit the explore page and look up at the night's sky. <i>Hint: This will only work in dark mode, which you can access through settings.</i></p>         
              <q-space />       
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
              <q-btn @click="'wishSubmitted = true' && setPlanuaryWish()"  class="q-pa-xs" color="primary" size="md" label="Send Your Wish!" />              
            </div>
            </div>       
          </q-card-section>
      </q-card>
    </div>

    <div class="planuaryDay day-2" v-if="dayTwo">
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
                <q-btn @click="setFocus()" class="q-pa-xs" color="primary" size="md" label="Let's Go!" />
              </div>
            </div>

            <div v-show="focusThree != null">
              Done! If you haven't already, consider creating new projects here on Tasklins to go along with each of your focus areas, which you can do from the journal page.
            </div>
          </q-card-section>
      </q-card>
    </div>

    <div class="planuaryDay day-3" v-if="dayThree">
      <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayThree = !dayThree">
                Planuary. Day Three.
              </q-btn>
              <q-space />         

              <q-btn v-if="dayThree" class="no-margin no-padding" flat round dense icon="edit" />
              <q-btn @click="dayThree = !dayThree" v-if="!dayThree" color="secondary" padding="none" class="no-margin no-padding" flat round dense icon="add" />
            </div>
          </q-card-section>

          <q-card-section v-if="dayThree">
            <p>How are you feeling today?</p>
            <p>No, really. This is important. As we start to plan for our new year, and then as we go through and turn our plans into actions, it can be so important to keep track of your emotional state. </p>
            
            <div>
              <div class="q-pa-sm rounded-borders">
                <q-option-group
                  name="mood_1"
                  v-model="mood_1"
                  :options="options"
                  type="checkbox"
                  color="primary"
                  inline
                />
              </div>
              <div class="center q-pa-md">
                <q-btn class="q-pa-xs" color="primary" size="md" label="Let's Go!" />
              </div>
            </div>

            <div v-show="dayThree">
              Thank you! From today onward, you'll now be able to log your mood for each day from the home page, and soon we'll have tools in place to help you track your mood over time. If you'd like, you can also let us know what your mood was like yesterday and the day before so you can work toward keeping a record for the entire year.
              <div class="q-pa-sm rounded-borders">
                January 1st: 
                <q-option-group
                  name="mood_2"
                  v-model="mood_2"
                  :options="options"
                  type="checkbox"
                  color="primary"
                  inline
                />
              </div>

              <div class="q-pa-sm rounded-borders">
                January 2nd: 
                <q-option-group
                  name="mood_3"
                  v-model="mood_3"
                  :options="options"
                  type="checkbox"
                  color="primary"
                  inline
                />
              </div>
            </div>
          </q-card-section>
      </q-card>
    </div>

    <div class="planuaryDay day-4" v-if="dayFour">
      <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayFour = !dayFour">
                Planuary. Day Four.
              </q-btn>
              <q-space />         

              <q-btn v-if="dayFour" class="no-margin no-padding" flat round dense icon="edit" />
              <q-btn @click="dayFour = !dayFour" v-if="!dayFour" color="secondary" padding="none" class="no-margin no-padding" flat round dense icon="add" />
            </div>
          </q-card-section>

          <q-card-section v-if="dayFour">
            <p>Four days in and we still haven't talked about the traditional <i>New Year's Resolutions</i>. So, it's time to fix that! It's time to set your goals for the year, but there are a few things to keep in mind.</p>
            <p>1) Make sure your goals are things you have control over. Things like winning the lottery, having someone fall in love with you or getting a book agent rely on luck or other people's choices and don't usually make for strong goals.</p>
            <p>2) Try to focus on goals you can measure. Practicing Spanish for 20 minutes every day vs. getting better at Spanish.</p>
            <p>3) At the end of the day, there are no rules! Your goals can be whatever you need them to be.</p>

            <div>
              <div class="text-h7 focus-boxes center">
                <q-input class="q-pa-xs" rounded label="Goal One" outlined v-model="focusOne"></q-input>
                <q-input class="q-pa-xs" rounded label="Goal Two" outlined v-model="focusTwo"></q-input>
                <q-input class="q-pa-xs" rounded label="Goal Three" outlined v-model="focusThree"></q-input>
                <q-input class="q-pa-xs" v-if="focusThree != null" rounded label="Goal Four" outlined v-model="goalFour"></q-input>
                <q-input class="q-pa-xs" v-if="goalFour != null" rounded label="Goal Five" outlined v-model="goalFive"></q-input>
                <q-input class="q-pa-xs" v-if="goalSix != null" rounded label="Goal Six" outlined v-model="goalSix"></q-input>
              </div>
              <div class="center q-pa-md">
                <q-btn @click="setFocus()" class="q-pa-xs" color="primary" size="md" label="Let's Go!" />
              </div>
            </div>

            <div v-show="focusThree != null">
              Done! If you haven't already, consider creating new projects here on Tasklins to go along with each of your focus areas, which you can do from the journal page.
            </div>
          </q-card-section>
      </q-card>
    </div>

    <div class="planuaryDay day-5" v-if="dayFive">
      <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayFive = !dayFive">
                Planuary. Day Five.
              </q-btn>
              <q-space />         

              <q-btn v-if="dayFive" class="no-margin no-padding" flat round dense icon="edit" />
              <q-btn @click="dayFive = !dayFive" v-if="!dayFive" color="secondary" padding="none" class="no-margin no-padding" flat round dense icon="add" />
            </div>
          </q-card-section>

          <q-card-section v-if="dayFive">
            <p>There's no way to know for sure what is coming for any of us this year, but we all have things we're looking forward to! Today's task is to focus on the good, the exciting, the fun!</P>
            <p>Let's make a list of all the things you're looking forward to this year. </p>
            <div>
              <div class="text-h7 focus-boxes center">
                <q-input class="q-pa-xs" rounded label="Focus One" outlined v-model="focusOne"></q-input>
                <q-input class="q-pa-xs" rounded label="Focus Two" outlined v-model="focusTwo"></q-input>
                <q-input class="q-pa-xs" rounded label="Focus Three" outlined v-model="focusThree"></q-input>
                <q-input class="q-pa-xs" v-if="goalThree != ''" rounded label="Focus Four" outlined v-model="focusFour"></q-input>
                <q-input class="q-pa-xs" v-if="goalFour != ''" rounded label="Focus Five" outlined v-model="focusFive"></q-input>
                <q-input class="q-pa-xs" v-if="goalFove != ''" rounded label="Focus Six" outlined v-model="focusSix"></q-input>
              </div>
              <div class="center q-pa-md">
                <q-btn @click="setGoals()" class="q-pa-xs" color="primary" size="md" label="Let's Go!" />
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
      dayOne: true,
      wishSubmitted: false,
      dayTwo: false,
      dayThree: false,
      dayFour: false,
      dayFive: false,
      focus1: "",
      focus2: "",
      focus3: "",
      focus4: "",
      focus5: "",
      wish1: "",

      options: [
        {
          label: ':D',
          value: 'great'
        },
        {
          label: ':)',
          value: 'happy'
        },
        {
          label: ':|',
          value: 'fine'
        },
        {
          label: ':(',
          value: 'lousy'
        },
        {
          label: '>:(',
          value: 'awful'
        }
      ],
      mood_1: null,
      goal1: "",
      goal2: "",
      goal3: "",
      goal4: "",
      goal5: "",
      goal6: "",
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
    ...mapGetters("planuary", ["planuary", "random16"]),
    ...mapGetters("community", ["community"]),
    ...mapGetters("profile", ["profile"]),

    yourWish: {
      get() {
        var wish = "";
        var stuff = this.random16;
        var userId = this.profile.id;
        if (this.planuary[this.profile.id] != undefined) {
        return this.planuary[userId].wish;
        } else {
          return "";
        }
      },
      set(value) {
        this.wish1 = value;
      }
    },
    focusOne: {
      get() {
        return this.focus1
      },
      set(value) {
        this.focus1 = value;
      }
    },
    focusTwo: {
      get() {
        return this.focus2
      },
      set(value) {
        this.focus2 = value;
      }
    },
    focusThree: {
      get() {
        return this.focus3
      },
      set(value) {
        this.focus3 = value;
      }
    },
    focusFour: {
      get() {
        return ""
      },
      set(value) {
        this.focus4 = value;
      }
    },
    focusFive: {
      get() {
        return ""
      },
      set(value) {
        this.focus5 = value;
      }
    },
    goalOne: {
      get() {
        return this.goal1
      },
      set(value) {
        this.goal1 = value;
      }
    },
    goalTwo: {
      get() {
        return this.goal2
      },
      set(value) {
        this.goal2 = value;
      }
    },
    goalThree: {
      get() {
        return this.goal3
      },
      set(value) {
        this.goal3 = value;
      }
    },
    goalFour: {
      get() {
        return this.goal4
      },
      set(value) {
        this.goal4 = value;
      }
    },
    goalFive: {
      get() {
        return this.goal5
      },
      set(value) {
        this.goal5 = value;
      }
    },
    goalSix: {
      get() {
        return this.goal6
      },
      set(value) {
        this.goal6 = value;
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
    ...mapActions("planuary", ["addWish", "fbUpdateWish", "addFocus", "addGoals"]),
    setPlanuaryWish() {
      let payload = {
      username: this.profile.username,
      wish: this.wish1
    };
    if (this.planuary[this.profile.id] == undefined) {
      this.addWish(payload);
    } else {
      this.fbUpdateWish(payload);
      this.$q.notify({
        message: "Your wish has been saved!",
        color: "primary",
      });
      this.dayOne = false;
      this.dayTwo = true;
    }
    },
    setFocus() {
      let payload = {
        focus1: this.focus1,
        focus2: this.focus2,
        focus3: this.focus3,
        focus4: this.focus4,
        focus5: this.focus5,
        username: this.profile.username
      }
      this.addFocus(payload);
      this.dayTwo = false;
      this.dayThree = true;
    },
    setGoals() {
      let payload = {
        goal1: this.goal1,
        goal2: this.goal2,
        goal3: this.goal3,
        goal4: this.goal1,
        goal5: this.goal2,
        goal6: this.goal3,
        username: this.profile.username
      }
      this.addGoals(payload);
    }
  }
}
</script>
