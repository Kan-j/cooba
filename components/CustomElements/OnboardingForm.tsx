"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const formSchema = z.object({
  profileImg: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  country: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  region: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  isStudent: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  university: z.string(),
})


const OnboardingForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          firstName: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
    
    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="bg-gray-50 space-y-4 w-5/6 md:w-4/5  lg:w-5/12 rounded-lg shadow-lg px-4 md:px-8 py-6">
            <FormField
              control={form.control}
              name="profileImg"
              render={({ field }) => (
                <FormItem className="flex items-center">
                  <FormLabel className="account-form_image-label">
                        {field.value? (
                            <Image
                            src={field.value}
                            alt="profile photo"
                            width={96}
                            height={96}
                            priority
                            className="rounded-full object-contain" />
                        ): (
                            <Image
                            src="/profile.svg" 
                            alt="profile photo"
                            width={24}
                            height={24}
                            className="object-contain" />
                        )}
                    </FormLabel>
                    <FormControl className="flex-1 text-base-semibold text-gray-200">
                        <Input
                        type="file"
                        accept="image/*"
                        placeholder="Upload a photo"
                        className="account-form_image-input"
                        // onChange= {(e)=> handleImage(e, field.onChange)}
                         />
                    </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="region"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Region</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isStudent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Are you a student?</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isStudent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>If No.. Which University do you attend?</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full mt-4">Submit</Button>
          </form>
        </Form>
      )
}

export default OnboardingForm