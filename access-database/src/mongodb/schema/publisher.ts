import mongoose from 'mongoose'
import type { AddressType } from './address'
import type { BookType } from './book'
import cascadeOperations from './deleteRemoveCascade'

interface PublisherType {
  _id: mongoose.Schema.Types.ObjectId
  name: string
  address: mongoose.Schema.Types.ObjectId
  books: [mongoose.Schema.Types.ObjectId]
  createdAt: Date

  addBook(book: BookType): void
  removeBook(book: BookType): void
  setAddress(address: AddressType): void
}

const publisherSchema = new mongoose.Schema<PublisherType>({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
  },
  books: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Book',
  },
  createdAt: {
    type: Date,
    default: new Date(),
    immutable: true,
  },
})

publisherSchema.method('addBook', function (book: BookType) {
  this.books.push(book._id)
})

publisherSchema.method('removeBook', function (book: BookType) {
  if (this.books.indexOf(book._id) === -1) {
    return
  }
  this.books.splice(this.books.indexOf(book._id), 1)
})

publisherSchema.method('setAddress', function (address: AddressType) {
  this.address = address._id
})

publisherSchema.pre('remove', async function (next) {
  await cascadeOperations.onDeletePublisher(this)
  next()
})

export default publisherSchema

export type { PublisherType }
