<template>
  <component v-bind="attrObj()">
    <slot/>
  </component>
</template>

<script>

import isOuterLink from '@/utils/index'

export default {
  name: 'AppLink',
  props:{
    to:{
      type: String,
      required: true
    }
  },
  methods:{
    attrObj(to){
      if(isOuterLink(to)){
        return {
          is: 'a',
          href: to,
          target: '_blank',
        }
      }else{
        return {
          to,
          is: 'router-link',
        }
      }
    }
  }
}
</script>