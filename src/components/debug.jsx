import { h } from 'hyperapp'

export default ({toDebug}) => {
  return <pre>{JSON.stringify(toDebug, null, 2)}</pre>
}
