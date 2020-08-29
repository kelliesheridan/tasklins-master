<template>
  <q-page padding class="bg-auth">
           <header class="header">

           <div class="header__text-box">
            <h1 class="heading-primary" v-if="!register && !login" >
                <span class="heading-primary--main">Tasklins</span>
                <span class="heading-primary--sub">Organize your life, explore our world</span>
            </h1>

            <div>
              <q-btn class="auth-btn" color="white" text-color="secondary" push label="Login" />
              <q-btn class="auth-btn" color="white" text-color="secondary" push label="Register"/>
            </div>

                <!-- <q-card class="auth-tabs">
                  <q-tabs
                    v-model="tab"
                    dense
                    class="text-grey"
                    active-color="primary"
                    indicator-color="secondary"
                    align="justify"
                    narrow-indicator
                  >
                    <q-tab name="login" label="Login" />
                    <q-tab name="register" label="Register" />
                  </q-tabs>

                  <q-separator />

                  <q-tab-panels v-model="tab" animated>
                    <q-tab-panel name="login">
                      <login />
                    </q-tab-panel>

                    <q-tab-panel name="register">
                      <register />
                    </q-tab-panel>
                  </q-tab-panels>
                </q-card> -->

            <!-- <div class="composition">
                <img src="statics/placeholder/pink1.png" alt="Pink Tasklin" class="composition__photo composition__photo--p1">
                <img src="statics/placeholder/blue1.png" alt="Blue Tasklin" class="composition__photo composition__photo--p2">
                <img src="statics/placeholder/green1.png" alt="Green Tasklin" class="composition__photo composition__photo--p3">
            </div> -->
            </div>

          <q-dialog @click="login = true" v-model="login" transition-hide="scale">
            <login @close="login = false" />
          </q-dialog>

        <q-dialog @click="register = true" v-model="register" transition-hide="scale">
          <register @close="register = false" />
        </q-dialog>


       </header>

  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tab: "login",
      login: false,
      register: true
    };
  },
  components: {
    register: require("components/Auth/Register.vue").default,
    login: require("components/Auth/Login.vue").default
  }
};
</script>
