import React from 'react'
import ProductsList from '../HomeComponents/ProductsList';
import PaginationSection from '../CustomElements/PaginationSection';

const ShopProducts = ({
  products,
  NextPageExists,
  PrevPageExists,
  TotalPages,
  CurrentPage
}:any) => {
  return (
    <section className="">
        <ProductsList products={products}/>
        <PaginationSection
          NextPageExists
          currentPage
          totalPages/>
    </section>
  )
}

export default ShopProducts