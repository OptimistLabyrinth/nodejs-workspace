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

const addDays = () => {
  const today = new Date('2400-05-25T12:34:56.000Z')
  console.log('today (before):', today)
  const copied = new Date(today)
  console.log('today (copied):', copied)

  today.setDate(today.getDate() + 10)
  console.log('today (after) :', today)
}

const handleDate = {
  setZeroSecondsZeroMilliseconds,
  setZero,
  addDays,
}

export default handleDate
