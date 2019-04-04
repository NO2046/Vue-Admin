<template>
  <div :class="classes">
    <AppSidebar/>
    <div class="right-container">
      <AppNavbar/>
      <AppMain/>
    </div>    
  </div>
</template>

<script>

import AppMain from './AppMain'
import AppNavbar from './AppNavbar'
import AppSidebar from './AppSidebar'

export default {
  name: 'Layout',
  components:{ AppMain, AppNavbar, AppSidebar },
  computed:{

    classes(){
      return {
        'layout-container': true,
        'openSidebar': this.$store.state.app.sidebar.opened
      }
    }
  }
}
</script>
