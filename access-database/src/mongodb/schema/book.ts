import mongoose from 'mongoose'
import type { AuthorType } from './author'
import cascadeOperations from './deleteRemoveCascade'
import { PublisherType } from './publisher'

interface BookType {
  _id: mongoose.Schema.Types.ObjectId
  name: string
  authors: [mongoose.Schema.Types.ObjectId]
  publisher: mongoose.Schema.Types.ObjectId
  description: string
  createdAt: Date
  updatedAt: Date

  addAuthor(author: AuthorType): void
  removeAuthor(author: AuthorType): void
  setPublisher(publisher: PublisherType): void
}

const bookSchema = new mongoose.Schema<BookType>({
  name: {
    type: String,
    required: true,
  },
  authors: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Author',
  },
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publisher',
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
})

bookSchema.method('addAuthor', function (author: AuthorType) {
  this.authors.push(author._id)
})

bookSchema.method('removeAuthor', function (author: AuthorType) {
  if (this.authors.indexOf(author._id) === -1) {
    return
  }
  this.authors.splice(this.authors.indexOf(author._id), 1)
})

bookSchema.method('setPublisher', function (publisher: PublisherType) {
  this.publisher = publisher._id
})

bookSchema.pre('remove', async function (next) {
  await cascadeOperations.onDeleteBook(this)
  next()
})

export default bookSchema

export type { BookType }
