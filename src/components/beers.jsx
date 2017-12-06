import { h } from 'hyperapp'
import Beer from './beer'

const style = {
  beers: {
    margin: 0,
    padding: 0
  }
}

export default ({ data, onclick }) => {
  const beers = data.map( (beer) =>
    <Beer onclick={onclick.bind(null, beer.id)} {...beer} />
  )
  return <ul style={style.beers}>{beers}</ul>
}
