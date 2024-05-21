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
import { useRouter } from "next/navigation"



const FormSchema = z.object({
  delivery: z.enum(["asap", "fridays", "weekends"], {
    required_error: "You need to select delivery Mode",
  }),
})

export function DeliveryMethodRadioGroup() {
  const router = useRouter()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        delivery: 'asap'
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full space-y-6">
        <FormField
          control={form.control}
          name="delivery"
          render={({ field }:{field:any}) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex relative bg-gray-200 rounded-lg px-4 py-6 items-start space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="friday" />
                    </FormControl>
                    <FormLabel className="font-medium flex flex-col md:flex-row  justify-between gap-2 w-full">
                      <h1 className="">
                        <span className="me-4">Regular</span>
                        <span className="">Get your delivery on Friday</span>
                      </h1>
                      <h1 className="">24 May, 2024</h1>
                    </FormLabel>
                  </FormItem>

                  <FormItem className="flex  relative bg-gray-200 rounded-lg px-4 py-6 items-start space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="asap" />
                    </FormControl>
                    <FormLabel className="font-medium justify-between flex flex-col md:flex-row  gap-2 w-full">
                        <h1 className="">
                            <span className="me-4">Fast</span>
                            <span className="">Get your delivery as soon as possible</span>
                        </h1>
                        <h1 className="font-medium">24 May, 2024</h1>
                    </FormLabel>
                  </FormItem>

                  <FormItem className="flex relative bg-gray-200 rounded-lg px-4 py-6 items-start space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="weekends" />
                    </FormControl>
                    <FormLabel className="font-medium justify-between flex flex-col md:flex-row w-full gap-2">
                        <h1 className="">
                            <span className="me-4">Busy</span>
                            <span className="">Get your delivery on Weekend</span>
                        </h1>
                        <h1 className="">24 May -25 May</h1>
                    </FormLabel>
                  </FormItem>

                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <section className="flex flex-col md:flex-row justify-end gap-2">
            <Button type="button" variant={'outline'} onClick={()=> router.push('/checkout?step=1')} className="md:w-fit bg-gray w-full">Back</Button>
            <Button type="submit" className="md:w-fit w-full">Next</Button>
        </section>
        
      </form>
    </Form>
  )
}
