"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { BiLogIn } from 'react-icons/bi'

const CustomLoginButton = () => {
  const router = useRouter()
  return (
    <button  className='rounded-full px-2 py-2 hover:bg-green-100' onClick={()=>router.push('/sign-in')}><BiLogIn  size={23}/></button>
  )
}

export default CustomLoginButton