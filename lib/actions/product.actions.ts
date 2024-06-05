"use server"
import { Bounce, toast } from "react-toastify";
import { connectToDatabase } from "../config/mongodb";
import Cart from "../models/Cart.model";
import Category from "../models/Category.model";
import Package from "../models/Package.model";
import Product from "../models/Product.model";



export async function getProductsByCategory(categoryId: string, limit?: number, pageSize?: number, page?: number) {
    try {
     await connectToDatabase()
      // Set default values for page and pageSize if not provided
      const currentPage = page || 0;
      const currentSize = pageSize || 10;
  
      // Define the query for products under the given category
      let productQuery = Product.find({ category: categoryId }).populate('category');
      if (limit && limit > 0) {
        productQuery = productQuery.limit(limit);
      } else {
        productQuery = productQuery.skip(currentSize * currentPage).limit(currentSize + 1);
      }
  
      // Execute the query to get products
      const products = await productQuery.exec();
  
      // Determine if there are more products (next page) or previous page
      const isNext = products.length > currentSize;
      const isPrev = currentPage > 0;
  

      // Return products without the extra one used for pagination check
      return {
        products: isNext ? products.slice(0, -1) : products,
        isNext,
        isPrev,
        currentPage,
      };
    } catch (error: any) {
      throw new Error(`Failed to fetch products: ${error.message}`);
    }
}


export async function getProductDetails(productId: string) {
  try {
    // Connect to the database
    await connectToDatabase();

   const product = await Product.findById(productId)
   const category = await Category.findById(product.category)

    // Fetch related products from the same category
    const relatedProducts = await Product.find({
      _id: { $ne: product._id },
      category: product.category._id, // Ensure we use the correct ObjectId
    })
      .limit(4)
      .exec();

    // If fewer than 4 related products, fetch additional products from other categories
    if (relatedProducts.length < 4) {
      const additionalProducts = await Product.find({
        _id: { $ne: product._id },
        category: { $ne: product.category._id }, // Ensure we use the correct ObjectId
      })
        .limit(4 - relatedProducts.length)
        .exec();

      relatedProducts.push(...additionalProducts);
    }

    return {
      product,
      category,
      relatedProducts,
    };
  } catch (error: any) {
    throw new Error(`Failed to fetch product details: ${error.message}`);
  }
}


// CART COMES HERE

// Server to create a cart item
// export async function addToCart(userId: string, itemType: 'Product' | 'Package', itemId: string, selectedPair: { quantity: number, price: number }, pairQuantity: number) {
//   try {
//     // Connect to the database
//     await connectToDatabase();

//     // Find the product or package
//     let item;
//     if (itemType === 'Product') {
//       item = await Product.findById(itemId).exec();
//       if (!item) {
//         throw new Error('Product not found');
//       }
//     } else if (itemType === 'Package') {
//       item = await Package.findById(itemId).exec();
//       if (!item) {
//         throw new Error('Package not found');
//       }
//     }

//     // Calculate total amount for the cart item
//     const totalAmount = selectedPair.price * pairQuantity;

//     // Find or create the cart for the user
//     let cart = await Cart.findOne({ user: userId }).exec();
//     if (!cart) {
//       cart = new Cart({
//         user: userId,
//         items: [],
//         total: 0,
//       });
//     }

//     // Add the item to the cart
//     cart.items.push({
//       itemType,
//       product: itemType === 'Product' ? itemId : undefined,
//       package: itemType === 'Package' ? itemId : undefined,
//       selectedPair,
//       pairQuantity,
//       totalAmount,
//     });

//     // Update the cart total
//     cart.total += totalAmount;

//     // Save the cart
//     await cart.save();

//     console.log('Item added to cart successfully:', cart);
//   } catch (error:any) {
//     console.error('Error adding item to cart:', error.message);
//   }
// }




export async function addToCart(userId: string, itemType: 'Product' | 'Package', itemId: string, selectedPair: { quantity: number, price: number }, pairQuantity: number) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Find the product or package
    let item;
    if (itemType === 'Product') {
      item = await Product.findById(itemId).exec();
      if (!item) {
        throw new Error('Product not found');
      }
    } else if (itemType === 'Package') {
      item = await Package.findById(itemId).exec();
      if (!item) {
        throw new Error('Package not found');
      }
    }

    // Calculate total amount for the cart item
    const totalAmount = selectedPair.price * pairQuantity;

    // Find or create the cart for the user
    let cart = await Cart.findOne({ user: userId }).exec();
    if (!cart) {
      cart = new Cart({
        user: userId,
        items: [],
        total: 0,
      });
    }

    // Check if the same item with the same selected pair is already in the cart
    const existingCartItem = cart.items.find((item:any) =>
      item.itemType === itemType &&
      item[itemType.toLowerCase()]?.toString() === itemId &&
      item.selectedPair.quantity === selectedPair.quantity &&
      item.selectedPair.price === selectedPair.price
    );

    if (existingCartItem) {
      // If the item with the same selected pair exists, update its quantity and total amount
      existingCartItem.pairQuantity += pairQuantity;
      existingCartItem.totalAmount += totalAmount;
    } else {
      // If the item with the same selected pair does not exist, add the new item to the cart
      cart.items.push({
        itemType,
        product: itemType === 'Product' ? itemId : undefined,
        package: itemType === 'Package' ? itemId : undefined,
        selectedPair,
        pairQuantity,
        totalAmount,
      });
    }

    // Update the cart total
    cart.total += totalAmount;

    // Save the cart
    await cart.save();
    

    console.log('Item added to cart successfully:', cart);
  } catch (error: any) {
    console.error('Error adding item to cart:', error.message);
  }
}

export async function fetchCartItems(userId: string) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Find the cart for the user
    const cart = await Cart.findOne({ user: userId })
    .populate({
      path: 'items.product',
      model: Product
    })
    .populate({
      path: 'items.package',
      model: Package
    }).exec();
    if (!cart) {
      return [];
    }

    // Map the items to include necessary details
    const cartItems = cart.items.map((item: any) => ({
      itemType: item.itemType,
      product: item.product,
      package: item.package,
      quantity: item.pairQuantity,
      selectedPair: item.selectedPair,
      totalAmount: item.totalAmount,
    }));

    return cartItems;
  } catch (error: any) {
    console.error('Error fetching cart items:', error.message);
    return [];
  }
}