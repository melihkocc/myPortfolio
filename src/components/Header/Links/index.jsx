import React from 'react'
import Link from 'next/link'
import './style.css'

///icons
import { SiHyperskill } from "react-icons/si";
import { FaCubesStacked } from "react-icons/fa6";
import { PiStudent } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";

function Links() {

  return (
    <div className='w-full justify-between items-center hidden lg:flex'>

      <Link className='flex items-center links' href={`/skills`}>
        <SiHyperskill size={15} className='icons'/>
        <span className='texts'>Beceriler</span>
      </Link>

      <Link className='flex items-center links' href={`/experience`}>
        <FaCubesStacked size={15} className='icons'/>
        <span className='texts'>Deneyim</span>
      </Link>

      <Link className='flex items-center links' href={`/education`}>
        <PiStudent size={15} className='icons'/>
        <span className='texts'>Eğitim</span>
      </Link>

      <Link className='flex items-center links' href={`/resume`}>
        <IoNewspaperOutline size={15} className='icons'/>
        <span className='texts'>Özgeçmiş</span>
      </Link>

      <Link className='flex items-center links' href={`/contact  `}>
        <IoIosContact size={15} className='icons'/>
        <span className='texts'>İletişim</span>
      </Link>

    </div>
  )
}

export default Links