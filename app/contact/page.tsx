'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FiMail, FiPhone } from "react-icons/fi";
import { BiMap } from "react-icons/bi";
import GetInTouch from "../components/contact/GetInTouch";
const Contact = () => {

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
        <>
            <div className="relative px-10" style={{ backgroundImage: 'url("/arkplan.png")', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative',boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
               <div className="absolute inset-0 bg-black opacity-50"></div>
               <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly relative">
                   <div className="mb-8 md:mb-0 text-center z-10">
                       <h1 className="text-4xl md:text-6xl font-bold text-white" style={{ WebkitTextStroke: '1px black'}}>İLETİŞİM</h1>
                   </div>
               </div>
           </div>


           <div className="flex flex-col sm:flex-row">
        
       <div className=" w-full sm:w-1/2 py-20 px-20">

       <div className="flex-1 basis-[18rem] bg-secondary py-6 !text-white">
          <div className="max-w-[800px] w-full mx-auto bg-[#131a23] p-3 rounded-lg">
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
                rows={10}
                placeholder="Mesajınız"
              ></textarea>
              <button onClick={handleSubmit} className="w-full mt-4 bg-[#febb6e] p-2 rounded-md text-black">
                Gönder
              </button>
              {message && <div>{message}</div>}
            </div>
          </div>
        </div>

       
       </div>  

       <div className="w-full  sm:w-1/2  pt-20 pb-10 px-10">

       <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Haydar%20%C3%87avu%C5%9F%20Mh.%20%C5%9Eehit%20s%C3%BCleymanbey%20Cad.%20No:10/B+(Haydar%20%C3%87avu%C5%9F%20Mh.%20%C5%9Eehit%20s%C3%BCleymanbey%20Cad.%20No:10/B)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    
          width="100%"
           height="400"
           
          
        
                
       /> 	
         <div className="grid grid-cols-1 gap-6 pt-20 sm:grid-cols-2 md:grid-cols-3">


         <div className="text-center ">
            <div className="icon-box !h-14 !w-14 !bg-primary text-black mx-auto text-4xl">
              <BiMap />  
           </div>
           <h1 className="mt-2 text-lg font-semibold">Ofis Adresi</h1>
           <p>Haydar Çavuş Mahallesi</p>
           <p>Şehit Süleyman Bey Caddesi</p>
           <p>10200, Bandırma/Balıkesir</p>
         
          </div>
         
          <div className="text-center">
            <div className="icon-box !h-14 !w-14 !bg-primary text-black mx-auto text-4xl">
              <FiPhone />  
           </div>
           <h1 className="mt-2 text-lg font-semibold">Telefon</h1>
             <p>0850 309 3925</p>
             
          </div>
         
         
          <div className="text-center">
            <div className="icon-box !h-14 !w-14 !bg-primary text-black mx-auto text-4xl">
              <FiMail />  
           </div>
           <h1 className="mt-2 text-lg font-semibold">E-Posta</h1>
             <p>info@mgpromosyon.com</p>
             
          </div>
         
          </div>
        </div>  


       </div>

   
        
        </>

      
    
    )
}
 
export default Contact