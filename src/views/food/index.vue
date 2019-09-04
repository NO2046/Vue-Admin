<template>
  <div class="fruit">
    <h1 @click="() => onClick()()">fruit</h1>
    <router-view></router-view>
  </div>
</template>

<script>
const onClick = () => {
  console.log('outside')``
}

export default {
  name: 'fruit',
  methods: {
    onClick(){
      console.log('inside`')
      onClick();
      return () => {
        console.log(1)
      }
    }
  }
};
</script>