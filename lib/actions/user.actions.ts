"use server"
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../config/mongodb";
import User from "../models/User.model";

export async function fetchUser(clerkId: string) {
    try {
      await connectToDatabase();
  
      return await User.findOne({ clerkId: clerkId })
    } catch (error: any) {
      throw new Error(`Failed to fetch user: ${error.message}`);
    }
  }


  interface UserParams {
    clerkId: string;
    firstName: string;
    lastName: string;
    image?: string |undefined;
    path: string;
    city: string;
    region: string;
    country: string;
    phoneNumber: string;
    isStudent: boolean;
    university?: string | null;
  }
  export async function updateUser({
    clerkId,
    firstName,
    lastName,
    image,
    path,
    city,
    region,
    country,
    phoneNumber,
    isStudent,
    university = null,
  }: UserParams): Promise<void> {
    try {
        await User.findOneAndUpdate(
        { clerkId: clerkId },
        {
            firstName,
            lastName,
            profileImg: image,
            city,
            region,
            country,
            phoneNumber,
            isStudent,
            university,
            onboarded: true,
        },
        { upsert: true }
        );
    
        if (path === "/profile/edit") {
        revalidatePath(path);
        }
    } catch (error: any) {
      throw new Error(`Failed to create/update user: ${error.message}`);
    }
  }