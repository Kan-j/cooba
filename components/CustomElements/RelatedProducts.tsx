import React from 'react'
import Product from './Product'

const RelatedProducts = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
    </section>
  )
}

export default RelatedProducts