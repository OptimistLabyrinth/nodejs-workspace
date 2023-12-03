import moment from 'moment-timezone'

const convertTimezoneToUtcoffset = (dateTime: moment.Moment, timezone: string) => {
  const afterTimezoneAdjusted = dateTime.tz(timezone)
  const offset = afterTimezoneAdjusted.format('Z')
  const isoString = afterTimezoneAdjusted.toISOString()

  const offsetHead = offset.split(':', 1)[0]

  console.log(`offset: ${offset} (${typeof offset}) -> ${isoString}`)
  console.log(`    offset head: ${offsetHead}`)
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

  const specificDateTime = moment('2023-06-27T15:00:00.000+09:00')
  const specificIsoString = specificDateTime.toISOString()
  console.log(`specificIsoString: ${specificIsoString}`)
}

const handleMoment = { test }

export default handleMoment
