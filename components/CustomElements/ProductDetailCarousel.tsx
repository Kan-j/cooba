"use client"

import Image from "next/image";
import React, { useState, useEffect, useRef, SetStateAction } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Slider from "react-slick";


function SampleNextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <section style={{  display: "flex",alignItems:"center" }} onClick={onClick}>
        <FaGreaterThan color="#999999" />
    </section>
  );
}

function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <section style={{  display: "flex",alignItems:"center" }} onClick={onClick}>
        <FaLessThan color="#999999" />
    </section>
  );
}


const ProductDetailCarousel = ({images}:{images:string[]}) => {
    const settings = {
        customPaging: function(i:any) {
          return (
            <section className="flex w-12">
               <a>
              <Image src={images[i]} alt="alt" className="w-60" width={240} height={240} priority={true} />
              </a>
            </section>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (
        <div className="slider-container w-full ">
          <Slider {...settings}>
            {images.map((image)=>{
              return (
                <div key={image} className="w-full">
                  {/* <img src={image} /> */}
                  <Image src={image} alt="alt" className="w-full" width={400}  height={400} priority={true} loading={"eager"}/>
              </div>
              )
            })}
          </Slider>
        </div>
      );
}


export default ProductDetailCarousel