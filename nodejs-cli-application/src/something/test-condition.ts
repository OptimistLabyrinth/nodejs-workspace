const elementInArray = () => {
  const arr = [ 'aaa', 'bbb', 'ccc', 'ddd' ]
  const val = 'aaa'
  if (arr.includes(val)) {
    console.log(`val ${val} is in arr ${JSON.stringify(arr, null, 2)}`)
  } else {
    console.log(`val ${val} is not found in arr ${JSON.stringify(arr, null, 2)}`)
  }
}

const keyInObject = () => {
  const obj = {
    'aaa': 1,
    'bbb': 2,
    'ccc': 3,
    'ddd': 4,
  }
  const val = 'aaa'
  if (val in obj) {
    console.log(`val ${val} is in obj ${JSON.stringify(obj, null, 2)}`)
  } else {
    console.log(`val ${val} is not found in obj ${JSON.stringify(obj, null, 2)}`)
  }
}

const testCondition = {
  elementInArray,
  keyInObject,
}

export default testCondition
