export default [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      title: 'smartisan 首页'
    }
  },
  {
    path: '/category',
    name: 'category',
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue'),
    meta: {
      title: 'smartisan 商品分类'
    }
  },
  {
    path: '/mcenter',
    name: 'mcenter',
    component: () => import(/* webpackChunkName: "mcenter" */ '../views/MCenter.vue'),
    meta: {
      title: 'smartisan 个人中心'
    }
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "order" */'../views/Order.vue'),
    children: [
      {
        path: 'all',
        name: 'orderall',
        component: () => import(/* webpackChunkName: "orderall" */'../views/OrderAll.vue'),
        meta: {
          title: 'smartisan 全部订单信息'
        }
      },
      {
        path: 'unpay',
        name: 'orderunpay',
        component: () => import(/* webpackChunkName: "orderunpay" */'../views/OrderUnpay.vue'),
        meta: {
          title: 'smartisan 未付款订单信息'
        }
      },
      {
        path: 'undone',
        name: 'orderundone',
        component: () => import(/* webpackChunkName: "orderundone" */'../views/OrderUndone.vue'),
        meta: {
          title: 'smartisan 待收货订单信息'
        }
      },
      {
        path: 'finish',
        name: 'orderfinish',
        component: () => import(/* webpackChunkName: "orderfinish" */'../views/OrderFinish.vue'),
        meta: {
          title: 'smartisan 已完成订单信息'
        }
      }
    ]
  },
  {
    path: '*',
    name: 'error404',
    component: () => import(/* webpackChunkName: "error404" */'../views/error404.vue'),
    meta: {
      title: '404-未找到该页面'
    }
  }
]