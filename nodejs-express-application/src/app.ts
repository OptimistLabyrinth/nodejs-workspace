import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import v1Router from './v1'
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

async function startServe() {
  // * middlewares
  app.use(
    morgan(':method :url :status :res[content-length] - :response-time ms'),
  )
  app.use(express.static('public'))

  // * routers
  app.get('/', (req, res) => res.sendFile('index.html'))
  app.use('/v1', v1Router)

  // * serve start
  app.listen(port)
}

startServe()
  .then(() =>
    // eslint-disable-next-line no-console
    console.log(`[server]: Server is running at https://localhost:${port}`),
  )
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e)
  })
