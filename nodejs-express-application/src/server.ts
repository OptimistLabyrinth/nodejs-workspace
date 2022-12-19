import http from 'http'
import dotenv from 'dotenv'
import app from './app'
dotenv.config()

const port = process.env.PORT || 3000

export async function startServer() {
  app.set('port', port)
  const server = http.createServer(app)
  server.listen(port)
}

startServer()
  .then(() => console.log(`[server]: Server is running at https://localhost:${port}`))
  .catch((e) => console.error(e))
