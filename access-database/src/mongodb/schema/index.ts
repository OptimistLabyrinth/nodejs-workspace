import mongoose from 'mongoose'
import addressSchema from './address'
import authorSchema from './author'
import bookSchema from './book'
import publisherSchema from './publisher'

const Address = mongoose.model('Address', addressSchema)
const Author = mongoose.model('Author', authorSchema)
const Book = mongoose.model('Book', bookSchema)
const Publisher = mongoose.model('Publisher', publisherSchema)

const models = {
  Address,
  Author,
  Book,
  Publisher,
}

export { models }
