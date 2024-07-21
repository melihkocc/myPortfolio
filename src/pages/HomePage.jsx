import React from 'react'

/// components
import Section from '@/components/General/Section'
import CarouselComponent from '@/components/Pages/Home/CarouselComponent'
import NameLastname from '@/components/Pages/Home/NameLastname'

function HomePage() {
  return (
    <Section>
      <div className='w-screen grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2'>
        <NameLastname />
        <CarouselComponent />
      </div>
    </Section>
  )
}

export default HomePage