import React from 'react'
import { FaCode } from "react-icons/fa6";
import './style.css'
import Link from 'next/link';

function Header() {
  return (
    <Link className='flex' href={"/"}>
      <FaCode className='logo' />
      <span className='text hidden lg:block'>Melih Koç</span>
    </Link>
  )
}

export default Header