import Vue from 'vue'
import { uid, Notify } from 'quasar'
import { firebaseDb, firebaseAuth } from 'boot/firebase'
import { showErrorMessage } from 'src/functions/function-show-error-message'
import { date } from 'quasar'
import moment from 'moment'

const { addToDate } = date;
const state = {
	tasks: {
		// 'ID1': {
		// 	name: 'Go to shop',
		// 	project: 'main',
		// 	public: true,
		// 	repeating: false,
		// 	dueDate: '2019/05/12',
		// 	dueTime: '18:30',
		// 	completed: false
		// },
		// 'ID2': {
		// 	name: 'Get bananas',
		// 	completed: false,
		// 	dueDate: '2019/05/13',
		// 	dueTime: '14:00'
		// },
		// 'ID3': {
		// 	name: 'Get apples',
		// 	completed: false,
		// 	dueDate: '2019/05/14',
		// 	dueTime: '16:00'
		// }	
	},
	search: '',
	sort: 'dueDate',
	tasksDownloaded: false
}

const mutations = {
	updateTask(state, payload) {
		Object.assign(state.tasks[payload.id], payload.updates)
	},
	deleteTask(state, id) {
		Vue.delete(state.tasks, id)
	},
	addTask(state, payload) {
		Vue.set(state.tasks, payload.id, payload.task)
	},
	clearTasks(state) {
		state.tasks = {}
	},
	setSearch(state, value) {
		state.search = value
	},
	setSort(state, value) {
		state.sort = value
	},
	setTasksDownloaded(state, value) {
		state.tasksDownloaded = value
	}
}

const actions = {
	updateTask({ dispatch }, payload) {
		dispatch('fbUpdateTask', payload)
	},
	deleteTask({ dispatch }, id) {
		dispatch('fbDeleteTask', id)
	},
	pushDueDate( { dispatch }, payload) {
		dispatch('fbPushDueDate', payload)
	},
	addTask({ dispatch, commit }, task) {
		let taskId = uid()
		let payload = {
			id: taskId,
			task: task
		}
		dispatch('fbAddTask', payload)
	},
	setSearch({ commit }, value) {
		commit('setSearch', value)
	},
	setSort({ commit }, value) {
		commit('setSort', value)
	},

	fbReadData({ commit }) {
		let userId = firebaseAuth.currentUser.uid
		let userTasks = firebaseDb.ref('tasks/' + userId)

		//initial check for data
		userTasks.once('value', snapshot => {
			commit('setTasksDownloaded', true)
		}, error => {
			showErrorMessage(error.message)
			this.$router.replace('/auth')
		})

		// child added
		userTasks.on('child_added', snapshot => {
			let task = snapshot.val()
			let payload = {
				id: snapshot.key,
				task: task
			}
			commit('addTask', payload)
		})

		// child changed
		userTasks.on('child_changed', snapshot => {
			let task = snapshot.val()
			let payload = {
				id: snapshot.key,
				updates: task
			}
			commit('updateTask', payload)
		})

		// child removed
		userTasks.on('child_removed', snapshot => {
			let taskId = snapshot.key
			commit('deleteTask', taskId)
		})
	},
	fbAddTask({}, payload) {
		let userId = firebaseAuth.currentUser.uid
		let taskRef = firebaseDb.ref('tasks/' + userId + '/' + payload.id)
		payload.task.createdDate = Date.now()
		taskRef.set(payload.task, error => {
			if (error) {
				showErrorMessage(error.message)
			}
			else {
				//Notify.create('New Task Added - + 1xp')
			}
		})
	},
	fbUpdateTask({}, payload) {
		let userId = firebaseAuth.currentUser.uid
		let taskRef = firebaseDb.ref('tasks/' + userId + '/' + payload.id)
		payload.updates.lastModified = Date.now()
		taskRef.update(payload.updates, error => {
			if (error) {
				showErrorMessage(error.message)
			}
		})
	},
	fbPushDueDate({}, payload) {
		let userId = firebaseAuth.currentUser.uid
		let taskRef = firebaseDb.ref('tasks/' + userId + '/' + payload.id)
		payload.dueDate = addToDate(payload.dueDate, { days: 1});
		// payload.dueDate = date.formatDate(payload.dueDate, 'YYYY-MM-DD')
		taskRef.update(payload, error => {
			if (error) {
				showErrorMessage(error.message)
			}
		})
	},
	fbDeleteTask({}, taskId) {
		let userId = firebaseAuth.currentUser.uid
		let taskRef = firebaseDb.ref('tasks/' + userId + '/' + taskId)
		taskRef.remove(error => {
			if (error) {
				showErrorMessage(error.message)
			}
		})
	}	
}

const getters = {
	tasksSorted: (state) => {
		let tasksSorted = {},
			keysOrdered = Object.keys(state.tasks)

		keysOrdered.sort((a,b) => {
			let taskAProp = state.tasks[a][state.sort].toLowerCase(),
				taskBProp = state.tasks[b][state.sort].toLowerCase()

			if (taskAProp > taskBProp) return 1
			else if (taskAProp < taskBProp) return -1
			else return 0
	})

		keysOrdered.forEach((key) => {
			tasksSorted[key] = state.tasks[key]
		})

		return tasksSorted
	},

	tasksFiltered: (state, getters) => {
		let tasksSorted = getters.tasksSorted,
			tasksFiltered = {}
		if (state.search) {
			Object.keys(tasksSorted).forEach(function(key) {
				let task = tasksSorted[key],
						taskNameLowerCase = task.name.toLowerCase(),
						searchLowerCase = state.search.toLowerCase()
				if (taskNameLowerCase.includes(searchLowerCase)) {
					tasksFiltered[key] = task
				}
			})
			return tasksFiltered		
		}
		return tasksSorted
	},
	tasksTodo: (state, getters) => {
		let tasksFiltered = getters.tasksFiltered
		let tasks = {}
		Object.keys(tasksFiltered).forEach(function(key) {
			let task = tasksFiltered[key]
			if (!task.completed) {
				tasks[key] = task
			}
		})
		return tasks
	},
	tasksCompleted: (state, getters) => {
		let tasksFiltered = getters.tasksFiltered
		let tasks = {}
		Object.keys(tasksFiltered).forEach(function(key) {
			let task = tasksFiltered[key]
			if (task.completed) {
				tasks[key] = task
			}
		})
		return tasks
	},
	tasksToday: (state, getters) => {
		let tasksFiltered = getters.tasksFiltered
		let tasks = {}
		Object.keys(tasksFiltered).forEach(function(key) {
			let task = tasksFiltered[key]
			let taskDueDate = task.dueDate
			let today = Date.now()
			moment().format();

			let formattedTaskDueDate = date.formatDate(taskDueDate, 'YYYY-MM-DD')
			let formattedToday = date.formatDate(today, 'YYYY-MM-DD')

			if (date.isSameDate(formattedTaskDueDate, formattedToday)) {
				tasks[key] = task
			}
		})

		return tasks
	},
	tasksLate: (state, getters) => {
		let tasksFiltered = getters.tasksFiltered
		let tasks = {}
		Object.keys(tasksFiltered).forEach(function(key) {
			let task = tasksFiltered[key]
			let taskDueDate = task.dueDate
			let today = Date.now()
			moment().format();

			let formattedTaskDueDate = date.formatDate(taskDueDate, 'YYYY-MM-DD')
			let formattedToday = date.formatDate(today, 'YYYY-MM-DD')

			if (moment(formattedTaskDueDate).isBefore(formattedToday) && !task.completed) {
				tasks[key] = task
			}
		})

		return tasks
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
}