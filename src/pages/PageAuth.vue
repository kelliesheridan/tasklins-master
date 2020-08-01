<template>
    <q-page padding class="bg">
        <div class="q-pa-md">
            <!-- <div class="q-gutter-y-md" style="max-width: 600px" relative-center> -->
            <q-card class="auth-tabs">
                <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
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
  data () {
    return {
      tab: 'login'
    }
  },
  components: {
      'register' : require('components/Auth/Register.vue').default,
      'login' : require('components/Auth/Login.vue').default,
  }
}
</script>

<style>

  @media screen and (min-width: 768px) {
    .auth-tabs {
        max-width: 20%;
        margin: auto;
        margin-top: 10%;
  }
  }

  @media screen and (max-width: 767px) {
    .auth-tabs {
        max-width: 80%;
        margin: auto;
        margin-top: 10%;
    }
  }    
      .bg {
        background-image: url("http://www.tasklins.com/AboutPageAssets/images/trythis3.png");
        margin: auto;
        background-repeat: no-repeat;
        background-size: 50% 120%;
        background-position: center top;
        }
</style>