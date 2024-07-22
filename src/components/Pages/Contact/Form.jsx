"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('Gönderiliyor...');
        try {
            const response = await fetch(`/api/send-mail`, {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            })
            if (response.ok) {
                setStatus('Mesajınız başarıyla gönderildi!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('Bir hata oluştu, lütfen tekrar deneyin.');
            }
        } catch (error) {
            setStatus('Bir hata oluştu, lütfen tekrar deneyin.');
        }
    };
    return (
        <>
            <div className='w-full flex justify-center items-center text-2xl mt-20'>Bana Ulaşın</div>
            <form className='w-full flex flex-col justify-center items-center ' onSubmit={handleSubmit}>
                <div className='w-11/12 lg:w-1/2'>
                    <label htmlFor="name" className="w-full block text-sm font-medium leading-6 text-gray-900">
                        İsim Soyisim
                    </label>
                    <div className="relative w-full mt-2 rounded-md shadow-sm">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="İsim Soyisim"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="block dark:bg-slate-950 dark:text-white dark:placeholder:text-white w-full rounded-md border-0 py-1.5 pl-5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className='w-11/12 lg:w-1/2 mt-5'>
                    <label htmlFor="email" className="w-full block text-sm font-medium leading-6 text-gray-900">
                        E-mail
                    </label>
                    <div className="relative w-full mt-2 rounded-md shadow-sm">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block dark:bg-slate-950 dark:text-white dark:placeholder:text-white w-full rounded-md border-0 py-1.5 pl-5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className='w-11/12 lg:w-1/2 mt-5'>
                    <label htmlFor="message" className="w-full block text-sm font-medium leading-6 text-gray-900">
                        Mesaj
                    </label>
                    <div className="relative w-full mt-2 rounded-md shadow-sm">
                        <textarea
                            id="message"
                            name="message"
                            rows={3}
                            placeholder="Mesaj"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="block dark:bg-slate-950 dark:text-white dark:placeholder:text-white w-full rounded-md border-0 py-1.5 pl-5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className='w-full flex justify-center items-center text-sm mb-2 mt-10'>{status && <span className={`${status === "Mesajınız başarıyla gönderildi!" ? "text-green-400" : "text-black"}`}>{status}</span>}</div>
                <Button className='w-11/12 lg:w-1/2' type='submit'>Gönder</Button>
            </form>
        </>
    )
}

export default Form;