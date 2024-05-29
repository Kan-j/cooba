"use server"
import { connectToDatabase } from "../config/mongodb";
import Category from "../models/Category.model";

export async function getCategories(limit?: number) {
    try {
      // Connect to the database
      await connectToDatabase();
  
      // Define the query with an optional limit
      let query = Category.find();
      if (limit && limit > 0) {
        query = query.limit(limit);
      }
  
      // Execute the query and return the results
      const categories = await query.exec();
      return categories;
    } catch (error:any) {
      throw new Error(`Failed to fetch categories: ${error.message}`);
    }
  }