import React from 'react'

///components
import Logo from './Logo'
import Links from './Links'
import Theme from './Theme'
import NameSurname from './NameSurname'
import HamburgerButton from './HamburgerButton'
import HamburgerMenu from './HamburgerMenu'

function Header() {
  return (
    <>
      <header style={{zIndex : "1000"}} className="grid grid-cols-3 border-b-2 py-3 fixed w-screen bg-transparent z-10 dark:bg-slate-950 bg-white">
        <div className='flex justify-center items-center'>
          <Logo />
        </div>
        <div className='flex justify-center items-center'>
          <Links />
          <NameSurname />
        </div>
        <div className='flex justify-center items-center'>
          <Theme />
          <HamburgerButton />
        </div>
      </header>
      <HamburgerMenu />
    </>
  )
}

export default Header