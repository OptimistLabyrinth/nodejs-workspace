import dotenv from 'dotenv'
import greeting from './greeting'
import { DecoratorTestClass, PropertyDecoratorTest } from './something/decorator'
import question from './utils/question'
import confusedAsyncAndNonAsync from './something/confused-async-and-non-async'
import handleArray from './something/handle-array'
import handleDate from './something/handle-date'
import handleMoment from './something/handle-moment'
import handleNumber from './something/handle-number'
import testCondition from './something/test-condition'
import usingLodash from './something/using-lodash'

dotenv.config()

async function main() {
  console.log('hello world')
  // const answer = await question('네 이름이 뭐니?? ')
  // console.log('응답:', answer)
  // const greetingMessage = greeting.run(answer)
  // console.log(greetingMessage)

  // const decoratorTestClass = new DecoratorTestClass()
  // decoratorTestClass.method('abcd')
  // const propertyDecoratorTest = new PropertyDecoratorTest()
  // const prev = propertyDecoratorTest.field
  // propertyDecoratorTest.field = '3'

  // await confusedAsyncAndNonAsync.main()
  // await confusedAsyncAndNonAsync.parallelExecution()

  // handleArray.filterArrayByProperty()
  // handleArray.splice()

  // handleDate.setZeroSecondsZeroMilliseconds()
  // handleDate.setZero()
  // handleDate.addDays()
  // handleDate.momentMultiTimezone()

  // handleMoment.test()

  // handleNumber.numberRounding()

  testCondition.elementInArray()
  testCondition.keyInObject()

  // usingLodash.parseInt()
  // usingLodash.isEmpty()
}

main()
