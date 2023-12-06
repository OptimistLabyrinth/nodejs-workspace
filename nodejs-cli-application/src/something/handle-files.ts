/* eslint-disable security/detect-non-literal-fs-filename */
/* eslint-disable no-console */
import fs from 'fs/promises'
import path from 'path'

const deleteFiles = async (): Promise<void> => {
  const directoryName = path.resolve('example-files')
  console.log({ directoryName })
  const entries = (await fs.readdir(directoryName)).filter((entry) => !entry.startsWith('.'))
  const fileNames = entries.map((entry) => path.join(directoryName, '/', entry))
  // await Promise.all(fileNames.map((fileName) => fs.unlink(fileName)))
}

const createFiles = async (): Promise<void> => {
  const directoryName = path.resolve('example-files')
  console.log({ directoryName })
  const fileNames = [
    '001-nvkandk-01003-haha.txt',
    '002-eeeee343-dasvxcz3.txt',
    '003-3999vandncjxz-789dfsadf.txt',
  ].map((fileName) => path.join(directoryName, '/', fileName))
  console.log({ fileNames })
  // for await (const fileName of fileNames) {
  //   await fs.writeFile(fileName, '')
  // }
}

const renameFiles = async (): Promise<void> => {
  // const directoryInput = 'example-files'
  const directoryInput = '/Users/ksyoo/Desktop/functional_programming_03'
  const directoryName = path.resolve(directoryInput)
  console.log({ directoryName })
  const entries = (await fs.readdir(directoryName)).filter((entry) => !entry.startsWith('.'))
  const originalEntries = entries.map((entry) => path.join(directoryName, '/', entry))
  console.log({ originalEntries })
  let num = 42
  const delimiter = '-'
  const newEntries = entries
    .map((entry) => entry.split(delimiter))
    .map(
      (tokens) => {
        tokens[0] = `p${(++num).toString()
          .padStart(2, '0')}`
        return tokens
      })
    .map((tokens) => tokens.join(delimiter))
    .map((entry) => path.join(directoryName, '/', entry))
  console.log({ newEntries })

  // const forLoop = Array(originalEntries.length)
  //   .fill(false)
  // let i = 0
  // // eslint-disable-next-line no-underscore-dangle, @typescript-eslint/no-unused-vars
  // for await (const __ of forLoop) {
  //   const { [i]: prevEntry } = originalEntries
  //   const { [i]: newEntry } = newEntries
  //   await fs.rename(prevEntry, newEntry)
  //   ++i
  // }
}

const handleFiles = {
  deleteFiles,
  createFiles,
  renameFiles,
}

export default handleFiles
