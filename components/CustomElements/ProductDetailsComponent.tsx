"use client"
import React, { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { Button } from '../ui/button'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { IoHeartOutline } from 'react-icons/io5'

const ProductDetailsComponent = ({productId,name,description,inStock, prices,categoryName}:any) => {
  const [pairQuantity, setPairQuantity] = useState(1);
  const [selectedPair, setSelectedPair] = useState(prices[0]);
  const [totalPrice, setTotalPrice] = useState(selectedPair.price);


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


  return (
    <section className="flex flex-col mt-10">
                <div className="flex gap-2 mb-4">
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <span className=""><Badge className={inStock? 'bg-green-1': 'bg-red-700'}>{inStock ? 'In Stock': 'Out of stock'}</Badge></span>
                </div>
                <p className="text-gray-500 mb-6">{description}</p>
                <div className="flex justify-between mb-4">
                    <p className="text-xl font-semibold text-green-1">₵{selectedPair.price.toFixed(2)}</p>
                    <section className="">
                        <Select  value={selectedPair.quantity} onValueChange={(e)=>{
                            const selectedPack = prices.find((pack:any)=> pack.quantity == e)
                            handlePairChange(selectedPack)
                        }}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Quantity" />
                            </SelectTrigger>
                            <SelectContent>
                            {prices.map(((pair:any) => (
                                <SelectItem key={pair.quantity} value={String(pair.quantity)}>
                                {pair.quantity}
                                </SelectItem>
                            )))}
                            </SelectContent>
                        </Select>
                    </section>
                    
                </div>
                <section className="flex gap-4 border-t border-b py-4 mb-3">
                    <div className="flex items-center gap-4 px-2 py-2 rounded-full border">
                        <button className="rounded-full disabled:bg-gray-50 bg-gray-200 px-2 py-2" 
                         onClick={() => handlePairQuantityChange(pairQuantity - 1)}
                        disabled={pairQuantity <= 1}>
                            <BiMinus className='size-4 md:size-6' color='#1A1A1A'/>
                        </button>
                        <p className="">{pairQuantity}</p>
                        <button className="rounded-full bg-gray-200 px-2 py-2">
                            <BiPlus className='size-4 md:size-6' color='#1A1A1A'  
                            onClick={() => handlePairQuantityChange(pairQuantity + 1)}/>
                        </button>
                    </div>
                    <Button className='flex-1 h-full text-lg bg-green-1 hover:bg-green-800'>Add to Cart</Button>
                    <button  className='rounded-full px-auto flex justify-center items-center w-14 hover:bg-green-100'><IoHeartOutline  size={23}/></button>
                </section>
                <section className="flex justify-between items-center ">
                    <p className="text-sm font-medium "><span className='font-bold '>Category:</span> {categoryName}</p>
                    <section className="flex gap-1 md:gap-3 items-center">
                        <p className="font-medium text-sm hidden md:flex">Share :</p>
                        <button className="rounded-full px-2 py-2 hover:bg-green-1 hover:text-white" onClick={() => shareOnSocialMedia('facebook')}>
                            <FaFacebook  className='size-4 md:size-6' />
                        </button>
                        <button className="rounded-full px-2 py-2 hover:bg-green-1 hover:text-white" onClick={() => shareOnSocialMedia('instagram')}>
                            <FaInstagram className='size-4 md:size-6'/>
                        </button>
                        <button className="rounded-full px-2 py-2 hover:bg-green-1 hover:text-white" onClick={() => shareOnSocialMedia('whatsapp')}> 
                            <FaWhatsapp className='size-4 md:size-6'/>
                        </button>
                        <button className="rounded-full px-2 py-2 hover:bg-green-1 hover:text-white" onClick={() => shareOnSocialMedia('twitter')}>
                            <FaTwitter className='size-4 md:size-6'/>
                        </button>
                    </section>
                </section>
            </section>
  )
}

export default ProductDetailsComponent