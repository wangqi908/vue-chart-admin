import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/index',
    component: () => import(/* webpackChunkName: "layout" */ '@c/layout'),
    children: [
      {
        path: '/index',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home'),
        meta: { title: '直播数据分析管理系统' }
      },
      {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */ '../views/data/user'),
        meta: { title: '用户数据' }
      },
      {
        path: '/zb',
        name: 'zb',
        component: () => import(/* webpackChunkName: "zb" */ '../views/data/zb'),
        meta: { title: '直播数据' }
      }
    ]
  },
  {
    title: 'notFound',
    path: '/404',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '@/views/error/notFound'),
    out: true,
    meta: { title: 'notFound' }
  },
  {
    path: '*',
    redirect: '/404',
    type: 'notFound'
  }
]
const { BASE_DIR } = require('../../config')
const base = process.env.NODE_ENV === 'production' ? `/${BASE_DIR}` : '/'

const router = new VueRouter({
  base,
  mode: 'history',
  routes
})
// 多次点击相同路径报错处理
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '直播数据分析管理系统'
  next()
})

export default router
