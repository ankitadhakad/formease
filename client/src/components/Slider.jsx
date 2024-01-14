import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css/bundle';
import { result } from '../utils/objects';
export default function Slider() {
    SwiperCore.use([Navigation]);

  return (
    <div>
        <Swiper navigation className='border-2 rounded-2xl bg-white shadow-lg'>
            {
                result.map((url) => (
                    <SwiperSlide key={url}>
                        <div className='h-[150px]' style={{background:`url(${url}) center no-repeat`}}></div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  );
}
