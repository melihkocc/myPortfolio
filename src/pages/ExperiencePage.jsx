import React from 'react'

///components
import Section from '@/components/General/Section'
import Title from '@/components/General/Title'

function Experience() {
  return (
    <Section>
      <Title name="Deneyimler" search={false} />
      <div className='w-11/12 lg:w-8/12 flex flex-col justify-start items-start'>
        <div className='text-center w-full mt-10 text-base lg:text-xl underline'>Henüz Deneyimim Yok.</div>
      </div>
    </Section>
  )
}

export default Experience