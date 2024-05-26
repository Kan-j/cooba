"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { BsPerson } from 'react-icons/bs'

const ProfileButton = () => {
  const router = useRouter()
  return (
    <section className="">
        <button className='rounded-full px-2 py-2 hover:bg-green-100' onClick={()=> router.push('/profile')}><BsPerson  size={23}/></button>
    </section>)
}

export default ProfileButton