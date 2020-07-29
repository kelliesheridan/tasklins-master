import Vue from 'vue'
import Vuex from 'vuex'

import tasks from './store-tasks'
import profile from './store-profile'
import settings from './store-settings'
import auth from './store-auth'
import fitness from './store-fitness'
import tasklins from './store-tasklins'
import tickets from './store-tickets'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can 
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      tasks, profile, settings, auth, fitness, tasklins, tickets
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}

