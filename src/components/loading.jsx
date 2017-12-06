import { h } from 'hyperapp'

const style = {
  root: {}
}

export default ({loading}, children) =>
  <div style={style.root}>{loading ? 'Loading...' : children}</div>
