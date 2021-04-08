const { expect } = require('chai')

const { set, setnx, get, reset } = require('../src/api')
const { load } = require('../src/store')

describe('db', () => {
  it('load', () => {
    reset({ test: 1 })
    const db = load()
    expect(db.test).to.equal(1)
  })

  it('set', () => {
    reset()
    set('test.project-1.hello', true)
    const db = load()
    expect(db.test['project-1'].hello).to.equal(true)
  })

  it('setnx should not set when exists', () => {
    reset()
    set('test.project-1.hello', 1)
    setnx('test.project-1.hello', 2)
    const db = load()
    expect(db.test['project-1'].hello).to.equal(1)
  })

  it('setnx should set when not exists', () => {
    reset()
    setnx('test.project-2.hello', 2)
    const db = load()
    expect(db.test['project-2'].hello).to.equal(2)
  })

  it('get should get item', () => {
    reset({ item: 1 })
    const item = get('item')
    expect(item).to.equal(1)
  })
})
