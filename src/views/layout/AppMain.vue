<template>
  <div class="main-container">
    <transition name='fade-transform' mode="out-in">
      <router-view></router-view>
    </transition>   
  </div>
</template>

<script>
export default {
  name: 'AppMain',
}
</script>

<style lang="scss" scoped>
  .main-container{
    min-height: calc( 100% - 50px );
  }
</style>