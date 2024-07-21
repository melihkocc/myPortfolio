import React from 'react';
import SocialMedias from './SocialMedias';

function NameLastname() {

  return (
    <div className='flex flex-col justify-center items-center lg:justify-end lg:items-end '>
      <h1 className='text-4xl lg:text-6xl font-black mt-10 lg:mt-0'>Melih Koç,</h1>
      <span className='text-sm lg:text-base w-8/12 text-justify mt-2 font-light lg:mt-5'>Ostim Teknik Üniversitesi Yazılım Mühendisliği (İngilizce) bölümünde önümüzdeki dönem 3. sınıfa geçeceğim. Yazılım geliştirme dünyasında kendimi sürekli olarak geliştirmeye odaklandım ve bu süreçte birçok modern teknolojiye hakim oldum. Front-end tarafında React.js, Next.js, React Native ve Tailwind ile projeler geliştirdim. Back-end tarafında ise Node.js ve Express.js kullanarak çeşitli uygulamalar yazdım. Henüz profesyonel iş deneyimim olmasa da, öğrendiklerimi projelerimde uygulayarak pratik kazanıyorum ve yazılım dünyasında güçlü bir yer edinmeyi hedefliyorum.lama</span>
      <SocialMedias />
    </div>
  );
}

export default NameLastname;