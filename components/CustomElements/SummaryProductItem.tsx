import Image from 'next/image'
import React from 'react'

const SummaryProductItem = () => {
  return (
    <section className="bg-gray-100 w-full  text-sm md:text-normal px-2 py-4 rounded-md">
        
        <section className="flex justify-between items-center w-full ">
            <div className="flex gap-2 items-center">
                <Image src="/tomato.png" alt="alt" className="" width={60} height={24} />
                <div className="flex flex-col">
                    <h1 className="font-semibold">Tomatoes </h1>
                    <p className="">(3 baskets) <span className="me-2">x3</span></p>
                </div>
                
            </div>
            <h1 className=" font-semibold">₵ 90.00</h1>
        </section>
        
    </section>
  )
}

export default SummaryProductItem