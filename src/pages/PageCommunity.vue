<template>
  <q-page>
    <div class="q-pa-md communityMain row">
      <div>
        <div>
          <h5></h5>
        </div>
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

        <div v-for="n in getCommunityUpdatesLength()" :key="n">
          <div>
            <q-card dense square bg-secondary class="community-card">
              <q-card-section class="community-like-section absolute-top-right row">
                <div class="community-like-count">{{ likedCount }}</div>
                <q-btn v-show="liked == false" flat round class="community-like-btn-default" color="secondary" icon="favorite_border" />
                <q-btn v-show="liked == true" flat round class="community-like-btn-default" color="secondary" icon="favorite" />
              </q-card-section>
              <q-card-section class="row">
                <q-avatar rounded size="55px">
                  <img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>                
                <div class="text-h7 q-pa-xs">
                  <p>@{{getCommunityUpdateUsername(n - 1)}}</p>
                  <p class="community-update-time">{{getCommunityUpdateTime(n - 1)}}</p>
                </div>                
              </q-card-section>
              <q-card-section class="community-post-text">
                <div>{{getCommunityUpdate(n - 1)}}</div>
              </q-card-section>
            </q-card>
          </div>
          <br>
        </div>
      </div>
      
    </div>

    <div></div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
const moment = require("moment");

export default {
  data() {
    return {
      text: "",
      liked: false,
      likedCount: 0
    };
  },
  computed: {
    ...mapGetters("community", ["community"]),
    ...mapGetters("profile", ["profile", "profiles", "profileIDs"])
  },
  methods: {
    ...mapActions("community", ["setCommunityUpdate"]),

    getCommunityUpdatesLength() {
      if (this.community.communityUpdate) {
        return Object.keys(this.community.communityUpdate).length;
      }
    },
    getCommunityUpdateUsername(number) {
      if (this.community.communityUpdate) {
        return this.community.communityUpdate[Object.keys(this.community.communityUpdate)[number]].username;
      }
    },
    getCommunityUpdateTime(number) {
      if (this.community.communityUpdate) {
       return moment(this.community.communityUpdate[Object.keys(this.community.communityUpdate)[number]].createdDate).format("YYYY-MM-DD hh:mm:ss A");
      }
    },
     getCommunityUpdate(number) {
      if (this.community.communityUpdate) {
        return this.community.communityUpdate[Object.keys(this.community.communityUpdate)[number]].communityUpdate;
      }
    },
    sendCommunityUpdate() {
      this.update;
      let payload = {
        username: this.profile.username,
        communityUpdate: this.text
      };
      this.setCommunityUpdate(payload);
      this.getCommunityUpdatesLength();
    }
  }
};
</script>
