export default {
  '/beers' : (state, actions, data) => actions.beers.load(data),
  '/beers/:id' : (state, actions, data) => actions.beer.load(data.params.id)
}
