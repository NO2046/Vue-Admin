<template>
  <component v-bind="attrObj(to)">
    <slot/>
  </component>
</template>

<script>

import { isOuterLink } from '@/utils/index'

export default {
  name: 'SidebarItemLink',
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