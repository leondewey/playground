export default {
  toggleLoading: (state) => {
    return {
      ...state,
      beer: { ...state.beer, loading: !state.beer.loading }
    }
  },
  set: (state, actions, data) => {
    return {
      ...state,
      beer: { ...state.beer, data: data, loading: false }
    }
  },
  load: (state, actions, id) => {
    actions.beer.toggleLoading()
    fetch(`https://api.punkapi.com/v2/beers/${id}`)
    .then(data => data.json())
    .then(beer => actions.beer.set(beer[0]))
  }
}
