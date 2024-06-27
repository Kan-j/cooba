"use client"
import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { BiMinus, BiPlus, BiSave, BiTrash } from 'react-icons/bi'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { usePathname } from 'next/navigation'
import { deleteCartItem, updateCartItem } from '@/lib/actions/product.actions'
import { Bounce, toast } from 'react-toastify'


const ShoppingCartItem = ({productName,productImages, productPrices,selectedPair, productQuantity, stockStatus, stockStatusColor, userId, itemId, itemType}: {productName: string, selectedPair:any, productImages:string[], productPrices:any, productQuantity:any, stockStatus:string, stockStatusColor:string,userId:string, itemId:any, itemType:'Product' | 'Package'}) => {
  const [currentSelectedPair, setCurrentSelectedPair] = useState(selectedPair);
  const [currentQuantity, setCurrentQuantity] = useState(productQuantity);
  const pathname = usePathname()

  const handleSelectChange = (value: string) => {
    const selected = productPrices.find((pair: any) => pair.quantity === value);
    setCurrentSelectedPair(selected);
  };

  const handleDecreaseQuantity = () => {
    if (currentQuantity > 1) {
      setCurrentQuantity(currentQuantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setCurrentQuantity(currentQuantity + 1);
  };



  const handleSave = async () => {
    try {
        await updateCartItem(userId, itemId, currentQuantity, currentSelectedPair, itemType, pathname);
        toast(`Item Updated`,{
            position: 'top-center',
            autoClose: 5000,
            theme: "light",
            transition: Bounce,
            type: "success"
        })
    } catch (error:any) {
        
    }
    
  };


  const handleDelete = async () => {
    await deleteCartItem(userId, itemId, currentSelectedPair, itemType, pathname);
    toast(`Item removed from cart`,{
        position: 'top-center',
        autoClose: 5000,
        theme: "light",
        transition: Bounce,
        type: "success"
    })
  };

  return (
    <section className="w-full flex border gap-4 rounded-lg px-2 py-4 md:px-6 md:py-6" >
        <div className="">
            <Image src={productImages[0]} alt="alt" width={200} height={400} />
        </div>
        <div className="flex flex-col w-full">
            <div className="flex gap-2 mb-4">
                <h1 className=" md:text-xl font-bold">{productName}</h1>
                <span className="text-xs"><Badge className={stockStatusColor}>{stockStatus}</Badge></span>
            </div>
            <div className="flex justify-between items-center mb-4">
                <p className="md:text-lg text-green-1 font-semibold">₵{currentSelectedPair.price}</p>
                <section>
                    <Select value={currentSelectedPair.quantity} onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={currentSelectedPair.quantity} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem key={currentSelectedPair.quantity} value={currentSelectedPair.quantity}>{currentSelectedPair.quantity}</SelectItem>
                    </SelectContent>
                    </Select>
                </section>
            </div>

            <div className='flex justify-between w-full'>
                <div className="flex items-center md:gap-4 gap-1 px-1 py-1 rounded-xl border w-fit">
                    <button className="rounded-full disabled:bg-gray-50 bg-gray-200 px-2 py-2" onClick={handleDecreaseQuantity} disabled={currentQuantity <= 1}>
                        <BiMinus className='size-3 md:size-4 lg:size-6' color='#1A1A1A'/>
                    </button>
                    <p className="">{currentQuantity}</p>
                    <button className="rounded-full bg-gray-200 px-2 py-2" onClick={handleIncreaseQuantity}>
                        <BiPlus className='size-3 md:size-4  lg:size-6' color='#1A1A1A'/>
                    </button>
                </div>
                <div className="flex items-center lg:gap-4 gap-2 justify-end ">
                    <button className="flex gap-2" onClick={handleSave}>
                        <BiSave size={23}/>
                        <p className="hidden lg:flex">Save</p>
                    </button>
                    |
                    <button className="flex gap-2"  onClick={handleDelete}>
                        <BiTrash size={23}/>
                        <p className="hidden  lg:flex">Delete</p>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShoppingCartItem