import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const KeyServices = () => {
  return (
    <section className='grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-0 mb-12'>
        <section className="flex w-full gap-4">
            <Image src="/tomatoOnion.png" alt="alt" className='w-2/6' width={200} height={400} />
            <Image src="/herbs.png" alt="alt" className='w-3/6' width={444} height={457} />
        </section>
        <section className="flex flex-col gap-3 md:gap-4">
            <h1 className=' text-xl md:text-2xl font-semibold '>Your Trusted Food Ingredients Store</h1>
            <section>
                <h1 className="md:text-lg font-semibold">Fresh Ingredients, Delivered to Your Door</h1>
                <p className="text-gray-700 text-sm md:text-base">Get everything you need to cook delicious meals at home delivered right to your doorstep. Prepare your favorite soups, stews, and delicacies with ease, knowing you have the freshest ingredients at your fingertips.</p>
            </section>
            <section>
                <h1 className="text-lg font-semibold">Freshness, Every day</h1>
                <p className="text-gray-700 text-sm md:text-base">Enjoy everyday freshness with Cooba. Our quality agricultural products are sourced directly from local farms to ensure you get the best flavor in every bite.</p>
            </section>
            <Button className='md:w-fit w-full'>Shop Now</Button>
        </section>
    </section>
  )
}

export default KeyServices