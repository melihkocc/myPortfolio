import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material';

///components
import Section from '@/components/General/Section'
import Title from '@/components/General/Title'

function ResumePage() {
  return (
    <Section>
      <Title name="Özgeçmiş" search={false} />
      <div className='flex justify-center items-center mt-10'>
        <Link className='px-2' href={"/api/download-resume?lang=tr"} target='_blank' rel="noopener noreferrer"><Button className='ease-in-out duration-500 bg-black text-white border-black hover:bg-white hover:text-black' variant="outlined"><span>Türkçe CV İndir</span></Button></Link>
        <Link className="px-2 ms-10" href={"/api/download-resume?lang=en"} target='_blank' rel="noopener noreferrer"><Button className='ease-in-out duration-500 bg-black text-white border-black hover:bg-white hover:text-black' variant="outlined">İngilizce CV İndir</Button></Link>
      </div>
    </Section>
  )
}

export default ResumePage