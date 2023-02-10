type EachData = {
  id: string
  data: unknown
}

export const filterArrayByProperty = () => {
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
