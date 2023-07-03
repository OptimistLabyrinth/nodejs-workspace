// eslint-disable-next-line @typescript-eslint/no-var-requires
const { workerData, parentPort } = require('worker_threads')

let value = 0
for (let i = 0; i < 1000000000; i++) {
  value++
}
console.log(workerData.message)
parentPort?.postMessage('OK')
