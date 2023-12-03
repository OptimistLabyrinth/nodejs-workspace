import path from 'path'
import { Worker } from 'worker_threads'

export const main = async () => {
  const fire = () => 123

  const done = async () => Promise.resolve(456)

  const test1 = () => {
    const r1 = fire()
    console.log({ r1 })
    const r2 = done()
    console.log({ r2 })
  }

  const test2 = async () => {
    const r3 = await fire()
    console.log({ r3 })
    const r4 = await done()
    console.dir({ r4 })
  }

  const mainFunc = async () => {
    test1()
    await test2()
  }

  await mainFunc()
}

const parallelExecution = async () => {
  // * not working
  //
  // const logMessage = async (message: unknown) => {
  //   let value = 0
  //   for (let i = 0; i < 1000000000; i++) {
  //     value++
  //   }
  //   console.log(message)
  // }

  const workerModulePath = './src/something/confused-worker.ts'

  console.log({ workerModulePath })

  const logMessage = async (message: unknown) => new Promise((resolve, reject) => {
    const worker = new Worker(workerModulePath, { workerData: { message } })

    worker.on('message', (result) => resolve(result))
    worker.on('error', (err) => reject(err))
  })

  console.log('----- parallelExecution begins -----')

  const result = await Promise.all([
    logMessage(30),
    logMessage('a9ndv'),
    logMessage([
      1, 1, 2, 3, 5, 8, 13,
    ]),
  ])

  console.log('----- parallelExecution ends -----')

  console.log({ result })
}

const confusedAsyncAndNonAsync = {
  main,
  parallelExecution,
}

export default confusedAsyncAndNonAsync
