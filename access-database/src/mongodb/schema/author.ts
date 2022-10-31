import mongoose from 'mongoose'
import type { AddressType } from './address'
import type { BookType } from './book'
import cascadeOperations from './deleteRemoveCascade'

interface AuthorType {
  _id: mongoose.Schema.Types.ObjectId
  name: string
  age: number
  address: mongoose.Schema.Types.ObjectId
  books: [mongoose.Schema.Types.ObjectId]
  createdAt: Date

  addBook(book: BookType): void
  removeBook(book: BookType): void
  setAddress(address: AddressType): void
}

const authorSchema = new mongoose.Schema<AuthorType>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
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

authorSchema.method('addBook', function (book: BookType) {
  this.books.push(book._id)
})

authorSchema.method('removeBook', function (book: BookType) {
  if (this.books.indexOf(book._id) === -1) {
    return
  }
  this.books.splice(this.books.indexOf(book._id), 1)
})

authorSchema.method('setAddress', function (address: AddressType) {
  this.address = address._id
})

authorSchema.pre('remove', async function (next) {
  await cascadeOperations.onDeleteAuthor(this)
  next()
})

export default authorSchema

export type { AuthorType }
