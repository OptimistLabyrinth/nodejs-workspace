const stringFollowedByDigits = () => {
  const arr = [
    'custom_string_001',
    'custom_string_987',
    'custom_string_001 ',
    'custom_string_001_',
    'custom_string_abc',
    'custom_string_001_abc',
    'custom_string_001_987',
    'custom_string_20471231',
    '_custom_string_001',
    '_custom_string_abc',
    ' custom_string_001',
    ' custom_string_abc',
    'custom_string001',
    'custom_stringabc',
    'custom_string_',
    'custom_string',
    '',
    '001',
    '_001',
    '_',
    ' ',
  ]
  const customStr = 'custom_string'
  const regexCustomString = `^${customStr}_\\d+$`
  type CheckResultEach = {
    value: string
    check: boolean
  }
  const checkCustomResult: CheckResultEach[] = arr.map((each) => ({
    value: each,
    check: new RegExp(regexCustomString)
      .exec(each) !== null,
  }))
  console.log(checkCustomResult)

  const regexAny = '.+_\\d+$'
  const checkAnyResult: CheckResultEach[] = arr.map((each) => ({
    value: each,
    check: new RegExp(regexAny)
      .exec(each) !== null,
  }))
  console.log(checkAnyResult)

  const stringToCheck = 'anything_can_be_here_009'
  const originalTitle = stringToCheck.substring(0, stringToCheck.lastIndexOf('_'))
  console.log(originalTitle)
}

const usingRegex = { stringFollowedByDigits }

export default usingRegex
