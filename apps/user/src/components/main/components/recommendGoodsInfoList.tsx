"use client";

import { goodsInfoListProps } from "@/types/goodsInfo";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const GoodsImage = ({ goodsInfoList }: goodsInfoListProps) => {
  return (
    <div className="ml-60 mr-5 w-4/5 h-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        navigation={true}
        slidesPerView={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {goodsInfoList.map((goodsInfo) => {
          return (
            <SwiperSlide key={goodsInfo.goodsId}>
              <Link href={goodsInfo.linkTo!!}>
                <img
                  className="w-4/5 h-4/5 rounded-t-3xl ml-13"
                  src={goodsInfo.url}
                  alt={goodsInfo.title}
                />
              </Link>
              <div className="bg-[#f4f4f4] w-4/5 rounded-b-3xl ml-13">
                <p>{goodsInfo.classification}</p>
                <Link href={goodsInfo.linkTo!!}>
                  <p className="text-base text-[#e3da8f] underline">{goodsInfo.goodsName}</p>
                </Link>
                <p className="text-sm text-red-600">${goodsInfo.price}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default GoodsImage;
