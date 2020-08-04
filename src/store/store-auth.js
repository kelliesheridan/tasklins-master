import { LocalStorage, Loading } from 'quasar'
import { firebaseAuth, firebaseDb } from 'boot/firebase'
import { showErrorMessage } from 'src/functions/function-show-error-message'

const state = {
	loggedIn: false
}

const mutations = {
	setLoggedIn(state, value) {
		state.loggedIn = value
	}
}

const actions = {
	registerUser({ dispatch }, payload) {
		Loading.show()
		firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
			.then(response => {
				console.log('response: ', response)
				dispatch('fbCreateProfile')
				dispatch('fbCreateSettings')
				this.$router.push('/initial').catch(err => {})
			})
			.catch(error => {
				showErrorMessage(error.message)
			})
	},
	loginUser({}, payload) {
		Loading.show()
		firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
			.then(response => {
				console.log('response: ', response)
			})
			.catch(error => {
				showErrorMessage(error.message)
			})
	},
	logoutUser() {
		console.log('logoutUser')
		firebaseAuth.signOut()
	},
	handleAuthStateChange({ commit, dispatch }) {
    firebaseAuth.onAuthStateChanged(user => {
	Loading.hide()
      if (user) {
		commit('setLoggedIn', true)
		LocalStorage.set('loggedIn', true)
        dispatch('tasks/fbReadData', null, { root: true })
        dispatch('tasks/fbReadProjects', null, { root: true })
		dispatch('profile/fbReadProfile', null, { root: true })
		dispatch('fitness/readFitnessTasks', null, { root: true })
		dispatch('writing/readWritingTasks', null, { root: true })
		dispatch('tasklins/getTasklin', null, { root: true })
		dispatch('settings/fbReadSettings', null, { root: true })
		dispatch('profile/fbCheckUsername', null, { root: true })
		this.$router.replace('/initial').catch(err => {})
		} else {
		commit('tasks/clearTasks', null, {root: true})
		commit('tasks/setTasksDownloaded', false, {root: true})
        commit('setLoggedIn', false)
        this.$router.replace('/auth').catch(err => {})
      }
		})
	}, 
	fbCreateProfile() {
		let userId = firebaseAuth.currentUser.uid
		let payload = {
			name: '',
			username: '',
			id: userId,
			about: '',
			avatar: '',
			lin: 0,
			xp: 0,
			level: 0,
			friends: '',
			inventory: '',
			private: '',
			signup: true,
			admin: false,
            }
		let taskRef = firebaseDb.ref('profile/' + userId)
		taskRef.set(payload)
	},
	fbCreateSettings() {
		let userId = firebaseAuth.currentUser.uid
		let payload = {
			darkMode: false,
			hideCompletedTasks: false,
			show24hrTimeFormat: false,
            }
		let taskRef = firebaseDb.ref('settings/' + userId)
		taskRef.set(payload)
		},
	}

const getters = {

}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}