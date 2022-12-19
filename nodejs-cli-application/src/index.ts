import dotenv from 'dotenv'
import greeting from './greeting'
import { DecoratorTestClass, PropertyDecoratorTest } from './something/decorator'
import question from './utils/question'
dotenv.config()

async function main() {
  console.log('hello world')
  // const answer = await question('네 이름이 뭐니?? ')
  // console.log('응답:', answer)
  // const greetingMessage = greeting.run(answer)
  // console.log(greetingMessage)

  const decoratorTestClass = new DecoratorTestClass()
  decoratorTestClass.method('abcd')
  const propertyDecoratorTest = new PropertyDecoratorTest()
  const prev = propertyDecoratorTest.field
  propertyDecoratorTest.field = '3'
}

main()
