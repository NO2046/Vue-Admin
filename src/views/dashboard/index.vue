<template>
  <div class="dashboard-container">
    <h2 @click='$router.push("/test")'>dashboard2</h2>
    <router-link :to="{name:'test2',params:{a:'12'}}">to test</router-link>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  mounted(){
    console.log('dashboard this.$route.params')
    console.log(this.$route.params)
  }
}
</script>

<style lang="scss">
  .dashboard-container{
    height: 100%;
  }
</style>