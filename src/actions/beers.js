export default {
  toggleLoading: (state) => {
    return {
      ...state,
      beers: { ...state.beers, loading: !state.beers.loading }
    }
  },
  set: (state, actions, data) => {
    return {
      ...state,
      beers: { ...state.beers, data: data, loading: false }
    }
  },
  load: (state, actions, data) => {
    actions.beers.toggleLoading()
    // const { params } = data
    // const query = Object.keys(params).map((key) => `${key}=${params[key]}` ).join('&')
    // fetch(`https://api.punkapi.com/v2/beers?${query}`)
    // .then(data => data.json())
    // .then(beers => actions.beers.set(beers))
    setTimeout(() => {
      actions.beers.set([
        {id: 1, name: 'One'},
        {id: 2, name: 'Two'},
        {id: 3, name: `Three, ${Math.random()}`}
      ])
    }, 5000)
  }
}
