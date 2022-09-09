import question from './utils/question'

main()

async function main() {
  console.log('hello world')
  const answer = await question('네 이름이 뭐니?? ')
  console.log('응답:', answer)
}
