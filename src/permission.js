import { getToken } from '@/utils/auth'
import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

router.beforeEach((to ,from, next) => {
  NProgress.start()
  if(getToken()){
    if( to.path === '/login' ){
      next({ path: '/'})
      NProgress.done() 
    }else{
      next()
    }
  }else{
    if(to.path === '/login'){
      debugger
      next()
    }else{
      debugger
      next(`/login?redirect=${to.path}`)
      NProgress.done() 
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})