import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCart, BsPerson } from 'react-icons/bs'
import { IoHeartOutline } from 'react-icons/io5'


import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { cn } from '@/lib/utils'
import { FaClipboard, FaInfoCircle, FaShoppingCart, FaStore, FaUserCircle } from 'react-icons/fa'
import { BiMenuAltLeft } from 'react-icons/bi'
import { currentUser } from '@clerk/nextjs/server'
import CustomLoginButton from '../CustomElements/CustomLoginButton'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { fetchUser } from '@/lib/actions/user.actions'
import CustomSignedInCartButton from '../CustomElements/CustomSignedInCartButton'
import { fetchCartItems } from '@/lib/actions/product.actions'
import SearchBar from '../CustomElements/SearchBar'

  export const sidebarLinks = [
    {
        icon: <FaUserCircle size={20}/>,
        route: '/profile',
        label: 'My Account'
    },
    {
        icon: <FaClipboard size={20}/>,
        route: '/orders',
        label: 'My Orders'
    },
    {
        icon: <FaShoppingCart size={20}/>,
        route: '/cart',
        label: 'My Cart'
    },
    {
        icon: <IoHeartOutline  size={20}/>,
        route: '/packages',
        label: 'My Favorites'
    },
    {
        icon: <FaStore size={20}/>,
        route: '/shop',
        label: 'Store'
    },
    {
        icon: <FaInfoCircle size={20}/>,
        route: '/about',
        label: 'About Us'
    },

  

] 

const NavBar = async() => {
    const user = await currentUser();
    let userInfo;
    if(user) {userInfo = await fetchUser(user?.id);}

    
    const cartItems = await fetchCartItems(userInfo?._id)

  return (
    <nav className="flex w-full justify-between items-center px-6 sm:px-8 md:px-10 lg:px-20 py-6">
            <section className='flex items-center gap-4'>
                <section className="w-full max-w-[264px]">
                <Sheet>
                    <SheetTrigger>
                        <BiMenuAltLeft size={30} className='cursor-pointer md:hidden'/>
                        {/* <Image src="/icons/hamburger.svg" alt="hanburger icon" width={36} height={36} className="cursor-pointer sm:hidden"/> */}
                    </SheetTrigger>
                    <SheetContent side="left" className="border-none bg-black-main overflow-y-scroll">
                        <Link href="/" className="flex items-center gap-1">
                            {/* <Image src='/icons/logo.svg' alt="Yoom logo" width={32} height={32} className="max-sm:size-10"/> */}
                            <p className="text-[26px] font-extrabold text-white">Cooba</p>
                        </Link>
                        

                        <div className="flex h-[calc(100vh - 72px)] flex-col justify-between overflow-y-auto">
                            <SheetClose asChild>
                                <section className="flex h-full flex-col gap-6 pt-16 text-white">
                                {
                                    sidebarLinks.map((link:any)=> {
                                        // const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);

                                        return (
                                            <SheetClose asChild key={link.route}>
                                                <Link href={link.route} key={link.label} className={cn('flex gap-4 items-center p-4 rounded-lg w-full max-w-60')}>
                                                    {link.icon}
                                                    <p className=" font-semibold ">{link.label}</p>
                                                </Link>
                                            </SheetClose>
                                        )
                                    })
                                }
                                </section>
                            </SheetClose>

                        </div>
                    </SheetContent>
                </Sheet>

            </section>
            
            <Link href="/" className="flex items-center gap-1">
            {/* <Image src="" alt="Cooba logo" width={32} height={32} className="max-sm:size-10" /> */}
            {/* <p className="text-[26px] font-extrabold max-sm:hidden ">Cooba</p> */}
            <p className="text-[26px] font-extrabold ">Cooba</p>
            </Link>
        </section>
        
        <section className="w-4/12">
            <SearchBar smallScreen={false}/>
        </section>
        
        <section className='md:flex hidden gap-4 2xl:gap-10'>
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/packages">Packages</Link>
        </section>
        <article className="flex gap-1 items-center">
            <section >
                <button  className='rounded-full px-2 py-2 hover:bg-green-100'><IoHeartOutline  size={23}/></button>
            </section>
            <section className="mr-1">
                <SignedIn>
                    <CustomSignedInCartButton CartItems={JSON.parse(JSON.stringify(cartItems))}/>
                </SignedIn>
                <SignedOut>
                    <button  className='rounded-full px-2 py-2 hover:bg-green-100'><BsCart  size={23}/></button>
                </SignedOut>
               
            </section>
            <SignedIn>
            {/* Mount the UserButton component */}
                <UserButton />
            </SignedIn>
            <SignedOut>
                {/* Signed out users get sign in button */}
                <CustomLoginButton/>
            </SignedOut>
        </article>
    </nav>
  )
}

export default NavBar