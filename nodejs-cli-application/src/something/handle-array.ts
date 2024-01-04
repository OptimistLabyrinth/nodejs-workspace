import _ from 'lodash'

type EachData = {
  id: string
  data: unknown
}

const filterArrayByProperty = () => {
  const previousData: EachData[] = [
    {
      id: 'key-01',
      data: 'haha',
    },
    {
      id: 'key-02',
      data: 1234,
    },
    {
      id: 'key-03',
      data: [
        1, 2, 3, 4,
      ],
    },
    {
      id: 'key-04',
      data: { message: 'what to do' },
    },
    {
      id: 'key-05',
      data: 5,
    },
  ]
  const nextData: EachData[] = [
    {
      id: 'key-01',
      data: 'haha',
    },
    {
      id: 'key-03',
      data: [
        1, 2, 3, 4,
      ],
    },
    {
      id: 'key-04',
      data: { message: 'what to do' },
    },
    {
      id: 'key-06',
      data: 'haha',
    },
    {
      id: 'key-07',
      data: 'haha',
    },
    {
      id: 'key-08',
      data: 'haha',
    },
  ]
  const dataToRemove = previousData
    .filter((prev) => !nextData.find((each) => each.id === prev.id))
    .map((x) => x.id)
  console.dir(dataToRemove)
}

const splice = () => {
  const target = [
    'aaa', 'bbb', '123', '456', '!!', '**',
  ]
  const stringToFind = '123'
  const indexRemoveStart = target.findIndex((value) => value === stringToFind)
  if (indexRemoveStart === -1) {
    throw new Error(`${stringToFind} is not in the target array`)
  }
  const removed = target.splice(indexRemoveStart, 2, '777', '888')

  console.log(JSON.stringify({
    target,
    removed,
  }, null, 2))
}

const accessByIndex = () => {
  type Element = {
    key: string
    value: number
  }
  const arr1: [Element] = [
    {
      key: '',
      value: 1,
    },
  ]
  const arr2: Element[] = []

  console.log(arr1[0].value)
  // console.log(arr2[0].value) // ! TypeError: Cannot read properties of undefined (reading 'value')
  console.log(arr2[0]?.value)
  console.log(arr2[0]?.value ?? 0)
}

const arrayAsMap = <Key, Value>(
  arr: {
    key: Key
    value: Value
  }[],
): Map<Key, Set<Value>> => arr.reduce((acc, current) => {
  if (!acc.get(current.key)) {
    acc.set(current.key, new Set<Value>())
  }
  acc.get(current.key)
    ?.add(current.value)
  return acc
}, new Map<Key, Set<Value>>())

const convertArrayOfPairToMapOfKey = () => {
  const arr: {
    key: string
    value: string
  }[] = [
    {
      key: '1234',
      value: 'ha ha ha',
    },
    {
      key: '1234',
      value: 'what is your name',
    },
    {
      key: '1234',
      value: 'personal message',
    },
    {
      key: '1234',
      value: 'maybe having fun ',
    },
    {
      key: '2345',
      value: '!!!',
    },
    {
      key: '2345',
      value: '....',
    },
    {
      key: '2345',
      value: '""""',
    },
    {
      key: '2345',
      value: '~~~~',
    },
  ]
  console.log(arrayAsMap(arr))
}

const makeArrayUnique = () => {
  const strings = [
    '1', '22', 'xx', 'bbq', 'right',
    '1', '22', '333', '!!', 'left',
  ]
  const stringsUnique = _.uniq(strings)
  console.log('stringsUnique', stringsUnique)

  type Key = {
    key: number
    value: number
  }
  const pairs: Key[] = [
    {
      key: 1,
      value: 1,
    },
    {
      key: 2,
      value: 2,
    },
    {
      key: 3,
      value: 1,
    },
    {
      key: 4,
      value: 2,
    },
    {
      key: 5,
      value: 3,
    },
    {
      key: 6,
      value: 999,
    },
  ]
  const pairsUnique = _.uniqBy(pairs, 'value')
  console.log('pairsUnique', pairsUnique)

  type Each = {
    id: number
    title: string
  }
  const objects: Each[] = [
    {
      id: 1,
      title: 'joyful day',
    },
    {
      id: 2,
      title: 'gloomy sunday',
    },
    {
      id: 3,
      title: 'payment due date',
    },
    {
      id: 1,
      title: 'joyful day',
    },
    {
      id: 2,
      title: 'gloomy sunday',
    },
  ]
  const objectsUnique = _.uniqWith(
    objects,
    (x, y) => x.id === y.id && x.title === y.title,
  )
  console.log('objectsUnique', objectsUnique)
}

const handleArray = {
  filterArrayByProperty,
  splice,
  accessByIndex,
  convertArrayOfPairToMapOfKey,
  makeArrayUnique,
}

export default handleArray
