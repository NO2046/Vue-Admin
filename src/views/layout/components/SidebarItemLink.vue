<template>
  <component v-bind="attrObj(to)" :is="componentName">
    <slot/>
  </component>
</template>

<script>

import { isOuterLink } from '@/utils/index'

export default {
  name: 'SidebarItemLink',
  data(){
    return {
      componentName: ''
    }
  },
  props:{
    to:{
      type: String,
      required: true
    }
  },
  methods:{
    attrObj(to){
      if(isOuterLink(to)){
        this.componentName = 'a'
        return {
          href: to,
          target: '_blank',
        }
      }else{
        this.componentName = 'router-link'
        return {
          to
        }
      }
    }
  }
}
</script>