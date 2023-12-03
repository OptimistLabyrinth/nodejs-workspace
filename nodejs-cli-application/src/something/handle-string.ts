const substring = () => {
  const str = 'abcd 1234 !!!!'
  const substr = str.substring('abcd '.length)

  console.log(substr)
}

const handleString = { substring }

export default handleString
