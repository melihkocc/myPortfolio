import React from 'react'

///components
import Section from '@/components/General/Section'
import Title from '@/components/General/Title'

function Experience() {
  return (
    <Section>
      <Title name="Deneyimler" search={false} />
      <div className='w-11/12 lg:w-8/12 flex flex-col justify-start items-start'>

        <div className='w-full mt-10 border-2 p-5 rounded-lg border-blue-100 bg-blue-50/50 dark:border-blue-900 dark:bg-blue-900/20 transition-colors duration-300'>
          <div className='w-full grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex flex-col'>
              <div className='text-lg lg:text-xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300'>
                Aday Mühendis
              </div>
              <div className="font-semibold text-blue-700 dark:text-blue-400 transition-colors duration-300">
                Türksat A.Ş.
              </div>
            </div>
            <div className='text-start lg:text-end font-medium text-gray-600 dark:text-gray-400 transition-colors duration-300'>
              Aralık 2025 - Halen
            </div>
          </div>
          <div className='flex flex-col mt-5 text-gray-700 dark:text-gray-300 space-y-2 transition-colors duration-300'>
          </div>
        </div>

        <div className='w-full mt-10 border-2 p-5 rounded-lg border-gray-200 dark:border-gray-700 transition-colors duration-300'>
          <div className='w-full grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex flex-col'>
              <div className='text-lg lg:text-xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300'>
                Full-Stack Developer (Uzaktan)
              </div>
              <div className="font-medium text-gray-600 dark:text-gray-400 transition-colors duration-300">
                Galaktik Yazılım
              </div>
            </div>
            <div className='text-start lg:text-end font-light text-gray-500 dark:text-gray-400 transition-colors duration-300'>
              Kasım 2024 - Aralık 2025
            </div>
          </div>
          <div className='flex flex-col mt-5 text-gray-700 dark:text-gray-300 space-y-2 transition-colors duration-300'>
            <div>• Laravel ve Vue.js kullanarak büyük bir kurumsal şirket için özelleştirilmiş CRM uygulaması geliştiriyorum.</div>
            <div>• Uygulamanın frontend kısmında Vue.js ile dinamik ve kullanıcı dostu arayüzler tasarladım.</div>
            <div>• Laravel ile backend süreçlerini yöneterek; API geliştirme, veritabanı optimizasyonu ve sunucu yapılandırması görevlerini üstlendim.</div>
            <div>• Projenin geliştirme, test ve canlıya alma (deployment) süreçlerini uçtan uca yönetiyorum.</div>
          </div>
        </div>

        <div className='w-full mt-10 border-2 p-5 rounded-lg border-gray-200 dark:border-gray-700 transition-colors duration-300'>
          <div className='w-full grid grid-cols-1 lg:grid-cols-2'>
            <div className='flex flex-col'>
              <div className='text-lg lg:text-xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300'>
                Stajyer Yazılım Geliştirici
              </div>
              <div className="font-medium text-gray-600 dark:text-gray-400 transition-colors duration-300">
                Yosun İleri Teknoloji
              </div>
            </div>
            <div className='text-start lg:text-end font-light text-gray-500 dark:text-gray-400 transition-colors duration-300'>
              Ağustos 2024 - Ekim 2024
            </div>
          </div>
          <div className='flex flex-col mt-5 text-gray-700 dark:text-gray-300 space-y-2 transition-colors duration-300'>
            <div>• Kişilere ve şirketlere yönelik kurumsal web siteleri geliştirdim.</div>
            <div>• Frontend geliştirmelerini Next.js, backend süreçlerini Express.js kullanarak modern bir teknoloji yığını ile yürüttüm.</div>
            <div>• MongoDB ile NoSQL veritabanı modellemesi ve yönetimini gerçekleştirdim.</div>
            <div>• Proje sorumluluğunu alarak analizden teslimata kadar olan tüm süreçleri başarıyla tamamladım.</div>
          </div>
        </div>

      </div>
    </Section>
  )
}

export default Experience