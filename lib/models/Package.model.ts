import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the product pair within a package
interface IProductPair extends Document {
  product: mongoose.Schema.Types.ObjectId;
  selectedPair: {
    quantity: number;
    price: number;
  };
  pairQuantity: number;
  totalPrice: number;
}

// Define the interface for the package
interface IPackage extends Document {
  name: string;
  description?: string;
  products: IProductPair[];
  totalPackagePrice: number;
  creator?: mongoose.Schema.Types.ObjectId | string; // Allow creator to be ObjectId or 'admin'
}

// Define the schema for the product pair within a package
const ProductPairSchema: Schema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  selectedPair: {
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  pairQuantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

// Define the schema for the package
const PackageSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  products: {
    type: [ProductPairSchema],
    required: true,
  },
  totalPackagePrice: {
    type: Number,
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    default: 'admin',
  },
});

const Package = mongoose.models?.Package || mongoose.model<IPackage>('Package', PackageSchema);

export default Package;
