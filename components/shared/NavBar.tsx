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
import { BiLogIn, BiMenuAltLeft } from 'react-icons/bi'
import { currentUser } from '@clerk/nextjs/server'
import ProfileButton from '../CustomElements/ProfileButton'
import CustomLoginButton from '../CustomElements/CustomLoginButton'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

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
            <label className="md:flex h-10 w-full rounded-md items-center border border-input bg-background px-3 py-2 text-sm hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="gray" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                <input 
                type="text" 
                className="grow w-full text-gray-900 px-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0  focus-visible:ring-offset-0" 
                placeholder="Search Product ...." 
                />
            </label>
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
            <section className="">
                <button  className='rounded-full px-2 py-2 hover:bg-green-100'><BsCart  size={23}/></button>
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