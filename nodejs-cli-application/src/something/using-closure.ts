const getSet = () => {
  const objClosure = () => {
    let obj: {
      a: number
      b: string
      c: (number | string)[]
    } | undefined

    return {
      set(params: {
        a: number
        b: string
      }) {
        const {
          a, b,
        } = params
        obj = {
          a,
          b,
          c: [a, b],
        }
      },
      get() {
        return obj
      },
    }
  }

  const a = 11
  const b = 'hello'
  const obj = objClosure()
  obj.set({
    a,
    b,
  })
  const result = obj.get()

  console.log({ result })
}

const usingClosure = { getSet }

export default usingClosure
