"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { BsBag } from 'react-icons/bs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

const SingleProductDescriptionItem = ({productId, productName, productPricesList}:any) => {
  const [selectedPair, setSelectedPair] = useState(productPricesList[0]);
  
  const handlePairChange = (newSelectedPair:any) => {
    setSelectedPair(newSelectedPair);
  };

  return (
    <section className="flex flex-col">
        <section className="flex justify-between items-center mb-3">
            <Link href={`/foodstuff/${productId}`} className="">
                <h1 className="font-medium mb-1">{productName}</h1>
                <p className='font-semibold text-sm'>GH₵{selectedPair.price}</p>
            </Link>
            <Link  href={`/foodstuff/${productId}`} className='rounded-full py-3 px-3 hover:bg-green-100'>
                <BsBag size={23} width={2} />
            </Link>
        </section>
        <Select  value={selectedPair.quantity} onValueChange={(e)=>{
            const selectedPack = productPricesList.find((pack:any)=> pack.quantity == e)
            handlePairChange(selectedPack)
        }}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Quantity" />
            </SelectTrigger>
            <SelectContent>
            {productPricesList.map(((pair:any) => (
                <SelectItem key={pair.quantity} value={String(pair.quantity)}>
                {pair.quantity}
                </SelectItem>
            )))}
            </SelectContent>
        </Select>
    </section>
  )
}

export default SingleProductDescriptionItem