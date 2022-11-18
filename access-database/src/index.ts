import dotenv from 'dotenv'
import { mongodbMain } from './mongodb'
dotenv.config()

main()

function main() {
  mongodbMain()
}
