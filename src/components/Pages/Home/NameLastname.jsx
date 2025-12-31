import React from 'react';
import SocialMedias from './SocialMedias';

function NameLastname() {

  return (
    <div className='flex flex-col justify-center items-center lg:justify-end lg:items-end'>
      
      {/* İSİM: Simsiyah ve net */}
      <h1 className='text-4xl lg:text-6xl font-black mt-10 lg:mt-0 text-black'>
        Melih Koç
      </h1>

      {/* UNVAN: Renkli değil, asil bir koyu gri (Slate/Gray). 
          Sitenin siyah-beyaz yapısına en uygun profesyonel duruş budur. */}
      <h2 className='text-lg lg:text-2xl font-semibold text-gray-600 mt-2 mb-2'>
        Aday Mühendis @Türksat
      </h2>

      {/* AÇIKLAMA: Yazı içeriği güncellendi, tasarım orijinaliyle birebir aynı */}
      <span className='text-sm lg:text-base w-8/12 text-justify font-light lg:mt-3 text-gray-800'>
        Ostim Teknik Üniversitesi Yazılım Mühendisliği (İngilizce) 4. sınıf öğrencisiyim. Yazılım geliştirme alanında kendimi geliştirmeye adayan, öğrenmeye açık ve dinamik bir bireyim. Şu an Türksat bünyesinde edindiğim kurumsal deneyimle birlikte; modern teknolojilerle birçok proje geliştirerek hem teorik bilgi hem de pratik deneyim kazandım. Front-end tarafında React.js, Next.js, Vue.js, React Native ve Tailwind CSS kullanarak kullanıcı dostu ve performans odaklı arayüzler tasarlarken, back-end tarafında Laravel, Node.js, Express.js ve Spring Boot ile ölçeklenebilir, güvenilir sunucu uygulamaları geliştirdim.
      </span>

      <SocialMedias />
    </div>
  );
}

export default NameLastname;