<template>
  <q-page padding>
    <div class="planuaryDay">
      <q-card>
        <q-card-section>
          <div class="text-h7 row">
            <q-btn dense flat @click="weekOne = !weekOne">
              Planuary. Week One.
            </q-btn>

            <q-space />
            <q-btn
              @click="weekOne = !weekOne"
              v-if="!weekOne"
              padding="none"
              class="no-margin"
              flat
              color="secondary"
              push
              dense
              icon="keyboard_arrow_down"
            />

            <q-btn
              @click="weekOne = !weekOne"
              v-if="weekOne"
              padding="none"
              class="no-margin"
              flat
              color="secondary"
              push
              dense
              icon="keyboard_arrow_up"
            />
          </div>
        </q-card-section>
      </q-card>
    </div>

    <div v-if="weekOne">
      <div class="planuaryDay day-1">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn
                v-show="!wishSubmitted"
                dense
                flat
                @click="dayOne = !dayOne"
              >
                Planuary. Day One.
              </q-btn>

              <q-space />
              <q-btn
                @click="dayOne = !dayOne"
                padding="none"
                class="no-margin"
                flat
                color="secondary"
                push
                dense
                icon="add"
              />
            </div>
          </q-card-section>

          <q-card-section v-if="!hasWish() || dayOne">
            <p>
              It's a new year! There are 365 days ahead of us, each one as full
              of possibility as the night sky. We're going to spend a lot of
              time this month making goals and turning those goals into plans,
              while also focusing on ways to find balance in our day to day
              lives. But goals and plans aren't the only things that matter here
              at Tasklins. Your heart is just as important as your head.
            </p>
            <p>
              So, before we get started on planning our years, all you need to
              do today is make a wish! A wish can be whatever you want it to be.
              The important part is sending it out into the universe. Send your
              wish out into the world and make it real. With a little luck,
              someone else who is working hard on their dreams this year too
              will see it and send a little extra luck your way.
            </p>
            <p>
              <i
                >Please keep in mind that other Tasklins users will be able to
                see your wish (but not your name or which wish belongs to which
                user). So with that in mind, please avoid using any
                inappropriate language, or sharing information you wouldn't want
                others to see.</i
              >
            </p>

            <div>
              <div class="text-h7 focus-boxes center">
                <q-input
                  class="q-m-xs"
                  rounded
                  label="Make a Wish!"
                  outlined
                  v-model="yourWish"
                ></q-input>
              </div>
              <div class="center q-pa-md">
                <q-btn
                  @click="'wishSubmitted == true' && setPlanuaryWish()"
                  class="q-pa-xs"
                  color="primary"
                  size="md"
                  label="Send Your Wish!"
                />
              </div>
              <p class="center">
                That's all for today! Check back tomorrow, or visit the explore
                page and look up at the night's sky.
                <i
                  >Hint: This will only work in dark mode, which you can access
                  through settings.</i
                >
              </p>
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

              <q-space />
              <q-btn
                @click="dayTwo = !dayTwo"
                padding="none"
                class="no-margin"
                flat
                color="secondary"
                push
                dense
                icon="add"
              />
            </div>
          </q-card-section>

          <q-card-section v-if="dayTwo">
            <p>
              Our wishes are now out there in the universe, but it's time to
              focus our efforts. Today's task is all about honing in on which
              areas of our life we most want to focus on for the new year. Take
              some time to come up with three to five general areas you want to
              focus your goals on this year. These can be anything from school
              to a side buisness to a skill you want to learn... anything! But
              don't worry too much about including the things you HAVE TO work
              on this year. They're going to be there no matter what, so instead
              try to focus on areas of your life you <i>want</i> to put more
              energy toward.
            </p>

            <p>
              <i
                >Anything listed here will remain private and not be posted
                elsewhere on the website.</i
              >
            </p>

            <p>
              Once you're done, if you haven't already, consider creating new
              projects here on Tasklins to go along with each of your focus
              areas, which you can do from the journal page.
            </p>

            <div>
              <div class="text-h7 focus-boxes center">
                <q-input
                  class="q-pa-xs"
                  rounded
                  label="Focus One"
                  outlined
                  v-model="focusOne"
                ></q-input>
                <q-input
                  class="q-pa-xs"
                  rounded
                  label="Focus Two"
                  outlined
                  v-model="focusTwo"
                ></q-input>
                <q-input
                  class="q-pa-xs"
                  rounded
                  label="Focus Three"
                  outlined
                  v-model="focusThree"
                ></q-input>
                <q-input
                  class="q-pa-xs"
                  rounded
                  label="Focus Four"
                  outlined
                  v-model="focusFour"
                ></q-input>
                <q-input
                  class="q-pa-xs"
                  rounded
                  label="Focus Five"
                  outlined
                  v-model="focusFive"
                ></q-input>
              </div>
              <div class="center q-pa-md">
                <q-btn
                  @click="setFocus()"
                  class="q-pa-xs"
                  color="primary"
                  size="md"
                  label="Let's Go!"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="planuaryDay day-3">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayThree = !dayThree">
                Planuary. Day Three.
              </q-btn>
              <q-space />

              <q-btn
                @click="dayThree = !dayThree"
                color="secondary"
                padding="none"
                class="no-margin no-padding"
                flat
                round
                dense
                icon="add"
              />
            </div>
          </q-card-section>

          <q-card-section v-if="dayThree">
            <p>How are you feeling today?</p>
            <p>
              No, really. This is important. As we start to plan for our new
              year, and then as we go through and turn our plans into actions,
              it can be so important to keep track of your emotional state.
            </p>

            <p>
              Today, we're introducing a new feature to let you track how you
              felt on each day of the year. Just click on a mood, pick a date,
              and go! For now, there are three options to choose from (four for
              patrons), but we'll be adding more over the next little while to
              include more variety to the selections.
            </p>

            <p>
              It's also worth keeping in mind that you can choose the date when
              you select an emotion, so if you want to set moods for the
              previous days 2021 so far, you can absolutely do that! There is
              also a new page in your journal to access the mood picker whenever
              you need to. We'll also be adding some stats and tracking in the
              near future!
            </p>

            <p>
              Have a great day!
            </p>

            <mood-picker class="center"></mood-picker>
          </q-card-section>
        </q-card>
      </div>

      <div class="planuaryDay day-4">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayFour = !dayFour">
                Planuary. Day Four.
              </q-btn>
              <q-space />

              <q-btn
                @click="dayFour = !dayFour"
                v-if="!dayFour"
                color="secondary"
                padding="none"
                class="no-margin no-padding"
                flat
                round
                dense
                icon="add"
              />
            </div>
          </q-card-section>

          <q-card-section v-if="dayFour">
            <p>
              Four days in and we still haven't talked about the traditional
              <i>New Year's Resolutions</i>. Let's fix that! It's time to set
              your goals for the year, but there are a few things to keep in
              mind.
            </p>
            <p>
              1) Make sure your goals are things you have control over. Things
              like winning the lottery, having someone fall in love with you or
              getting a book agent rely on luck or other people's choices and
              don't usually make for achieveable goals.
            </p>
            <p>
              2) Try to focus on goals you can measure. Practicing Spanish for
              20 minutes three times a week vs. getting better at Spanish.
            </p>
            <p>
              3) That being said, allow some room to mess up. If you set a goal
              to do something every day and then mess up the first week, there's
              no reason to throw out the whole year. Your goals probably don't
              need specific deadlines.
            </p>
            <p>
              4) At the end of the day, there are no rules! You can ignore all
              of this and make your goals whatever you need them to be. Try
              something new, and we'll see how it goes!
            </p>

            <div>
              <div class="text-h7 focus-boxes center">
                <q-input
                  class="q-pa-xs"
                  rounded
                  label="Goal One"
                  outlined
                  v-model="goalOne"
                ></q-input>
                <q-input
                  class="q-pa-xs"
                  rounded
                  label="Goal Two"
                  outlined
                  v-model="goalTwo"
                ></q-input>
                <q-input
                  class="q-pa-xs"
                  rounded
                  label="Goal Three"
                  outlined
                  v-model="goalThree"
                ></q-input>
                <q-input
                  class="q-pa-xs"
                  v-if="focusThree != null"
                  rounded
                  label="Goal Four"
                  outlined
                  v-model="goalFour"
                ></q-input>
                <q-input
                  class="q-pa-xs"
                  v-if="goalFour != null"
                  rounded
                  label="Goal Five"
                  outlined
                  v-model="goalFive"
                ></q-input>
              </div>
              <p>
                <i
                  >Anything listed here will remain private and not be posted
                  elsewhere on the website.</i
                >
              </p>
              <div class="center q-pa-md">
                <q-btn
                  @click="setGoals()"
                  class="q-pa-xs"
                  color="primary"
                  size="md"
                  label="Onward"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="planuaryDay day-5">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayFive = !dayFive">
                Planuary. Day Five.
              </q-btn>
              <q-space />

              <q-btn
                @click="dayFive = !dayFive"
                v-if="!dayFive"
                color="secondary"
                padding="none"
                class="no-margin no-padding"
                flat
                round
                dense
                icon="add"
              />
            </div>
          </q-card-section>

          <q-card-section v-if="dayFive">
            <p>
              There's no way to know for sure what is coming for any of us this
              year, but we all have things we're looking forward to! Today's
              task is to focus on the good, the exciting, the fun!
            </p>
            <p>
              Let's make a list of some of the things you're looking forward to
              this year. This can be anything from a big birthday to a new album
              or movie you're looking forward to, or a class you're going to
              take!
            </p>
            <p>
              <i
                >Anything listed here will remain private and not be posted
                elsewhere on the website.</i
              >
            </p>

            <div>
              <div class="text-h7 focus-boxes center">
                <q-input
                  class="q-pa-xs"
                  rounded
                  label="What are you looking forward to?"
                  outlined
                  v-model="highlightOne"
                ></q-input>
                <q-input
                  class="q-pa-xs"
                  rounded
                  label="What are you looking forward to?"
                  outlined
                  v-model="highlightTwo"
                ></q-input>
                <q-input
                  class="q-pa-xs"
                  rounded
                  label="What are you looking forward to?"
                  outlined
                  v-model="highlightThree"
                ></q-input>
                <q-input
                  class="q-pa-xs"
                  rounded
                  label="What are you looking forward to?"
                  outlined
                  v-model="highlightFour"
                ></q-input>
                <q-input
                  class="q-pa-xs"
                  rounded
                  label="What are you looking forward to?"
                  outlined
                  v-model="highlightFive"
                ></q-input>
              </div>

              <div class="center q-pa-md">
                <q-btn
                  @click="setHighlights()"
                  class="q-pa-xs"
                  color="primary"
                  size="md"
                  label="Now, let's see what happens!"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="planuaryDay day-6">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="daySix = !daySix">
                Planuary. Day Six.
              </q-btn>
              <q-space />

              <q-btn
                @click="daySix = !daySix"
                v-if="!daySix"
                color="secondary"
                padding="none"
                class="no-margin no-padding"
                flat
                round
                dense
                icon="add"
              />
            </div>
          </q-card-section>

          <q-card-section v-if="daySix">
            <p>
              Yesterday we talked about the things we're looking forward to this
              year, but now it's time to dig a little deeper, into the things
              that might be a little scarier. The things that you're not so
              excited about. Maybe even worried or nervous about. What are the
              big, scary things in your life these days?
            </p>

            <p>
              We added some prompts below (such as what scares you, or what are
              you worried about) but you don't have to use them. Anything you
              put here is just for you, so be honest and maybe one day when you
              look back on these, they won't seem so scary.
            </p>

            <p>
              <i
                >Note: There's still so much going on in the world, and a lot of
                us are maybe even more anxious than usual. It's totally up to
                you whether these are the things you want to focus on, or if you
                want to keep these more personal. Anything goes!</i
              >
            </p>

            <div>
              <div class="text-h7 focus-boxes center">
                <q-input
                  class="q-pa-xs"
                  rounded
                  label="What have you been worrying about lately?"
                  outlined
                  v-model="scaryOne"
                ></q-input>
                <q-input
                  class="q-pa-xs"
                  rounded
                  label="What scares you about this year?"
                  outlined
                  v-model="scaryTwo"
                ></q-input>
                <q-input
                  class="q-pa-xs"
                  rounded
                  label="Is something making you anxious?"
                  outlined
                  v-model="scaryThree"
                ></q-input>
                <q-input
                  class="q-pa-xs"
                  rounded
                  label="These prompts are kind of depressing..."
                  outlined
                  v-model="scaryFour"
                ></q-input>
                <q-input
                  class="q-pa-xs"
                  rounded
                  label="It's okay to be worried. We're going to be okay."
                  outlined
                  v-model="scaryFive"
                ></q-input>
              </div>

              <div class="center q-pa-md">
                <q-btn
                  @click="setScary()"
                  class="q-pa-xs"
                  color="primary"
                  size="md"
                  label="Close your eyes and leap"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="planuaryDay day-7">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="daySeven = !daySeven">
                Planuary. Day Seven.
              </q-btn>
              <q-space />

              <q-btn
                @click="daySeven = !daySeven"
                v-if="!daySeven"
                color="secondary"
                padding="none"
                class="no-margin no-padding"
                flat
                round
                dense
                icon="add"
              />
            </div>
          </q-card-section>

          <q-card-section>
            <p>
              Ooof! Well, we sure picked the wrong day to talk about, big, scary
              things, and we hope you're all hanging in there. Today's original
              plan was going to be fairly straightforward, asking another
              question to get you thinking about the year ahead. But that can
              all wait... so let's spread some positivity instead.
            </p>

            <p>
              Your task today, is all about encouraging your fellow Taskners?
              Tasklinites? Taskliners? Okay, I don't know what we're called yet,
              but the thought remains the same. We're sending encouragement to
              those who might need it. Use the prompt boxes today to send some
              anonymous love to someone who might be struggling, lacking
              motivation, unsure or in any other way needing a helping hand.
            </p>

            <p>
              Since this is a last minute change, we won't have a way to use
              these for a few more weeks, the plan is to eventually have a
              button that can be used by any member of our community who needs
              some encouragent. Much like how our wish-sky works, they'll then
              see a randomly chosen message in hopes that it will be able to
              help them on their journey.
            </p>

            <p>
              So, let's go forward with good thoughts today! As always, the
              prompts are there for you to use if you need them, but you don't
              need to. So spread some love and cheer, and we'll be back with
              more tomorrow!
            </p>

            <div class="text-h7 focus-boxes center">
              <q-input
                class="q-pa-xs"
                rounded
                label="Got an encouraging motto you use?"
                outlined
                v-model="encouragementOne"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="A bit of sage advice?"
                outlined
                v-model="encouragementTwo"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="What do you like to do to cheer yourself up?"
                outlined
                v-model="encouragementThree"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="We're often our own toughest critics..."
                outlined
                v-model="encouragementFour"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="Be positive!"
                outlined
                v-model="encouragementFive"
              ></q-input>
            </div>

            <div class="center q-pa-md">
              <q-btn
                @click="setEncouragement()"
                class="q-pa-xs"
                color="primary"
                size="md"
                label="Close your eyes and leap"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="planuaryDay day-8">
      <q-card>
        <q-card-section>
          <div class="text-h7 row">
            <q-btn dense flat @click="dayEight = !dayEight">
              Planuary. Day Eight.
            </q-btn>
            <q-space />

            <q-btn
              @click="dayEight = !dayEight"
              v-if="!dayEight"
              color="secondary"
              padding="none"
              class="no-margin no-padding"
              flat
              round
              dense
              icon="add"
            />
          </div>
        </q-card-section>

        <q-card-section>
          <p>
            We made it through the first week of 2021! We're one one step closer
            to reaching out goals, but in order to give ourselves the best
            chance we can of success, we can't only focus on moving forward.
            It's important to also take a moment to pause and reflect on what
            we've already done. What went well? Where did we struggle? What can
            we learn from?
          </p>

          <p>
            Unlike most days on Planuary, we're not going to do this here on
            this page. Instead, you can head over to the journal page to check
            out some new tracking features. You can see get an overview not only
            on what you got finished, but how you were feeling. But we've also
            included some bonus questions below in order to give ourselves time
            to think about how we feel things went this first week, and what we
            might want to change in the future. Plus, having memories to look
            back on later might be fun!
          </p>

          <div class="text-h7 focus-boxes center">
            <q-input
              class="q-pa-xs"
              rounded
              label="What went well this week?"
              outlined
              v-model="weekOneWin"
            ></q-input>
            <q-input
              class="q-pa-xs"
              rounded
              label="What did you struggle with?"
              outlined
              v-model="weekOneStruggle"
            ></q-input>
            <q-input
              class="q-pa-xs"
              rounded
              label="What do you want to remember?"
              outlined
              v-model="weekOneMemory"
            ></q-input>
          </div>

          <div class="center q-pa-md">
            <q-btn
              @click="setWeekOne()"
              class="q-pa-xs"
              color="primary"
              size="md"
              label="On to week two!"
            />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
const moment = require("moment");

export default {
  data() {
    return {
      weekOne: false,
      wishSubmitted: false,
      focus1: "",
      focus2: "",
      focus3: "",
      focus4: "",
      focus5: "",
      wish1: "",

      options: [
        {
          label: ":D",
          value: "great"
        },
        {
          label: ":)",
          value: "happy"
        },
        {
          label: ":|",
          value: "fine"
        },
        {
          label: ":(",
          value: "lousy"
        },
        {
          label: ">:(",
          value: "awful"
        }
      ],
      mood_1: null,
      goal1: "",
      goal2: "",
      goal3: "",
      goal4: "",
      goal5: "",
      highlight1: "",
      highlight2: "",
      highlight3: "",
      highlight4: "",
      highlight5: "",
      scary1: "",
      scary2: "",
      scary3: "",
      scary4: "",
      scary5: "",
      encouragement1: "",
      encouragement2: "",
      encouragement3: "",
      encouragement4: "",
      encouragement5: "",
      week1Win: "",
      week1Struggle: "",
      week1Memory: "",
      week2Win: "",
      week2Struggle: "",
      week2Memory: "",
      week3Win: "",
      week3Struggle: "",
      week3Memory: "",
      dayOne: false,
      dayTwo: false,
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
      dayTwentyThree: false,
      dayTwentyFour: false,
      dayTwentyFive: false,
      dayTwentySix: false,
      dayTwentySeven: false,
      dayTwentyEight: false,
      dayTwentyNine: false,
      dayThirty: false,
      dayThirtyOne: false
    };
  },
  computed: {
    ...mapGetters("planuary", ["planuary", "random16"]),
    ...mapGetters("community", ["community"]),
    ...mapGetters("profile", ["profile"]),
    ...mapState("tasks", ["projectSearch"]),

    yourWish: {
      get() {
        var wish = "";
        var stuff = this.random16;
        var userId = this.profile.id;
        if (this.planuary != undefined) {
          if (this.planuary[this.profile.id] != undefined) {
            return this.planuary[userId].wish;
          } else {
            return "";
          }
        } else {
          return this.wish1 != "" ? this.wish1 : "";
        }
      },
      set(value) {
        this.wish1 = value;
      }
    },
    focusOne: {
      get() {
        return this.focus1;
      },
      set(value) {
        this.focus1 = value;
      }
    },
    focusTwo: {
      get() {
        return this.focus2;
      },
      set(value) {
        this.focus2 = value;
      }
    },
    focusThree: {
      get() {
        return this.focus3;
      },
      set(value) {
        this.focus3 = value;
      }
    },
    focusFour: {
      get() {
        return this.focus4;
      },
      set(value) {
        this.focus4 = value;
      }
    },
    focusFive: {
      get() {
        return this.focus5;
      },
      set(value) {
        this.focus5 = value;
      }
    },
    goalOne: {
      get() {
        return this.goal1;
      },
      set(value) {
        this.goal1 = value;
      }
    },
    goalTwo: {
      get() {
        return this.goal2;
      },
      set(value) {
        this.goal2 = value;
      }
    },
    goalThree: {
      get() {
        return this.goal3;
      },
      set(value) {
        this.goal3 = value;
      }
    },
    goalFour: {
      get() {
        return this.goal4;
      },
      set(value) {
        this.goal4 = value;
      }
    },
    goalFive: {
      get() {
        return this.goal5;
      },
      set(value) {
        this.goal5 = value;
      }
    },
    highlightOne: {
      get() {
        return this.highlight1;
      },
      set(value) {
        this.highlight1 = value;
      }
    },
    highlightTwo: {
      get() {
        return this.highlight2;
      },
      set(value) {
        this.highlight2 = value;
      }
    },
    highlightThree: {
      get() {
        return this.highlight3;
      },
      set(value) {
        this.highlight3 = value;
      }
    },
    highlightFour: {
      get() {
        return this.highlight4;
      },
      set(value) {
        this.highlight4 = value;
      }
    },
    highlightFive: {
      get() {
        return this.highlight5;
      },
      set(value) {
        this.highlight5 = value;
      }
    },
    scaryOne: {
      get() {
        return this.scary1;
      },
      set(value) {
        this.scary1 = value;
      }
    },
    scaryTwo: {
      get() {
        return this.scary2;
      },
      set(value) {
        this.scary2 = value;
      }
    },
    scaryThree: {
      get() {
        return this.scary3;
      },
      set(value) {
        this.scary3 = value;
      }
    },
    scaryFour: {
      get() {
        return this.scary4;
      },
      set(value) {
        this.scary4 = value;
      }
    },
    scaryFive: {
      get() {
        return this.scary5;
      },
      set(value) {
        this.scary5 = value;
      }
    },
    weekOneWin: {
      get() {
        return this.week1Win;
      },
      set(value) {
        this.week1Win = value;
      }
    },
    weekOneStruggle: {
      get() {
        return this.week1Struggle;
      },
      set(value) {
        this.week1Struggle = value;
      }
    },
    weekOneMemory: {
      get() {
        return this.week1Memory;
      },
      set(value) {
        this.week1Memory = value;
      }
    },
    weekTwoWin: {
      get() {
        return this.week2Win;
      },
      set(value) {
        this.week2Win = value;
      }
    },
    weekTwoStruggle: {
      get() {
        return this.week2Struggle;
      },
      set(value) {
        this.week2Struggle = value;
      }
    },
    weekTwoMemory: {
      get() {
        return this.week1Memory;
      },
      set(value) {
        this.week2Memory = value;
      }
    },
    weekThreeWin: {
      get() {
        return this.week3Win;
      },
      set(value) {
        this.week3Win = value;
      }
    },
    weekThreeStruggle: {
      get() {
        return this.week3Struggle;
      },
      set(value) {
        this.week3Struggle = value;
      }
    },
    weekThreeMemory: {
      get() {
        return this.week3Memory;
      },
      set(value) {
        this.week3Memory = value;
      }
    },
    encouragementOne: {
      get() {
        return this.encouragement1;
      },
      set(value) {
        this.encouragement1 = value;
      }
    },
    encouragementTwo: {
      get() {
        return this.encouragement2;
      },
      set(value) {
        this.encouragement2 = value;
      }
    },
    encouragementThree: {
      get() {
        return this.encouragement3;
      },
      set(value) {
        this.encouragement3 = value;
      }
    },
    encouragementFour: {
      get() {
        return this.encouragement4;
      },
      set(value) {
        this.encouragement4 = value;
      }
    },
    encouragementFive: {
      get() {
        return this.encouragement5;
      },
      set(value) {
        this.encouragement5 = value;
      }
    },
    projectSearchField: {
      get() {
        return this.projectSearch;
      },
      set(value) {
        this.setProjectSearch(value);
      }
    }
  },
  components: {
    "mood-picker": require("components/Tasks/Modals/moodPicker.vue").default
  },
  methods: {
    ...mapActions("planuary", [
      "addWish",
      "fbUpdateWish",
      "addFocus",
      "addGoals",
      "addHighlights",
      "addScary",
      "addWeekOne"
    ]),
    ...mapActions("tasks", ["setProjectSearch"]),
    ...mapActions("community", ["addEncouragement"]),
    setPlanuaryWish() {
      if (this.wish1 != "") {
        let payload = {
          username: this.profile.username,
          wish: this.wish1
        };
        if (this.planuary[this.profile.id] == undefined) {
          this.addWish(payload);
          this.dayOne = false;
          this.dayTwo = true;
        } else {
          this.fbUpdateWish(payload);
          this.$q.notify({
            message: "Your wish has been saved!",
            color: "primary"
          });
          this.dayOne = false;
          this.dayTwo = true;
        }
      } else {
        this.$q.notify({
          message: "You need to set a wish!",
          color: "primary"
        });
      }
    },
    setEncouragement() {
      if (this.encouragement1 != "") {
        let payload = {
          username: this.profile.username,
          encouragement1: this.encouragement1,
          encouragement2: this.encouragement2,
          encouragement3: this.encouragement3,
          encouragement4: this.encouragement4,
          encouragement5: this.encouragement5
        };
        this.addEncouragement(payload);
        this.$q.notify({
          message: "Great encouragement!",
          color: "primary"
        });
      }
    },
    hasWish() {
      if (this.yourWish) {
        //this.dayTwo = false;
        return true;
      } else {
        return false;
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
      };
      this.addFocus(payload);
      this.dayThree = true;
      this.$q.notify({
        message: "Your 2021 Focus List has been saved",
        color: "primary"
      });
    },
    setGoals() {
      let payload = {
        goal1: this.goal1,
        goal2: this.goal2,
        goal3: this.goal3,
        goal4: this.goal4,
        goal5: this.goal5,
        username: this.profile.username
      };
      this.addGoals(payload);
      this.dayFour = false;
      this.$q.notify({
        message: "Your Goals have been set!",
        color: "primary"
      });
    },
    setHighlights() {
      let payload = {
        type: "highlights",
        highlight1: this.highlight1,
        highlight2: this.highlight2,
        highlight3: this.highlight3,
        highlight4: this.highlight4,
        highlight5: this.highlight5,
        username: this.profile.username
      };
      this.addHighlights(payload);
      this.dayFive = false;
      this.$q.notify({
        message: "Now we have something to look forward to!",
        color: "primary"
      });
    },
    setScary() {
      let payload = {
        type: "scary",
        scary1: this.scary1,
        scary2: this.scary2,
        scary3: this.scary3,
        scary4: this.scary4,
        scary5: this.scary5,
        username: this.profile.username
      };
      this.addScary(payload);
      this.daySix = false;
      this.$q.notify({
        message: "Nothing to fear!",
        color: "primary"
      });
    },
    setWeekOne() {
      let payload = {
        type: "weekOne",
        weekOneWin: this.weekOneWin,
        weekOneStruggle: this.weekOneStruggle,
        weekOneMemory: this.weekOneMemory,
        username: this.profile.username
      };
      this.addWeekOne(payload);
      //this.dayEight = false;
      this.$q.notify({
        message: "On to week two!",
        color: "primary"
      });
    },
    setWeekTwo() {
      let payload = {
        type: "weekTwo",
        weekTwoWin: this.weekTwoWin,
        weekTwoStruggle: this.weekTwoStruggle,
        weekTwoMemory: this.weekTwoMemory,
        username: this.profile.username
      };
      this.addWeekTwo(payload);
      //this.dayEight = false;
      this.$q.notify({
        message: "On to week three!",
        color: "primary"
      });
    },
    setWeekThree() {
      let payload = {
        type: "weekThree",
        weekThreeWin: this.weekThreeWin,
        weekThreeStruggle: this.weekThreeStruggle,
        weekThreeMemory: this.weekThreeMemory,
        username: this.profile.username
      };
      this.addWeekThree(payload);
      //this.dayEight = false;
      this.$q.notify({
        message: "On to week four!",
        color: "primary"
      });
    },
    showDate(dayNumber) {
      if (dayNumber == 1) {
        this.dayOne = true;
      }
      if (dayNumber == 2) {
        this.dayTwo = true;
      }
      if (dayNumber == 3) {
        this.dayThree = true;
      }
      if (dayNumber == 4) {
        this.dayFour = true;
      }
      if (dayNumber == 5) {
        this.dayFive = true;
      }
      if (dayNumber == 6) {
        this.daySix = true;
      }
      if (dayNumber == 7) {
        this.daySeven = true;
      }
      if (dayNumber == 8) {
        this.dayEight = true;
      }
      if (dayNumber == 9) {
        this.dayNine = true;
      }
      if (dayNumber == 10) {
        this.dayTen = true;
      }
      if (dayNumber == 11) {
        this.dayEleven = true;
      }
      if (dayNumber == 12) {
        this.dayTwelve = true;
      }
      if (dayNumber == 13) {
        this.dayThirteen = true;
      }
      if (dayNumber == 14) {
        this.dayFourteen = true;
      }
      if (dayNumber == 15) {
        this.dayFifteen = true;
      }
      if (dayNumber == 16) {
        this.daySixteen = true;
      }
      if (dayNumber == 17) {
        this.daySeventeen = true;
      }
      if (dayNumber == 18) {
        this.dayEighteen = true;
      }
      if (dayNumber == 19) {
        this.dayNineteen = true;
      }
      if (dayNumber == 20) {
        this.dayTwenty = true;
      }
      if (dayNumber == 21) {
        this.dayTwentyOne = true;
      }
      if (dayNumber == 22) {
        this.dayTwentyTwo = true;
      }
      if (dayNumber == 23) {
        this.dayTwentyThree = true;
      }
      if (dayNumber == 24) {
        this.dayTwentyFour = true;
      }
      if (dayNumber == 25) {
        this.dayTwentyFive = true;
      }
      if (dayNumber == 26) {
        this.dayTwentySix = true;
      }
      if (dayNumber == 27) {
        this.dayTwentySeven = true;
      }
      if (dayNumber == 28) {
        this.dayTwentyEight = true;
      }
      if (dayNumber == 29) {
        this.dayTwentyNine = true;
      }
      if (dayNumber == 30) {
        this.dayThirty = true;
      }
      if (dayNumber == 31) {
        this.dayThirtyOne = true;
      }
    }
  },
  mounted() {
    this.wish1 = this.yourWish;
    if (this.planuary.focus != undefined) {
      this.focusOne = this.planuary.focus.focus1;
      this.focusTwo = this.planuary.focus.focus2;
      this.focusThree = this.planuary.focus.focus3;
      this.focusFour = this.planuary.focus.focus4;
      this.focusFive = this.planuary.focus.focus5;
    }
    if (this.planuary.goals != undefined) {
      this.goalOne = this.planuary.goals.goal1;
      this.goalTwo = this.planuary.goals.goal2;
      this.goalThree = this.planuary.goals.goal3;
      this.goalFour = this.planuary.goals.goal4;
      this.goalFive = this.planuary.goals.goal5;
    }
    if (this.planuary.highlights != undefined) {
      this.highlightOne = this.planuary.highlights.highlight1;
      this.highlightTwo = this.planuary.highlights.highlight2;
      this.highlightThree = this.planuary.highlights.highlight3;
      this.highlightFour = this.planuary.highlights.highlight4;
      this.highlightFive = this.planuary.highlights.highlight5;
    }
    if (this.planuary.scary != undefined) {
      this.scaryOne = this.planuary.scary.scary1;
      this.scaryTwo = this.planuary.scary.scary2;
      this.scaryThree = this.planuary.scary.scary3;
      this.scaryFour = this.planuary.scary.scary4;
      this.scaryFive = this.planuary.scary.scary5;
    }
    if (this.community.encouragement != undefined) {
      this.encouragementOne = this.community.encouragement.encouragement1;
      this.encouragementTwo = this.community.encouragement.encouragement2;
      this.encouragementThree = this.community.encouragement.encouragement3;
      this.encouragementFour = this.community.encouragement.encouragement4;
      this.encouragementFive = this.community.encouragement.encouragement5;
    }
    if (this.planuary.weekOne != undefined) {
      this.weekOneWin = this.planuary.weekOne.weekOneWin;
      this.weekOneStruggle = this.planuary.weekOne.weekOneStruggle;
      this.weekOneMemory = this.planuary.weekOne.weekOneMemory;
    }
    if (this.planuary.weekTwo != undefined) {
      this.weekTwoWin = this.planuary.weekTwo.weekTwoWin;
      this.weekTwoStruggle = this.planuary.weekTwo.weekTwoStruggle;
      this.weekTwoMemory = this.planuary.weekTwo.weekTwoMemory;
    }
    if (this.planuary.weekThree != undefined) {
      this.weekThreeWin = this.planuary.weekThree.weekThreeWin;
      this.weekThreeStruggle = this.planuary.weekThree.weekThreeStruggle;
      this.weekThreeMemory = this.planuary.weekThree.weekThreeMemory;
    }
    var date = moment().date();
    this.showDate(date);
  }
};
</script>
