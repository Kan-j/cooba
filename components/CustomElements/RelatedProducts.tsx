import React from 'react'
import Product from './Product'

const RelatedProducts = ({relatedProducts}:any) => {
  console.log(relatedProducts)
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
      {relatedProducts.map((product:any)=> {
          return (
            <Product product={product} key={product._id}/>
          )
        })}
      
    </section>
  )
}

export default RelatedProducts