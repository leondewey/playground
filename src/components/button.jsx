import { h } from 'hyperapp'

const style = {
  button: {
    fontSize: '16px'
  }
}

export default ({onclick, text, style = {}}, children) => {
  return (
    <button onclick={onclick} style={{...style.button, ...style}}>
      {children}
    </button>
  )
}
