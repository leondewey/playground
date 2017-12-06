// @flow

import { h } from 'hyperapp'
import Layout from '../components/layout'
import Title from '../components/title'
import Button from '../components/button'

const style = {
  description: {
  },
  image: {
    width: '150px',
    float: 'right'
  }
}

export default (state, actions) => {
  if (state.beer.loading) return <Layout><div>Loading...</div></Layout>
  const { name, description, image_url } = state.beer.data

  return (
    <Layout>
      <Title>{name}</Title>
      <img style={style.image} src={image_url} />
      <div style={style.description}>{description}</div>
      <div>
        <Button onclick={e => actions.router.go('/beers')}>Back</Button>
      </div>
    </Layout>
  )
}
