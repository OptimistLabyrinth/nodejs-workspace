// * linK: https://intspirit.medium.com/the-most-failed-javascript-interview-questions-849664e5bee

const question01 = () => {
  setTimeout(() => console.log(1), 0)

  console.log(2)

  new Promise((res) => {
    console.log(3)
    res()
  })
    .then(() => console.log(4))

  console.log(5)
}

const question02 = () => {
  function foo() {
    console.log(this)
  }

  function callFoo(fn) {
    fn()
  }

  function callObjFoo(obj) {
    obj.foo()
  }

  const obj = { foo }

  callFoo(obj.foo)
  callObjFoo(obj)
}

const question03 = () => {
  const x = 5
  const y = 5

  function Operations(op1 = x, op2 = y) {
    this.x = op1
    this.y = op2
    console.log({
      op1,
      op2,
      'this.x': this.x,
      'this.y': this.y,
    })
  }

  Operations.prototype.sum = () => {
    console.log({
      'this.x': this.x,
      'this.y': this.y,
    })
    return this.x + this.y
  }

  // Operations.prototype.sum = function () {
  //   console.log({ 'this.x': this.x, 'this.y': this.y })
  //   return this.x + this.y
  // }

  const op = new Operations(10, 20)

  console.log(op)
  console.log(op.sum())
}

const question04 = () => {
  function Operations(coef) {
    return {
      sum: (...args) => arguments[0] + coef,
      sumF(...args) {
        return arguments[0] + coef
      },
    }
  }

  const ops = Operations(0.1)

  console.log(ops.sum(1, 2, 3))
  console.log(ops.sumF(1, 2, 3))
}

const question05 = () => {
  const Num = () => {
    this.getNum = () => 10
  }

  Num.prototype.getNum = () => 20

  const num = new Num()

  console.log(num.getNum())
}

const question06 = () => {
  // eslint-disable-next-line
  'use strict'

  console.log(foo())

  let bar = 'bar'

  function foo() {
    return bar
  }

  bar = 'baz'
}

const question07 = () => {
  const func = function foo() {
    return 'hello'
  }

  console.log(typeof foo)
}

const question08 = () => {
  function foo(bar, getBar = () => bar) {
    var bar = 10
    console.log(getBar())
  }

  foo(5)
}

const handleJavascriptLogic = {
  question01,
  question02,
  question03,
  question04,
  question05,
  question06,
  question07,
  question08,
}

export default handleJavascriptLogic
