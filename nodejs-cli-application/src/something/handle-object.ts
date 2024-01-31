import _ from 'lodash'

const optionalChaining = (): void => {
  type MyObject = {
    num01?: number
    str01?: string
    nullV?: null
    print?: () => string
    functionIncluded?: {
      today?: Date
      message?: string
      print?: () => () => string
    }
  }

  const myObject01: MyObject = {
    num01: 1234,
    // str01: 'abcd',
    nullV: null,
    print(): string {
      return `num01 = ${this.num01 ?? '?'}, str01 = ${this.str01 ?? '?'}, nullV = ${this.nullV === undefined ? '?' : this.nullV}`
    },
    functionIncluded: {
      // today: new Date(),
      // message: 'happy birthday',
      print(): () => string {
        return () => `today: ${this.today?.toJSON() ?? '???'} ... message: ${this.message ?? '???'}`
      },
    },
  }

  const result = {
    num01: myObject01.num01,
    str01: myObject01.str01,
    nullV: myObject01.nullV,
    // ..._.pick(myObject01, [ 'num01', 'str01', 'nullV' ]),
    printedString: myObject01.print?.(),
    functionIncluded: myObject01.functionIncluded &&
    {
      today: myObject01.functionIncluded.today,
      message: myObject01.functionIncluded.message,
      // ..._.pick(myObject01.functionIncluded, [ 'today', 'message' ]),
      printFunction: myObject01.functionIncluded.print?.(),
      printedMessage: myObject01.functionIncluded.print?.()(),
    },
  }

  console.log('result                         :', result)
  console.log('JSON.stringify(result, null, 2):', JSON.stringify(result, null, 2))
}

const spreadNestedObject = (): void => {
  const obj = {
    a: 1,
    b: 'two',
    c: {
      nice: 'work',
      good: 'job',
      grade: 99,
    },
  }
  const spreadObj = { ...obj }

  console.log(JSON.stringify({
    obj,
    spreadObj,
  }, null, 2))

  spreadObj.a = 91
  spreadObj.c.nice = 'well done'

  console.log(JSON.stringify({
    obj,
    spreadObj,
  }, null, 2))

  const deepClonedObj = _.cloneDeep(spreadObj)

  deepClonedObj.b = 'hahah'
  deepClonedObj.c.good = 'idea, I like that!'

  console.log(JSON.stringify({
    spreadObj,
    deepClonedObj,
  }, null, 2))
}

const handleObject = {
  optionalChaining,
  spreadNestedObject,
}

export default handleObject
