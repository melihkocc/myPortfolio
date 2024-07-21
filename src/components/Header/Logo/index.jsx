"use client"
import React from 'react'
import { FaCode } from "react-icons/fa6";
import './style.css'
import Link from 'next/link';
import { useDispatch } from 'react-redux'
import { closeHamburger } from '@/redux/hamburgerSlice'
import { useRouter } from 'next/navigation'

function Header() {

  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    router.push("/")
    dispatch(closeHamburger());
  }

  return (
    <Link className='flex' href={"/"}>
      <FaCode onClick={handleClick} className='logo' />
      <span className='text hidden lg:block'>Melih Koç</span>
    </Link>
  )
}

export default Header
