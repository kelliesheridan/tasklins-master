<template>
  <q-page padding class="bg-auth">
           <header class="header">

           <div class="header__text-box">
            <h1 class="heading-primary" v-if="!register && !login" >
                <span class="heading-primary--main">Tasklins</span>
                <span class="heading-primary--sub">Organize your life, explore our world</span>
            </h1>

            <div>
              <q-btn class="auth-btn" @click.stop="login = true" color="white" text-color="secondary" push label="Login" />
              <q-btn class="auth-btn" @click.stop="register = true" color="white" text-color="secondary" push label="Register"/>
            </div>

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
      register: false
    };
  },
  components: {
    register: require("components/Auth/Register.vue").default,
    login: require("components/Auth/Login.vue").default
  }
};
</script>
