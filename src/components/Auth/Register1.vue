<template>
  <q-card bordered class="card-register panel-details">
    <q-card-section>
      <div class="text-h5 text-center">Welcome to Tasklins</div>
    </q-card-section>

    <q-form @submit.prevent="submitForm">
      <div class="row q-mb-xs">
        <q-banner dense class="panel-details col">
          <div class="text-h6">
            We're so excited to have you as part of our community. Before we get
            started, there are a few details we need to get in order.
          </div>
        </q-banner>
      </div>

      <div class="row auth-section">
        <q-input
          stack-label
          class="col auth-input"
          bg-color="green-2"
          v-model="formData.email"
          ref="email"
          placeholder="E-mail"
          aria-autocomplete="email"
          :rules="[
            val =>
              this.isValidEmailAddress(val) ||
              'Please enter a valid email address.'
          ]"
          lazy-rules
        />

        <q-input
          stack-label
          class="col auth-input"
          bg-color="green-2"
          autocomplete="off"
          type="email"
          v-model="formData.email2"
          ref="email2"
          placeholder="Please re-enter e-mail"
          aria-autocomplete="email"
          :rules="[val => val == formData.email || 'Emails do not match.']"
          lazy-rules
        />
      </div>

      <div class="row auth-section">
        <q-input
          aria="-label"
          stack-label
          type="password"
          class="col auth-input"
          bg-color="green-2"
          v-model="formData.password"
          placeholder="Password"
          autocomplete="new-password"
          lazy-rules
          :rules="[
            val => val.length >= 6 || 'Please use at least 6 characters'
          ]"
          ref="password"
        />

        <q-input
          stack-label
          type="password"
          class="col auth-input"
          bg-color="green-2"
          v-model="formData.password2"
          placeholder="Re-Enter password"
          autocomplete="new-password"
          lazy-rules
          :rules="[
            val => val == formData.password || 'Passwords do not match.'
          ]"
          ref="password"
        />
      </div>

      <div class="row q-mb-md">
        <q-space />
        <q-btn
          color="green-2"
          @click="submitForm()"
          text-color="primary"
          class="auth-register-btn"
          label="Register"
          v-close-popup
          :disable="
            formData.email2 != formData.email &&
              formData.password2 != formData.email
          "
          type="submit"
        />
      </div>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

const stringOptions = ["She/Her", "He/Him", "They/Them"];

export default {
  data() {
    return {
      formData: {
        email: "",
        email2: "",
        password: "",
        password2: "",
        name: "",
        username: "",
        password: "",
        prounouns: "",
        color: ""
      },
      model: null,
      filterOptions: stringOptions,
      hex: "#FF00FF"
    };
  },
  computed: {
    ...mapGetters("profile", ["profile"]),
    ...mapGetters("tasklins", ["tasklin"]),
    ...mapGetters("settings", ["fbReadSettings"])
  },
  methods: {
    ...mapActions("profile", [
      "fbReadProfile",
      "updateAbout",
      "updateName",
      "updateUsername",
      "updateProfile",
      "togglePrivateValue",
      "updateColor"
    ]),
    ...mapActions('auth', ['registerUser']),
    isValidEmailAddress(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    submitForm() {
      this.$refs.email.validate();
      this.$refs.password.validate();

      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        this.registerUser(this.formData);
        this.$router.push("/auth2");
      }
    }
  }
};
</script>
