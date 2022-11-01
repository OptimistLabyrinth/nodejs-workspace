import { mongodbMain } from './mongodb'
import dotenv from 'dotenv'
dotenv.config()

main()

function main() {
  mongodbMain()
}
