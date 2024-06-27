import { AddressSelectionRadioGroup } from '@/components/CustomElements/AddressSelectionRadioGroup'
import React from 'react'
import { BiPlus } from 'react-icons/bi'


const CheckoutAddress = () => {
  return (
        <section className="mt-10">
            <section className="flex w-full items-baseline justify-between mb-6">
                <h1 className="font-semibold mb-4">Select Address</h1>
                <button className=" bg-green-1 flex  px-4 py-3 justify-center items-center hover:bg-green-800 rounded-full md:rounded-lg">
                    <BiPlus className="size-5 lg:size-6" color="white"/>
                    <p className="hidden lg:inline-flex text-white">Add Address</p>
                </button>
            </section>
            
            <section className="">
                <AddressSelectionRadioGroup/>
            </section>
        </section>
  )
}

export default CheckoutAddress

