import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductsList from './ProductsList'

const ProductsSection = () => {
  return (
    <article className='mt-6 mb-12'>
        <section className="mb-2">
            <header className='flex justify-center text-xl font-semibold'>Introducing Our Products</header>
        </section>
        <section className="flex justify-center w-full">
            <Tabs defaultValue="all" className='flex flex-col items-center w-full'>
                <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="vegetable">Vegetable</TabsTrigger>
                    <TabsTrigger value="fruit">Fruit</TabsTrigger>
                    <TabsTrigger value="meat">Meat & Fish</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className='w-full'>
                    <ProductsList/>
                </TabsContent>
                <TabsContent value="vegetable" className='w-full'>
                    <ProductsList/>
                </TabsContent>
                <TabsContent value="fruit" className='w-full'>
                    <ProductsList/>
                </TabsContent>
                <TabsContent value="meat" className='w-full'>
                    <ProductsList/>
                </TabsContent>
            </Tabs>
        </section>
    </article>
  )
}

export default ProductsSection