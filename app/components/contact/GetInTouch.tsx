'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel_no: '',
    message: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://admin.calikgida.com.tr/api/contactsend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setMessage('Mesajınız gönderildi.');
      } else {
        setMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      setMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="pt-10 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-full w-full flex-1 basis-[18rem] pl-20">
          <img src="/mg_promosyon.png" alt="" className="w-full h-full" />
        </div>
        <div className="flex-1 basis-[18rem] bg-secondary py-6 !text-slate-200">
          <div className="max-w-[350px] w-full mx-auto bg-[#0a5076] p-3 rounded-lg">
            <h1 className="text-lg font-semibold">Bize Ulaşın</h1>
            <p>Tüm promosyon ürünleri ile ilgili bize ulaşabilirsiniz.</p>
            <div className="mt-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-2 py-1 border-none rounded-md outline-none text-black"
                placeholder="Ad Soyad"
              />
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-2 py-1 mt-3 border-none rounded-md outline-none text-black"
                placeholder="Email"
              />
              <input
                type="text"
                name="tel_no"
                value={formData.tel_no}
                onChange={handleChange}
                className="w-full px-2 py-1 mt-3 border-none rounded-md outline-none text-black"
                placeholder="Telefon"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 mt-3 border-none rounded-md outline-none text-black"
                rows={3}
                placeholder="Mesajınız"
              ></textarea>
              <button onClick={handleSubmit} className="w-full mt-4 bg-black p-2 rounded-md">
                Gönder
              </button>
              {message && <div>{message}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
