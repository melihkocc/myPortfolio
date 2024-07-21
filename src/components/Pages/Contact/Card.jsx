import React from 'react'
import './style.css'

function Card({ type = "", value = "" }) {
  return (
    <div className='card contactCard hover:shadow-2xl ease-in-out duration-500 w-11/12 hover:bg-black mx-auto shadow-xl border-2 rounded-md mt-10 bg-white'>
      <div style={{ minHeight: "150px" }} className='flex flex-col justify-center items-center p-5'>
        <span className='underline contactText'>{type}</span>
        <span className='text-center mt-1 contactText'>{value}</span>
      </div>
    </div>
  )
}

export default Card