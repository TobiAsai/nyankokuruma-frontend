"use client";

import { imageInfo, imageInfoProps } from "@/types/imageInfo";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import React from "react";

const MainGoodsLeft = ({ imageInfoList }: imageInfoProps) => {
  const imagesMap = new Map<number, imageInfo>();
  imageInfoList.forEach((imageInfo) => {
    imagesMap.set(imageInfo.imageId, imageInfo);
  });

  return (
    <div>
      <div>
        <img
          src={imagesMap.get(imageInfoList[0].imageId)?.url}
          alt={imagesMap.get(imageInfoList[0].imageId)?.title}
        />
      </div>
      <div className="w-">
        <Swiper
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          navigation={true}
          slides-per-view={3}
        >
          {imageInfoList.map((imageInfo) => (
            <SwiperSlide key={imageInfo.imageId}>
              <img
                src={imagesMap.get(imageInfo.imageId)?.url}
                alt={imagesMap.get(imageInfo.imageId)?.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MainGoodsLeft;
