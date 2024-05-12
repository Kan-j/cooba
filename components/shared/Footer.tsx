import Link from 'next/link'
import React from 'react'
import FooterLink from '../CustomElements/FooterLink'

const Footer = () => {
  return (
    <section className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-footerbackground bg-black-main px-6 sm:px-8 md:px-10 lg:px-20 text-white py-16  gap-6'>

        <section className='flex flex-col gap-4'>
            <h1 className='font-semibold'>Cooba</h1>
            <section className="flex flex-col gap-2">
                <p className='text-sm text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur cum quae doloribus error!</p>
                <p className=' text-gray-100'>cooba@gmail.com</p>
            </section>
        </section>

        <section className='flex flex-col gap-4'>
            <h1 className='font-semibold'>My Account</h1>
            <section className="flex flex-col gap-2">
                <FooterLink text='My Account' link='/'/>
                <FooterLink text='Order History' link='/'/>
                <FooterLink text='Shopping Cart' link='/'/>
                <FooterLink text='Wishlist' link='/'/>
            </section>
        </section>

        <section className='flex flex-col gap-4'>
            <h1 className='font-semibold'>Help</h1>
            <section className="flex flex-col gap-2">
                <FooterLink text='About' link='/'/>
                <FooterLink text='Shop' link='/'/>
                <FooterLink text='Search' link='/'/>
                <FooterLink text='Track Order' link='/'/>
            </section>
        </section>

        <section className='flex flex-col gap-4'>
            <h1 className='font-semibold'>Proxy</h1>
            <section className="flex flex-col gap-2">
                <FooterLink text='Contact' link='/'/>
                <FooterLink text='Faqs' link='/'/>
                <FooterLink text='Terms & Conditions' link='/'/>
                <FooterLink text='Privacy Policy' link='/'/>
            </section>
        </section>

    </section>
  )
}

export default Footer