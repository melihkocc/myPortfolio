import React from 'react';
import SocialMedias from './SocialMedias';

function NameLastname() {

  return (
    <div className='flex flex-col justify-center items-center lg:justify-end lg:items-end '>
      <h1 className='text-4xl lg:text-6xl font-black mt-10 lg:mt-0'>Melih Koç,</h1>
      <span className='text-sm lg:text-base w-8/12 text-justify mt-2 font-light lg:mt-5'>
Ostim Teknik Üniversitesi Yazılım Mühendisliği (İngilizce) bölümünde 3. sınıfa geçmekteyim. Yazılım geliştirme alanında kendimi sürekli olarak geliştirmeye adadım ve bu süreçte birçok modern teknolojiye hakim oldum. Front-end tarafında React.js, Next.js, React Native ve Tailwind CSS kullanarak projeler geliştirdim. Back-end tarafında ise Node.js ve Express.js ile çeşitli uygulamalar yazdım. Henüz profesyonel iş deneyimim olmasa da, öğrendiğim bilgileri projelerimde uygulayarak pratik kazanıyorum. Yazılım dünyasında sağlam bir yer edinmeyi hedefliyor ve bu alanda kendimi sürekli geliştirerek katkıda bulunmayı amaçlıyorum.</span>
      <SocialMedias />
    </div>
  );
}

export default NameLastname;