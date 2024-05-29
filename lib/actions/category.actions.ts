"use server"
import { getProductsByCategory } from '@/lib/actions/product.actions';
import { connectToDatabase } from "../config/mongodb";
import Category from "../models/Category.model";


export async function getCategories(limit?: number, productLimit?: number, pageSize?: number, page?: number) {
    try {
      // Connect to the database
      await connectToDatabase();
  
      // Define the query with an optional limit for categories
      let categoryQuery = Category.find();
      if (limit && limit > 0) {
        categoryQuery = categoryQuery.limit(limit);
      }
  
      // Execute the query to get categories
      const categories = await categoryQuery.exec();
  
      // Fetch products for each category
      const categoriesWithProducts = await Promise.all(
        categories.map(async (category) => {
          const { products, isNext, isPrev, currentPage } = await getProductsByCategory(category._id, productLimit, pageSize, page);
          return { ...category.toObject(), products, isNext, isPrev, currentPage };
        })
      );
  
      return categoriesWithProducts;
    } catch (error: any) {
      throw new Error(`Failed to fetch categories: ${error.message}`);
    }
  }
  
