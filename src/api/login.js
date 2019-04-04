import service from '@/utils/request'

export function login(username,password){
  return service({
    url:'/login',
    method:'post',
    data:{
      username,
      password
    }
  })
}