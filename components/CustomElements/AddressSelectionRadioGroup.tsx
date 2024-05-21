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
import { FaPencilAlt } from "react-icons/fa"
import {  BiTrash } from "react-icons/bi"


const FormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
})

export function AddressSelectionRadioGroup() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: 'all'
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
          name="type"
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
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="font-medium flex flex-col gap-2 w-4/5">
                      {/* Limit the length of the name */}
                      <h1 className="font-semibold mb-1 leading-5">Henry Kwesi </h1>
                      <h1 className="leading-5">Madina, Accra</h1>
                      <h1 className="leading-5">Zongo Junction</h1>
                      <h1 className="leading-5">0541748034</h1>
                    </FormLabel>
                    <section className="absolute flex gap-4 right-6 ">
                      <button className=""  onClick={()=>{console.log("Edit")}}>
                        <FaPencilAlt className="size-4 md:size-5"/>
                      </button>
                      <button onClick={()=>{console.log("Delete")}}>
                        <BiTrash className="size-4 md:size-5"/>
                      </button>
                    </section>
                  </FormItem>

                  <FormItem className="flex relative bg-gray-200 rounded-lg px-4 py-6 items-start space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="font-medium flex flex-col gap-2">
                      <h1 className="font-semibold mb-1 leading-5">Kwasi Addo Nyarko</h1>
                      <h1 className="leading-5">Madina, Accra</h1>
                      <h1 className="leading-5">Zongo Junction</h1>
                      <h1 className="leading-5">0541748034</h1>
                    </FormLabel>
                    <section className="absolute flex gap-4 right-6 ">
                      <button className=""  onClick={()=>{console.log("Edit")}}>
                        <FaPencilAlt className="size-4 md:size-5"/>
                      </button>
                      <button onClick={()=>{console.log("Delete")}}>
                        <BiTrash className="size-4 md:size-5"/>
                      </button>
                    </section>
                  </FormItem>

                  <FormItem className="flex relative bg-gray-200 rounded-lg px-4 py-6 items-start space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-medium flex flex-col gap-2">
                      <h1 className="font-semibold mb-1 leading-5">Kwasi Addo Nyarko</h1>
                      <h1 className="leading-5">Madina, Accra</h1>
                      <h1 className="leading-5">Zongo Junction</h1>
                      <h1 className="leading-5">0541748034</h1>
                    </FormLabel>
                    <section className="absolute flex gap-4 right-6 ">
                      <button className=""  onClick={()=>{console.log("Edit")}}>
                        <FaPencilAlt className="size-4 md:size-5"/>
                      </button>
                      <button onClick={()=>{console.log("Delete")}}>
                        <BiTrash className="size-4 md:size-5"/>
                      </button>
                    </section>
                  </FormItem>

                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <section className="flex justify-end">
            <Button type="submit" className="md:w-fit w-full">Next</Button>
        </section>
        
      </form>
    </Form>
  )
}
