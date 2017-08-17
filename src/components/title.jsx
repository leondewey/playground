import { h } from 'hyperapp'

const style = {
  root: {
    borderBottom: '1px solid #000'
  }
}

export default (_, children) =>
  <h1 style={style.root}>
    {children}
  </h1>
