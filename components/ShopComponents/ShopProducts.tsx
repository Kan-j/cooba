import React from 'react'
import ProductsList from '../HomeComponents/ProductsList';
import PaginationSection from '../CustomElements/PaginationSection';

const ShopProducts = () => {
  return (
    <section className="">
        <ProductsList/>
        <PaginationSection/>
    </section>
  )
}

export default ShopProducts