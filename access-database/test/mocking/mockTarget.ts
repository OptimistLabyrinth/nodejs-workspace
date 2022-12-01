import { NextFunction, Request, RequestHandler, Response } from 'express'

type Func1ResultType = number
type Func2ResultType = string

export type Func1Type = () => Func1ResultType
export type Func2Type = () => Func2ResultType

export type MutableType = {
  a: number,
  b: string,
  c: Array<number | string | object>
}

const mockTargetFunc: (
  mutable: MutableType,
) => {
  func1: Func1Type,
  func2: Func2Type,
  authMW: (param?: { privilege?: number }) => RequestHandler
  getAdmin: (req: Request, adminId: string, pr?: number) => Promise<Record<string, unknown>>
} = (
  mutable,
) => {
  mutable.b = 'modified string'
  console.log('inside mockTargetFunc: this should not be shown when mocked')

  return {
    func1() { return 3 },
    func2() { return '777' },
    authMW({ privilege }: { privilege?: number } = { privilege: 0 }): RequestHandler {
      return async (req: Request, res: Response, next: NextFunction) => {
        console.log('inside asyncMW of authMW: this should not be shown when mocked')
        res.locals.token = 'token test'
        res.locals.user = {
          id: 'user test id',
          name: 'user name test',
        }
        next()
      }
    },
    async getAdmin(req, adminId, pr = undefined) {
      console.log('inside getAdmin of authMW: this should not be shown when mocked')
      return { key: 'value' }
    },
  }
}

export default mockTargetFunc
