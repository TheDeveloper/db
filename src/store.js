const fs = require('fs')

exports.load = () => {
  let db = fs.readFileSync('./db.json')
  db = JSON.parse(db)
  return db
}

exports.save = db => {
  const content = JSON.stringify(db)
  const opts = { encoding: 'utf-8' }
  fs.writeFileSync('./db.json', content, opts)
}

exports.reset = newDb => {
  exports.save(newDb)
}
