import React from 'react'
import './style.css'

function Card({ name = "", imageUrl = "", url = "" }) {


  return (
    <>
      <div className='mt-5 dark:hidden' >
        <div className="card hover:shadow-2xl bg-base-100 lg:w-11/12 mx-auto shadow-xl border-2 rounded-md grid grid-cols-2 links">
          <div>
            <h1 className='text-xl p-5 font-light names'>{name}</h1>
          </div>
          <div
            className='flex justify-end items-center images rounded-tl-lg'
            style={{
              backgroundImage: `url(${imageUrl})`
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none'
              }}
            />
          </div>
        </div>
      </div>
      <div className='mt-5 dark:block hidden'>
        <div className="card hover:shadow-2xl bg-base-100 lg:w-11/12 mx-auto shadow-xl border-2 rounded-md grid grid-cols-2 links">
          <div>
            <h1 className='text-xl p-5 font-light names'>{name}</h1>
          </div>
          <div
            className='flex justify-end items-center darkImages  rounded-tr-lg rounded-br-lg'
            style={{
              backgroundImage: `url(${imageUrl})`
            }}
          >
          </div>
        </div>
      </div>
    </>

  )
}

export default Card