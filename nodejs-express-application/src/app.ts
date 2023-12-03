import express from 'express'
import morgan from 'morgan'
import { rateLimit } from 'express-rate-limit'
import rootRouter from './routes/root'
import v1Router from './routes/v1'
import v2Router from './routes/v2'
import { createRateLimitOptions } from './middleware/rate-limit'
import errorHandler from './errorHandler'

const app = express()

// * middlewares
app.use(
  process.env.NODE_ENV === 'test' ?
    (req, res, next) => {
      next()
    } :
    morgan(':method :url :status :res[content-length] - :response-time ms'),
)
app.use(express.static('public'))

// * routers
app.get('/', rootRouter)
app.use('/v1', rateLimit(createRateLimitOptions(5 * 1000, 10)), v1Router)
app.use('/v2', rateLimit(createRateLimitOptions(5 * 1000, 20)), v2Router)
app.use(errorHandler)

export default app
