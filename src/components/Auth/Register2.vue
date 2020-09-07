<template>

    <q-card bordered
      class="my-card card-register panel-details"      
    >
      <q-card-section>
        <div class="text-h5 text-center">Welcome to Tasklins</div>

      </q-card-section>

      <q-form @submit.prevent="submitForm" >
        <div class="row q-mb-xs">
            <q-banner dense class="panel-details col">
           <div class="text-h6"> We're so excited to have you as part of our community. Before we get started, there are a few details we need to get in order.
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
        :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address.']"
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
        :rules="[val => val == formData.email || 'Emails do not match.']"
        lazy-rules
        />
    </div>

    <div class="row auth-section">
        <q-input
        aria=-label
        stack-label
        type="password"
        class="col auth-input"
        bg-color="green-2"
        v-model="formData.password"
        placeholder="Password"
        lazy-rules
        :rules="[ val => val.length >= 6 || 'Please use at least 6 characters']"
        ref="password"
        />

        <q-input
        stack-label
        type="password"
        class="col auth-input"
        bg-color="green-2"
        v-model="formData.password2"
        placeholder="Re-Enter password"
        lazy-rules
        :rules="[val => val == formData.password || 'Passwords do not match.']"
        ref="password"
        />
    </div>


    <div class="row auth-section">

        <q-input
        stack-label
        class="col auth-input"
        bg-color="green-2"
        v-model="formData.name"
        ref="name"
        placeholder="Your Name"
        lazy-rules
        :rules="[ val => val.length >= 1 || 'Please enter your name!']"
        />

        <q-input
        id="userID"
        stack-label
        class="col auth-input"
        bg-color="green-2"
        v-model="formData.username"
        ref="username"
        placeholder="Choose a Username"
        lazy-rules
        :rules="[ val => val.length >= 1 || 'Please enter your username!']"
        />

    </div>

    <div class="row auth-section">

            <q-select
                outlined
                v-model="formData.prounouns"
                bg-color="green-2"
                label="Your Prounouns"
                class="col auth-input"
                :options="filterOptions"
                style="width: 50%">
		    </q-select>        


        <div class="col q-pa-xs">
              <q-badge                
                text-color="white"
                class="q-mb-sm"
                :style="{ 'background-color': this.profile.color }">
                <div class="text-h5 text-center" style="color: white">Pick a colour:</div>
                
              </q-badge>

            <q-color
            :color="changeColor"
            v-model="changeColor"
            no-header
            no-footer
            default-view="palette"
            :palette="[
                '#f44336', '#e91e63', '#9c27b0', '#3f51b5', '#00bcd4', '#4caf50', '#ffeb3b', '#ff9800', '#795548','#9e9e9e']"
            class="my-picker"
            />

            </div>
  </div>

    <div class="row q-mb-md">
        <q-space />
        <q-btn
        color="green-2"
        @click="updateUserProfile"
        text-color="primary"
        class="auth-register-btn"
        label="Register"
        :disable="formData.email2 != formData.email && formData.password2 != formData.email"
        type="submit" />
    </div>

</q-form>
    </q-card>

</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

const stringOptions = [
  'She/Her', 'He/Him', 'They/Them'
]

export default {
    data() {
        return {
            formData: {
                email: '',
                email2: '',
                password: '',
                password2: '',
                name: '',
                username: '',
                password: '',
                prounouns: '',
                color: '',
            },
            model: null,
            filterOptions: stringOptions,
            hex: '#FF00FF'         
        }
    },
        computed: {
        ...mapGetters("profile", ["profile"]),
        ...mapGetters("tasklins", ["tasklin"]),
        ...mapGetters("settings", ["fbReadSettings"]),        
        changeAbout: {
        get() {
            return this.profile.about;
        },
        set(value) {
            this.updateAbout(value);
        }
        },
        changeName: {
        get() {
            return this.profile.name;
        },
        set(value) {
            this.updateName(value);
        }
        },
        changeUsername: {
        get() {
            return this.profile.username;
        },
        set(value) {
            this.updateUsername(value);
        }
        },
        togglePrivate: {
        get() {
            return this.profile.private;
        },
        set(value) {
            this.togglePrivateValue(value);
        }
        },
        changeColor: {
        get() {
            return this.profile.color;
        },
        set(value) {
            this.updateColor(value);
            this.hex = value;
        }
        }
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
            updateUserProfile() {
                let profile = {
                    name: this.profile.name,
                    username: this.profile.username,
                    id: this.profile.id,
                    about: this.profile.about,
                    avatar: this.profile.avatar,
                    memberType: 1,
                    lin: this.profile.lin,
                    xp: this.profile.xp,
                    level: this.profile.level,
                    friends: this.profile.friends,
                    inventory: this.profile.inventory,
                    private: this.profile.private,
                    signup: false,
                    admin: this.profile.admin,
                    color: this.profile.color
                };

                this.updateProfile(profile);
                
                this.$router.push("/initial");
                },
			...mapActions('auth', ['registerUser']),
			isValidEmailAddress(email) {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		    return re.test(String(email).toLowerCase())
			},
            submitForm() {
                this.$refs.email.validate()
                this.$refs.password.validate()
                
                if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
                    this.registerUser(this.formData)
                    this.$router.push('/initial')
                }
        },

        }
        }
		// filters: {
		// 	titleCase(value) {
		// 		return value.charAt(0).toUpperCase() + value.slice(1)
		// 	}
		// }

</script>