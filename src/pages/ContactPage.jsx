import React from 'react'

///components
import Section from '@/components/General/Section'
import Title from '@/components/General/Title'
import Card from '@/components/Pages/Contact/Card';
import Form from '@/components/Pages/Contact/Form';

function ContactPage() {
    return (
        <Section>
            <Title name="İletişim" search={false} />
            <div className='w-11/12 lg:w-8/12 flex flex-col justify-start items-start mb-10'>
                <div className='min-w-full grid grid-cols-1 lg:grid-cols-3 justify-center items-center'>
                    <Card type="Telefon Numarası" value='0541 449 07 86' />
                    <Card type="E-mail Adresi" value='kocmelih20@gmail.com' />
                    <Card type="Adres" value='Kutlu Mahallesi 474.Cadde 37/8 Ankara-Mamak' />
                </div>
                <Form />
            </div>
        </Section>
    )
}

export default ContactPage