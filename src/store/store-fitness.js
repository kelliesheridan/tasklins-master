import Vue from 'vue'
import { uid, date } from 'quasar'
import { LocalStorage, SessionStorage } from 'quasar'
import { firebaseAuth, firebaseDb } from 'boot/firebase'

const state = {
	// kellieprogress: 0.3,
    // mattprogress: 0.9,
    // kaitlynprogress: 0.8,
    // adamprogress: 0.4,
	// fitness: {
	// // 	date: null,
	// // 	username: '',
	// // 	type: '',
	// // 	intensity: 0.0,
	// // 	goal: 0,
	// // 	cheers: 0,
	// }
}

const mutations = {
	setFitnessTask(state, payload) {
		console.debug("setting state.fitness to:", payload)
		state.fitness = payload
		
	},
	setSortedFitnessTask(state, payload) {
		let sortedArray = new Array();
		sortedArray = payload.sort();
		state.fitnessSorted = payload
	},
}

const actions = {
	addFitnessTask({ commit, dispatch }, fitnessTask) {
		dispatch('fbAddFitnessTask', fitnessTask)
		dispatch('fbReadFitnessTasks')
	},
	readFitnessTasks({ dispatch }) {
		dispatch('fbReadFitnessTasks')
	},
	fbReadFitnessTasks({ commit }) {
		let userId = firebaseAuth.currentUser.uid
		let fitnessTasks = firebaseDb.ref('fitness').orderByKey();
		let fitnessArray = new Array();
		fitnessTasks.once("value").then(function(snapshot) {
		let fitnessRecord = snapshot.val();
		// snapshot.forEach(function(childSnapshot) {
		// 	var key = childSnapshot.key;
		// 	var childData = childSnapshot.val();
		// 	fitnessArray.push([key, childData]);
		// });

		// commit('setFitnessTask', fitnessArray)
		// commit('setSortedFitnessTask', fitnessArray)

		commit('setFitnessTask', fitnessRecord)

		})

		// child added
		fitnessTasks.on('child_added', snapshot => {
			let fitnessRecord = snapshot.val();
			commit('setFitnessTask', fitnessRecord)
		})
	},
	fbAddFitnessTask({dispatch}, fitnessTask) {
		let userId = firebaseAuth.currentUser.uid
		let username = this.state.profile.profile.user.name
		let userColor = this.state.profile.profile.user.color
		let date = Date.now()
		let payload = {
			date: date,
			username: username.toLowerCase(),
			type: fitnessTask,
			intensity: 0.01,
			goal: 10,
			cheers: 0,
			color: userColor
            }
		let taskFitness = firebaseDb.ref('fitness/' + date)
		taskFitness.set(payload)
		dispatch('fbReadFitnessTasks')
	},
}

const getters = {
    fitness: state => {
		state.kellieprogress = 0.3
    	state.mattprogress = 0.9
    	state.kaitlynprogress = 0.8
		state.adamprogress = 0.4
		return state;
    }
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}