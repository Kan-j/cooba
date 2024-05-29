import React from "react";
import Product from "../CustomElements/Product"


import { ObjectId } from 'mongoose';

// Define the Price type
interface Price {
  quantity: number;
  price: number;
}

// Define the Product type
interface Product {
  _id: ObjectId;
  name: string;
  description: string;
  images: string[];
  prices: Price[];
  category: ObjectId;
  __v: number;
}

interface ProductsListProps {
  products: Product[];
}


const  ProductsList: React.FC<ProductsListProps> = ({products}:any) => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {products.map((product:any)=> {
          return (
            <Product product={product} key={product._id}/>
          )
        })}
    </article>
  )
}

export default ProductsList