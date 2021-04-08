const fs = require('fs')
const { v3: murmur3 } = require('./murmurhash')
const crypto = require('crypto')

const rng = n => crypto.randomBytes(n)
const seed = rng(4).readUInt32LE()

const { NUM_SHARDS } = require('./const')

exports.id = key => {
  const hash = murmur3(key, seed)
  const id = hash % NUM_SHARDS
  return id
}

exports.write = (id, key, value) => {

}
