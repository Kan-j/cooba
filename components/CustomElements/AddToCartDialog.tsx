"use client"
import React, { useState } from 'react'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BiMinus, BiPlus } from 'react-icons/bi'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Badge } from '../ui/badge'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { IoHeartOutline } from 'react-icons/io5'
import ProductDetailsComponent from './ProductDetailsComponent'
import { usePathname, useRouter } from 'next/navigation'
import { addToCart } from '@/lib/actions/product.actions'
import { Bounce, toast } from 'react-toastify'

export function AddToCartDialog({children,currentUserId,productId,name,description,inStock, prices,categoryName}:{children: React.ReactNode,currentUserId:any, productId:any, name:any, description:any, inStock:any, prices:any, categoryName:any }) {

  const [pairQuantity, setPairQuantity] = useState(1);
  const [selectedPair, setSelectedPair] = useState(prices[0]);
  const [totalPrice, setTotalPrice] = useState(selectedPair.price);
  const pathname = usePathname()
  const router = useRouter()



  const handlePairQuantityChange = (newPairQuantity:any) => {
    if (newPairQuantity >= 1) {
      setPairQuantity(newPairQuantity);
      setTotalPrice(newPairQuantity * selectedPair.price);
    }
  };


  const handlePairChange = (newSelectedPair:any) => {
    setSelectedPair(newSelectedPair);
    setTotalPrice(pairQuantity * newSelectedPair.price);
  };


const shareOnSocialMedia = (platform:any) => {
    const productUrl = window.location.href;
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${productUrl}`;
        break;
      case 'instagram':
        shareUrl = `https://www.instagram.com/?url=${productUrl}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${productUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://x.com/intent/tweet?url=${productUrl}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank');
  };

  const onAddToCartClick = async() => {
    try {
      if(!currentUserId) return router.push('/sign-in')
        await addToCart(currentUserId, "Product", productId, selectedPair, pairQuantity, pathname)
        toast(`Item added to Cart`,{
          position: 'top-center',
          autoClose: 5000,
          theme: "light",
          transition: Bounce,
          type: "success"
       })
    } catch (error) {
      toast(`Adding to Cart Failed`,{
        position: 'top-center',
        autoClose: 5000,
        theme: "light",
        transition: Bounce,
        type: "error"
     })
    }
   
  }



    return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="xs:max-w-[320px]">
      <section className="grid grid-cols-1  gap-6 w-full">
            {/* <section className="flex flex-col mt-10">
                <div className="flex gap-2 mb-4">
                    <h1 className="text-3xl font-bold">Cabbage</h1>
                    <span className=""><Badge className='bg-green-1'>In Stock</Badge></span>
                </div>
                <div className="flex justify-between mb-4 items-center">
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
                    <p className="text-sm font-medium "><span className='font-bold '>Category:</span> Vegetable</p>
                    <section className="flex gap-1 md:gap-3 items-center">
                        <p className="font-medium text-sm hidden md:flex">Share :</p>
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
            </section> */}
        </section>
      </DialogContent>
    </Dialog>
  )
}
