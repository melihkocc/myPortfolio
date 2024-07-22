import React from 'react'
import Link from 'next/link'

///components
import Section from '@/components/General/Section'
import Title from '@/components/General/Title'
import { Button } from '@/components/ui/button';

function ResumePage() {
  return (
    <Section>
      <Title name="Özgeçmiş" search={false} />
      <div className='flex justify-center items-center mt-10'>
        <Link className='px-2' href={"/api/download-resume?lang=tr"} target='_blank' rel="noopener noreferrer"><Button className='ease-in-out duration-500'><span>Türkçe CV İndir</span></Button></Link>
        <Link className="px-2 ms-10" href={"/api/download-resume?lang=en"} target='_blank' rel="noopener noreferrer"><Button className='ease-in-out duration-500'>İngilizce CV İndir</Button></Link>
      </div>
    </Section>
  )
}

export default ResumePage