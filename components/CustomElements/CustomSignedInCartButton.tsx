"use client"
import React from 'react'
import { BsCart } from 'react-icons/bs'

const CustomSignedInCartButton = ({CartItems}: any) => {
    const cartItemsLength = CartItems.length
    
  return (
    <section >
        <section className="relative">
            <button className='rounded-full px-2 py-2 hover:bg-green-100'><BsCart  size={23}/></button>
            <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {cartItemsLength}
            </span>
        </section>
        
    </section>
  )
}

export default CustomSignedInCartButton