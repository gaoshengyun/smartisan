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
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "order" */'../views/Order.vue'),
    children: [
      {
        path: 'all',
        name: 'orderall',
        component: () => import(/* webpackChunkName: "orderall" */'../views/OrderAll.vue')
      },
      {
        path: 'unpay',
        name: 'orderunpay',
        component: () => import(/* webpackChunkName: "orderunpay" */'../views/OrderUnpay.vue')
      },
      {
        path: 'undone',
        name: 'orderundone',
        component: () => import(/* webpackChunkName: "orderundone" */'../views/OrderUndone.vue')
      },
      {
        path: 'finish',
        name: 'orderfinish',
        component: () => import(/* webpackChunkName: "orderfinish" */'../views/OrderFinish.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'error404',
    component: () => import(/* webpackChunkName: "error404" */'../views/error404.vue')
  }
]