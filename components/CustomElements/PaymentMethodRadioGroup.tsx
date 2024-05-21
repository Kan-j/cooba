"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { BiPlus } from "react-icons/bi"
import { FaGreaterThan, FaLessThan } from "react-icons/fa"



const FormSchema = z.object({
  payment: z.enum(["momo", "voda", "airtel", "cash"], {
    required_error: "You need to select delivery Mode",
  }),
})

export function PaymentMethodRadioGroup() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        payment: 'momo'
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full space-y-4">
        <FormField
          control={form.control}
          name="payment"
          render={({ field }:{field:any}) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                    {/* Will loop through the options from the database because I would have to fetch the enum together with the credit card details */}
                  <FormItem className="flex relative bg-gray-200 rounded-lg px-4 py-6 items-start space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="momo" />
                    </FormControl>
                    <FormLabel className="font-medium flex flex-col md:flex-row  justify-between gap-2 w-full">
                        <h1 className="">
                            MTN Mobile Money
                        </h1>
                    </FormLabel>
                  </FormItem>

                  <FormItem className="flex  relative bg-gray-200 rounded-lg px-4 py-6 items-start space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="airtel" />
                    </FormControl>
                    <FormLabel className="font-medium justify-between flex flex-col md:flex-row  gap-2 w-full">
                        <h1 className="">
                            AirtelTigo Money
                        </h1>
                    </FormLabel>
                  </FormItem>

                  <FormItem className="flex relative bg-gray-200 rounded-lg px-4 py-6 items-start space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="voda" />
                    </FormControl>
                    <FormLabel className="font-medium justify-between flex flex-col md:flex-row w-full gap-2">
                        <h1 className="">
                            Vodafone Money
                        </h1>
                    </FormLabel>
                  </FormItem>
                  
                  <FormItem className="flex relative bg-gray-200 rounded-lg px-4 py-6 items-start space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="cash" />
                    </FormControl>
                    <FormLabel className="font-medium justify-between flex flex-col md:flex-row w-full gap-2">
                        <h1 className="">
                            Cash on delivery
                        </h1>
                    </FormLabel>
                  </FormItem>

                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    
        {/* Put Submit Button as a child prop */}
      </form>
    </Form>
  )
}
