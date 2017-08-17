import { h } from 'hyperapp'

const style = {
  button: {
    fontSize: '16px'
  }
}

export default ({onclick, text}, children) => {
  return <button onclick={onclick} style={style.button}>{children}</button>
}

