
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: 'index', component: () => import('pages/Index.vue') },
      { path: 'initial', component: () => import('pages/PageInitial.vue') },
      { path: 'tasklins', component: () => import('pages/PageTasklins.vue') },
      { path: 'profile', component: () => import('pages/PageProfile.vue') },
      { path: 'explore', component: () => import('pages/PageExplore.vue') },
      { path: 'community', component: () => import('pages/PageCommunity.vue') },
      { path: 'help', component: () => import('pages/PageHelp.vue') },
      { path: 'todo', component: () => import('pages/PageTodo.vue') },
      { path: 'settings', component: () => import('pages/PageSettings.vue') },
      { path: 'auth', component: () => import('pages/PageAuth.vue') },
      { path: 'fitness', component: () => import('pages/PageFitnessChallenge.vue') }
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
