"use client"
import React, { useRef, useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Navigation } from 'swiper/modules';

///images
import reactSvg from '@/public/images/react.svg'
import nextSvg from '@/public/images/next-js.svg'
import reactNative from '@/public/images/reactNative.svg'
import reduxSvg from '@/public/images/redux.svg'
import tailwindSvg from '@/public/images/tailwindcss.svg'
import nodeSvg from '@/public/images/nodejs.svg'
import expressSvg from '@/public/images/express.svg'
import htmlSvg from '@/public/images/html.svg'
import cssSvg from '@/public/images/css.svg'
import javascriptSvg from '@/public/images/javascript.svg'


function CarouselComponent() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        navigation={true}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper mt-7 lg:mt-0 dark:bg-slate-950"
      >
        <SwiperSlide className='flex flex-col justify-center items-center'>
          <Image src={reactSvg} alt='image' />
          <span style={{color:"#61dafb"}} className='text-lg'>React.js</span>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col justify-center items-center'>
          <Image src={nextSvg} alt='image' style={{color:"white"}} />
          <span className='text-lg text-black dark:text-white'>Next.js</span>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col justify-center items-center'>
          <Image src={reactNative} alt='image' />
          <span className='text-lg text-black dark:text-cyan-400'>React Native</span>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col justify-center items-center'>
          <Image src={reduxSvg}  alt='image' />
          <span className='text-lg text-purple-700'>Redux</span>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col justify-center items-center'>
          <Image src={tailwindSvg}  alt='image' />
          <span style={{color:"#0ed7b5"}} className='text-lg'>Tailwind</span>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col justify-center items-center'>
          <Image src={nodeSvg} width={100} height={100} alt='image' />
          <span className='text-lg text-green-600'>Node.js</span>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col justify-center items-center'>
          <Image src={expressSvg} width={100} height={100} alt='image' />
          <span className='text-lg'>Express.js</span>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col justify-center items-center'>
          <Image src={htmlSvg} width={100} height={100} alt='image' />
          <span style={{color:"#e34f26"}} className='text-lg'>HTML</span>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col justify-center items-center'>
          <Image src={cssSvg} width={100} height={100} alt='image' />
          <span style={{color:"#1c88c7"}} className='text-lg'>CSS</span>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col justify-center items-center'>
          <Image src={javascriptSvg} width={100} height={100} alt='image' />
          <span style={{color:"#f0db4f"}} className='text-lg'>Javascript</span>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}

export default CarouselComponent