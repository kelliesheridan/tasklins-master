<template>
  <q-page padding>
    <p>Home Page</p>
    <div class="planuaryDay day-1">
        <q-card>
          <q-card-section>
            <div class="text-h7">
              <q-button @click="dayOne = !dayOne">
                Planuary. Day One.
              </q-button>
            </div>
          </q-card-section>

          <q-card-section v-if="dayOne">
            <div class="text-h7 focus-boxes">
              <q-input class="q-pa-xs" rounded label="Focus One" outlined v-model="focusOne"></q-input>
              <q-input class="q-pa-xs" rounded label="Focus Two" outlined v-model="focusTwo"></q-input>
              <q-input class="q-pa-xs" rounded label="Focus Three" outlined v-model="focusThree"></q-input>
              <q-input class="q-pa-xs" v-if="focusThree != null" rounded label="Focus Four" outlined v-model="focusFour"></q-input>
              <q-input class="q-pa-xs" v-if="focusFour != null" rounded label="Focus Five" outlined v-model="focusFive"></q-input>
            </div>
          </q-card-section>
      </q-card>
    </div>

    <div v-if="dayTwo" class="planuaryDay day-2">
      <p>Day 2</p>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      dayOne: false,
      focusOne: "",
      focusTwo: "",
      focusThree: null,
      focusFour: null,
      focusFive: "",
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
}
</script>
