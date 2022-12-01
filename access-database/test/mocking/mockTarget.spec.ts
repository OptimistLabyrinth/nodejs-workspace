import bodyParser from 'body-parser'
import express, { NextFunction, Request, Response } from 'express'
import superTest from 'supertest'
import mockTargetFunc from './mockTarget'
import type { MutableType } from './mockTarget'

jest.mock('./mockTarget', () => (mutable: MutableType) => ({
  func1: jest.fn().mockImplementation(() => {
    mutable.b = 'mocking func1'
    return 119
  }),
  func2: jest.fn().mockImplementation(() => {
    mutable.b = 'mocking func2'
    return 9999
  }),
  authMW: jest.fn().mockImplementation(
    () => (
      req: Request,
      res: Response,
      next: NextFunction,
    ) => {
      res.locals.token = 'abcd'
      res.locals.user = {
        a: 1234,
        b: '3456',
      }
      next()
    },
  ),
  getAdmin: jest.fn().mockImplementation(async () => ({
    a: 111,
    b: '222',
    c: [ 333, '333', 'three' ],
  })),
}))

describe('test suite for mockingTarget', () => {
  describe('jest mocking', () => {
    it('1 + 1 = 2', () => {
      expect(1 + 1).toBe(2)
    })

    it('mocking func1', () => {
      const mutable = { a: 0, b: 'mocking func1', c: [] }
      const mockObject = mockTargetFunc(mutable)
      const func1Result = mockObject.func1()

      expect(func1Result).toBe(119)
      expect(mutable.b).toEqual('mocking func1')
    })

    it('mocking func2', () => {
      const mutable = { a: 0, b: 'mocking func1', c: [] }
      const mockObject = mockTargetFunc(mutable)
      const func2Result = mockObject.func2()

      expect(func2Result).toBe(9999)
      expect(mutable.b).toEqual('mocking func2')
    })

    it('mocking authMW', async () => {
      const mutable = { a: 0, b: 'mocking authMW', c: [] }
      const mockObject = mockTargetFunc(mutable)
      const authMWObject = mockObject.authMW()

      const app = express()
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({ extended: true }))
        .use(authMWObject)
        .get('/', (req, res) => {
          console.dir(res.locals)
          res.send('hello world from express app')
        })

      const response = await superTest(app)
        .get('/')
      expect(response.statusCode).toBe(200)
      expect(response.text).toMatch(/hello world/i)
    })

    it('mocking getAdmin', async () => {
      const mutable = { a: 0, b: 'mocking getAdmin', c: [] }
      const mockObject = mockTargetFunc(mutable)

      const app = express()
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({ extended: true }))
        .get('/', async (req, res) => {
          const result = await mockObject.getAdmin(req, 'admin id test', 77)
          res.send(result)
        })

      const response = await superTest(app)
        .get('/')
      const { body } = response
      expect(response.statusCode).toBe(200)
      expect(body).toHaveProperty('a')
      expect(body).toHaveProperty('b')
      expect(body).toHaveProperty('c')
      const { a, b, c } = body
      expect(a).toBe(111)
      expect(b).toBe('222')
      expect(Array.isArray(c)).toBeTruthy()
      expect(c).toContain(333)
      expect(c).toContain('333')
      expect(c).toContain('three')
    })
  })
})
