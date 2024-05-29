import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductsList from './ProductsList'
import { getCategories } from '@/lib/actions/category.actions'


const ProductsSection = async() => {
  const allCategories = await getCategories(4)
  return (
    <article className='mt-6 mb-12'>
        <section className="mb-2">
            <header className='flex justify-center text-xl font-semibold'>Introducing Our Products</header>
        </section>
        <section className="flex justify-center w-full">
            <Tabs defaultValue="Vegetables" className='flex flex-col items-center w-full'>
                
                <TabsList>
                    {allCategories?.map((category) => {
                        return (
                            <TabsTrigger value={category.name} key={category.name}>{category.name}</TabsTrigger>
                        )
                    })}
                </TabsList>
                {
                    allCategories?.map((category)=> {
                        return (
                            <TabsContent value={category.name} key={category.name} className='w-full'>
                                <ProductsList products={category.products}/>
                            </TabsContent>
                        )
                    })
                }
            </Tabs>
        </section>
    </article>
  )
}

export default ProductsSection