"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import './style.css'

/// redux
import { useSelector, useDispatch } from 'react-redux'
import { closeHamburger } from '@/redux/hamburgerSlice'
import { DarkMode } from '../Theme/darkMode'

function HamburgerMenu() {

  const { value } = useSelector((state) => state.hamburger)
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = (url) => {
    router.push(url)
    dispatch(closeHamburger());
  }

  return (
    <div className={`absolute hamburger ${value ? "active" : ""} bg-white dark:bg-slate-950`}>
      <div className='flex flex-col px-10 py-10'>

        <div onClick={() => handleClick(`/skills`)} className='w-full flex items-center'>
          <span className='ms-5 text-md tracking-widest'>Beceriler</span>
        </div>

        <div onClick={() => handleClick(`/experience`)} className='w-full flex items-center mt-5'>
          <span className='ms-5 text-md tracking-widest'>Deneyim</span>
        </div>

        <div onClick={() => handleClick(`/education`)} className='w-full flex items-center mt-5'>
          <span className='ms-5 text-md tracking-widest'>Eğitim</span>
        </div>

        <div onClick={() => handleClick(`/resume`)} className='w-full flex items-center mt-5'>
          <span className='ms-5 text-md tracking-widest'>Özgeçmiş</span>
        </div>

        <div onClick={() => handleClick(`/contact`)} className='w-full flex items-center mt-5'>
          <span className='ms-5 text-md tracking-widest'>İletişim</span>
        </div>

        <div className='w-full flex items-center mt-5 ms-5'>
          <DarkMode/>
        </div>

      </div>
    </div>
  )
}

export default HamburgerMenu