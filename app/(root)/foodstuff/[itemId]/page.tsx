import ProductDetailCarousel from '@/components/CustomElements/ProductDetailCarousel'
import RelatedProducts from '@/components/CustomElements/RelatedProducts'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { IoHeartOutline } from 'react-icons/io5'

const FoodStuffDetail = () => {
  return (
    <section className='w-full flex flex-col'>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="w-full h-full">
                <ProductDetailCarousel/>
            </section>
            <section className="flex flex-col mt-10">
                <div className="flex gap-2 mb-4">
                    <h1 className="text-3xl font-bold">Cabbage</h1>
                    <span className=""><Badge className='bg-green-1'>In Stock</Badge></span>
                </div>
                <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde porro quod odio aliquid aperiam amet. Consectetur facere adipisci alias sint. Eligendi aliquid tempore excepturi. Nostrum distinctio quae minima! Et, numquam.</p>
                <div className="flex justify-between mb-4">
                    <p className="text-xl font-semibold text-green-1">₵5.00</p>
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
                <section className="flex gap-4 border-t border-b py-4 mb-3">
                    <div className="flex items-center gap-4 px-2 py-2 rounded-full border">
                        <button className="rounded-full bg-gray-200 px-2 py-2">
                            <BiMinus className='size-4 md:size-6' color='#1A1A1A'/>
                        </button>
                        <p className="">1</p>
                        <button className="rounded-full bg-gray-200 px-2 py-2">
                            <BiPlus className='size-4 md:size-6' color='#1A1A1A'/>
                        </button>
                    </div>
                    <Button className='flex-1 h-full text-lg bg-green-1 hover:bg-green-800'>Add to Cart</Button>
                    <button  className='rounded-full px-auto flex justify-center items-center w-14 hover:bg-green-100'><IoHeartOutline  size={23}/></button>
                </section>
                <section className="flex justify-between items-center ">
                    <p className="text-sm font-medium"><span className='font-bold'>Category:</span> Vegetable</p>
                    <section className="flex gap-1 md:gap-3 items-center">
                        <p className="font-medium text-sm">Share :</p>
                        <button className="rounded-full px-2 py-2 hover:bg-green-1 hover:text-white">
                            <FaFacebook  className='size-4 md:size-6' />
                        </button>
                        <button className="rounded-full px-2 py-2 hover:bg-green-1 hover:text-white">
                            <FaInstagram className='size-4 md:size-6'/>
                        </button>
                        <button className="rounded-full px-2 py-2 hover:bg-green-1 hover:text-white"> 
                            <FaWhatsapp className='size-4 md:size-6'/>
                        </button>
                        <button className="rounded-full px-2 py-2 hover:bg-green-1 hover:text-white">
                            <FaTwitter className='size-4 md:size-6'/>
                        </button>
                    </section>
                </section>
            </section>
        </section>

        {/* Related Products */}
        <section>
            <h1 className="flex justify-center w-full text-xl font-semibold mb-4 mt-10">Related Products</h1>
            <RelatedProducts/>
        </section>
    </section>
  )
}

export default FoodStuffDetail