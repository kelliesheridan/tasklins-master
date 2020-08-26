<template>
  <q-page padding class="bg-auth">
           <header class="header">
           <!-- <div class="header__logo-box">
                <img src="img/logo-white.png" alt="Logo" class="header__logo">
           </div> -->

           <div class="header__text-box">
            <h1 class="heading-primary">
                <span class="heading-primary--main">Tasklins</span>
                <span class="heading-primary--sub">Organize your life, explore our world</span>
            </h1>
            <div class="signups">
                <div id="mc_embed_signup" style="border-radius: 5px; padding: 3px 5px; text-align: center;">
                    <form action="https://tasklins.us20.list-manage.com/subscribe/post?u=fe3d011ce2058d995c8e12959&amp;id=2b279dc91a" method="post" style="text-align: center;" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <div id="mc_embed_signup_scroll">
                        <label style="margin-bottom: 5px;" for="mce-EMAIL">Subscribe to our newsletter to be notified the next time Tasklins is open for new user signups!</label>
                        <!-- <input type="email" value="" style="display: inline-block;" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required> -->
                        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_fe3d011ce2058d995c8e12959_2b279dc91a" tabindex="-1" value=""></div>
                        <div class="clear"><input type="submit" style="display: inline-block;" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                        </div>
                    </form>
                    </div>
              
            </div>
            <div class="composition">
                <img src="img/pink1.png" alt="Pink Tasklin" class="composition__photo composition__photo--p1">
                <img src="img/blue1.png" alt="Blue Tasklin" class="composition__photo composition__photo--p2">
                <img src="img/green1.png" alt="Green Tasklin" class="composition__photo composition__photo--p3">
            </div>
            </div>


       </header>


    <div class="q-pa-md">
      <!-- <div class="q-gutter-y-md" style="max-width: 600px" relative-center> -->
      <q-card class="auth-tabs">
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
      </q-card>
    </div>
    <!-- </div> -->
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tab: "login"
    };
  },
  components: {
    register: require("components/Auth/Register.vue").default,
    login: require("components/Auth/Login.vue").default
  }
};
</script>
