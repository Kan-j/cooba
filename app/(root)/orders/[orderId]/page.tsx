import CustomBreadCrumbs from '@/components/CustomElements/CustomBreadCrumbs'
import { PaymentMethodRadioGroup } from '@/components/CustomElements/PaymentMethodRadioGroup'
import SummaryProductItem from '@/components/CustomElements/SummaryProductItem'
import { Button } from '@/components/ui/button'
import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { FaTruck } from 'react-icons/fa'
import { IoCard, IoLocation } from 'react-icons/io5'

const OrderDetailsPage = () => {
  return (
    <section className="w-full">
        <section className='w-full flex flex-col'>
        <CustomBreadCrumbs/>
        <section className="flex flex-col gap-6">
            <h1 className='font-bold text-xl '>Order Details</h1>
            
            <section className=" w-full">
                <section className="grid grid-cols-3 gap-6 w-full">
                <section className="col-span-3 md:col-span-2 rounded-lg shadow-lg h-fit">
                    <section className="w-full px-4 md:px-6">
                        
                            <section className="mt-8 pb-4 ">
                                <h1 className="font-semibold mb-2">Order Details</h1>
                                <p className="font-semibold text-gray-600">Order no. #1716240660</p>
                                <p className="text-gray-500">4 items</p>
                                <p className="text-gray-500">Placed on 20/05/2024 09:31 pm</p>
                                <p className="mt-2 text-gray-600">Order Status: <span className="font-bold">Processing</span></p>
                            </section>

                            <section className="flex py-2 flex-col gap-4">
                                <SummaryProductItem/>
                                <SummaryProductItem/>
                                <SummaryProductItem/>
                                <SummaryProductItem/>
                            </section>
                            <section className="flex justify-between mt-2">
                                <h1 className="">Subtotal</h1>
                                <h1 className="">GH₵ 60.00</h1>
                            </section>
                            <div className="flex justify-between text-gray-500 mt-2">
                                <p className="font-medium">Delivery</p>
                                <p className="font-medium">GH₵10.00</p>
                            </div>
                            <div className="flex justify-between text-gray-500 mt-2">
                                <p className="">Discount</p>
                                <p className="">GH₵10.00</p>
                            </div>
                            <div className="flex justify-between text-gray-500 mt-2">
                                <p className="">Taxes</p>
                                <p className="">GH₵10.00</p>
                            </div>
                            <section className="border-t mt-4 pt-3 pb- 3 mb-4 ">
                                <div className="flex justify-between text-gray-800 mb-3 font-bold">
                                    <p className="">Total</p>
                                    <p className="">GH₵10.00</p>
                                </div>
                            </section>
                        </section>
                    </section>
                    
                    <section className="col-span-3 md:col-span-1 flex flex-col ">
                        <section className="flex flex-col rounded-lg shadow-lg px-4 md:px-8 py-6">
                            <h1 className=" border-b pt-2 pb-4 font-semibold">Delivery Information</h1>
                            <h3 className="pt-3 font-medium">Delivery Method</h3>
                            <p className="text-gray-500 text-sm leading-6">Regular </p>
                            <p className="text-gray-500 text-sm leading-6">Get your delivery as soon as possible</p>
                            <p className="text-gray-500 text-sm leading-6">24th May, 2024</p>
                            
                            <h3 className="mt-6 font-medium">Shipment</h3>
                            <p className=" text-gray-500 text-sm leading-6">Henry Kwesi Amos Benjamin </p>
                            <p className="leading-6 text-gray-500 text-sm">Madina, Accra</p>
                            <h1 className="leading-6 text-gray-500 text-sm">Zongo Junction</h1>
                            <h1 className="leading-6 text-gray-500 text-sm">0541748034</h1>
                        </section>
                        
                        <section className="flex flex-col rounded-lg shadow-lg px-8 py-6">
                            <section className="flex w-full items-baseline justify-between mb-4">
                                <h1 className="font-semibold border-b pt-2 pb-4">Payment Method</h1>
                            </section>
                                <section className="flex flex-col ">
                                    <p className="font-medium">Payment Mode:</p>
                                    <p className="text-gray-500">MTN Mobile Money</p>
                                </section>
                                <section className="flex flex-col mt-4">
                                    <p className="font-medium">Status :</p>
                                    <p className="text-orange-600 ">Pending</p>
                                </section>
                        </section>
                    </section>

                    
                </section>
            </section>

            
        </section>
    </section>
    </section>
  )
}

export default OrderDetailsPage