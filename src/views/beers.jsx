// @flow

import { h } from 'hyperapp'
import Layout from '../components/layout'
import Title from '../components/title'
import Button from '../components/button'
import Beers from '../components/beers'
import Pagination from '../components/pagination'
import Loading from '../components/loading'

export default ({ beers, router }, actions) => {
  const pagination = (page) => actions.router.go(`/beers?page=${page}`)
  const onclick = (id) => actions.router.go(`/beers/${id}`)

  return (
    <Layout>
      <Title>Beers</Title>
      <Loading loading={beers.loading && beers.data.length >= 0}>
        <Beers data={beers.data} onclick={onclick} />
      </Loading>
      <Pagination
        page={router.params.page}
        next={pagination}
        prev={pagination}
      />
      <Button onclick={e => actions.router.go('/')}>Home</Button>
    </Layout>
  )
}
