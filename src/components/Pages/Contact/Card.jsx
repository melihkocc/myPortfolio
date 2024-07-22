import React from 'react'

function Card({ type = "", value = "" }) {
  return (
    <div className='card contactCard hover:shadow-2xl ease-in-out duration-500 w-11/12 hover:bg-black hover:text-white mx-auto shadow-xl border-2 rounded-md mt-10 bg-white dark:bg-slate-950 dark:hover:text-slate-950 dark:hover:bg-white'>
      <div style={{ minHeight: "150px" }} className='flex flex-col justify-center items-center p-5'>
        <span className='underline'>{type}</span>
        <span className='text-center mt-1'>{value}</span>
      </div>
    </div>
  )
}

export default Card