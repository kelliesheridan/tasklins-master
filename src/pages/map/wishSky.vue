<template>
  <q-page padding>
    <div class="q-gutter-sm row" style="width: 75%;">
      <div
        class="world-map map-size night-sky"
        style="position: absolute;"
      ></div>
      
      <div class="world-map map-size col-xs-12 col-sm-12 col-md-10 col-lg-10">
        <q-img
          @mouseover="wish1 = true"
          @mouseleave="wish1 = false"
          src="/statics/backgrounds/stars/star1.png"
          class="wishStar1"
        />

        <q-img
          @mouseover="wish2 = true"
          @mouseleave="wish2 = false"
          src="/statics/backgrounds/stars/star2.png"
          class="wishStar2"
        />

        <div
        class="wishGap1"
        >
        </div>

        <q-img
          @mouseover="wish3 = true"
          @mouseleave="wish3 = false"
          src="/statics/backgrounds/stars/star3.png"
          class="wishStar3"
        />

        <q-img
          @mouseover="wish4 = true"
          @mouseleave="wish4 = false"
          src="/statics/backgrounds/stars/star4.png"
          class="wishStar4"
        />

        <q-img
          @mouseover="wish5 = true"
          @mouseleave="wish5 = false"
          src="/statics/backgrounds/stars/star5.png"
          class="wishStar5"
        />

        <q-img
          @mouseover="wish6 = true"
          @mouseleave="wish6 = false"
          src="/statics/backgrounds/stars/star6.png"
          class="wishStar6"
        />


   
      </div>

      <div class="wishBubble absolute-bottom">
        <q-chat-message
          v-show="wish1"         
          :name= getName(1)
          :text=getWish(1)
          size="3"
          text-color="secondary"
          bg-color="white"
        />
        <q-chat-message
          v-show="wish2"
          :name= getName(2)
          :text=getWish(2)
          size="3"
          text-color="secondary"
          bg-color="white"
        />
        <q-chat-message
          v-show="wish3"
          :name= getName(3)
          :text=getWish(3)
          size="3"
          text-color="secondary"
          bg-color="white"
        />
        <q-chat-message
          v-show="wish4"
          :name= getName(4)
          :text=getWish(4)
          size="3"
          text-color="secondary"
          bg-color="white"
        />
        <q-chat-message
          v-show="wish5"
          :name= getName(5)
          :text=getWish(5)
          size="3"
          text-color="secondary"
          bg-color="white"
        />
        <q-chat-message
          v-show="wish6"
          :name= getName(6)
          :text=getWish(6)
          size="3"
          text-color="secondary"
          bg-color="white"
        />
        <q-chat-message
          v-show="wish7"
          :name= getName(7)
          :text=getWish(7)
          size="3"
          text-color="secondary"
          bg-color="white"
        />
        <q-chat-message
          v-show="wish8"
          :name= getName(8)
          :text=getWish(8)
          size="3"
          text-color="secondary"
          bg-color="white"
        />
        <q-chat-message
          v-show="wish9"
          :name= getName(9)
          :text=getWish(9)
          size="3"
          text-color="secondary"
          bg-color="white"
        />
        <q-chat-message
          v-show="wish10"
          :name= getName(10)
          :text=getWish(10)
          size="3"
          text-color="secondary"
          bg-color="white"
        />
        <q-chat-message
          v-show="wish11"
          :name= getName(11)
          :text=getWish(11)
          size="3"
          text-color="secondary"
          bg-color="white"
        />
        <q-chat-message
          v-show="wish12"
          :name= getName(12)
          :text=getWish(12)
          size="3"
          text-color="secondary"
          bg-color="white"
        />
        <q-chat-message
          v-show="wish13"
          :name= getName(13)
          :text=getWish(13)
          size="3"
          text-color="secondary"
          bg-color="white"
        />
        <q-chat-message
          v-show="wish14"
          :name= getName(14)
          :text=getWish(14)
          size="3"
          text-color="secondary"
          bg-color="white"
        />
        <q-chat-message
          v-show="wish15"
          :name= getName(15)
          :text=getWish(15)
          size="3"
          text-color="secondary"
          bg-color="white"
        />
        <q-chat-message
          v-show="wish16"
          :name= getName(16)
          :text=getWish(16)
          size="3"
          text-color="secondary"
          bg-color="white"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      wish1: false,
      wish2: false,
      wish3: false,
      wish4: false,
      wish5: false,
      wish6: false,
      wish7: false,
      wish8: false,
      wish9: false,
      wish10: false,
      wish11: false,
      wish12: false,
      wish13: false,
      wish14: false,
      wish15: false,
      wish16: false
    };
  },
  computed: {
    ...mapGetters("settings", ["darkMode"]),
    ...mapGetters("planuary", ["random16"])
  },
  methods: {
    getName(number) {
      //return this.random16[number] == undefined ? "" : this.random16[number][1].username;
      return "Someone is wishing..."
    },
    getWish(number) {
      var array = [];
      if (this.random16[number - 1] == undefined ) {
        array.push("");
        return array;
      } else {
         array.push(this.random16[number - 1][1].wish);
        return array;
      }
    },
  }
};
</script>
