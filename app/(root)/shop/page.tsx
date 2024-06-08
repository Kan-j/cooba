import CustomBreadCrumbs from '@/components/CustomElements/CustomBreadCrumbs'
import FilterAndSort from '@/components/CustomElements/FilterAndSort'
import FilterServerComponent from '@/components/CustomElements/FilterServerComponent'
import PaginationSection from '@/components/CustomElements/PaginationSection'
import SearchBar from '@/components/CustomElements/SearchBar'
import ProductsList from '@/components/HomeComponents/ProductsList'
import { Badge } from '@/components/ui/badge'
import { getProductsByCategoriesAndSearch } from '@/lib/actions/product.actions'
import React from 'react'
import { IoClose } from 'react-icons/io5'


interface Params {
  searchParams: { [key: string]: string | undefined },
}

const Shop = async({searchParams}:Params) => {
  const categories = searchParams['categories'] || ''
  const page = parseInt(searchParams['page'] || '1') || 1
  const searchQuery = searchParams['search'] || ''

  const response = await getProductsByCategoriesAndSearch(categories,0,15,page, searchQuery)

  return (
    <section className='w-full'>
      <CustomBreadCrumbs/>
      <section className="flex flex-col w-full gap-2 mb-5">
        <SearchBar smallScreen={true}/>
        <FilterServerComponent/>
        
        {searchQuery &&
        (
          <section className="flex justify-between items-baseline border-b py-2 px-2">
          <section className="flex gap-2 w-1/2 overflow-x-scroll">
              <p className="md:text-base text-sm">Search results for <span className='font-bold'>{searchQuery}</span></p>
          </section>

          
          <section className="">
              <p className="md:text-base text-sm"><span className='font-bold'>{response.totalProducts}</span> Result{response.totalProducts>1 && 's'} Found</p>
          </section>
      </section>
        )}
       
      </section>
      {(response.products.length >  0)?  
      <>
      <ProductsList products={response.products}/>
      <PaginationSection NextPageExists={response.isNext} PrevPageExists={response.isPrev} totalPages={response.totalPages} currentPage={response.currentPage}/>
      </>
      :<>
      <p className="flex justify-center ">Oops, no product found</p>
      </>
    
    }
     
      
    </section>
  )
}

export default Shop