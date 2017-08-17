import { h } from 'hyperapp'

const style = {
  root: {
    border: '50px solid #000',
    padding: '20px 40px',
    minHeight: '500px'
  }
}

export default (_, children) =>
  <div style={style.root}>{children}</div>
