const { load } = require('./store')

let state

exports.get = () => {
  if (!state) state = load()
  return state
}

exports.reset = () => {
  state = undefined
}
