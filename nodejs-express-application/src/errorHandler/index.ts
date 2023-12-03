import type {
  NextFunction,
  Request,
  Response,
} from 'express'

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
): void => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(500)
  res.send(err.message)
}

export default errorHandler
