import beers from './beers'
import beer from './beer'

export default {
  beers,
  beer,
  add: state => {
    return { ...state, count: state.count + 1 }
  }
}
