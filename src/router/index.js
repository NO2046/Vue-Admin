import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/views/layout'

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login'), hidden: true},
  { path: '/404', component: () => import('@/views/404'), hidden: true},
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Dashboard',
    component: Layout,
    hidden: true, 
    children:[
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard')
      }
    ]
  },{
    path: '/testa',
    redirect: '/testa/test1',
    name:'testa',
    meta:{title:'TestA'},
    component: Layout,
    children:[
      {
        path: 'test1/:a',
        name: 'test1',
        meta:{title:'Test1'},
        component: () => import('@/views/test'),
        children:[
          {
            path: 'test1/:a',
            name: 'test1',
            meta:{title:'Test1'},
            component: () => import('@/views/test')
          },
          {
            path: 'test2/:a',
            name: 'test2',
            meta:{title:'Test2'},
            component: () => import('@/views/test')
          }
        ]
      },
      {
        path: 'test2/:a',
        name: 'test2',
        meta:{title:'Test2'},
        component: () => import('@/views/test')
      }
    ]
  },{
    path: '/testb',
    redirect: '/testb/test3',
    name:'tesb',
    meta:{title:'TestB'},
    component: () => import('@/views/layout'),    
    children:[
      {
        path: 'test3/:a',
        name: 'test3',
        meta:{title:'Test3'},
        component: () => import('@/views/test')
      }
    ]
  },{
    path: '/food',
    redirect: '/food/fruit',
    component: Layout,
    children: [
      {
        path: 'fruit',
        name: 'fruit',
        meta: { title: 'fruit'},
        component: () => import('@/views/food'),
      }
    ]
  },
  { path: '*', redirect:'/404', hidden: true},
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },
]

export default new Router({
  routes: constantRouterMap
})