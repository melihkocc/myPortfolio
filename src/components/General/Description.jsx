import React from 'react'

function Description({ description }) {
  return (
    <div style={{ borderBottom: "solid 1px black" }} className='w-11/12 lg:w-8/12 flex flex-col justify-center items-center pt-10 pb-10'>
      <p className='text-sm lg:text-base text-black leading-7'>{description}</p>
    </div>
  )
}

export default Description