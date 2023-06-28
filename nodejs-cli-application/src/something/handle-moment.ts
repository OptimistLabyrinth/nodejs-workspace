import moment from 'moment-timezone'

const convertTimezoneToUtcoffset = (dateTime: moment.Moment, timezone: string) => {
  const afterTimezoneAdjusted = dateTime.tz(timezone)
  const offset = afterTimezoneAdjusted.format('Z')
  const isoString = afterTimezoneAdjusted.toISOString()
  console.log(`offset: ${offset} (${typeof offset}) -> ${isoString}`)
}

const test = () => {
  const now = moment()
  console.log(JSON.stringify({ now }, null, 2))
  const timezones = [
    'Asia/Seoul',
    'America/Los_Angeles',
    'Australia/Sydney',
  ]
  timezones.forEach((each) => convertTimezoneToUtcoffset(now, each))
}

const handleMoment = {
  test,
}

export default handleMoment
