import { h } from 'hyperapp'
import Button from '../components/button'

export default ({name, onclick}) => {
  return (
    <li>
      <Button onclick={onclick}>{name}</Button>
    </li>
  )
}
