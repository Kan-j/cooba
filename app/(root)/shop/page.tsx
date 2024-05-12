import CustomBreadCrumbs from '@/components/CustomElements/CustomBreadCrumbs'
import FilterAndSort from '@/components/CustomElements/FilterAndSort'
import React from 'react'

const Shop = () => {
  return (
    <section className='w-full'>
        <CustomBreadCrumbs/>
        <FilterAndSort/>
    </section>
  )
}

export default Shop