// src/actions/shippingAddressActions.ts
import mongoose from 'mongoose';
import { connectToDatabase } from '../config/mongodb';
import ShippingAddress from '../models/Shipping.model';

export async function createOrUpdateAddress(userId: string, addressData: any) {
  try {
    // Connect to the database
    await connectToDatabase();

    // If address ID is provided, update the address
    if (addressData._id) {
      const address = await ShippingAddress.findById(addressData._id).exec();
      if (!address) {
        throw new Error('Address not found');
      }

      Object.assign(address, addressData);
      await address.save();
      console.log('Address updated successfully:', address);
    } else {
      // Otherwise, create a new address
      const newAddress = new ShippingAddress({
        userId: new mongoose.Types.ObjectId(userId),
        ...addressData,
      });
      await newAddress.save();
      console.log('Address created successfully:', newAddress);
    }
  } catch (error: any) {
    console.error('Error creating or updating address:', error.message);
  }
}
