import CustomBreadCrumbs from '@/components/CustomElements/CustomBreadCrumbs'
import FilterAndSort from '@/components/CustomElements/FilterAndSort'
import ShopProducts from '@/components/ShopComponents/ShopProducts'
import Link from 'next/link'
import React from 'react'

const Shop = () => {
  return (
    <section className='w-full'>
        <CustomBreadCrumbs/>
        <FilterAndSort type='filter'/>
        <Link href="/foodstuff/1">Hi</Link>
        <ShopProducts/>
    </section>
  )
}

export default Shop