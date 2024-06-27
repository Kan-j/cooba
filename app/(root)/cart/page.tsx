import CustomBreadCrumbs from '@/components/CustomElements/CustomBreadCrumbs'
import React from 'react'


import { Button } from '@/components/ui/button'
import ShoppingCartItem from '@/components/CustomElements/ShoppingCartItem'
import { currentUser } from '@clerk/nextjs/server'
import { fetchUser } from '@/lib/actions/user.actions'
import { fetchCartItems } from '@/lib/actions/product.actions'




const Cart = async() => {
    const user = await currentUser();
    let userInfo:any;
    if(user) {userInfo = await fetchUser(user?.id);}

    const cartItems = await fetchCartItems(userInfo?._id)

    // Calculate the total amount
    const totalAmount = cartItems.reduce((acc:any, cartItems:any) => acc + cartItems.totalAmount, 0);

    return (
        <section className='w-full flex flex-col'>
            <CustomBreadCrumbs/>
            <section className="flex flex-col gap-6">
                <h1 className='font-bold text-xl '>My Shopping Cart</h1>
                <section className="grid grid-cols-1 md:grid-cols-9 gap-10">
                    <section className="flex gap-4 md:col-span-6 w-full shadow-md md:px-8 md:py-8 flex-col rounded-lg">
                        {cartItems.map((cart:any)=> {
                            const stockStatus = cart.product.inStock ? 'In Stock' : 'Out of Stock'
                            const stockStatusColor = cart.product.inStock? 'bg-green-1': 'bg-red-400'
                            console.log(cart)
                            return (
                                <>
                                    <ShoppingCartItem
                                    userId={JSON.parse(JSON.stringify(userInfo._id))}
                                    itemId={JSON.parse(JSON.stringify(cart.product._id))}
                                    itemType={cart.itemType}
                                    selectedPair={JSON.parse(JSON.stringify(cart.selectedPair))}
                                    productName={cart.product.name}
                                    productImages={cart.product.images}
                                    productPrices={JSON.parse(JSON.stringify(cart.product.prices))}
                                    productQuantity={cart.quantity}
                                    stockStatus ={stockStatus}
                                    stockStatusColor={stockStatusColor}
                                    key={cart.product._id+'_'+ cart.quantity} />
                                </>
                            )
                        })}
                    </section>

                    <section className="cols-span-1 md:col-span-3 rounded-lg shadow-md px-6 h-fit pt-4">
                        <h1 className="text-xl font-bold mb-6 mt-2">Summary</h1>
                        <section className="flex flex-col gap-3">
                            <div className="flex justify-between">
                                <p className="font-semibold">Subtotal</p>
                                <p className="font-semibold text-green-1">GH₵{totalAmount}</p>
                            </div>

                        </section>
                        <section className="border-t mt-4 pt-3 pb- 3 mb-4">
                            <div className="flex justify-between text-gray-800 mb-3 font-bold">
                                <p className="">Total</p>
                                <p className="">GH₵{totalAmount}</p>
                            </div>
                            <Button className='w-full'>Proceed to Checkout</Button>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Cart