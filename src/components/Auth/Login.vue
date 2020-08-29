<template>


    <q-card bordered
      class="my-card card-register bg-tasklin-purple-dark text-white"      
    >
      <q-card-section>
        <div class="text-h6 text-center">Welcome to Tasklins</div>

      </q-card-section>

<q-form @submit.prevent="submitForm">
    <div class="row q-mb-md">
            <q-banner dense class="bg-tasklin-blue-dark col">
           Login and we'll get back to work!
            </q-banner>
    </div>

    <div class="row q-mb-md">
        <q-input
        outlined
        class="col"
        v-model="formData.email"
        label="E-mail"
        :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address']"
        ref="email"
        lazy-rules
        />
    </div>

    <div class="row q-mb-md">
        <q-input
        outlined
        type="password"
        class="col"
        v-model="formData.password"
        label="Password"
        lazy-rules
        :rules="[ val => val.length >= 6 || 'Please use at least 6 characters']"
        ref="password"
        />
    </div>

    <div class="row q-mb-md">
        <q-space />
        <q-btn
        color="primary"
        label="Login"
        type="submit" />
    </div>

</q-form>

    </q-card>

</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            formData: {
                email: '',
                password: '',
            }
        }
    },
    methods: {
        ...mapActions('auth', ['loginUser']),
        isValidEmailAddress(email) {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		    return re.test(String(email).toLowerCase())
			},
        submitForm() {
            this.$refs.email.validate()
            this.$refs.password.validate()
            if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
                this.loginUser(this.formData)
                this.$router.push('/index').catch(err => {})
            }
        },
},
	filters: {
			titleCase(value) {
				return value.charAt(0).toUpperCase() + value.slice(1)
			}
		}
}
</script>