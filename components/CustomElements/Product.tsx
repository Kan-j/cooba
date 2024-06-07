// "use client"
import Image from 'next/image'
import React from 'react'
import { BsBag } from 'react-icons/bs'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Link from 'next/link'
import SingleProductDescriptionItem from './SingleProductDescriptionItem'



// Define the Price type
interface Price {
  quantity: number;
  price: number;
}

const Product=({product}:any) => {
    // const [selectedPair, setSelectedPair] = useState(product.prices[0]);
  return (
    <section className='w-full'>
        <section className="border px-4 py-3 rounded-lg">
            <Link href={`/foodstuff/${product._id}`}>
                <Image src={product.images[0]} alt={product.name} className='w-full object-cover aspect-auto' width={200}  height={200} />
            </Link>
            <SingleProductDescriptionItem productId={JSON.parse(JSON.stringify(product._id))} productName ={product.name} productPricesList={JSON.parse(JSON.stringify(product.prices))}/>
        </section>
    </section>
  )
}

export default Product