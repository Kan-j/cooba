import mongoose, { Schema, Document } from 'mongoose';

// Interface for selected pair (price and quantity)
interface ISelectedPair {
  quantity: number;
  price: number;
}

// Interface for Cart Item
interface ICartItem extends Document {
  itemType: 'Product' | 'Package';
  product?: mongoose.Schema.Types.ObjectId;
  package?: mongoose.Schema.Types.ObjectId;
  selectedPair: ISelectedPair;
  pairQuantity: number;
  totalAmount: number;
}

// Interface for Cart
interface ICart extends Document {
  user: mongoose.Schema.Types.ObjectId;
  items: ICartItem[];
  total: number;
}

// Cart Item Schema
const CartItemSchema: Schema = new Schema({
  itemType: {
    type: String,
    required: true,
    enum: ['Product', 'Package'],
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  package: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Package',
  },
  selectedPair: {
    quantity: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    }
  },
  pairQuantity: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  }
});

// Cart Schema
const CartSchema: Schema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true,
  },
  items: {
    type: [CartItemSchema],
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

// Ensure either product or package is present in the cart item
CartItemSchema.pre('save', function (next) {
  if (!this.product && !this.package) {
    return next(new Error('Cart item must reference either a product or a package'));
  }
  next();
});

const Cart = mongoose.models?.Cart || mongoose.model<ICart>('Cart', CartSchema);

export default Cart;
