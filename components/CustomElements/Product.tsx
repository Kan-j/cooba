import Image from 'next/image'
import React from 'react'
import { BsBag } from 'react-icons/bs'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Link from 'next/link'
import { AddToCartDialog } from './AddToCartDialog'

const Product = () => {
  return (
    <section className='w-full'>
        <section className="border px-4 py-3 rounded-lg">
            <Link href={`/foodstuff/1`}>
                <Image src="/tomato.jpg" alt="alt" className='w-full object-cover aspect-auto' width={200}  height={200} />
            </Link>
            <section className="flex flex-col">
                <section className="flex justify-between items-center mb-3">
                    <Link href={`/foodstuff/1`} className="">
                        <h1 className="font-medium mb-1">Fresh Tomatoes</h1>
                        <p className='font-semibold text-sm'>GH₵5.00</p>
                    </Link>
                    <button className='rounded-full py-3 px-3 hover:bg-green-100'>
                        <AddToCartDialog>
                            <BsBag size={23} width={2} />
                        </AddToCartDialog>
                    </button>
                </section>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Quantity" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">2 pieces</SelectItem>
                        <SelectItem value="dark">3 pieces</SelectItem>
                        <SelectItem value="system">6 pieces</SelectItem>
                    </SelectContent>
                </Select>
            </section>
        </section>
    </section>
  )
}

export default Product