<template>
<q-form @submit.prevent="submitForm">
    <div class="row q-mb-xs">
        <q-banner dense class="bg-grey-3 col">
        <template v-slot:avatar>
            <q-icon name="account_circle" color="primary" />
        </template>
        Join Tasklins today!
        </q-banner>
    </div>

    <div class="row">
        <q-input
        outlined
        class="col"
        v-model="formData.email"
        ref="email"
        label="E-mail"
        :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address.']"
        lazy-rules
        />
    </div>

      <div class="row q-mb-xs">
        <q-input
        outlined
        class="col"
        v-model="formData.email2"
        ref="email2"
        label="Please Re-enter E-mail"
        :rules="[val => val == formData.email || 'Emails do not match.']"
        lazy-rules
        />
    </div>

    <div class="row q-mb-sm">
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

    <!-- <div class="row q-mb-md">
        <q-input
        outlined
        type="password"
        class="col"
        v-model="formData.password2"
        label="Re-enter Password"
        :rules="[ val => formData.password2.val = formData.password.val || 'Passwords do not match']"
        lazy-rules
        />
    </div> -->

    <div class="row q-mb-md">
        <q-space />
        <q-btn
        color="primary"
        label="Register"
        :disable="formData.email2 != formData.email"
        type="submit" />
    </div>

</q-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            formData: {
                email: '',
                email2: '',
                password: '',
                // password2: ''
            }
        }
    },
    methods: {
			...mapActions('auth', ['registerUser']),
			isValidEmailAddress(email) {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		    return re.test(String(email).toLowerCase())
			},
            submitForm() {
                this.$refs.email.validate()
                this.$refs.password.validate()
                // this.$refs.password2.validate()
                if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
                    this.registerUser(this.formData)
                }
        },
		// filters: {
		// 	titleCase(value) {
		// 		return value.charAt(0).toUpperCase() + value.slice(1)
		// 	}
		// }
    }
}
</script>