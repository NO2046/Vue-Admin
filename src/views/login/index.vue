<template>
  <div class="login-container">
    <el-form ref='form' :model='form' :rules='rules' label-width='80px' label-position='left'>
      <el-form-item prop='username' label='用户名'>
        <el-input v-model='form.username'></el-input>
      </el-form-item>
      <el-form-item prop='password' label='密码'>
        <el-input v-model='form.password' type='password'></el-input>
      </el-form-item>
      <el-form-item>
        <el-button :loading='loading' @click='login'>log in</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { validateUsername } from '@/utils/validator'

export default {
  name:'Login',
  data(){
    const usernameValidator = (rule, value, callback)=>{
      if(validateUsername(value)){
        callback()
      }else{
        callback(new Error('error username'))
      }
    }
    const passwordValidator = (rule, value, callback)=>{
      if(value.trim().length > 1){
        callback()
      }else{
        callback(new Error('error password'))
      }
    }
    return {
      redirect:'',
      loading:false,
      rules:{
        username:[{required:true, validator: usernameValidator}],
        password:[{required:true, validator: passwordValidator}]
      },
      form:{
        username:'',
        password:''
      }
    }
  },
  watch:{
    '$route'(to) {
      this.redirect = to.query.redirect
    }
  },
  methods:{
    login(){
      this.$refs.form.validate( valid =>{
        if(valid){
          this.loading = true
          this.$store.dispatch('Login',this.form).then(
            this.$router.push({ path: this.redirect || '/'})
          ).finally(()=>{
            this.loading = false
          })
        }else{
          this.$message('fuck')
        }
      })
    }
  }
}
</script>
