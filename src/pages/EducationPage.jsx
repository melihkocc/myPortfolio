import React from 'react'

/// components
import Section from '@/components/General/Section'
import Title from '@/components/General/Title'
import Card from '@/components/Pages/Education/Card'

function EducationPage() {
    return (
        <Section>
            <Title name="Eğitim" search={false} />
            <div className='w-11/12 lg:w-8/12 flex flex-col justify-start items-start mb-8 mt-10'>

                <Card
                    isLeft={true}
                    schoolType="Yazılım Mühendisliği (İngilizce)"
                    schoolName="Ostim Teknik Üniversitesi"
                    schoolPlace="Türkiye - Ankara"
                    schoolYear="2021 - Halen" 
                />

                <Card
                    isLeft={false}
                    schoolType="Lise"
                    schoolName="Çağrıbey Anadolu Lisesi"
                    schoolPlace="Türkiye - Ankara"
                    schoolYear="2017 - 2021" 
                />
            </div>
        </Section>
    )
}

export default EducationPage