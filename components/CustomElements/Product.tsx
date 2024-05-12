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
import { Button } from '../ui/button'

const Product = () => {
  return (
    <section className='w-full'>
        <section className="border px-4 py-3 rounded-lg">
            <Image src="/tomato.png" alt="alt" className='w-full' width={200} height={200} />
            <section className="flex flex-col">
                <section className="flex justify-between items-center mb-3">
                    <section className="">
                        <h1 className="font-medium mb-1">Fresh Tomatoes</h1>
                        <p className='font-semibold text-sm'>GH₵5.00</p>
                    </section>
                    <button className='rounded-full py-3 px-3 hover:bg-green-100'>
                        <BsBag size={23} width={2} />
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