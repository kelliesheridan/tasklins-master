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
              @click="encouragement = true"
              class="glossy"
              rounded
              color="primary"
              label="Get Encouragement!"
            />
          </q-card-section>
          <q-card-section>
            <div class="community-post-text" v-show="encouragement">
              {{ encouragementText }}
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="q-pa-md col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div>
          <q-card dense square class="my-card q-pa-xs">
            <q-card-section class="row">
              <q-avatar rounded class="community-avater" size="55px">
                <img src="https://cdn.quasar.dev/img/avatar.png" />
              </q-avatar>
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

        <!-- <div v-for="n in getCommunityUpdatesLength()" :key="n">
          <div>
            <q-card dense square bg-secondary class="community-card">
              <q-card-section class="row">
                <q-avatar rounded size="55px">
                  <img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>                
                <div class="text-h7 q-pa-xs">
                  <p>@{{getCommunityUpdateUsername(n - 1)}}</p>
                  <p class="community-update-time">{{getCommunityUpdateTime(n - 1)}}</p>
                </div>                
              </q-card-section>
              <q-card-section>
                <div class="community-post-text">{{getCommunityUpdate(n - 1)}}</div>
              </q-card-section>
            </q-card>
          </div>
          <br>
        </div> -->

        <div class="flex-container">
        <div 
        v-for="(n, update) in this.filteredItems" :key="update">
          <div>
            <q-card dense square bg-secondary class="community-card">
              <q-card-section class="row">
                <q-avatar rounded size="55px">
                  <img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>
                <div class="text-h7 q-pa-xs">
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
      encouragement: false,
      encouragementText: "We're still working on this, but check back soon!"
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
        communityUpdate: this.text
      };
      this.setCommunityUpdate(payload);
      setTimeout(() => {
        this.reload();
      }, 200);

      //this.sortedUpdates();
    }
  }
};
</script>
