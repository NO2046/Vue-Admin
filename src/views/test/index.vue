<template>
  <div class="test">
    <button :[key]="'value'"></button>
    <h1 v-bind="{id:hId}">test</h1>
    <div v-bind="{ id: someProp, 'other-attr': otherProp }">test!!!1</div>
  </div>
</template>

<script>
export default {
  name: 'Test2',
  data(){
    return {
      hId: 'test',
      someProp:'test2',
      otherProp:'test3',
      key:'class'
    }
  },
  mounted(){
    console.log(this.$route.params)    
  },

}

</script>

<style lang="scss">
  .test{
    height: 100%;
  }
</style>