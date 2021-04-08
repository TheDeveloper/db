const { NUM_SHARDS } = require('../const')
const { get: getMachines } = require('../machine')
const { get: getAllocation } = require('./state')

function allocate (shard, machine) {
  const machines = getMachines()
  const m = machines[machine]
  if (m.shards.has(shard)) return
  m.shards.add(shard)
  const allocation = getAllocation()
  allocation.set(shard, machine)
}

exports.allocation = () => {
  const machines = getMachines()
  let shards = NUM_SHARDS
  const num = machines.length
  while ((shards--)) {
    const machine = shards % num
    console.log(shards, machine)
    const shard = shards
    allocate(shard, machine)
  }
  const allocation = getAllocation()
  console.log(allocation)
  console.log(machines)
}
