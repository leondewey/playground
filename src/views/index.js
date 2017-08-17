// @flow

import Home from './home'
import Default from './default'
import Beers from './beers'
import Beer from './beer'

export default [
  ['/', Home],
  ['/beers', Beers],
  ['/beers/:id', Beer],
  ['*', Default]
]
