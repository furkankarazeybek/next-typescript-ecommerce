'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Autoplay from "../../utils/autoplay.mjs"
import SwiperCore from 'swiper';

import 'swiper/css/autoplay';

SwiperCore.use([Autoplay]);

const HomeBanner = () => {
  const images = [
    '/banner1.jpg',
    '/banner2.jpg',
  ];

  return (
    <Swiper
    
      className="pb-10"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}

      
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            width={1920}
            height={900}
            layout="responsive"
            objectFit="cover"
            alt={`Banner Image ${index + 1}`}
            style={{ width: '100%', height: '100%', position: 'relative' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeBanner;
