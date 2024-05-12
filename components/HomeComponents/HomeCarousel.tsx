"use client"

import React from 'react'
import Autoplay from "embla-carousel-autoplay"
 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Button } from '../ui/button'
import Image from 'next/image'




const HomeCarousel = () => {
//   return (
//     <section className='w-full'>HomeCarousel</section>
//   )
const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
 
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className=''>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="px-1 flex flex-col bg-[#DAE5DA]  h-96 justify-center items-center relative z-10 rounded-lg mb-4">
                <article className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <section className="flex flex-col items-center md:items-start justify-center md:pl-10">
                        <h1 className="uppercase font-bold text-green-1 lg:mb-4 text-sm">Welcome To Cooba</h1>
                        <p className="text-center md:text-start text-base sm:text-lg md:text-xl lg:text-3xl font-semibold mb-3">Fresh Ingredients Delivered to Your Doorstep</p>
                        <Button className='w-fit'>Shop now</Button>
                    </section>
                    <section className="w-full flex justify-center ">
                        <Image src="/firstbanner.png" className='w-[300px] md:w-[480px]' width={480} height={450}  alt="alt"  />
                    </section>
                </article>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
    </Carousel>
  )
}

export default HomeCarousel