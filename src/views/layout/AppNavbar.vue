<template>
  <div class='navbar-container'>
    <Hamburger @click='toggleSidebar' :isActive='sidebar.opened'></Hamburger>
    <Breadcrumb></Breadcrumb>
    <el-dropdown class='navbar-dropdown'>
      <span>
        someone<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native='logout'>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'AppNavbar',
  components: { Hamburger, Breadcrumb },
  data(){
    return {
      isActive: false
    }
  },
  computed:{
    ...mapGetters([
      'sidebar'
    ])
  },
  methods:{
    toggleSidebar(){
      this.$store.commit('TOGGLE_SIDEBAR')
    },
    logout(){
      this.$store.dispatch('Logout').then(()=>{
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar-container{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #dcdee2;
    .navbar-dropdown{
      position: absolute;
      right:36px;
    }
  }
</style>