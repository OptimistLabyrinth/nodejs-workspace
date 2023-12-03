// eslint-disable-next-line @typescript-eslint/ban-types
const ClassDecorator = () => (target: Function): void => {
  // console.dir({
  //   target,
  //   prototypes: target.prototype,
  // })
}

const PropertyDecorator = () => (target: any, propertyName: string) => {
  console.dir({
    target,
    propertyName,
  })
  Object.defineProperty(target, propertyName, {
    get() {
      console.log(`getter for ${propertyName}`)
      return target[propertyName]
    },
    set(value) {
      console.log(`setter for ${propertyName}`)
      target[propertyName] = value
    },
  })
}

const MethodDecorator = () => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  // console.dir({
  //   target,
  //   propertyKey,
  //   descriptor,
  // })
  const original = descriptor.value
  descriptor.value = function(...args: any[]) {
    console.log('before calling original', args)
    original.apply(this, args)
    console.log('after  calling original', args)
  }
}

const ParameterDecorator = () => (target: any, propertyName: string, index: number) => {
  // console.dir({
  //   target,
  //   propertyName,
  //   index,
  // })
}

export class PropertyDecoratorTest {
  @PropertyDecorator()
  // @ts-ignore
    field: string
}

@ClassDecorator()
export class DecoratorTestClass {
  _myNumber: number
  constructor() {
    this._myNumber = 1234
  }
  @MethodDecorator()
  method(str: string) {
    console.log(`${str} 1234`)
  }
  method2(
  @ParameterDecorator()
    a: string,
    @ParameterDecorator()
    b: number,
    @ParameterDecorator()
    c: (number | string)[],
  ) {
    console.log('this is method 2: ', a, b, c)
  }
}

export const decoratorTestObject = {
  aaa() {
    console.log('aaa')
  },
  bbb() {
    console.log('bbb')
  },
}
