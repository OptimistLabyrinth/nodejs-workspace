import dotenv from 'dotenv'
import greeting from './greeting'
import {
  DecoratorTestClass,
  PropertyDecoratorTest,
} from './something/decorator'
import question from './utils/question'
import confusedAsyncAndNonAsync from './something/confused-async-and-non-async'
import handleArray from './something/handle-array'
import handleDate from './something/handle-date'
import handleFiles from './something/handle-files'
import handleJavascriptLogic from './something/handle-javascript-logic'
import handleMoment from './something/handle-moment'
import handleNumber from './something/handle-number'
import handleObject from './something/handle-object'
import handleString from './something/handle-string'
import testCondition from './something/test-condition'
import usingLodash from './something/using-lodash'
import usingMongoose from './something/using-mongoose'
import usingRegex from './something/using-regex'

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
  // handleArray.accessByIndex()
  // handleArray.convertArrayOfPairToMapOfKey()
  handleArray.makeArrayUnique()

  // handleDate.setZeroSecondsZeroMilliseconds()
  // handleDate.setZero()
  // handleDate.addDays()
  // handleDate.momentMultiTimezone()
  // handleDate.diffTimestampValue()

  // await handleFiles.deleteFiles()
  // await handleFiles.createFiles()
  // await handleFiles.renameFiles()

  // handleJavascriptLogic.question01()
  // handleJavascriptLogic.question02()
  // handleJavascriptLogic.question03()
  // handleJavascriptLogic.question04()
  // handleJavascriptLogic.question05()
  // handleJavascriptLogic.question06()
  // handleJavascriptLogic.question07()
  // handleJavascriptLogic.question08()

  // handleMoment.test()

  // handleNumber.numberRounding()

  // handleObject.optionalChaining()

  // handleString.substring()

  // testCondition.elementInArray()
  // testCondition.keyInObject()

  // usingLodash.parseInt()
  // usingLodash.isEmpty()
  // usingLodash.find()

  // usingMongoose.isValidObjectId()

  // usingRegex.stringFollowedByDigits()
}

main()
