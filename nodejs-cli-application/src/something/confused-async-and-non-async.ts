export const confusedAsyncAndNonAsync = async () => {
  const fire = () => {
    return 123
  }

  const done = async () => {
    return Promise.resolve(456)
  }

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
