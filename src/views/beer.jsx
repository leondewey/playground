// @flow

import { h } from 'hyperapp'
import Layout from '../components/layout'
import Title from '../components/title'
import Button from '../components/button'

export default (state, actions) => {
  if (state.beer.loading) return <Layout><div>Loading...</div></Layout>
  const { name, description, image_url } = state.beer.data

  return (
    <Layout>
      <Title>{name}</Title>
      {description}
      <img src={image_url} />
      <div>
        <Button onclick={e => actions.router.go('/beers')}>Beers</Button>
      </div>
    </Layout>
  )
}
