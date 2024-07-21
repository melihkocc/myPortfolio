import Link from 'next/link';
import React from 'react'

///icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function SocialMedias() {
  return (
    <div className='flex justify-between items-center mt-5 lg:mt-5'>
      <Link target='_blank' href={"https://github.com/melihkocc"}>
        <FaGithub size={20} />
      </Link >
      <Link target='_blank' href={"https://www.linkedin.com/in/melih-koc-1b1a5a237/"} className='ms-5'>
        <FaLinkedin size={20} />
      </Link>
      <Link target='_blank' href={"https://www.instagram.com/melihkoc03"} className='ms-5'>
        <FaInstagram size={20} />
      </Link>
    </div>
  )
}

export default SocialMedias