<template>
  <div class="breadcrumb-container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for='(item,index) in levelList' :key=index>
        <span v-if='item.redirect ==="noredirect"'>{{item.meta.title}}</span>
        <a v-else @click='onClick(item)'>{{item.meta.title}}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import pathToRegexp from 'path-to-regexp'
export default {
  name: 'Breadcrumb',
  data() {
    return {
      levelList: []
    };
  },
  watch:{
    '$route'(){
      this.getBreadcrumb()
    }
  },
  mounted() {
    this.getBreadcrumb()
  },
  methods:{
    getBreadcrumb(){
      let matched = this.$route.matched;
      let first = matched[0];
      if (first && first.name !== 'dashboard') {
        matched = [{ path: '/dashboard', meta: { title: 'Dashboard' } }].concat(matched);
      }
      // 可通过
      this.levelList = matched.filter( item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },

    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },

    onClick(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
};
</script>

<style lang="scss" scoped>
  .breadcrumb-container{
    margin-left:10px;
  }
</style>