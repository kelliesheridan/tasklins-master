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

       <section class="about-section">
        <div class="u-center-text u-margin-bottom-big">
          <h2>
              Your Projects and To Do Lists on a whole new level
            </h2>
         </div>

         <div class="aboutTasklinsInner row">
           <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-xs">
              <h3 class="heading-tertiary u-margin-bottom-small">Turn your every day tasks into an adventure</h3>
              <p class="paragraph">
                  Tasklins is a brand new gamified productivity app, focused on training and collecting virtual pets while exploring a growing world and cheering on fellow Task Hunters! Free to play!
              </p>

              <h3 class="heading-tertiary u-margin-bottom-small">Join Tasklins earky and help shape our future</h3>
              <p class="paragraph">
                  Tasklins will be entering open alpha in September of 2020. The website is still very much a work in progress, but if you're open to helping us test our latest events and features, we'd love to have you as part of our community.
              </p>   
           </div>

           <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-xs">
             2
           </div>
         </div>

       </section>

       <section class="section-features">              

               <div class="row">
                   <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 q-pa-xs">
                       <div class="feature-box">
                            <i class="feature-box__icon icon-basic-todolist-pen"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Stay On Top Of Your Tasks</h3>
                            <p class="feature-box__text">Take your to do list to a new level with our organization tools, built to help you stay on top of everything you need to get done.</p>
                       </div>
                   </div>

                   <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 q-pa-xs">
                    <div class="feature-box">
                         <i class="feature-box__icon icon-basic-heart"></i>
                         <h3 class="heading-tertiary u-margin-bottom-small">Collect and Nurture Your Tasklins</h3>
                         <p class="feature-box__text">Grow your collection of tasklins, level them up and keep them safe and healthy! Evolve your tasklins until you find your perfect companion.</p>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-3 col-lg3 q-pa-xs">
                    <div class="feature-box">
                         <i class="feature-box__icon icon-basic-message-multiple"></i>
                         <h3 class="heading-tertiary u-margin-bottom-small">Join an Encouraging Community</h3>
                         <p class="feature-box__text">Let your friends cheer you on as you strive to hit your goals. Send updates, gifts, challenges and more. We're all in this together!</p>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 q-pa-xs">
                    <div class="feature-box">
                         <i class="feature-box__icon icon-basic-world"></i>
                         <h3 class="heading-tertiary u-margin-bottom-small">Explore a vibrant world</h3>
                         <p class="feature-box__text">You and your tasklins will explore our world together. Get to know new NPCs, grow your own garden, find hidden treasures.</p>
                    </div>
                </div>

               </div>
           </section>

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
