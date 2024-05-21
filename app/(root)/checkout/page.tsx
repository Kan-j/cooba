import CustomBreadCrumbs from "@/components/CustomElements/CustomBreadCrumbs"
import { IoCard, IoLocation } from "react-icons/io5"
import { AddressSelectionRadioGroup } from "@/components/CustomElements/AddressSelectionRadioGroup"
import { Button } from '@/components/ui/button';
import { BiPlus } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import { DeliveryMethodRadioGroup } from '../../../components/CustomElements/DeliveryMethodSelection';
import { PaymentMethodRadioGroup } from "@/components/CustomElements/PaymentMethodRadioGroup";
import SummaryProductItem from "@/components/CustomElements/SummaryProductItem";


interface Params {
    searchParams: { [key: string]: string | undefined }
}
const CheckOut = ({searchParams}: Params) => {
  const step = searchParams['step']
  const isAddressMethod = step == '1'
  const isDeliveryMethod = step == '2'
  const isPayment = step == '3'

  if(isDeliveryMethod) {
    return (
        <section className='w-full flex flex-col'>
        <CustomBreadCrumbs/>
        <section className="flex flex-col gap-6">
            <h1 className='font-bold text-xl '>Checkout</h1>
            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 sm:text-base">
                <li className="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                        <IoLocation className="size-3 md:size-4 me-2" color={'blue-600'} /> 
                          Address <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                    </span>
                </li>
                <li className="flex text-blue-600 md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                        <FaTruck className="size-3 md:size-4 me-2" />
                        Delivery <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                    </span>
                </li>
                <li className="flex items-center">
                    <IoCard className="size-3 md:size-4 me-2" />
                    Payment
                </li>
            </ol>

            <section className="mt-10">
                <section className="flex w-full">
                    <h1 className="font-semibold mb-4">Select Delivery Method</h1>
                </section>
                <section className="">
                    <DeliveryMethodRadioGroup/>
                </section>
            </section>

            
        </section>
    </section>
    )
  }

  if(isPayment) {
    return (
        <section className='w-full flex flex-col'>
        <CustomBreadCrumbs/>
        <section className="flex flex-col gap-6">
            <h1 className='font-bold text-xl '>Checkout</h1>
            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 sm:text-base">
                <li className="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                        <IoLocation className="size-3 md:size-4 me-2" color={'blue-600'} /> 
                          Address <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                    </span>
                </li>
                <li className="flex md:w-full items-center  after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                        <FaTruck className="size-3 md:size-4 me-2" />
                        Delivery <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                    </span>
                </li>
                <li className="flex items-center text-blue-600">
                    <IoCard className="size-3 md:size-4 me-2" />
                    Payment
                </li>
            </ol>

            <section className="mt-10 w-full">
                <section className="flex w-full">
                    <h1 className="font-semibold mb-4">Make Payment</h1>
                </section>
                <section className="grid grid-cols-3 gap-6 w-full">
                <section className="col-span-3 md:col-span-2 rounded-lg shadow-lg h-fit">
                    <section className="w-full px-6">
                            <h1 className="font-semibold mt-8 pb-4">Summary</h1>

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
                        <section className="flex flex-col rounded-lg shadow-lg px-8 py-6">
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
                            <h1 className="font-semibold ">Payment Method</h1>
                            <Button variant={'link'} className=" flex  justify-center items-center text-gray-600 rounded-full md:rounded-lg">
                                <BiPlus className="size-5 lg:size-6" />
                                <p className="hidden lg:inline-flex">Add Card</p>
                                {/* Add the Modal for taking Card Number, CVV and expiration date */}
                            </Button>
                        </section>
                            <PaymentMethodRadioGroup/>
                            <Button className="bg-green-1 hover:bg-green-800 mt-4">Place Order</Button>
                        </section>
                    </section>

                    
                </section>
            </section>

            
        </section>
    </section>
    )
  }


  return (
    <section className='w-full flex flex-col'>
        <CustomBreadCrumbs/>
        <section className="flex flex-col gap-6">
            <h1 className='font-bold text-xl '>Checkout</h1>
            <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 sm:text-base">
                <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                        <IoLocation className="size-3 md:size-4 me-2" color={'blue-600'} /> 
                          Address <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                    </span>
                </li>
                <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                    <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                        <FaTruck className="size-3 md:size-4 me-2" />
                        Delivery <span className="hidden sm:inline-flex sm:ms-2">Info</span>
                    </span>
                </li>
                <li className="flex items-center">
                    <IoCard className="size-3 md:size-4 me-2" />
                    Payment
                </li>
            </ol>


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
        </section>
    </section>
  )
}

export default CheckOut