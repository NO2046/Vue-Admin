const Key = 'isSidebarOpened'

function setSidebarState(key,stateNumber){
  localStorage.setItem(key,stateNumber)
}
function getSidebarState(key){
  return +localStorage.getItem(key)
}

const app = {
  state:{
    sidebar:{
      opened: !!getSidebarState(Key)
    }
  },
  mutations:{
    TOGGLE_SIDEBAR(state){
      state.sidebar.opened ? setSidebarState(Key,0):setSidebarState(Key,1)
      state.sidebar.opened = !state.sidebar.opened
    },
    CLOSE_SIDEBAR(state){
      setSidebarState(Key,0)
      state.sidebar.opened = false
    }
  }
}

export default app