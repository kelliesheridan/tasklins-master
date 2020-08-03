import { LocalStorage, SessionStorage } from 'quasar'
import { Dark } from 'quasar'
import { firebaseAuth, firebaseDb } from 'boot/firebase'

const state = {
	settings: {
		show24hrTimeFormat: false,
		hideCompletedTasks: false,
		darkMode: false
	}
}

const mutations = {
	setShow24hrTimeFormat(state, value) {
		state.settings.show24hrTimeFormat = value
	},
	setHideCompletedTasks(state, value) {
		state.settings.hideCompletedTasks = value
	},
	setDarkMode(state, value) {
		Dark.toggle()
		state.settings.darkMode = value
	},
	setSettings(state, settings) {
		if ((!Dark.isActive && settings.darkMode) || 
			(Dark.isActive && !settings.darkMode)){
			Dark.toggle();
		}
		Object.assign(state.settings, settings)
	}
}

const actions = {
	setShow24hrTimeFormat({ commit, dispatch }, value) {
		commit('setShow24hrTimeFormat', value)
		// dispatch('saveSettings')
	},
	setHideCompletedTasks({ commit, dispatch }, value) {
		commit('setHideCompletedTasks', value)
		// dispatch('saveSettings')
	},
	setDarkMode({ commit, dispatch }, value) {
		commit('setDarkMode', value)
		// dispatch('saveSettings')
	},
	saveSettings({ state, dispatch }) {
		LocalStorage.set('settings', state.settings)
		dispatch('fbUpdateSettings')
	},
	fbReadSettings({ commit }) {
		let userId = firebaseAuth.currentUser.uid
		let userSettings = firebaseDb.ref('settings/' + userId)

		userSettings.once('value', snapshot => {
			let settings = snapshot.val();
			let payload = {
				darkMode: settings.darkMode,
				hideCompletedTasks: settings.hideCompletedTasks,
				show24hrTimeFormat: settings.show24hrTimeFormat,
			}
			commit('setSettings', payload)

		})
	},
	fbUpdateSettings({}) {
        let userId = firebaseAuth.currentUser.uid
        let settingsUpdate = firebaseDb.ref('settings/' + userId)
		settingsUpdate.update(state.settings, error => {
			if (error) {
				showErrorMessage(error.message)
			}
		})
    },
}

const getters = {
	settings: state => {
		return state.settings
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}