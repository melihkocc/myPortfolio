import React from 'react'

///components
import Section from '@/components/General/Section'
import Title from '@/components/General/Title'

function Experience() {
  return (
    <Section>
      <Title name="Deneyimler" search={false} />
      <div className='w-11/12 lg:w-8/12 flex flex-col justify-start items-start'>
        <div className='w-full mt-10 border-2 p-5 rounded-lg'>
          <div className='w-full grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex flex-col'>
              <div className='text-lg lg:text-xl'>Stajyer Yazılım Geliştirici</div>
              <div className="font-light">Yosun İleri Teknoloji</div>
            </div>
            <div className='text-start lg:text-end font-light'>Ağustos 2024 - Ekim 2024</div>
          </div>
          <div className='flex flex-col mt-5'>
            <div>- Kişilere ve şirketlere yönelik websiteleri geliştirdim.</div>
            <div>- Frontend geliştirmelerini Next.js ile, backend süreçlerini Express.js kullanarak yürüttüm.</div>
            <div>- MongoDB ile veritabanı yapılandırması ve yönetimini gerçekleştirdim.</div>
            <div>- Projeleri baştan sona sorumluluk alarak tamamladım ve teslim ettim.</div>
          </div>
        </div>
        <div className='w-full mt-10 border-2 p-5 rounded-lg'>
          <div className='w-full grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex flex-col'>
              <div className='text-lg lg:text-xl'>Full-Stack Developer (Uzaktan)</div>
              <div className="font-light">Galaktik Yazılım</div>
            </div>
            <div className='text-start lg:text-end font-light'>Kasım 2024 - Halen</div>
          </div>
          <div className='flex flex-col mt-5'>
            <div>- Laravel ve Vue.js kullanarak büyük bir kurumsal şirket için özelleştirilmiş CRM uygulaması geliştirme sürecine aktif olarak katılıyorum.</div>
            <div>- Uygulamanın frontend kısmında Vue.js ile dinamik ve kullanıcı dostu arayüzler tasarladım.</div>
            <div>- Laravel ile backend süreçlerini yöneterek, API geliştirme, veritabanı işlemleri ve sunucu yapılandırmaları gibi kritik görevleri yerine getirdim.</div>
            <div>- Projenin her aşamasında yer alarak geliştirme, test etme ve dağıtım süreçlerini başarıyla yönettim.</div>
            <div>- İlerleyen dönemde benzer büyük ölçekli uygulamalar ve şirket içi projelerde yer almayı hedefliyorum.</div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Experience