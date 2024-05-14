"use client"

import Image from "next/image";
import React, { useState, useEffect, useRef, SetStateAction } from "react";
import { BiLeftArrow } from "react-icons/bi";
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


const ProductDetailCarousel = () => {
    const settings = {
        customPaging: function(i:any) {
          return (
            <section className="flex w-12">
               <a>
              <img src={`/abstract0${i + 1}.jpg`} className="w-60" />
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
            <div>
              <img src={ "/abstract01.jpg"} />
            </div>
            <div>
              <img src={ "/abstract02.jpg"} />
            </div>
            <div>
              <img src={ "/abstract03.jpg"} />
            </div>
            <div>
              <img src={ "/abstract04.jpg"} />
            </div>
          </Slider>
        </div>
      );
}


export default ProductDetailCarousel