import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/login';

const user = {
  state:{
    token: getToken()
  },
  mutations:{
    SET_TOKEN(state,token){
      state.token = token
    }
  },
  actions:{
    Login({ commit },userForm){
      const username = userForm.username.trim()
      return new Promise((resolve,reject)=>{
        login(username,userForm.password).then( ({token}) => {
          setToken(token)
          commit('SET_TOKEN',token)
          resolve()
        }).catch( err =>{
          reject(err)
        })
      })
    },
    Logout({ commit }){
      return new Promise( resolve => {
        commit('SET_TOKEN','')
        removeToken()       
        resolve()
      })
    }
  }
}

export default user