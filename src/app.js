// @flow

import { app, h } from 'hyperapp'
import { Router } from './lib/router'
import { Persist } from './mixins'
import State from './state'
import Actions from './actions'
import Views from './views'
import Events from './events'

function render () {
  const emit = app({
    state: State,
    actions: Actions,
    events: Events,
    view: Views,
    mixins: [ Router(Views), Persist ],
    root: document.getElementById('app')
  })
}

var module
if (module.hot) module.hot.accept('./app', render)
render()
