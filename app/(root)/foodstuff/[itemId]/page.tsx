import CustomBreadCrumbs from '@/components/CustomElements/CustomBreadCrumbs'
import ProductDetailCarousel from '@/components/CustomElements/ProductDetailCarousel'
import ProductDetailsComponent from '@/components/CustomElements/ProductDetailsComponent'
import RelatedProducts from '@/components/CustomElements/RelatedProducts'
import { getProductDetails } from '@/lib/actions/product.actions'
import React from 'react'


interface Params {
    params: {
        itemId: string
    }
}
const FoodStuffDetail = async({params}:Params) => {
  const {product,category, relatedProducts} = await getProductDetails(params.itemId);

  return (
    <section className='w-full flex flex-col'>
        <CustomBreadCrumbs/>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="w-full h-full">
                <ProductDetailCarousel images ={product.images}/>
            </section>
            <ProductDetailsComponent 
              productId={JSON.stringify(product._id)}
              name={product.name} 
              description={product.description} 
              categoryName={category.name} 
              prices={JSON.parse(JSON.stringify(product.prices))}
              inStock={product.inStock} 
              />
        </section>

        {/* Related Products */}
        <section>
            <h1 className="flex justify-center w-full text-xl font-semibold mb-4 mt-10 ">Related Products</h1>
            <RelatedProducts relatedProducts={relatedProducts}/>
        </section>
    </section>
  )
}

export default FoodStuffDetail