import { h } from 'hyperapp'
import picostyle from 'picostyle'

const style = picostyle(h)

const ButtonElement = style('button')({
  borderColor: 'black',
  borderRadius: '3px',
  borderStyle: 'solid',
  borderWidth: '1px',
  width: '30px',
  height: '30px',
  outlineColor: '',
  cursor: 'pointer',
  '> .add': {
    backgroundColor: '',
    fontSize: '20px',
    color: 'black'
  },
  '> .sub': {
    backgroundColor: '',
    fontSize: '20px',
    color: 'black'
  }
})

const Button = ({ label, update, disabled }) => (
  <button onclick={update} disabled={disabled ? disabled : false}>
    {label}
  </button>
)

const clickCount = clicks => {
  return clicks > 0 ? (
    <div>
      You clicked {clicks} time{clicks > 1 ? 's' : ''}
    </div>
  ) : (
    ''
  )
}

const view = (state, actions) => (
  <div>
    <h1>Welcome to HyperApp!</h1>
    <hr />

    <ButtonElement className="hello">Hello</ButtonElement>

    <section>
      {Button({ label: '+', update: actions.add })}
      <h1>{state.num}</h1>
      {Button({ label: '-', update: actions.sub, disabled: state.num <= 0 })}
      {clickCount(state.clicks)}
    </section>
  </div>
)

export default view
