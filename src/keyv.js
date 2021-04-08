const shard = require('./shard')

exports.set = (key, value) => {
  const id = shard.id(key)
  console.log({ id })
  const machine = machine.get(id)
  // shard.write(id, key, value)
}
