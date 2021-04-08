const _ = require('lodash')

const { save } = require('./store')
const store = require('./store')
const state = require('./state')

exports.get = path => {
  const db = state.get()
  return _.get(db, path)
}

// e.g. set('test.project-1', { hello: true });
// {"test":{"project-1":{"hello":true}}}
exports.set = (path, value) => {
  const db = state.get()
  _.set(db, path, value)
  save(db)
}

exports.setnx = (path, value) => {
  const db = state.get()
  if (_.has(db, path)) return
  exports.set(path, value)
  save(db)
}

exports.reset = (newDb = {}) => {
  state.reset()
  store.reset(newDb)
}
