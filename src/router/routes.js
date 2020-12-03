
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: 'index', component: () => import('pages/Index.vue') },
      { path: 'atd', component: () => import('pages/PageAdmin.vue') },
      { path: 'initial', component: () => import('pages/PageInitial.vue') },
      { path: 'tasklins', component: () => import('pages/PageTasklins.vue') },
      { path: 'profile', component: () => import('pages/PageProfile.vue') },
      { path: 'explore', component: () => import('pages/PageExplore.vue') },
      { path: 'community', component: () => import('pages/PageCommunity.vue') },
      { path: 'help', component: () => import('pages/PageHelp.vue') },
      { path: 'todo', component: () => import('pages/PageTodo.vue') },
      { path: 'lists', component: () => import('pages/PageLists.vue') },
      { path: 'settings', component: () => import('pages/PageSettings.vue') },
      { path: 'auth', component: () => import('pages/PageAuth.vue') },
      { path: 'auth2', component: () => import('pages/PageAuth2.vue') },      
      { path: 'challenges', component: () => import('pages/PageChallenges.vue') },
      { path: 'town', component: () => import('pages/map/town.vue') },
      { path: 'piper-store', component: () => import('pages/stores/Piper.vue') },
      { path: 'town-blacksmith', component: () => import('pages/stores/town-Blacksmith.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
