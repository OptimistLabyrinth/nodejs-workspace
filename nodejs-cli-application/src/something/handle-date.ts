import moment from 'moment-timezone'

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

const momentMultiTimezone = () => {
  const timezone = 'America/Phoenix'
  // const timezone = 'Asia/Seoul'
  const time01 = moment('2023-07-05T02:30:00.000Z').tz(timezone)
  const dayStart = moment(time01).startOf('date')
  const dayEnd = moment(time01).endOf('date')
  console.log({
    'time01.toString()': time01.toString(),
    'time01.toDate()': time01.toDate(),
    'dayStart.toString()': dayStart.toString(),
    'dayStart.toDate()': dayStart.toDate(),
    'dayEnd.toString()': dayEnd.toString(),
    'dayEnd.toDate()': dayEnd.toDate(),
  })
}

const handleDate = {
  setZeroSecondsZeroMilliseconds,
  setZero,
  addDays,
  momentMultiTimezone,
}

export default handleDate
