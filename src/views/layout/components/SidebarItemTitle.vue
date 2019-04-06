<script>
export default {
  name: 'SidebarItemTitle',
  functional: true,
  props:{
    title:{
      type: [String, Number],
      default: ''
    }
  },
  render(h, context){
    const title = context.props.title
    const vnodes = []
    if(title){
      vnodes.push(<span slot='title'>{title}</span>)
    }
    return vnodes
  }
}
</script>