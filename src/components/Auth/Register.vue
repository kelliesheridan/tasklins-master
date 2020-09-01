<template>

    <q-card bordered
      class="my-card card-register panel-details"      
    >
      <q-card-section>
        <div class="text-h5 text-center">Welcome to Tasklins</div>

      </q-card-section>

      <q-form @submit.prevent="submitForm">
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
        label="E-mail"
        :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address.']"
        lazy-rules
        />

        <q-input
        stack-label
        class="col auth-input"
        bg-color="green-2"
        v-model="formData.email2"
        ref="email2"
        label="Please Re-enter E-mail"
        :rules="[val => val == formData.email || 'Emails do not match.']"
        lazy-rules
        />
    </div>

    <div class="row auth-section">
        <q-input
        stack-label
        type="password"
        class="col auth-input"
        bg-color="green-2"
        v-model="formData.password"
        label="Password"
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
        label="Password"
        lazy-rules
        :rules="[ val => val.length >= 6 || 'Please use at least 6 characters']"
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
        label="Your Name"
        lazy-rules
        :rules="[ val => val.length >= 1 || 'Please enter your name!']"
        />

        <q-input
        stack-label
        class="col auth-input"
        bg-color="green-2"
        v-model="formData.username"
        ref="username"
        label="Choose a Username"
        lazy-rules
        :rules="[ val => val.length >= 1 || 'Please enter your username!']"
        />

    </div>

    <div class="row auth-section">

            <q-select
            stack-label
            label="Your Prounouns"
            class="col auth-input"
            bg-color="green-2"
            v-model="formData.prounouns"
            use-input
            use-chips
            multiple
            input-debounce="0"
            @new-value="createValue"
            :options="filterOptions"
            @filter="filterFn"
            style="width: 50%"
            />

        <div class="col q-pa-xs">
              <q-badge                
                text-color="black"
                class="q-mb-sm"
                :style="{ 'background-color': this.profile.color }"
              >
                Choose a Color
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

                this.addTasklin(tasklin);
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
                // this.$refs.password2.validate()
                if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
                    this.registerUser(this.formData)
                    this.$router.push('/initial')
                }
        },
            createValue (val, done) {
            // Calling done(var) when new-value-mode is not set or "add", or done(var, "add") adds "var" content to the model
            // and it resets the input textbox to empty string
            // ----
            // Calling done(var) when new-value-mode is "add-unique", or done(var, "add-unique") adds "var" content to the model
            // only if is not already set
            // and it resets the input textbox to empty string
            // ----
            // Calling done(var) when new-value-mode is "toggle", or done(var, "toggle") toggles the model with "var" content
            // (adds to model if not already in the model, removes from model if already has it)
            // and it resets the input textbox to empty string
            // ----
            // If "var" content is undefined/null, then it doesn't tampers with the model
            // and only resets the input textbox to empty string

            if (val.length > 0) {
                if (!stringOptions.includes(val)) {
                stringOptions.push(val)
                }
                done(val, 'toggle')
            }
            },

            filterFn (val, update) {
            update(() => {
                if (val === '') {
                this.filterOptions = stringOptions
                }
                else {
                const needle = val.toLowerCase()
                this.filterOptions = stringOptions.filter(
                    v => v.toLowerCase().indexOf(needle) > -1
                )
                }
            })
            }
        }
        }
		// filters: {
		// 	titleCase(value) {
		// 		return value.charAt(0).toUpperCase() + value.slice(1)
		// 	}
		// }

</script>