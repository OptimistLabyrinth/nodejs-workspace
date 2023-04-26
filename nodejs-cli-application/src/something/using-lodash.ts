import _ from 'lodash'

const parseInt = () => {
  const obj1 = {
    str: '0001234',
  }
  const value1 = _.chain(obj1).get('str').parseInt().value()
  console.log({ value1 })

  const obj2 = {
    int: 1234,
  }
  const value2 = _.chain(obj2).get('int').parseInt().value()
  console.log({ value2 })
}

const isEmpty = () => {
  const value11 = ''
  const result11 = _.isEmpty(value11)
  console.log({ result11 })

  const value12 = '123'
  const result12 = _.isEmpty(value12)
  console.log({ result12 })

  const value21 = {}
  const result21 = _.isEmpty(value21)
  console.log({ result21 })

  const value22 = { a: 'something', b: 12345 }
  const result22 = _.isEmpty(value22)
  console.log({ result22 })

  const value31 = false
  const result31 = _.isEmpty(value31)
  console.log({ result31 })

  const value32 = true
  const result32 = _.isEmpty(value32)
  console.log({ result32 })

  const value41: unknown[] = []
  const result41 = _.isEmpty(value41)
  console.log({ result41 })

  const value42: unknown[] = [ 1, '2', { value: 3 } ]
  const result42 = _.isEmpty(value42)
  console.log({ result42 })
}

const usingLodash = {
  parseInt,
  isEmpty,
}

export default usingLodash
