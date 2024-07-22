import React from 'react'

function Title({ name }) {
  return (
    <div className='w-11/12 lg:w-8/12 flex flex-col justify-start items-start mt-10'>
      <div className='divider divider-center text-start lg:divider-start border-b-2 border-gray-300 py-2 w-full'>{name}</div>
    </div>
  )
}

export default Title