'use client'

import { imageInfoProps, imageInfo } from "@/types/imageInfo"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import "swiper/css/pagination"


const HeaderImage = ({imageInfoList}: imageInfoProps) => {

  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {imageInfoList.map((imageInfo: imageInfo) => {
          return (
            <SwiperSlide key={imageInfo.imageId}>
              <img className="w-full" src={imageInfo.url} alt={imageInfo.title} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  )
}

export default HeaderImage