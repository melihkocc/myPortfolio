import React from 'react'

/// components
import Section from '@/components/General/Section'
import Title from '@/components/General/Title'
import TitleSkills from "@/components/Pages/Skills/Title"
import Card from '@/components/Pages/Skills/Card'

/// utils
import skillCategories from '@/utils/images'

function SkillsPage() {
  return (
    <Section>
      <Title name="Beceriler" search={false} />

      {skillCategories.map((category, index) => (
        <React.Fragment key={index}>
          <TitleSkills name={category.title} />
          <div className='w-11/12 lg:w-8/12 flex flex-col justify-start items-start mb-5 lg:mb-10'>
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 justify-center items-center'>
              {category.skills.map((skill, skillIndex) => (
                <Card key={skillIndex} name={skill.name} imageUrl={skill.imageUrl} url={skill.url} />
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}

    </Section>
  )
}

export default SkillsPage