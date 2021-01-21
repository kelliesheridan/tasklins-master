<template>
  <q-page padding>
    <div>
      <index-menu />
    </div>
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

    <div class="planuaryDay">
      <q-card>
        <q-card-section>
          <div class="text-h7 row">
            <q-btn dense flat @click="weekTwo = !weekTwo">
              Planuary. Week Two.
            </q-btn>

            <q-space />
            <q-btn
              @click="weekTwo = !weekTwo"
              v-if="!weekTwo"
              padding="none"
              class="no-margin"
              flat
              color="secondary"
              push
              dense
              icon="keyboard_arrow_down"
            />

            <q-btn
              @click="weekTwo = !weekTwo"
              v-if="weekTwo"
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

    <div class="planuaryDay">
      <q-card>
        <q-card-section>
          <div class="text-h7 row">
            <q-btn dense flat @click="weekThree = !weekThree">
              Planuary. Week Three.
            </q-btn>

            <q-space />
            <q-btn
              @click="weekThree = !weekThree"
              v-if="!weekThree"
              padding="none"
              class="no-margin"
              flat
              color="secondary"
              push
              dense
              icon="keyboard_arrow_down"
            />

            <q-btn
              @click="weekThree = !weekThree"
              v-if="weekThree"
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
              <i>Anything listed here will remain private and not be posted
                elsewhere on the website.</i>
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

            <p>
            <i>Anything listed here will remain private and not be posted elsewhere on the website.</i>
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
              <br>
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
                want to keep these more personal. Anything goes! And as aways, what 
                you choose to list here will remain private.</i
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

          <q-card-section v-if="daySeven">
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

            <p>
              <i>Unlike most days in Planuary, what you choose to enter here will not remain private, both the Tasklins team and the wider community may end up 
                having a look, so keep that in mind.</i>
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

    <div v-if="weekTwo">
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

          <q-card-section v-if="dayEight">
            <p>
              We made it through the first week of 2021! We're one one step closer
              to reaching out goals, but in order to give ourselves the best
              chance we can of success, we can't only focus on moving forward.
              It's important to also take a moment to pause and reflect on what
              we've already done. What went well? Where did we struggle? What can
              we learn from?
            </p>

            <p>
              You can head over to the journal page to check
              out some new tracking features. You can see get an overview not only
              on what you got finished, but how you were feeling. For today's prompts, we've also
              included some bonus questions below in order to give ourselves time
              to think about how we feel things went this first week, and what we
              might want to change in the future. Plus, having memories to look
              back on later might be fun!
            </p>

            <p>
              <i>Anything listed here will remain private and not be posted elsewhere on the website.</i>
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

      <div class="planuaryDay day-9">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayNine = !dayNine">
                Planuary. Day Nine.
              </q-btn>
              <q-space />

              <q-btn
                @click="dayNine = !dayNine"
                v-if="!dayNine"
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

          <q-card-section v-if="dayNine">
            <p>
              Today, we're talking about slowing down. It can be tempting to add
              every task that needs to be done right to the top of your to do
              list, especially if you're worried you won't remember. But it can be
              all too easy to get overwhelmed by too easily throwing our plan for
              the day aside. So instead of giving you any prompts for day nine,
              instead we're introducing a new feature, the tomorrow button. Now,
              when you go to add a new task, there's a button to add it to
              tomorrow's list as easily as today's (and of course, you can always
              still add a due date for any point in the future).
            </p>

            <p>
              Your homework for the day is to look at the list of tasks that's due
              today on the home page, and consider if you're putting too much on
              your plate. Are there tasks that can wait? Or overdue tasks that can
              be finished later than you initially thought? Finishing a task late
              on tasklins (or post-poning it) does effect the amount of experience
              points your Tasklin will earn, but you can always change the due
              date without any penalty. So be honest with yourself, try to set
              realistic expecations, and remember that the only way we can
              accomplish anything long-term is by being kind to ourselves. Set big
              goals, but remember you don't have to get them done all at once!
            </p>

            <div class="center">
              <q-btn
                @click="showAddTask = true"
                class="add-task-btn textureBar"
                round
                text-color="accent"
                size="18px"
                icon="add"
              >
                <q-tooltip content-class="bg-primary">Add New Task</q-tooltip>
              </q-btn>
            </div>
            <br />
          </q-card-section>
        </q-card>
      </div>

      <div class="planuaryDay day-10">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayTen = !dayTen">
                Planuary. Day Ten.
              </q-btn>
              <q-space />

              <q-btn
                @click="dayTen = !dayTen"
                v-if="!dayTen"
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

          <q-card-section v-if="dayTen">
            <p>
              Back to our goals and the year ahead! We've already talked a little
              about our focuses for the year and some of the goals we want to work
              toward in 2021, but it's time to start breaking things down. There
              are four quarters in the year, each made up of three months. And
              it's a lot easier to look three months ahead than twelve. For now,
              let's focus on setting some overall goal posts for ourselves to
              guide the rest of the year by coming up with one main goal for each
              quarter to help guide the way to where we'd like to be by the
              beginning of 2022.
            </p>

            <div class="row center">
              <div class="col">
                <h4>Goals</h4>
                <div>{{ this.planuary.goals.goal1 }}</div>
                <div>{{ this.planuary.goals.goal2 }}</div>
                <div>{{ this.planuary.goals.goal3 }}</div>
                <div>{{ this.planuary.goals.goal4 }}</div>
                <div>{{ this.planuary.goals.goal5 }}</div>
              </div>
              <div class="col">
                <h4>Focuses</h4>
                <div>{{ this.planuary.focus.focus1 }}</div>
                <div>{{ this.planuary.focus.focus2 }}</div>
                <div>{{ this.planuary.focus.focus3 }}</div>
                <div>{{ this.planuary.focus.focus4 }}</div>
                <div>{{ this.planuary.focus.focus5 }}</div>
              </div>
            </div>

            <div>
              <p>
              <i>Anything listed here will remain private and not be posted elsewhere on the website.</i>
            </p>
            </div>

            <div class="text-h7 focus-boxes center">
              <q-input
                class="q-pa-xs"
                rounded
                label="Where would you like to be by March 31st?"
                outlined
                v-model="quarterOneMilestone"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="Where would you like to be by June 30th?"
                outlined
                v-model="quarterTwoMilestone"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="Where would you like to be by September 30th?"
                outlined
                v-model="quarterThreeMilestone"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="Where would you like to be by December 31st?"
                outlined
                v-model="quarterFourMilestone"
              ></q-input>
            </div>
            <br />

            <div>
              <p>
                We'll revisit your quarterly goals throughout the year in order to
                see how we're progressing, but if you have the time, we recommend
                breaking down those milestones even further by turning them into
                tasks. Have a look at your focus and goal lists above and see if
                you can come up with a quarterly goal for each of them (some may
                overlap, that's okay!) and create tasks to go along with those
                goals, so if you're feeling stuck later, we can always look back
                on these goals as a road map for the rest of the year.
              </p>
            </div>

              <div class="center q-pa-md">
              <q-btn
                @click="setQuarterlyGoals()"
                class="q-pa-xs"
                color="primary"
                size="md"
                label="Set Quarterly Goals!"
              />
            </div>
            <br />
          </q-card-section>
        </q-card>
      </div>

      <div class="planuaryDay day-11">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayEleven = !dayEleven">
                Planuary. Day Eleven.
              </q-btn>
              <q-space />

              <q-btn
                @click="dayEleven = !dayEleven"
                v-if="!dayEleven"
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

          <q-card-section v-if="dayEleven">
            <p>
              We never stop learning and growing as people, and as a result not
              every goal has a clear cut finish line. For example, we can never be
              finished learning to code or getting better at an art form. We'll
              also never finish reading every book, or listening to every podcast
              on a topic we're interested in. So today, let's take a few minutes
              to think about some of the things we want to make more time for in
              2021.
            </p>

            <p>
              <i>Anything listed here will remain private and not be posted elsewhere on the website.</i>
            </p>

            <div class="text-h7 focus-boxes center">
              <q-input
                class="q-pa-xs"
                rounded
                label="Practice One"
                outlined
                v-model="practiceOne"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="Practice Two"
                outlined
                v-model="practiceTwo"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="Practice Three"
                outlined
                v-model="practiceThree"
              ></q-input>
            </div>
              <div class="center q-pa-md">
              <q-btn
                @click="setPractices()"
                class="q-pa-xs"
                color="primary"
                size="md"
                label="Set Practices!"
              />
            </div>
            <br />
          </q-card-section>
        </q-card>
      </div>

      <div class="planuaryDay day-12">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayTwelve = !dayTwelve">
                Planuary. Day Twelve.
              </q-btn>
              <q-space />

              <q-btn
                @click="dayTwelve = !dayTwelve"
                v-if="!dayTwelve"
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

          <q-card-section v-if="dayTwelve">
            <p>
              We never stop learning and growing as people, and as a result not
              every goal has a clear cut finish line. For example, we can never be
              finished learning to code or getting better at an art form. We'll
              also never finish reading every book, or listening to every podcast
              on a topic we're interested in. So today, let's take a few minutes
              to think about some of the things we want to make more time for in
              2021.
            </p>

            <p>
              <i>Anything listed here will remain private and not be posted elsewhere on the website.</i>
            </p>

            <div class="text-h7 focus-boxes center">
              <q-input
                class="q-pa-xs"
                rounded
                label="What are you grateful for?"
                outlined
                v-model="gratitudeOne"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="What are you grateful for?"
                outlined
                v-model="gratitudeTwo"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="What are you grateful for?"
                outlined
                v-model="gratitudeThree"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="What are you grateful for?"
                outlined
                v-model="gratitudeFour"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="What are you grateful for?"
                outlined
                v-model="gratitudeFive"
              ></q-input>
            </div>

            <div class="center q-pa-md">
              <q-btn
                @click="setGratitude()"
                class="q-pa-xs"
                color="primary"
                size="md"
                label="Send a little gratitude"
              />
            </div>
            <br />
          </q-card-section>
        </q-card>
      </div>
      
      <div class="planuaryDay day-13">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayThirteen = !dayThirteen">
                Planuary. Day Thirteen.
              </q-btn>
              <q-space />

              <q-btn
                @click="dayThirteen = !dayThirteen"
                v-if="!dayThirteen"
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

          <q-card-section v-if="dayThirteen">
            <p>
              Whatever goals you've set so far, however you imagine your year going, it's important to remember that you're not in this alone. Whether we're talking about your friends or family, or the community that we're building here on Tasklins, we're all in this together.
            </p>

            <p>
              So today's prompt has less to do with making more plans, and everything to do with sharing those plans with other people for both accountability and encouragement. By sharing your goals, you can not only make them more real, but also add an extra dash of accountability 
              when you know there's someone else out there who will know whether you reach your goal. And of course, don't forget to encourage and support anyone who chooses to share their own goals with you.
            </p>

            <p>
              We're also so excited to announce a new area of the website to help us build our communities and support one another in the future... our community page! It's still a work in progress, but consider this a corner of the internet you can turn to to share what you're working 
              on, what you're proud of, a new project, or something your struggling with as you finish your tasks and work towards your goals. Admittedly, the functionality is still fairly limited, but <i>our goal</i> is to continue to build on this, adding features like friends, the 
              ability to reply to certain posts or like someone else's post, and more.
            </p>

            <div class="text-h7 focus-boxes center">
              <q-btn
                  class="q-mt-sm col"
                  padding
                  color="primary"
                  push
                  to="/community"
                  >Check Out the New Community Page</q-btn
                >
            </div>
            <br />
          </q-card-section>
        </q-card>
      </div>

      <div class="planuaryDay day-14">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayFourteen = !dayFourteen">
                Planuary. Day Fourteen.
              </q-btn>
              <q-space />

              <q-btn
                @click="dayFourteen = !dayFourteen"
                v-if="!dayFourteen"
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

          <q-card-section v-if="dayFourteen">
            <p>
            2020 ended two weeks ago now, but for so many of us it's next to impossible to fully move into a new year and embrace the future. And while it's
            important to remember where we came from and the lessons we learned, there are also things we need to work to leave in the past. Is there something 
            you've been holding on to that you need to let go of? Is there a memory you want to put in the past? A part of yourself your trying to move on from?
            </p>

            <p>
              Today, your job is to give some thought to three things you want to let go of. You can interpret this in whatever way makes the most sense for you and
              your own goals.
            </p>

            <p>
              <i>Anything listed here will remain private and not be posted elsewhere on the website.</i>
            </p>

            <div class="text-h7 focus-boxes center">
              <q-input
                class="q-pa-xs"
                rounded
                label="What are you trying to let go of?"
                outlined
                v-model="letGoOne"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="What are you trying to let go of?"
                outlined
                v-model="letGoTwo"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="What are you trying to let go of?"
                outlined
                v-model="letGoThree"
              ></q-input>
            </div>

            <div class="center q-pa-md">
              <q-btn
                @click="setLetGo()"
                class="q-pa-xs"
                color="primary"
                size="md"
                label="Let it go... Let it go..."
              />
            </div>
            <br />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div v-if="weekThree">
      <div class="planuaryDay day-15">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayFifteen = !dayFifteen">
                Planuary. Day Fifteen.
              </q-btn>
              <q-space />

              <q-btn
                @click="dayFifteen = !dayFifteen"
                v-if="!dayFifteen"
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

          <q-card-section v-if="dayFifteen">
            <p>
              Another week has come and gone and it's time to reflect.
            </p>

            <div class="text-h7 focus-boxes center">
              <q-input
                class="q-pa-xs"
                rounded
                label="What went well this week?"
                outlined
                v-model="weekTwoWin"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="What did you struggle with?"
                outlined
                v-model="weekTwoStruggle"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="What do you want to remember?"
                outlined
                v-model="weekTwoMemory"
              ></q-input>
            </div>

            <div class="center q-pa-md">
              <q-btn
                @click="setWeekTwo()"
                class="q-pa-xs"
                color="primary"
                size="md"
                label="On to week three!"
              />
            </div>

            <div class="center">

              <p>
                We also wanted to take today to share of some of our goal for Tasklins with all of you. 
              </p>

              <q-btn
                class="q-mt-sm col"
                padding
                color="primary"
                push
                to="/roadmap"
                >Where We're Headed
              </q-btn>

            </div>
            <br />
          </q-card-section>
        </q-card>
      </div>

      <div class="planuaryDay day-16">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="daySixteen = !daySixteen">
                Planuary. Day Sixteen.
              </q-btn>
              <q-space />

              <q-btn
                @click="daySixteen = !daySixteen"
                v-if="!daySixteen"
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

          <q-card-section v-if="daySixteen">
            <p>
            We've spent a lot of time thinking about what we've done and what we want to do, creating lists and making wishes. Today, we're going to take some time to 
            think about the one thing that drives ALL of this. You! Who you are, and what makes you capable of taking on all of the challenges you set for yourself (and 
            the ones the world sets for you, whether you asked it to or not). While we all have areas where we'd like to improve, it's so important to remember that we 
            also all have things we're fantastic at. Incredible. Super. We all have our superpowers, and today, I want you to figure out yours. Not a whole list, just one 
            thing, skill, personality trait, or whatever else, that you absolutely rock at.
            </p>

            <p>
              So what's your superpower? What's that thing you not only do well but love doing? This can be your sense of humour, the way you solve problems, a special meal 
              that you can cook better than anyone else you know? You don't need super strength or telekenesis to be a superhero, and your superpower doesn't need to be something 
              you can build a career around or even something that society thinks is especially useful. In a lot of cases, this could be something that fuels you and brings you joy,
              or something that helps boost your confidence because you know it's one of your biggest strengths. So, give it some thought, and write down your power.
            </p>

            <p>
              <i>Anything listed here will remain private and not be posted elsewhere on the website.</i>
            </p>

            <div class="text-h7 focus-boxes center">
              <q-input
                class="q-pa-xs"
                rounded
                label="What's your superpower?"
                outlined
                v-model="superpower1"
              ></q-input>
            </div>

            <div class="center q-pa-md">
              <q-btn
                @click="setSuperpower()"
                class="q-pa-xs"
                color="primary"
                size="md"
                label="Share Your Power"
              />
            </div>
            <br />
          </q-card-section>
        </q-card>
      </div>

      <div class="planuaryDay day-17">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="daySeventeen = !daySeventeen">
                Planuary. Day Seventeen.
              </q-btn>
              <q-space />

              <q-btn
                @click="daySeventeen = !daySeventeen"
                v-if="!daySeventeen"
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

          <q-card-section v-if="daySeventeen">
            <p>
            Today we're looking at a type of tasks that so many of us dread (even if we do feel pretty great after we've finished them). Chores. Ugh. From wiping down the counter to deep 
            cleaning the bathroom, there's a seemingly endless list of things we need to do to keep our living space looking and feeling its best... which can go a long way toward helping 
            us feel productive in other areas of our life.
            </p>

            <p>
              Sometimes, remembering what we need to do and when can be a big part of the battle. So for today's challenge, take a few minutes to think of us many chores (they don't all have to 
              be of the cleaning variety) that you need to do on a regular basis, and create new tasks for them. You can use the repeating features so that once you finish a chore and check it off 
              here on Tasklins, it will automatically create a new task for you for the next time that task needs to be done.
            </p>

            <div class="q-pa-lg">
              <ul>
                <li>This can be something like taking out the trash that needs to happen on a specific day of the week (use the first repeating button and select the days of the week you need).</li>
                <li>Or something like cleaning the fridge that you want to do every set number of days (use the second repeating button and set a due date for the next time you'd like to do it, and then how many days before you'll need to do it again</li>
                <li>Or you can try out our newest repeating option, monthly, for something like paying the bills that needs to happen on a certain day of every month. The task will repeat monthly based on the due date you set the first time.</li>  
              </ul>
            </div>

            <div class="center">
              <q-btn
                @click="showAddTask = true"
                class="add-task-btn textureBar"
                round
                text-color="accent"
                size="18px"
                icon="add"
              >
                <q-tooltip content-class="bg-primary">Add New Task</q-tooltip>
              </q-btn>
            </div>

            <br />
          </q-card-section>
        </q-card>
      </div> 

      <div class="planuaryDay day-18">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayEighteen = !dayEighteen">
                Planuary. Day Eighteen.
              </q-btn>
              <q-space />

              <q-btn
                @click="dayEighteen = !dayEighteen"
                v-if="!dayEighteen"
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

          <q-card-section v-if="dayEighteen">
            <p>
            What have you been avoiding? Go on, admit it. It really is okay. Procrastination in all its forms is something that so many of us find ourselves up againast 
            on a fairly regular basis. Sometimes its because we lack motivation. Sometimes self doubt is slowing us down. Other times, the thing we're avoiding is something 
            we very much <i>want</i> to do, but we're having trouble finding the time. For today's task, come up with a list of 3-5 tasks that you've been putting off, for 
            whatever reason. Things you want to do. Things you should do. Just give some thought to the tasks you haven't gotten around to yet, but definitely will evenetually 
            Someday.
            </p>

            <p><i>As always, these will remain private, and you can use or ignore the prompts as needed. </i></p>

            <div class="text-h7 focus-boxes center">
              <q-input
                class="q-pa-xs"
                rounded
                label="What are you avoiding?"
                outlined
                v-model="avoidOne"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="Is there something you should be doing?"
                outlined
                v-model="avoidTwo"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="What are you procrastinating?"
                outlined
                v-model="avoidThree"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="Is there something new you'd like to learn?"
                outlined
                v-model="avoidFour"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="What about an appointment you keep putting off?"
                outlined
                v-model="avoidFive"
              ></q-input>
            </div>

            <div class="center q-pa-md">
              <q-btn
                @click="setAvoid()"
                class="q-pa-xs"
                color="primary"
                size="md"
                label="Admit it!"
              />
            </div>

            <br />
          </q-card-section>
        </q-card>
      </div>   

      <div class="planuaryDay day-19">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayNineteen = !dayNineteen">
                Planuary. Day Nineteen.
              </q-btn>
              <q-space />

              <q-btn
                @click="dayNineteen = !dayNineteen"
                v-if="!dayNineteen"
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

          <q-card-section v-if="dayNineteen">
            <p>
            The last couple of days we've talked a lot about some of the less fun things we have to deal with. But the whole point of Tasklins is to make the 
            tasks you have to get done a little more, well, fun. So today, what we'd love to hear from you is how we can help <i>you</i> reach your goals. Are 
            there any tools or features you'd especially like to see added to Tasklins? Or is there an organizational problem in your life that you aren't sure 
            how to solve? Even if you aren't sure what the Tasklins-style answer will be, let us know what the problem is. So... how can we help?
            </p>

            <div class="text-h7 focus-boxes center">
              <q-input
                class="q-pa-xs"
                rounded
                label="How can we help?"
                outlined
                v-model="tasklinsHelp"
              ></q-input>
            </div>

            <div class="center q-pa-md">
              <q-btn
                @click="setTasklinsHelp()"
                class="q-pa-xs"
                color="primary"
                size="md"
                label="Let Us Know!"
              />
            </div>

            <br />
          </q-card-section>
        </q-card>
      </div>   

      <div class="planuaryDay day-20">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayTwenty = !dayTwenty">
                  Planuary. Day Twenty.
              </q-btn>
              <q-space />

                <q-btn
                  @click="dayTwenty = !dayTwenty"
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

            <q-card-section v-if="dayTwenty">
              <p>
                Twenty days into the new year, and you've done great work! Seriously, you should be proud. No. Better. You should 
                be rewarded! If you want to train your brain to keep making progress and reaching your goals, you need to treat yourself 
                as much as you need to see progress. So, ;et's start brainstorming some of the ways you can do that. What are some of 
                your favorite treats or activities? How do you like to unwind after a long day?
              </p>
              <p class="center q-pa-md" style="text-decoration: underline"> Ideas</p>   
                <uL class="center q-pa-md" style="list-style-position: inside; list-style-type: none;">
                  <li>an episode of your favorite tv show</li>
                  <li>something you love to snack on</li>
                  <li>a long walk</li>
                  <li>a phone call with a friend </li>
                </uL>
              <p>
                <i>Anything listed here will remain private and not be posted
                  elsewhere on the website. These are treats you don't have to share!</i>
              </p>

              <div>
                <div class="text-h7 focus-boxes center">
                  <q-input
                    class="q-pa-xs"
                    rounded
                    label="Reward One"
                    outlined
                    v-model="rewardOne"
                  ></q-input>
                  <q-input
                    class="q-pa-xs"
                    rounded
                    label="Reward Two"
                    outlined
                    v-model="rewardTwo"
                  ></q-input>
                  <q-input
                    class="q-pa-xs"
                    rounded
                    label="Reward Three"
                    outlined
                    v-model="rewardThree"
                  ></q-input>
                  <q-input
                    class="q-pa-xs"
                    rounded
                    label="Reward Four"
                    outlined
                    v-model="rewardFour"
                  ></q-input>
                  <q-input
                    class="q-pa-xs"
                    rounded
                    label="Reward Five"
                    outlined
                    v-model="rewardFive"
                  ></q-input>
                </div>
                <div class="center q-pa-md">
                  <q-btn
                    @click="setReward()"
                    class="q-pa-xs"
                    color="primary"
                    size="md"
                    label="Go!"
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
      </div>

      <div class="planuaryDay day-21">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayTwentyOne = !dayTwentyOne">
                Planuary. Day Twenty-One.
              </q-btn>
              <q-space />

              <q-btn
                @click="dayTwentyOne = !dayTwentyOne"
                v-if="!dayTwentyOne"
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

          <q-card-section v-if="dayTwentyOne">
            <p>
              Let's talk about how we organize all of the things we need to do. Here at Tasklins, we have Tasks and Projects. Projects are a way to organize the 
              different things you need to get done. A project can be something small like a reorganizing your closet, where you want to break down a big job into 
              much smaller jobs, or it can be a whole category of tasks. Chores, Work, Learning, Excercise... what projects you use depends entirely on what you 
              want to accomplish.
            </p>

            <p>
              For today's prompt, take some time to think about how you organize the projects in your life. For the things that don't fit into broader categories, you'll 
              always have the default <i>Tasks</i> project. For everything else, organize as you see fit. We've also now added the ability to delete projects you no longer need 
              via the projects page in your journal. You'll need to delete any uncompleted tasks still in that project, or move them to a different project before deleting, but 
              after that you can organize to your heart's content. Happy planning!
            </p>  


            <div class="center">

              <q-btn
                class="q-mt-sm col"
                padding
                color="primary"
                push
                to="/journal"
                >Check Your Journal
              </q-btn>

            </div>
            <br />
          </q-card-section>
        </q-card>
      </div>

    </div>

    <div>
      <div class="planuaryDay day-22">
        <q-card>
          <q-card-section>
            <div class="text-h7 row">
              <q-btn dense flat @click="dayTwentyTwo = !dayTwentyTwo">
                Planuary. Day Twenty-Two.
              </q-btn>
              <q-space />

              <q-btn
                @click="dayTwentyTwo = !dayTwentyTwo"
                v-if="!dayTwentyTwo"
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

          <q-card-section v-if="dayTwentyTwo">
            <p>
              We made it through the first week of 2021! We're one one step closer
              to reaching out goals, but in order to give ourselves the best
              chance we can of success, we can't only focus on moving forward.
              It's important to also take a moment to pause and reflect on what
              we've already done. What went well? Where did we struggle? What can
              we learn from?
            </p>

            <p>
              You can head over to the journal page to check
              out some new tracking features. You can see get an overview not only
              on what you got finished, but how you were feeling. For today's prompts, we've also
              included some bonus questions below in order to give ourselves time
              to think about how we feel things went this first week, and what we
              might want to change in the future. Plus, having memories to look
              back on later might be fun!
            </p>

            <p>
              <i>Anything listed here will remain private and not be posted elsewhere on the website.</i>
            </p>

            <div class="text-h7 focus-boxes center">
              <q-input
                class="q-pa-xs"
                rounded
                label="What went well this week?"
                outlined
                v-model="weekThreeWin"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="What did you struggle with?"
                outlined
                v-model="weekThreeStruggle"
              ></q-input>
              <q-input
                class="q-pa-xs"
                rounded
                label="What do you want to remember?"
                outlined
                v-model="weekThreeMemory"
              ></q-input>
            </div>

            <div class="center q-pa-md">
              <q-btn
                @click="setWeekThree()"
                class="q-pa-xs"
                color="primary"
                size="md"
                label="Another week finished!"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>


    
    
    
    
    
    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
const moment = require("moment");

export default {
  data() {
    return {
      weekOne: false,
      weekTwo: false,
      weekThree: false,
      wishSubmitted: false,
      focus1: "",
      focus2: "",
      focus3: "",
      focus4: "",
      focus5: "",
      wish1: "",

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
      showAddTask: false,
      quarter1Milestone: "",
      quarter2Milestone: "",
      quarter3Milestone: "",
      quarter4Milestone: "",
      practice1: "",
      practice2: "",
      practice3: "",
      gratitude1: "",
      gratitude2: "",
      gratitude3: "",
      gratitude4: "",
      gratitude5: "",
      letGo1: "",
      letGo2: "",
      letGo3: "",
      superpower1: "",
      avoid1: "",
      avoid2: "",
      avoid3: "",
      avoid4: "",
      avoid5: "",
      tasklinsHelp1: "",
      reward1: "",
      reward2: "",
      reward3: "",
      reward4: "",
      reward5: "",
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
        return this.week2Memory;
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
    quarterOneMilestone: {
      get() {
        return this.quarter1Milestone;
      },
      set(value) {
        this.quarter1Milestone = value;
      }
    },
    quarterTwoMilestone: {
      get() {
        return this.quarter2Milestone;
      },
      set(value) {
        this.quarter2Milestone = value;
      }
    },
    quarterThreeMilestone: {
      get() {
        return this.quarter3Milestone;
      },
      set(value) {
        this.quarter3Milestone = value;
      }
    },
    quarterFourMilestone: {
      get() {
        return this.quarter4Milestone;
      },
      set(value) {
        this.quarter4Milestone = value;
      }
    },
    practiceOne: {
      get() {
        return this.practice1;
      },
      set(value) {
        this.practice1 = value;
      }
    },
    practiceTwo: {
      get() {
        return this.practice2;
      },
      set(value) {
        this.practice2 = value;
      }
    },
    practiceThree: {
      get() {
        return this.practice3;
      },
      set(value) {
        this.practice3 = value;
      }
    },
    gratitudeOne: {
      get() {
        return this.gratitude1;
      },
      set(value) {
        this.gratitude1 = value;
      }
    },
    gratitudeTwo: {
      get() {
        return this.gratitude2;
      },
      set(value) {
        this.gratitude2 = value;
      }
    },
    gratitudeThree: {
      get() {
        return this.gratitude3;
      },
      set(value) {
        this.gratitude3 = value;
      }
    },
    gratitudeFour: {
      get() {
        return this.gratitude4;
      },
      set(value) {
        this.gratitude4 = value;
      }
    },
    gratitudeFive: {
      get() {
        return this.gratitude5;
      },
      set(value) {
        this.gratitude5 = value;
      }
    },
    letGoOne: {
      get() {
        return this.letGo1;
      },
      set(value) {
        this.letGo1 = value;
      }
    },
    letGoTwo: {
      get() {
        return this.letGo2;
      },
      set(value) {
        this.letGo2 = value;
      }
    },
    letGoThree: {
      get() {
        return this.letGo3;
      },
      set(value) {
        this.letGo3 = value;
      }
    },
    superpower: {
      get() {
        return this.superpower1;
      },
      set(value) {
        this.superpower1 = value;
      }
    },  
    avoidOne: {
      get() {
        return this.avoid1;
      },
      set(value) {
        this.avoid1 = value;
      }
    },
    avoidTwo: {
      get() {
        return this.avoid2;
      },
      set(value) {
        this.avoid2 = value;
      }
    },
    avoidThree: {
      get() {
        return this.avoid3;
      },
      set(value) {
        this.avoid3 = value;
      }
    },
    avoidFour: {
      get() {
        return this.avoid4;
      },
      set(value) {
        this.avoid4 = value;
      }
    },
    avoidFive: {
      get() {
        return this.avoid5;
      },
      set(value) {
        this.avoid5 = value;
      }
    }, 
    tasklinsHelp: {
      get() {
        return this.tasklinsHelp1;
      },
      set(value) {
        this.tasklinsHelp1 = value;
      }
    },   
    rewardOne: {
      get() {
        return this.reward1;
      },
      set(value) {
        this.reward1 = value;
      }
    },
    rewardTwo: {
      get() {
        return this.reward2;
      },
      set(value) {
        this.reward2 = value;
      }
    },
    rewardThree: {
      get() {
        return this.reward3;
      },
      set(value) {
        this.reward3 = value;
      }
    },
    rewardFour: {
      get() {
        return this.reward4;
      },
      set(value) {
        this.reward4 = value;
      }
    },
    rewardFive: {
      get() {
        return this.reward5;
      },
      set(value) {
        this.reward5 = value;
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
    "mood-picker": require("components/Tasks/Modals/moodPicker.vue").default,
    "index-menu": require("components/IndexMenu.vue").default,
    "add-task": require("components/Tasks/Modals/addTask.vue").default
  },
  methods: {
    ...mapActions("planuary", [
      "addWish",
      "fbUpdateWish",
      "addFocus",
      "addGoals",
      "addHighlights",
      "addScary",
      "addWeekOne",
      "addWeekTwo",
      "addWeekThree",
      "addQuarterlyGoals",
      "addPractices",
      "addGratitude",
      "addLetGo",
      "addSuperpower",
      "addAvoid",
      "addTasklinsHelp",
      "addReward"
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
      this.dayEight = false;
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
      this.dayFifteen = false;
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
      this.dayTwentyTwo = false;
      this.$q.notify({
        message: "On to week four!",
        color: "primary"
      });
    },
    setWeekFour() {
      let payload = {
        type: "weekFour",
        weekFourWin: this.weekFourWin,
        weekFourStruggle: this.weekFourStruggle,
        weekFourMemory: this.weekFourMemory,
        username: this.profile.username
      };
      this.addWeekFour(payload);
      //this.dayEight = false;
      this.$q.notify({
        message: "Thank you!",
        color: "primary"
      });
    },
    setQuarterlyGoals() {
      let payload = {
        type: "quarterlyGoals",
        quarterOneMilestone: this.quarterOneMilestone,
        quarterTwoMilestone: this.quarterTwoMilestone,
        quarterThreeMilestone: this.quarterThreeMilestone,
        quarterFourMilestone: this.quarterFourMilestone,
        username: this.profile.username
      };
      this.addQuarterlyGoals(payload);
      this.dayTen = false;
      this.$q.notify({
        message: "Your quarterly goals are set!",
        color: "primary"
      });
    },
    setPractices() {
      let payload = {
        type: "practices",
        practiceOne: this.practiceOne,
        practiceTwo: this.practiceTwo,
        practiceThree: this.practiceThree,
        username: this.profile.username
      };
      this.addPractices(payload);
      this.dayEleven = false;
      this.$q.notify({
        message: "Practice, practice, practice!",
        color: "primary"
      });
    },
    setGratitude() {
      let payload = {
        type: "gratitude",
        gratitudeOne: this.gratitudeOne,
        gratitudeTwo: this.gratitudeTwo,
        gratitudeThree: this.gratitudeThree,
        gratitudeFour: this.gratitudeFour,
        gratitudeFive: this.gratitudeFive,
        username: this.profile.username
      };
      this.addGratitude(payload);
      this.dayThirteen = false;
      this.$q.notify({
        message: "Thank you for finding the good!",
        color: "primary"
      });
    },
    setLetGo() {
      let payload = {
        type: "letGo",
        letGoOne: this.letGoOne,
        letGoTwo: this.letGoTwo,
        letGoThree: this.letGoThree,
        username: this.profile.username
      };
      this.addLetGo(payload);
      this.dayFourteen = false;
      this.$q.notify({
        message: "We're putting that behind us!",
        color: "primary"
      });
    },
    setSuperpower() {
      let payload = {
        type: "superpower",
        superpower: this.superpower,
        username: this.profile.username
      };
      this.addSuperpower(payload);
      this.daySixteen = false;
      this.$q.notify({
        message: "You are a LEGEND",
        color: "primary"
      });
    },
    setAvoid() {
      let payload = {
        type: "avoid",
        avoidOne: this.avoidOne,
        avoidTwo: this.avoidTwo,
        avoidThree: this.avoidThree,
        avoidFour: this.avoidFour,
        avoidFive: this.avoidFive,
        username: this.profile.username
      };
      this.addAvoid(payload);
      this.daySeventeen = false;
      this.$q.notify({
        message: "You'll have to get to them someday!",
        color: "primary"
      });
    },
    setTasklinsHelp() {
      let payload = {
        type: "tasklinsHelp",
        tasklinsHelp: this.tasklinsHelp,
        username: this.profile.username
      };
      this.addTasklinsHelp(payload);
      this.dayEighteen = false;
      this.$q.notify({
        message: "We'll see what we can do!",
        color: "primary"
      });
    },
    setReward() {
      let payload = {
        rewardOne: this.rewardOne,
        rewardTwo: this.rewardTwo,
        rewardThree: this.rewardThree,
        rewardFour: this.rewardFour,
        rewardFive: this.rewardFive,
        username: this.profile.username
      };
      this.addReward(payload);
      this.dayTwenty = true;
      this.$q.notify({
        message: "You're worth it!",
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
    if (this.planuary.weekFour != undefined) {
      this.weekFourWin = this.planuary.weekFour.weekThreeWin;
      this.weekFourStruggle = this.planuary.weekFour.weekThreeStruggle;
      this.weekFourMemory = this.planuary.weekFour.weekThreeMemory;
    }
    if (this.planuary.quarterlyGoals != undefined) {
      this.quarterOneMilestone = this.planuary.quarterlyGoals.quarter1Milestone;
      this.quarterTwoMilestone = this.planuary.quarterlyGoals.quarter2Milestone;
      this.quarterThreeMilestone = this.planuary.quarterlyGoals.quarter3Milestone;
      this.quarterFourMilestone = this.planuary.quarterlyGoals.quarter4Milestone;
    }
    if (this.planuary.practices != undefined) {
      this.practiceOne = this.planuary.practices.practice1;
      this.practiceTwo = this.planuary.practices.practice2;
      this.practiceThree = this.planuary.practices.practice3;
    }
    if (this.planuary.gratitude != undefined) {
      this.gratitudeOne = this.planuary.gratitude.gratitude1;
      this.gratitudeTwo = this.planuary.gratitude.gratitude2;
      this.gratitudeThree = this.planuary.gratitude.gratitude3;
      this.gratitudeFour = this.planuary.gratitude.gratitude4;
      this.gratitudeFive = this.planuary.gratitude.gratitude5;
    }
    if (this.planuary.letGo != undefined) {
      this.letGoOne = this.planuary.letGo.letGo1;
      this.letGoTwo = this.planuary.letGo.letGo2;
      this.letGoThree = this.planuary.letGo.letGo3;
    }
    if (this.planuary.superpower != undefined) {
      this.superpower = this.planuary.superpower.superpower1;
    }
    if (this.planuary.avoid != undefined) {
      this.avoidOne = this.planuary.avoid.avoid1;
      this.avoidTwo = this.planuary.avoid.avoid2;
      this.avoidThree = this.planuary.avoid.avoid3;
      this.avoidFour = this.planuary.avoid.avoid4;
      this.avoidFive = this.planuary.avoid.avoid5;
    }
    if (this.planuary.tasklinsHelp != undefined) {
      this.tasklinsHelp = this.planuary.tasklinsHelp.tasklinsHelp1;
    }
    if (this.planuary.reward != undefined) {
      this.rewardOne = this.planuary.reward.reward1;
      this.rewardTwo = this.planuary.reward.reward2;
      this.rewardThree = this.planuary.reward.reward3;
      this.rewardFour = this.planuary.reward.reward4;
      this.rewardFive = this.planuary.reward.reward5;
    }
    var date = moment().date();
    this.showDate(date);
  }
};
</script>
