const MACHINES = [
  { id: 0, shards: new Set() },
  { id: 1, shards: new Set() },
  { id: 2, shards: new Set() },
  { id: 3, shards: new Set() }
]

exports.get = () => {
  return MACHINES
}
