import CustomBreadCrumbs from '@/components/CustomElements/CustomBreadCrumbs'
import FilterAndSort from '@/components/CustomElements/FilterAndSort'
import FilterServerComponent from '@/components/CustomElements/FilterServerComponent'
import PaginationSection from '@/components/CustomElements/PaginationSection'
import ProductsList from '@/components/HomeComponents/ProductsList'
import { getProductsByCategoriesAndSearch } from '@/lib/actions/product.actions'
import React from 'react'


interface Params {
  searchParams: { [key: string]: string | undefined },
}

const Shop = async({searchParams}:Params) => {
  const categories = searchParams['categories'] || ''
  const page = parseInt(searchParams['page'] || '1') || 1

  const response = await getProductsByCategoriesAndSearch(categories,0,15,page)

  return (
    <section className='w-full'>
      <CustomBreadCrumbs/>
      <section className="flex flex-col w-full gap-4 mb-5">
        <FilterServerComponent/>
      </section>
      {(response.products.length >  0)?  
      <>
      <ProductsList products={response.products}/>
      <PaginationSection NextPageExists={response.isNext} PrevPageExists={response.isPrev} totalPages={response.totalPages} currentPage={response.currentPage}/>
      </>
      :<>
      </>
    
    }
     
      
    </section>
  )
}

export default Shop