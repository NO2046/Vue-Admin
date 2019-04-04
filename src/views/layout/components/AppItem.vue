<script>
export default {
  name: 'AppItem',
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