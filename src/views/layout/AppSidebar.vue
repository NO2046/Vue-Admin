<template>
  <div :class="classes">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical"
      :collapse="isClose"
      @open="onOpen"
      @close="onClose"
      
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import AppItem from './components/AppItem';
export default {
  name: 'AppSidebar',
  components: { AppItem },
  data(){
    return {
      activeIndex:'2-4-3'
    }
  },
  computed:{
    ...mapGetters([
      'sidebar'
    ]),
    isClose(){
      return !this.sidebar.opened
    },
    classes(){
      return {
        'sidebar-container': true,
        'isClose':this.isClose
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
