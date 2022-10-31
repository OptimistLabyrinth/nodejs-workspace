import mongoose from 'mongoose'

interface AddressType {
  _id: mongoose.Schema.Types.ObjectId
  street: string
  detail: string
}

const addressSchema = new mongoose.Schema<AddressType>({
  street: String,
  detail: String,
})

export default addressSchema

export type { AddressType }
