// src/models/ShippingAddress.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IShippingAddress extends Document {
  userId: mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  additionalPhoneNumber?: string;
  address: string;
  additionalInformation?: string;
  region: string;
  city: string;
  isDefault: boolean;
}

const ShippingAddressSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  additionalPhoneNumber: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  additionalInformation: {
    type: String,
  },
  region: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  isDefault: {
    type: Boolean,
    default: false,
  },
});


const ShippingAddress = mongoose.model<IShippingAddress>('ShippingAddress', ShippingAddressSchema);
export default ShippingAddress;
