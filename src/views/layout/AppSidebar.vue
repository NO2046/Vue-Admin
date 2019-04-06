<template>
  <div :class="classes">
    <el-menu
      @open="onOpen"
      @close="onClose"     
      :default-active="activeIndex"
      :collapse="isClose"
      class="el-menu-vertical"     
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
  data(){
    return {
      activeIndex:'1'
    }
  },
  computed:{
    ...mapGetters([
      'sidebar'
    ]),
    isClose(){
      return !this.sidebar.opened
    },
    routes(){
      return this.$router.options.routes
    },
    classes(){
      return {
        'sidebar-container': true,
        'isClose': this.isClose
      }
    }
  },
  methods:{
    onOpen(){

    },
    onClose(){

    }
  }
};
</script>
