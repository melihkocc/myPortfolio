import React from 'react'
import { FaSchool } from "react-icons/fa";
import { Divider } from '@mui/material';
import './style.css'

function Card({ isLeft = true, schoolType = "", schoolName = "", schoolPlace = "", schoolYear = "" }) {
    return (
        <div className='w-full flex lg:grid lg:grid-cols-2 items-center relative educationLinks'>
            {
                !isLeft && <Divider orientation="vertical" className='hidden lg:block' />
            }
            <div className={`card bg-base-100 w-full lg:w-11/12 shadow-xl mt-5 ${!isLeft ? "lg:ms-10" : ""} ms-0`}>
                <div className='w-full flex justify-start items-center px-8 pt-2'>
                    <FaSchool className='educationIcons' size={40} />
                </div>
                <div className="card-body py-6">
                    <h2 className="card-title font-normal">{schoolType}</h2>
                    <p>{schoolName}</p>
                    <span className='font-light'>{schoolPlace} · {schoolYear}</span>
                </div>
            </div>
            {
                isLeft && <Divider style={{ left: "49.9%" }} orientation="vertical" className='absolute hidden lg:block' />
            }
        </div>
    )
}

export default Card