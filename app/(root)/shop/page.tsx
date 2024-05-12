import CustomBreadCrumbs from '@/components/CustomElements/CustomBreadCrumbs'
import FilterAndSort from '@/components/CustomElements/FilterAndSort'
import ShopProducts from '@/components/ShopComponents/ShopProducts'
import React from 'react'

const Shop = () => {
  return (
    <section className='w-full'>
        <CustomBreadCrumbs/>
        <FilterAndSort type='filter'/>
        <ShopProducts/>
    </section>
  )
}

export default Shop