export default [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue')
  },
  {
    path: '/mcenter',
    name: 'mcenter',
    component: () => import(/* webpackChunkName: "mcenter" */ '../views/MCenter.vue')
  }
]