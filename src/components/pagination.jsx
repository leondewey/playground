import { h } from 'hyperapp'
import Button from './button'

const style = {
  root: {},
  button: {
    backgroundColor: 'black',
    color: 'white'
  }
}

export default (props, children) => {
  const page = parseInt(props.page) || 1
  let next = page + 1
  let prev = page - 1
  if (prev <= 0) prev = false

  return (
    <div style={style.root}>
      {prev && <Button style={style.button} onclick={() => props.prev(prev)}>prev</Button>}
      <Button style={style.button} onclick={() => props.prev(next)}>next</Button>
    </div>
  )
}

