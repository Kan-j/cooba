import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BiMinus, BiPlus, BiTrash } from 'react-icons/bi'
import { IoHeartOutline } from 'react-icons/io5';
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'


const ShoppingCartItem = () => {
  return (
    <section className="w-full flex border gap-4 rounded-lg px-2 py-4 md:px-6 md:py-6">
        <div className="">
            <Image src="/tomato.png" alt="alt" width={200} height={400} />
        </div>
        <div className="flex flex-col w-full">
            <div className="flex gap-2 mb-4">
                <h1 className=" md:text-xl font-bold">Cabbage</h1>
                <span className="text-xs"><Badge className='bg-green-1 '>In Stock</Badge></span>
            </div>
            <div className="flex justify-between items-center mb-4">
                <p className="md:text-lg text-green-1 font-semibold">₵25.00</p>
                <section className="">
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
            </div>

            <div className='flex justify-between w-full'>
                <div className="flex items-center md:gap-4 gap-1 px-1 py-1 rounded-xl border w-fit">
                    <button className="rounded-full bg-gray-200 px-2 py-2">
                        <BiMinus className='size-3 md:size-4 lg:size-6' color='#1A1A1A'/>
                    </button>
                    <p className="">1</p>
                    <button className="rounded-full bg-gray-200 px-2 py-2">
                        <BiPlus className='size-3 md:size-4  lg:size-6' color='#1A1A1A'/>
                    </button>
                </div>
                <div className="flex items-center lg:gap-4 gap-2 justify-end ">
                    <button className="flex gap-2">
                        <IoHeartOutline size={23}/>
                        <p className="hidden lg:flex">Save</p>
                    </button>
                    |
                    <div className="flex gap-2">
                        <BiTrash size={23}/>
                        <p className="hidden  lg:flex">Delete</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShoppingCartItem