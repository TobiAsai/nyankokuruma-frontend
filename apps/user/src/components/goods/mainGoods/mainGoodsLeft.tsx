"use client";

import { imageInfo, imageInfoProps } from "@/types/imageInfo";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import React, { useState } from "react";

const MainGoodsLeft = ({ imageInfoList }: imageInfoProps) => {
  const imagesMap = new Map<number, imageInfo>();
  imageInfoList.forEach((imageInfo) => {
    imagesMap.set(imageInfo.imageId, imageInfo);
  });

  const [imageSelectedId, setImageSelectedId] = useState(0);

  return (
    <div>
      <div className="w-70 h-100">
        <img
          src={imagesMap.get(imageInfoList[imageSelectedId].imageId)?.url}
          alt={imagesMap.get(imageInfoList[imageSelectedId].imageId)?.title}
          className="w-full h-full"
        />
      </div>
      <div className="w-70 h-40">
        <Swiper
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          navigation={true}
          slidesPerView={3}
        >
          {imageInfoList.map((imageInfo) => (
            <SwiperSlide key={imageInfo.imageId}>
              <button onClick={() => setImageSelectedId(imageInfoList.findIndex(img => img.imageId === imageInfo.imageId))}>
              <img
                src={imagesMap.get(imageInfo.imageId)?.url}
                alt={imagesMap.get(imageInfo.imageId)?.title}
              />
              </button>
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MainGoodsLeft;
