import React from 'react';
import SocialMedias from './SocialMedias';

function NameLastname() {

  return (
    <div className='flex flex-col justify-center items-center lg:justify-end lg:items-end '>
      <h1 className='text-4xl lg:text-6xl font-black mt-10 lg:mt-0'>Melih Koç,</h1>
      <span className='text-sm lg:text-base w-8/12 text-justify mt-2 font-light lg:mt-5'>Ostim Teknik Üniversitesi Yazılım Mühendisliği (İngilizce) 3. sınıf öğrencisiyim. Yazılım geliştirme alanında kendimi geliştirmeye adayan, öğrenmeye açık ve dinamik bir bireyim. Modern teknolojilerle birçok proje geliştirerek hem teorik bilgi hem de pratik deneyim kazandım. Front-end tarafında React.js, Next.js, React Native ve Tailwind CSS kullanarak kullanıcı dostu ve performans odaklı arayüzler tasarlarken, back-end tarafında Node.js, Express.js ve Spring Boot ile ölçeklenebilir, güvenilir sunucu uygulamaları geliştirdim.</span>
      <span className='text-sm lg:text-base w-8/12 text-justify mt-2 font-light lg:mt-2'>Henüz profesyonel iş deneyimim olmasa da, kişisel projelerimle pratik kazanarak öğrendiklerimi gerçek dünya uygulamalarında test etme şansı buldum. Yazılım dünyasında güçlü bir yer edinmeyi, kendimi sürekli geliştirmeyi ve yenilikçi çözümlerle sektöre katkı sunmayı hedefliyorum.</span>

      <SocialMedias />
    </div>
  );
}

export default NameLastname;