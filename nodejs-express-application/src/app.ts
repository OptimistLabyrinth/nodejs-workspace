import express from 'express'
import morgan from 'morgan'
import errorHandler from './errorHandler'
import rootRouter from './routes/root'
import v1Router from './routes/v1'

const app = express()

// * middlewares
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.static('public'))

// * routers
app.get('/', rootRouter)
app.use('/v1', v1Router)
app.use(errorHandler)

export default app
