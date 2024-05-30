import mongoose, { Schema, Document } from 'mongoose';

interface IPrice {
  quantity: string;
  price: number;
}

interface IProduct extends Document {
  name: string;
  description?: string;
  images: string[];
  prices: IPrice[];
  category: mongoose.Schema.Types.ObjectId;
  inStock: boolean;
}

const PriceSchema: Schema = new Schema({
  quantity: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  images: {
    type: [String],
    validate: [(val: string[]) => val.length <= 4, '{PATH} exceeds the limit of 4']
  },
  prices: {
    type: [
      {
        quantity: {
          type: String,
          required: true
        },
        price: {
          type: Number,
          required: true
        }
      }
    ],
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  inStock: {
    type: Boolean,
    default: true // Default value for inStock
  }
});

const Product = mongoose.models?.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
