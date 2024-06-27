"use server"
import { Bounce, toast } from "react-toastify";
import { connectToDatabase } from "../config/mongodb";
import Cart from "../models/Cart.model";
import Category from "../models/Category.model";
import Package from "../models/Package.model";
import Product from "../models/Product.model";
import { revalidatePath } from "next/cache";
import mongoose from "mongoose";



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
    }).populate('category')
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






export async function addToCart(userId: string, itemType: 'Product' | 'Package', itemId: string, selectedPair: { quantity: number, price: number }, pairQuantity: number, pathname:string) {
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
    revalidatePath(pathname)

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


export async function getProductsByCategoriesAndSearch(categories:string | string[] = "", limit = 0, pageSize = 10, page = 1, searchQuery = '') {
  try {
    await connectToDatabase();

    // Ensure the current page is at least 1
    const currentPage = page > 0 ? page : 1;
    const currentSize = pageSize;

    let categoriesArray:string[] = [];
    // Ensure categories is an array
    if (categories && typeof categories === 'string') {
      categoriesArray = categories?.split(',');
    }

    // Convert category strings to ObjectId
    const categoryObjectIds = categoriesArray.map((category:any) => new mongoose.Types.ObjectId(category));

    // Define the query for products under the given categories and search query
    let query:any = {};

    if (categories.length > 0) {
      query.category = { $in: categoryObjectIds };
    }


    if (searchQuery) {
      query.$or = [
        { name: { $regex: searchQuery, $options: 'i' } },
        { description: { $regex: searchQuery, $options: 'i' } },
      ];
    }

    let productQuery = Product.find(query).populate('category');

    // Apply pagination
    if (limit && limit > 0) {
      productQuery = productQuery.limit(limit);
    } else {
      productQuery = productQuery.skip(currentSize * (currentPage - 1)).limit(currentSize + 1);
    }

    // Execute the query to get products
    const products = await productQuery.exec();

    // Get the total count of products matching the query
    const totalProducts = await Product.countDocuments(query);
    const totalPages = Math.ceil(totalProducts / currentSize);


    // Determine if there are more products (next page) or previous page
    const isNext = products.length > currentSize;
    const isPrev = currentPage > 1;

    // Return products without the extra one used for pagination check
    return {
      products: isNext ? products.slice(0, -1) : products,
      isNext,
      isPrev,
      currentPage,
      totalPages,
      totalProducts
    };
  } catch (error:any) {
    throw new Error(`Failed to fetch products: ${error.message}`);
  }
}

export async function updateCartItem(userId: string, itemId: string, newQuantity: number, newSelectedPair: { quantity: string, price: number }, itemType: 'Product' | 'Package', pathname: string) {
  try {
    await connectToDatabase();

    const cart = await Cart.findOne({ user: userId }).exec();
    if (!cart) {
      throw new Error('Cart not found');
    }

    const cartItem = cart.items.find((item: any) =>
      item[itemType.toLowerCase()]?.toString() === itemId &&
      item.selectedPair.quantity === newSelectedPair.quantity &&
      item.selectedPair.price === newSelectedPair.price
    );

    if (!cartItem) {
      throw new Error('Cart item not found');
    }

    cartItem.pairQuantity = newQuantity;
    cartItem.totalAmount = newQuantity * newSelectedPair.price;

    // Recalculate cart total
    cart.total = cart.items.reduce((acc: number, item: any) => acc + item.totalAmount, 0);

    await cart.save();
    revalidatePath(pathname);
  } catch (error:any) {
    console.error('Error updating cart item:', error.message);
  }
}


export async function deleteCartItem(userId: string, itemId: string, selectedPair: { quantity: string, price: number }, itemType: 'Product' | 'Package', pathname: string) {
  try {
    await connectToDatabase();

    const cart = await Cart.findOne({ user: userId }).exec();
    if (!cart) {
      throw new Error('Cart not found');
    }

    cart.items = cart.items.filter((item: any) =>
      !(item[itemType.toLowerCase()]?.toString() === itemId &&
        item.selectedPair.quantity === selectedPair.quantity &&
        item.selectedPair.price === selectedPair.price)
    );

    // Recalculate cart total
    cart.total = cart.items.reduce((acc: number, item: any) => acc + item.totalAmount, 0);

    await cart.save();
    revalidatePath(pathname);
  } catch (error:any) {
    console.error('Error deleting cart item:', error.message);
  }
}