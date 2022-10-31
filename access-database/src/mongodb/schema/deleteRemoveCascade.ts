/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'
import { models } from '.'
import { AuthorType } from './author'
import { BookType } from './book'
import { PublisherType } from './publisher'

async function onDeleteAuthor(
  author:
    | (mongoose.Document<unknown, any, AuthorType> &
        AuthorType &
        Required<{
          _id: mongoose.Schema.Types.ObjectId
        }>)
    | undefined,
) {
  if (!author) {
    return
  }

  const { Book } = models

  await Book.updateMany(
    { authors: author._id },
    { $pull: { authors: author._id } },
  )
}

async function onDeleteBook(
  book:
    | (mongoose.Document<unknown, any, BookType> &
        BookType &
        Required<{
          _id: mongoose.Schema.Types.ObjectId
        }>)
    | undefined,
) {
  if (!book) {
    return
  }

  const { Author, Publisher } = models

  await Author.updateMany({ books: book._id }, { $pull: { books: book._id } })
  await Publisher.updateMany(
    { books: book._id },
    { $pull: { books: book._id } },
  )
}

async function onDeletePublisher(
  publisher:
    | (mongoose.Document<unknown, any, PublisherType> &
        PublisherType &
        Required<{
          _id: mongoose.Schema.Types.ObjectId
        }>)
    | undefined,
) {
  if (!publisher) {
    return
  }

  const { Book } = models

  await Book.updateMany(
    { publisher: publisher._id },
    { $pull: { publisher: publisher._id } },
  )
}

const cascadeOperations = {
  onDeleteAuthor,
  onDeleteBook,
  onDeletePublisher,
}

export default cascadeOperations
