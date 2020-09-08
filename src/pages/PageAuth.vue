<template>
  <q-page padding class="bg-auth">
           <header class="header">

           <div class="header__text-box">
            <h1 class="heading-primary" v-if="!register && !register2 && !login" >
                <span class="heading-primary--main">Tasklins</span>
                <span class="heading-primary--sub">Organize your life, explore our world</span>
            </h1>

            <div>
              <q-btn class="auth-btn" @click.stop="login = true" color="white" text-color="secondary" push label="Login" />
              <q-btn class="auth-btn" @click.stop="register = true" color="white" text-color="secondary" push label="Register"/>
            </div>

            </div>

        <q-dialog @click="login = true" v-model="login" transition-hide="scale">
          <login @close="login = false" />
        </q-dialog>

        <q-dialog @click="register = true" v-model="register" transition-hide="scale">
          <register1 @close="register2 = true" />
        </q-dialog>

        <q-dialog v-model="register2" transition-hide="scale">
          <register2 @close="register2 = false" />
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
      register: false,
      register2: false
    };
  },
  components: {
    register1: require("components/Auth/Register1.vue").default,
    register2: require("components/Auth/Register2.vue").default,
    login: require("components/Auth/Login.vue").default
  }
};
</script>
