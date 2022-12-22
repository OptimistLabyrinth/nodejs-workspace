/* eslint-disable @typescript-eslint/no-non-null-assertion */
import http from 'http'
import request from 'supertest'
import axios, { AxiosError } from 'axios'
import app from '../../../src/app'

const showConsole = process.env.SHOW_CONSOLE ?? false

// eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/ban-types
const consoleDir = (message: string | Object) => showConsole ? console.dir(message) : () => {}
// eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/ban-types
const consoleError = (message: string | Object) => showConsole ? console.error(message) : () => {}

describe('rate-limit middleware', () => {
  describe('using supertest', function () {
    let testAgent: request.SuperAgentTest

    beforeAll(() => {
      testAgent = request.agent(app)
    })

    test('exceed maximum v1', async () => {
      for (let i = 0; i < 11; ++i) {
        const response = await testAgent.get('/v1')
        const { statusCode, body } = response
        if (Object.keys(body).length === 0) {
          consoleDir({ name: 'exceed maximum 1', i, statusCode, body })
          break
        }
      }
    })

    test('exceed maximum v2', async () => {
      for (let i = 0; i < 21; ++i) {
        const response = await testAgent.get('/v2')
        const { statusCode, body } = response
        if (Object.keys(body).length === 0) {
          consoleDir({ name: 'exceed maximum 2', i, statusCode, body })
          break
        }
      }
    })

    test('exceed maximum 3', async () => {
      for (let i = 0; i < 10; ++i) {
        const response = await testAgent.get('/v1')
        const { statusCode, body } = response
        consoleDir({ name: 'exceed maximum 3', statusCode, body })
      }
      const response = await testAgent.get('/v1')
      const { error } = response
      if (!error) {
        return
      }
      const { status, text } = error
      consoleError({ name: 'exceed maximum 3', status, text })
    })
  })

  describe('using axios', () => {
    const port = 5000
    let server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>

    const startServer = () => {
      app.set('port', port)
      server = http.createServer(app)
      server.listen(port)
    }

    const stopServer = () => {
      server.close()
    }

    beforeAll(() => {
      startServer()
    })
    afterAll(() => {
      stopServer()
    })

    test('exceed maximum 4', async () => {
      try {
        for (let i = 0; i < 21; ++i) {
          const response = await axios.get(`http://localhost:${port}/v1`)
          const { status, data } = response
          consoleDir({ name: 'exceed maximum 4', i, status, data })
        }
      } catch (err) {
        const { response } = err as AxiosError
        const { status, statusText, data } = response!
        consoleError({ status, statusText, data })
      }
    })

    test('exceed maximum 5', async () => {
      try {
        for (let i = 0; i < 30; ++i) {
          const response = await axios.get(`http://localhost:${port}/v2`)
          const { status, data } = response
          consoleDir({ name: 'exceed maximum 5', i, status, data })
        }
      } catch (err) {
        const { response } = err as AxiosError
        const { status, statusText, data } = response!
        consoleError({ status, statusText, data })
      }
    })
  })
})
