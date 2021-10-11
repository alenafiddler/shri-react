const redux = require('redux')

const initialState = {
  repository: '',
  command: '',
  branch: '',
  minutes: ''
}

const reducer = (state = initialState, action) => {
  return state
}

// Store
const store = redux.CreateStore(reducer)
console.log(store.getState())
