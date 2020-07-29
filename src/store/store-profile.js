import { firebaseDb, firebaseAuth } from 'boot/firebase'


const state = {
	profile: {
		 'user': {
		// 	 name: 'name',
        //   username: '@aTinyDisaster',
        //   id: 1,
        //   about: '',
        //   avatar: '',
        //   lin: 0,
		// 	 xp: 1,
		// 	 level: 0,
		// 	 friends: '',
		// 	 inventory: '',
        //   tasklins: '',
        //   private: false,
        //   signup: false,
        //   admin: true,
        },
     }, 
	}

const mutations = {
    setXP (state, isCompleted) {
        if (isCompleted) {
            state.profile.user.xp += 5
        } else {
            state.profile.user.xp -= 5
        }
    },
    setLin (state, isCompleted) {
        if (isCompleted) {
            state.profile.user.lin += mutateLin(1, 5);
        } else {
            state.profile.user.lin -= mutateLin(3, 5);
        }
    },
    setXPValue (state, value) {
        state.profile.user.xp += value;
    },
    setLevel (state) {
        state.profile.user.level = getLevel();
    },
    setAbout (state, value) {
        state.profile.user.about = value;
    },
    setName (state, value) {
        state.profile.user.name = value;
    },
    setUsername (state, value) {
        state.profile.user.username = value;
    },
    setPrivate (state, value) {
        state.profile.user.private = value;
    },
    setTasklins (state, value) {
        state.profile.user.tasklins = value;
    },
    setColor (state, value) {
        state.profile.user.color = value;
    },
    updateProfile({}, profile) {
        state.profile.user = profile
    },
    printUsername({}, userNames) {
        console.debug("usernames: " + userNames);
    },
}
    // addNewUser(state, payload) {
	// 	Vue.set(state.profile, payload.id, payload.task)
	// }

const actions = {
    addXP({ commit, dispatch }, isCompleted) {
        commit('setXP', isCompleted)
        commit('setLevel')
        dispatch('fbUpdateProfile')
    },
    addLin({ commit, dispatch }, isCompleted) {
        commit('setLin', isCompleted)
        dispatch('fbUpdateProfile')
    },
    addXPValue({ commit, dispatch }, value) {
        commit('setXPValue', value)
        commit('setLevel')
        dispatch('fbUpdateProfile')
    },
    togglePrivateValue({ commit, dispatch }, value) {
        commit('setPrivate', value)
        //dispatch('fbUpdateProfile')
    },
    updateAbout({ commit, dispatch }, value) {
        commit('setAbout', value)
        //dispatch('fbUpdateProfile')
    },
    updateName({ commit, dispatch }, value) {
        commit('setName', value)
        //dispatch('fbUpdateProfile')
    },
    updateUsername({ commit, dispatch }, value) {
        commit('setUsername', value)
        //dispatch('fbUpdateProfile')
    },
    updateTasklins({ commit, dispatch }, value) {
        commit('setTasklins', value)
    },
    updateColor({ commit, dispatch }, value) {
        commit('setColor', value)
    },
    fbReadProfile({ commit }) {
        let userId = firebaseAuth.currentUser.uid
        let userProfile = firebaseDb.ref('profile/' + userId)

		userProfile.once('value', snapshot => {
            let profile = snapshot.val()
			let payload = {
				name: profile.name,
                username: profile.username,
                id: profile.id,
                about: profile.about,
                avatar: profile.avatar,
                lin: profile.lin,
                xp: profile.xp,
                level: profile.level,
                friends: profile.friends,
                inventory: profile.inventory,
                private: profile.private,
                signup: profile.signup,
                admin: profile.admin,
                color: profile.color
            }
           commit('updateProfile', payload)

        })

		// // child changed
		// userProfile.on('child_changed', snapshot => {
        //     let profile = snapshot.val()
		// 	let payload = {
		// 		name: profile.name,
        //         username: profile.username,
        //         id: profile.id,
        //         about: profile.about,
        //         avatar: profile.avater,
        //         lin: profile.lin,
        //         xp: profile.xp,
        //         level: profile.level,
        //         friends: profile.friends,
        //         inventory: profile.inventory,
        //         tasklins: profile.tasklins,
        //         private: profile.private,
        //         signup: profile.signup,
        //         admin: profile.admin,
        //     }
        //     commit('updateProfile', payload)
		// })
    },

    updateProfile({ commit, dispatch }, profile) {
        commit('updateProfile', profile)
		dispatch('fbUpdateProfile')
    },
    
    fbUpdateProfile({}) {
        let userId = firebaseAuth.currentUser.uid
        let proUpdate = firebaseDb.ref('profile/' + userId)
        console.debug(state.profile.user)
		proUpdate.update(state.profile.user, error => {
			if (error) {
				showErrorMessage(error.message)
			}
		})
    },

	fbCheckUsername( commit ) {
        console.debug("checking usernames")
        let userTasks = firebaseDb.ref('usernames')
        let username = "aTinyDisaster";
        //initial check for data
        userTasks.once('value', snapshot => {
        let userList = [];
        if (snapshot) {
            var result = Object.keys(snapshot.val()).map(function (key) { 
                userList.push(snapshot.val()[key]);
                //console.debug(snapshot.val()[key]);
            });
               console.debug("includes username " + username + ": " + userList.includes(username));
        }
        });
    },
    
}
function mutateLin(min, max) {
    var lin = Math.floor(Math.random() * (max - min + 1)) + min;
    return lin;
}

function getLevel() {
    var xp = parseInt(state.profile.user.xp)
    if (xp >= 50) {
        return '4'
    } else if (xp >= 20 && xp <= 50) {
        return '3'
    } else if (xp >= 10 && xp <= 20) {
        return '2'
    } else {
        return '1'
    };
}

const getters = {
    profile: state => {
		return state.profile.user
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}