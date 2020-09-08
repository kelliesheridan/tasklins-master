<template>
  <q-page padding class="bg-auth">
           <header class="header">

        <q-dialog v-model="register2" transition-hide="scale">
          <register2 />
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
      register2: true
    };
  },
  components: {
    register2: require("components/Auth/Register2.vue").default,
  }
};
</script>
