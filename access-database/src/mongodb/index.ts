/* eslint-disable no-console */
import mongoose from 'mongoose'
import { models } from './schema'
import cascadeOperations from './schema/deleteRemoveCascade'

function mongodbMain() {
  try {
    console.log('access mongodb')
    mongoose.connect('mongodb://127.0.0.1:27017/test', () => {
      console.log('mongodb connected')
    })
    const connection = mongoose.connection
    connection.on('open', async () => {
      const collections = await connection.db?.listCollections().toArray()
      const dropCollectionRequests = collections.map((collection) => {
        console.log('collection name:', collection.name)
        return connection.db.dropCollection(collection.name)
      })
      await Promise.all(dropCollectionRequests)

      mongooseTest()
    })
  } catch (err) {
    console.error(err)
  }
}

async function mongooseTest() {
  const { Address, Author, Book, Publisher } = models

  console.log('----- ----- ----- ----- ----- ----- ----- ----- ----- -----')
  console.log('          < Create Documents >')
  const book1 = new Book({
    name: 'Harry Potter',
    description: 'harry potter story',
  })
  console.log('book1:', book1)

  const book2 = new Book({
    name: 'Twilight',
    description: 'twilight story',
  })
  console.log('book2:', book2)

  const book3 = new Book({
    name: 'The Little Women',
    description: 'the little women story',
  })
  console.log('book3:', book3)

  const author1 = new Author({
    name: 'J. K. Rowling',
    age: 46,
  })
  console.log('author1:', author1)

  const address1 = new Address({
    street: 'street address 1',
    detail: 'detail address 1',
  })

  const publisher1 = new Publisher({
    name: 'Peterson',
  })
  console.log('publisher1:', publisher1)

  const address2 = new Address({
    street: 'street address 2',
    detail: 'detail address 2',
  })

  console.log('----- ----- ----- ----- ----- ----- ----- ----- ----- -----')
  console.log('          < Save Documents >')

  author1.setAddress(address1)
  author1.addBook(book1)
  author1.addBook(book2)
  author1.addBook(book3)
  book1.addAuthor(author1)
  book2.addAuthor(author1)
  book3.addAuthor(author1)
  publisher1.setAddress(address2)
  publisher1.addBook(book1)
  publisher1.addBook(book2)
  publisher1.addBook(book3)
  book1.setPublisher(publisher1)
  book2.setPublisher(publisher1)
  book3.setPublisher(publisher1)

  await address1.save()
  await address2.save()
  const savedBook1 = await book1.save()
  const savedBook2 = await book2.save()
  const savedBook3 = await book3.save()
  const savedAuthor1 = await author1.save()
  const savedPublisher1 = await publisher1.save()

  console.log('savedBook1:', await savedBook1.populate('authors'))
  console.log('savedBook2:', await savedBook2.populate('authors'))
  console.log('savedBook3:', await savedBook3.populate('authors'))
  console.log(
    'savedAuthor1:',
    await (await savedAuthor1.populate('address')).populate('books'),
  )
  console.log(
    'savedPublisher1:',
    await (await savedPublisher1.populate('address')).populate('books'),
  )

  console.log('----- ----- ----- ----- ----- ----- ----- ----- ----- -----')
  console.log('          < Find Documents >')

  const foundBook1 = await Book.find()
    .where({ name: { $regex: /harry/i } })
    .select({ _id: 0, name: 1, authors: 1, description: 1, publisher: 1 })
    .populate({
      path: 'authors',
      select: { _id: 0, name: 1, age: 1, address: 1, books: 1 },
      populate: [
        {
          path: 'books',
          select: { _id: 0, name: 1, authors: 1, description: 1, publisher: 1 },
          populate: [
            {
              path: 'authors',
              select: { _id: 0, name: 1, age: 1, address: 1 },
            },
            {
              path: 'publisher',
              select: { _id: 0, name: 1, address: 1 },
              populate: {
                path: 'address',
                select: { _id: 0, street: 1, detail: 1 },
              },
            },
          ],
        },
        {
          path: 'address',
          select: { _id: 0, street: 1, detail: 1 },
        },
      ],
    })
    .populate({
      path: 'publisher',
      select: { _id: 0, name: 1, address: 1 },
      populate: {
        path: 'address',
        select: { _id: 0, street: 1, detail: 1 },
      },
    })
  const foundByIdBook2 = await Book.findById(savedBook2._id)
  const foundAuthor1 = await Author.find().limit(1)
  const notFoundPublisher1 = await Publisher.find().where({
    address: address1._id,
  })
  const foundPublisher1 = await Publisher.find({ address: address2._id })

  console.log('foundBook1 (stringify):', JSON.stringify(foundBook1, null, 2))
  console.log('foundBook1 (object):', foundBook1)
  console.log(
    'foundByIdBook2 (stringify):',
    JSON.stringify(foundByIdBook2, null, 2),
  )
  console.log('foundByIdBook2 (object):', foundByIdBook2?.toJSON())
  console.log(
    'foundByIdBook2.authors[0] (stringify):',
    JSON.stringify(foundByIdBook2?.authors?.[0], null, 2),
  )
  console.log(
    'foundByIdBook2.authors[0] (object):',
    foundByIdBook2?.authors?.[0],
  )
  console.log('foundAuthor1:', foundAuthor1)
  console.log('notFoundPublisher1:', notFoundPublisher1)
  console.log('foundPublisher1:', foundPublisher1)

  console.log('----- ----- ----- ----- ----- ----- ----- ----- ----- -----')
  console.log('          < Delete Documents >')

  const foundToDeleteBook1 = await Book.findById(book1._id)
  const deletedBook1 = await foundToDeleteBook1?.remove()
  // await cascadeOperations.onDeleteBook(deletedBook1)

  const afterDeleteAddress1Author1 = await Author.findById(author1._id)
  const afterDeleteAddress2Publisher = await Publisher.findById(publisher1._id)

  console.log('deletedBook1:', deletedBook1)
  console.log('afterDeleteAddress1Author1:', afterDeleteAddress1Author1)
  console.log('afterDeleteAddress2Publisher:', afterDeleteAddress2Publisher)

  console.log('----- ----- ----- ----- ----- ----- ----- ----- ----- -----')
}

export { mongodbMain }
