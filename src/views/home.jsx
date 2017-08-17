// @flow

import { h } from 'hyperapp'
import Layout from '../components/layout'
import Button from '../components/button'
import Title from '../components/title'

export default (state, actions) =>
  <Layout>
    <Title url='/'>Home</Title>
    <Button onclick={actions.add}>{state.count}</Button>
    <Button onclick={e => actions.router.go('/beers')}>Beers</Button>
    <div>
      Hello worldxz
    </div>
  </Layout>
