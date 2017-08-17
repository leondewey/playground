// @flow

import { h } from 'hyperapp'
import Layout from '../components/layout'
import Button from '../components/button'
const style = { textAlign: 'center' }

export default (s, a) =>
  <Layout>
    <div style={style}>
      <h1>404</h1>
      <button onclick={e => a.router.go('/')}>
        Home
      </button>
    </div>
  </Layout>
