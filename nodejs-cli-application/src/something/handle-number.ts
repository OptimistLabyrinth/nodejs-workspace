const numberRounding = () => {
  const num = 3519
  const MILLISECONDS_IN_SECOND = 1000

  const divided = num / MILLISECONDS_IN_SECOND
  console.log(JSON.stringify({ divided }, null, 2))

  const decimalPlaces = 2
  const rounded = Math.round(divided * 10 ** decimalPlaces) / 10 ** decimalPlaces
  console.log(JSON.stringify({ rounded }, null, 2))
}

const handleNumber = { numberRounding }

export default handleNumber
