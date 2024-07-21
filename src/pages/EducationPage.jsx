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
                    schoolType="Lise"
                    schoolName="Çağrıbey Anadolu Lisesi"
                    schoolPlace="Türkiye - Ankara"
                    schoolYear="4 yıl"
                />

                <Card
                    isLeft={false}
                    schoolType="Yazılım Mühendisliği (İngilizce)"
                    schoolName="Ostim Teknik Üniversitesi"
                    schoolPlace="Türkiye - Ankara"
                    schoolYear="5 yıl"
                />
            </div>
        </Section>
    )
}

export default EducationPage