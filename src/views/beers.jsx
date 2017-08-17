// @flow

import { h } from 'hyperapp'
import Layout from '../components/layout'
import Title from '../components/title'
import Button from '../components/button'
import Beer from '../components/beer'

export default (state, actions) => {
  const beers = (() => {
    if (state.beers.loading) return <div>Loading...</div>
    const beers = state.beers.data.map( (beer) => (
      <Beer onclick={e => actions.router.go(`/beers/${beer.id}`)} {...beer} />
    ))
    return <ul>{beers}</ul>
  })()

  console.log(state.router.params.page)
  const page = state.router.params.page
  if (page && page > 0) {
    const next = page + 1
    const prev = page - 1
  }

  return (
    <Layout>
      <Title>Beers</Title>
      {beers}
      <Button onclick={e => actions.router.go('/beers?page=1')}>prev</Button>
      <Button onclick={e => actions.router.go('/beers?page=2')}>next</Button>
      <Button onclick={e => actions.router.go('/')}>Home</Button>
    </Layout>
  )
}
