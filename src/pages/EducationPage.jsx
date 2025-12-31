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

                {/* 1. SIRA: ÜNİVERSİTE (En Güncel - En Üste) */}
                <Card
                    isLeft={true}
                    schoolType="Yazılım Mühendisliği (İngilizce)"
                    schoolName="Ostim Teknik Üniversitesi"
                    schoolPlace="Türkiye - Ankara"
                    // "5 yıl" yerine başlangıç ve (tahmini) bitiş veya "Halen" yazmak daha iyidir
                    schoolYear="2021 - Halen" 
                    // Veya mezuniyet kesinse: "2021 - 2025 (Beklenen)"
                />

                {/* 2. SIRA: LİSE (Geçmiş - Alta) */}
                <Card
                    isLeft={false}
                    schoolType="Lise"
                    schoolName="Çağrıbey Anadolu Lisesi"
                    schoolPlace="Türkiye - Ankara"
                    // Buraya da mezun olduğun aralığı yazmalısın
                    schoolYear="2017 - 2021" 
                />
            </div>
        </Section>
    )
}

export default EducationPage