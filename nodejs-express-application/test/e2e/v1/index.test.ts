/* eslint-disable @stylistic/newline-per-chained-call */
import request from 'supertest'
import app from '../../../src/app'

describe('v1 router', () => {
  test('get', async () => {
    const response = await request.agent(app).get('/v1')
    expect(response.status).toBe(200)
    expect(response.type).toBe('application/json')
    expect(response.body).toHaveProperty('message')
    const { body: { message } } = response
    expect(message).toBe('Express + TypeScript Server')
  })
})
