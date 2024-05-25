import { z } from "zod"

export const UserValidation = z.object({
    profileImg: z.string().url().optional(),
    firstName: z.string().min(2, {
      message: "First Name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
      message: "Last Name must be at least 2 characters.",
    }),
    phoneNumber: z.string(),
    country: z.string().min(2, {
      message: "Country must be at least 2 characters.",
    }),
    region: z.string().min(2, {
      message: "Region must be at least 2 characters.",
    }),
    city: z.string().min(2, {
      message: "City must be at least 2 characters.",
    }),
    isStudent: z.boolean(),
    university: z.string().optional(),
    otherUniversity: z.string().optional(),
  });