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

const diffTimestampValue = () => {
  const moment01 = moment()
  const date02 = new Date(moment01.toDate())
  const moment02 = moment(moment01.unix() * 1000)

  console.log({
    moment01_____________: moment01.toDate(),
    moment01Unix_________: moment01.unix(),
    moment01Value________: moment01.valueOf(),
    moment01Millisecond__: moment01.millisecond(),
    moment01Milliseconds_: moment01.milliseconds(),
    date02_______________: date02,
    date02Time___________: date02.getTime(),
    date02Value__________: date02.valueOf(),
    moment02_____________: moment02.toDate(),
    moment02Unix_________: moment02.unix(),
  })

  const num = 4001
  const str = 'abc777'
  const bigInt = BigInt(1234)
  const arr = [ 1, 'b', { a: 3 } ]
  const obj = { str: 'string', num: 'number' }

  console.log({
    num: num.valueOf(),
    str: str.valueOf(),
    bigInt: bigInt.valueOf(),
    arr: arr.valueOf(),
    obj: obj.valueOf(),
  })
}

const handleDate = {
  setZeroSecondsZeroMilliseconds,
  setZero,
  addDays,
  momentMultiTimezone,
  diffTimestampValue,
}

export default handleDate
