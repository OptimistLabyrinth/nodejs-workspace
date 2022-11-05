// function Foo(...args) {
//   console.log('this:', this)
//   if (this !== window) {
//     this.args = args
//     return
//   }
//   return args;
// }

// console.log('일반 함수로 사용')
// const fooResult = Foo(1, 2, 3)
// console.log(fooResult);

// console.log('생성자 함수로 사용')
// const fooInstance = new Foo(3, 4)
// console.log(fooInstance)

// console.log('객체 메서드로 할당')
// const bar = {
//   method: Foo,
// }
// const barMethodResult = bar.method(5, 6)
// console.log(bar)
// console.log(barMethodResult)

// function a() {}
// console.dir(a)

// * ------------------------------------------------------------

// console.log('생성자 함수 대신에 ES6 클래스로 사용')
// function Foo1(...args) {
//   if (this !== window) {
//     this.args = args
//     return
//   }
//   return args
// }
// Foo1.prototype.getArgs = function () {
//   return this.args
// }
// const foo1 = new Foo1(1, 2)
// console.dir(foo1)
// for (const prop in foo1) {
//   // if (foo1.hasOwnProperty(prop)) {
//   //   console.log('    prop of foo1', prop)
//   // }
//   console.log('    prop of foo1', prop)
// }

// class Bar1 {
//   constructor(...args) {
//     if (this !== window) {
//       this.args = args
//       return
//     }
//     return args
//   }

//   getArgs() {
//     return this.args
//   }
// }
// const bar1 = new Bar1(1, 2)
// console.dir(bar1)
// for (const prop in bar1) {
//   console.log('    prop of bar1', prop)
// }

// console.dir(Foo1)
// console.dir(Bar1)

// Bar1.arguments
// Bar1()

// * ------------------------------------------------------------

// console.log('일반 함수로 사용할 때는 arrow function 사용')
// function foo2(...args) {
//   console.log(this)
// }
// const bar2 = (...args) => {
//   console.log(this)
// }

// console.dir(foo2)
// console.dir(bar2)

// new bar2()

// * ------------------------------------------------------------

// console.log('객체 메서드로 사용할 때는 메서드 축약형 사용')
// const obj1 = {
//   name: '이르 1',
//   method: function() {
//     console.log(this.name)
//   }
// }

// const obj2 = {
//   name: '이르 1',
//   method() {
//     console.log(this.name)
//   }
// }

// console.dir(obj1.method)
// console.dir(obj2.method)

// new obj2.method()

// * ------------------------------------------------------------

console.log('function 키워드를 사용하지 않을 수 없는 경우')
function* generator() {
  const arr = [1, 2, 3, 4, 5]
  for (const value of arr) {
    yield value
  }
}

const generatorInstance = generator();
console.log(generatorInstance.next().value)
console.log(generatorInstance.next().value)
console.log(generatorInstance.next().value)

console.log('객체 메서드에 generator 정의해서 사용할 때는 function 키워드가 필요하지 않다')
const generatorObject = {
  arr: [1, 2, 3, 4, 5],
  *generator2() {
    while (0 < this.arr.length) {
      yield this.arr.shift()
    }
  },
}

const generator2Instance = generatorObject.generator2()
console.log(generator2Instance.next().value)
console.log(generator2Instance.next().value)
console.log(generator2Instance.next().value)
