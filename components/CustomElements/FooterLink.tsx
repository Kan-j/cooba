import Link from 'next/link'
import React from 'react'

const FooterLink = ({text, link}:{text: string, link:string}) => {
  return (
    <Link href={link} className='text-sm text-gray-300'>{text}</Link>
  )
}

export default FooterLink