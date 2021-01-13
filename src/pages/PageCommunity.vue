<template>
  <q-page>
    <div class="q-pa-md communityMain row">
      <div class="q-pa-md col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <q-card dense square class="community-card center">
          <q-card-section>
            <div class="text-h6 q-pa-xs">
              Encouragement Station
            </div>
          </q-card-section>
          <q-card-section>
            <q-btn
              @click="generateEncouragement() && encouragement == true"
              class="glossy"
              rounded
              color="primary"
              label="Get Encouragement!"
            />
          </q-card-section>
          <q-card-section>
            <div v-show="this.encouragement" class="community-post-text">
              {{ this.encouragementText }}
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="q-pa-md col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div>
          <q-card dense square class="my-card q-pa-xs">
            <q-card-section class="row">
              <q-icon name="fas fa-user" class="community-avater" :style="{color: this.profile.color}" style="font-size: 4rem;" />
              <div class="text-h7">
                <q-input
                  standout="bg-secondary text-white"
                  class="shareUpdate-form"
                  v-model="text"
                  label="Share Your Journey"
                />
              </div>
              <div>
                <q-btn
                  padding="xs lg"
                  class="shareUpdate-btn"
                  color="primary"
                  icon="send"
                  @click="sendCommunityUpdate()"
                />
              </div>
            </q-card-section>
          </q-card>
        </div>
        <br />
        <br />

        <div class="flex-container">
        <div 
        v-for="(n, update) in this.filteredItems" :key="update">
          <div>
            <q-card dense square bg-secondary class="community-card">
              <q-card-section class="row">
                <q-icon class="community-avater" name="fas fa-user" :style="{color: getAvatarColor(n.color)}" style="font-size: 3.2rem;" />
                <div class="text-h7 q-pa-xs community-update-stats">
                  <p>@{{ n.username }}</p>
                  <p class="community-update-time">
                    {{ getTime(n.createdDate) }}
                  </p>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="community-post-text">{{ n.communityUpdate }}</div>
              </q-card-section>
            </q-card>
          </div>
          <br />
        </div>
      </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
const moment = require("moment");

export default {
  data() {
    return {
      text: "",
      liked: false,
      likedCount: 0,
      encouragementText: "",
      encouragement: false      
    };
  },
  computed: {
    ...mapGetters("community", ["community", "updatesSorted", "updateMessages"]),
    ...mapGetters("profile", ["profile", "profiles", "profileIDs"]),
    filteredItems: function() {
      // let updatesSorted = {},
      //   keysOrdered = Object.keys(this.community.communityUpdate)
      //     .sort()
      //     .reverse();
      // if (keysOrdered.length > 0) {
      //   keysOrdered.forEach(key => {
      //     updatesSorted[key] = this.community.communityUpdate[key];
      //   });
      // }
      // return updatesSorted;
      return this.community.communityUpdate;
    },
    updateMessages() {
        return this.community.communityUpdate;
    }
  },
  methods: {
    ...mapActions("community", ["setCommunityUpdate"]),

    generateEncouragement() {
      let possibleEncouragement = [
            'Remember: Time heals all wounds',
            'Treat Yourself: Take a bath and do a face mask',
            'Give them the Old Razzle Dazzle',
            'Focus on your strengths and you will get through this',
            'You have come so far already, you can do this!',
            'Treat Yourself: Cake? A nap?  Whatever your body needs!',
            'Act as if what you do makes a difference. It does. - William James',
            'Believe you can and you are halfway there. - Theodore Roosevelt',
            'Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein',
            'Limit your "always" and your "nevers." - Amy Poehler',
            'You are never too old to set another goal or to dream a new dream. - C.S. Lewis',
            'You do not find the happy life. You make it. - Camilla Eyring Kimball',
            'Sometimes you will never know the value of a moment, until it becomes a memory. - Dr. Seuss',
            'You must do the things you think you cannot do. - Eleanor Roosevelt',
            'It is never too late to be what you might have been. - George Eliot',
            'We must be willing to let go of the life we planned so as to have the life that is waiting for us. - Joseph Campbell',
            'Happiness is not by chance, but by choice. - Jim Rohn',
            'Life changes very quickly, in a very positive way, if you let it. - Lindsey Vonn',
            'Be the change that you wish to see in the world. - Mahatma Gandhi',
            'If I cannot do great things, I can do small things in a great way." - Martin Luther King Jr.',
            'The bad news is time flies. The good news is you are the pilot. - Michael Altshuler',
            'Do not wait. The time will never be just right. - Napoleon Hill',
            'No matter what people tell you, words and ideas can change the world. - Robin Williams',
            'A champion is defined not by their wins but by how they can recover when they fall. - Serena Williams',
            'Motivation comes from working on things we care about. - Sheryl Sandberg',
            'Keep your face always toward the sunshine, and shadows will fall behind you. - Walt Whitman',
            'Find the easiest task on your list for today and get that done, you will feel a lot better.',
            'Whoever you are, I know you can do it',
            'Take ten minutes to do something you love',
            "If you're struggling today, know that I'm thinking about you",
            "One wat or another, we're all thin this together. I'm rooting for you.",
            "There's no doubt in my mind that you're going to do incredible things"
        ]
        this.encouragement = true;
        this.encouragementText = possibleEncouragement[Math.floor(Math.random() * possibleEncouragement.length)]

        //return encouragementText
        },

    reload() {
      this.$forceUpdate();
    },
    getCommunityUpdatesLength() {
      if (this.community.communityUpdate) {
        return Object.keys(this.community.communityUpdate).length;
      }
    },
    getCommunityUpdateUsername(number) {
      if (this.community.communityUpdate) {
        return this.community.communityUpdate[
          Object.keys(this.community.communityUpdate)[number]
        ].username;
      }
    },
    getCommunityUpdateTime(number) {
      if (this.community.communityUpdate) {
        return moment(
          this.community.communityUpdate[
            Object.keys(this.community.communityUpdate)[number]
          ].createdDate
        ).format("YYYY-MM-DD hh:mm:ss A");
      }
    },
    getCommunityUpdate(number) {
      if (this.community.communityUpdate) {
        return this.community.communityUpdate[
          Object.keys(this.community.communityUpdate)[number]
        ].communityUpdate;
      }
    },
    getTime(time) {
      if (time) {
        return moment(time).format("dddd, MMMM DD hh:mm:ss A");
      }
    },
    sendCommunityUpdate() {
      this.update;
      let payload = {
        username: this.profile.username,
        communityUpdate: this.text,
        color: this.profile.color,
      };
      this.setCommunityUpdate(payload);
      setTimeout(() => {
        this.reload();
      }, 200);

      this.text = "";
    },
    getAvatarColor(color) {
      return color == undefined ? "" : color;
    }
  }
};
</script>
