<template>


    <q-card bordered
      class="my-card card-register panel-details"      
    >
      <q-card-section>
        <div class="text-h5 text-center">Welcome Back to Tasklins</div>

      </q-card-section>

<q-form @submit.prevent="submitForm">
    <div class="row q-mb-md">
            <q-banner dense class="panel-details col">
           <div class="text-h6"> It's time to login and get back to work!</div>
            </q-banner>
    </div>

    <div class="row auth-section">
        <q-input        
        class="col auth-input"
        v-model="formData.email"
        label="E-mail"
        bg-color="green-2"
        :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address']"
        ref="email"
        lazy-rules
        />
    </div>

    <div class="row auth-section">
        <q-input        
        type="password"
        class="col auth-input"
        v-model="formData.password"
        label="Password"
        bg-color="green-2"
        lazy-rules
        :rules="[ val => val.length >= 6 || 'Please use at least 6 characters']"
        ref="password"
        />
    </div>

    <div class="row q-mb-md">
        <q-space />
        <q-btn
        color="green-2"
        text-color="primary"
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