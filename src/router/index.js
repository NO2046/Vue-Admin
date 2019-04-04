import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login')
  },{
    path: '/',
    redirect: '/dashboard',
    component: () => import('@/views/layout'),
    children:[
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard')
      }
    ]
  },{
    path: '/test',
    redirect: '/test/test2',
    name:'test',
    meta:{title:'Test'},
    component: () => import('@/views/layout'),    
    children:[
      {
        path: 'test2/:a',
        name: 'test2',
        meta:{title:'Test2'},
        component: () => import('@/views/test')
      }
    ]
  }

]

export default new Router({
  routes: constantRouterMap
})