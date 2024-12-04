import React from 'react'

/// components
import Section from '@/components/General/Section'
import Title from '@/components/General/Title'
import TitleSkills from "@/components/Pages/Skills/Title"
import Card from '@/components/Pages/Skills/Card'

/// utils
import images from '@/utils/images'

function SkillsPage() {
  return (
    <Section>
      <Title name="Beceriler" search={false} />

      <TitleSkills name="Programming Languages" />
      <div className='w-11/12 lg:w-8/12 flex flex-col justify-start items-start mb-5 lg:mb-10'>
        <div className='w-full grid grid-cols-1 lg:grid-cols-3 justify-center items-center'>
          <Card name={images[0].name} imageUrl={images[0].imageUrl} url={images[0].url} />
        </div>
      </div>

      <TitleSkills name="Libraries" />
      <div className='w-11/12 lg:w-8/12 flex flex-col justify-start items-start mb-5 lg:mb-10'>
        <div className='w-full grid grid-cols-1 lg:grid-cols-3'>
          <Card name={images[9].name} imageUrl={images[9].imageUrl} url={images[9].url} />
          <Card name={images[4].name} imageUrl={images[4].imageUrl} url={images[4].url} />
          <Card name={images[5].name} imageUrl={images[5].imageUrl} url={images[5].url} />
          <Card name={images[6].name} imageUrl={images[6].imageUrl} url={images[6].url} />
          <Card name={images[7].name} imageUrl={images[7].imageUrl} url={images[7].url} />
          <Card name={images[8].name} imageUrl={images[8].imageUrl} url={images[8].url} />
        </div>
      </div>

      <TitleSkills name="Markup & Styles" />
      <div className='w-11/12 lg:w-8/12  flex flex-col justify-start items-start mb-5 lg:mb-10'>
        <div className='w-full grid grid-cols-1 lg:grid-cols-3'>
          <Card name={images[1].name} imageUrl={images[1].imageUrl} url={images[1].url} />
          <Card name={images[2].name} imageUrl={images[2].imageUrl} url={images[2].url} />
          <Card name={images[3].name} imageUrl={images[3].imageUrl} url={images[3].url} />
        </div>
      </div>
      
    </Section>
  )
}

export default SkillsPage