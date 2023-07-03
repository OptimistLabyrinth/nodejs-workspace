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
      data: [ 1, 2, 3, 4 ],
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
      data: [ 1, 2, 3, 4 ],
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
  const target = [ 'aaa', 'bbb', '123', '456', '!!', '**' ]
  const stringToFind = '123'
  const indexRemoveStart = target.findIndex((value) => value === stringToFind)
  if (indexRemoveStart === -1) {
    throw new Error(`${stringToFind} is not in the target array`)
  }
  const removed = target.splice(indexRemoveStart, 2, '777', '888')

  console.log(JSON.stringify({ target, removed }, null, 2))
}

const handleArray = {
  filterArrayByProperty,
  splice,
}

export default handleArray
