import _ from 'lodash'
import { ObjectId } from 'mongodb'
import mongoose, { Types } from 'mongoose'

const isValidObjectId = () => {
  const valuesToCheck = [
    '642625fc2af994e8fe8b6aab', // * (OK) 24 자리
    // '642625fc2af994e8fe8b6aa', // ! (ERROR) 23 자리
    '642625fc2af9', // * (OK) 12자리
    Buffer.from('87654321abcd', 'ascii'), // * (OK) 12 자리
    // Buffer.from('87654321abcd87654321abcd', 'ascii'), // ! (ERROR) 24 자리
    Buffer.from('87654321abcd', 'utf-8'), // * (OK) 12 자리
    // Buffer.from('87654321abcd87654321abcd', 'utf-8'), // ! (ERROR) 24 자리
    // Buffer.from('87654321abcd', 'hex'), // ! (ERROR) 12 자리
    Buffer.from('87654321abcd87654321abcd', 'hex'), // * (OK) 24 자리
    1,
    0,
    -1,
    new Types.ObjectId('hjkl1234mnbv'),
    new Types.ObjectId('aaaabbbbcccc111122223333'),
    new Types.ObjectId('642625fc2af994e8fe8b6aab'),
    new ObjectId('zzzz9753qqqq'),
    new ObjectId('5555eeee6666ffff7777dddd'),
    new ObjectId('502625fc2af994e8fe8b6aab'),
    new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ]),
    new Uint8Array([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0xff ]),
  ]
  type EachCheckResult = { check: boolean, value: typeof valuesToCheck[number] }
  const checkResults: EachCheckResult[] = valuesToCheck.map(
    (each) => ({
      check: mongoose.Types.ObjectId.isValid(each),
      value: each,
      isString: _.isString(each),
      isArray: _.isArray(each),
      isArrayLike: _.isArrayLike(each),
      isBuffer: _.isBuffer(each),
      isInstanceOfMongodbObjectId: each instanceof ObjectId,
      isInstanceOfTypesObjectId: each instanceof Types.ObjectId,
      isInstanceOfUint8Array: each instanceof Uint8Array,
    }),
  )
  console.log(checkResults)

  const objectIds = valuesToCheck.map(
    (each) => new Types.ObjectId(each),
  )
  console.log(objectIds)
}

const usingMongoose = {
  isValidObjectId,
}

export default usingMongoose
