import { mongodbMain } from './mongodb'
import { mysqlMain } from './mysql'

main()

function main() {
  if (process.env.NODE_ENV === 'development') {
    mongodbMain()
    return
  }
  mysqlMain()
}
