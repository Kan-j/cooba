import React from "react";
import Product from "../CustomElements/Product"


import { ObjectId } from 'mongoose';
import { currentUser } from "@clerk/nextjs/server";
import { fetchUser } from "@/lib/actions/user.actions";

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



const  ProductsList = ({products}:any) => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {products.map((product:any)=> {
          return (
            <Product product={JSON.parse(JSON.stringify(product))} key={product._id}/>
          )
        })}
    </article>
  )
}

export default ProductsList