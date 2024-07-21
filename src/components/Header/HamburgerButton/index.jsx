"use client"
import React from 'react'
import { changeHamurger } from '@/redux/hamburgerSlice';
import { useDispatch } from 'react-redux';

///icons
import { RxHamburgerMenu } from "react-icons/rx";

function HamburgerButton() {

  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(changeHamurger());
  }

  return (
    <div className="lg:hidden md:block sm:block">
      <RxHamburgerMenu onClick={handleClick} className='cursor-pointer' size={20} />
    </div>
  )
}

export default HamburgerButton