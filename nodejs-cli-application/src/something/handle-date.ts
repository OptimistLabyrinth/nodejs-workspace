const setZeroSecondsZeroMilliseconds = () => {
  const date1 = new Date()
  const str1 = date1.toISOString()
  console.log(`new Date()                                    -> ${str1}`)

  const date2 = new Date(date1)
  date2.setSeconds(0)
  date2.setMilliseconds(0)
  const str2 = date2.toISOString()
  console.log(`new Date() after set 0 seconds 0 milliseconds -> ${str2}`)
}

const setZero = () => {
  const today = new Date()
  console.log('today ->', today)

  const zero = new Date(0)
  console.log('zero  ->', zero)
}

const handleDate = {
  setZeroSecondsZeroMilliseconds,
  setZero,
}

export default handleDate
