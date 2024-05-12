import React from 'react'

const StatsSection = () => {
  return (
    <section className='grid grid-cols- md:grid-cols-2 lg:grid-cols-4 md:bg-statbackgrounddesktop bg-statbackgroundsm px-8 py-8 gap-6 mb-12'>
        <section className='glassmorphism flex flex-col justify-center items-center px-4 py-4 rounded-lg'>
            <h1 className="text-5xl text-green-1">3+</h1>
            <p className="text-white text-sm md:text-base">Months of Hardwork</p>
        </section>
        <section className='glassmorphism flex flex-col justify-center items-center px-4 py-4 rounded-lg'>
            <h1 className="text-5xl text-green-1">1000+</h1>
            <p className="text-white text-sm md:text-base">Happy Customers</p>
        </section>
        <section className='glassmorphism flex flex-col justify-center items-center px-4 py-4 rounded-lg gap-1'>
            <h1 className="text-5xl text-green-1">10</h1>
            <p className="text-white text-sm md:text-base">Quality Suppliers</p>
        </section>
        <section className='glassmorphism flex flex-col justify-center items-center px-4 py-4 rounded-lg'>
            <h1 className="text-5xl text-green-1">2000+</h1>
            <p className="text-white text-sm md:text-base">Monthly Orders</p>
        </section>
    </section>
  )
}

export default StatsSection