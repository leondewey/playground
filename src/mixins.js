export const Logger = () => ({
  events: {
    action: (state, actions, data) => console.info(data)
  }
})

const localStoragState = JSON.parse(localStorage.getItem('state'))
export const Persist = ({ state }) => {
  return {
    state: localStoragState || state,
    events: {
      render: (state, actions, data) => {
        localStorage.setItem('state', JSON.stringify(state))
      }
    }
  }
}
