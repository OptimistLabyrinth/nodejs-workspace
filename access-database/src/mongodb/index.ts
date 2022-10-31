import mongoose from 'mongoose'

function mongodbMain() {
  // eslint-disable-next-line no-console
  console.log('access mongodb')
  mongoose.connect('mongodb://127.0.0.1:27017/test', () => {
    // eslint-disable-next-line no-console
    console.log('mongodb connected')
  })
}

export { mongodbMain }
