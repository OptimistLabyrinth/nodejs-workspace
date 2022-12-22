import request from 'supertest'
import app from '../../../src/app'

describe('index router', () => {
  test('get', async () => {
    const response = await request.agent(app).get('/')
    expect(response.status).toBe(200)
    expect(response.type).toBe('text/html')
  })
})
