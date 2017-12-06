import { h } from 'hyperapp'
import Button from './button'

const style = {
  root: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  }
}

export default ({name, onclick}) => {
  return (
    <li style={style.root}>
      <Button onclick={onclick}>{name}</Button>
    </li>
  )
}
