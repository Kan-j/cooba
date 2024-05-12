import React from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const TestimonialCard = ({content, username,imageUrl }:{content:string, username:string, imageUrl:string}) => {
  return (
    <section className="bg-white rounded-md px-6 py-4">
        <FaQuoteRight color="#00B207" size={45}/>
        <p className="mt-4 text-[#4D4D4D] text-sm">{content}</p>
        <div className="flex mt-6 gap-2">
            <Avatar>
                <AvatarImage src={imageUrl} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="">
                <h1 className="font-semibold">{username}</h1>
                <p className="text-gray-500">Customer</p>
            </div>
        </div>
    </section>
  )
}

export default TestimonialCard