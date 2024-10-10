import Section from '@/components/General/Section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <Section>
      <div className='w-full flex flex-col'>
        <div className='text-center text-xl lg:text-5xl'>404</div>
        <div className='text-center text-lg lg:text-xl'>PAGE NOT FOUND</div>
        <div className='text-center text-lg lg:text-xl mt-5'>Üzgünüz Sayfa Bulunamadı</div>
      </div>
      <Link href={"/"} className='mt-5'><Button>Anasayfa</Button></Link>
    </Section>
  )
}

export default NotFound