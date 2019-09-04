<template>
  <div :class="classes">
    <el-menu
      :collapse="isClosed"
      class="el-menu-vertical"     
      :default-active="$route.path"   
    >
      <sidebar-item v-for="route in routes" :item="route" :base-path="route.path" :key="route.path"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import SidebarItem from './components/SidebarItem';
export default {
  name: 'AppSidebar',
  components: { SidebarItem },
  computed:{
    ...mapGetters([
      'sidebar'
    ]),
    isClosed(){
      return !this.sidebar.opened
    },
    routes(){
      return this.$router.options.routes
    },
    classes(){
      return {
        'sidebar-container': true,
        'isClosed': this.isClosed
      }
    }
  }
};
</script>
