import React from 'react'
import Search from './Search'

function Title({ name, search = true }) {
  return (
    <div className='flex flex-col justify-center items-center w-screen'>
      <div className='text-4xl lg:text-6xl font-black mt-20'>{name}</div>
      {
        search && <div className='w-full'>
          <Search />
        </div>
      }
    </div>
  )
}

export default Title