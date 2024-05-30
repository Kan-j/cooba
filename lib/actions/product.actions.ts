"use server"
import { connectToDatabase } from "../config/mongodb";
import Category from "../models/Category.model";
import Product from "../models/Product.model";



export async function getProductsByCategory(categoryId: string, limit?: number, pageSize?: number, page?: number) {
    try {
     await connectToDatabase()
      // Set default values for page and pageSize if not provided
      const currentPage = page || 0;
      const currentSize = pageSize || 10;
  
      // Define the query for products under the given category
      let productQuery = Product.find({ category: categoryId });
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