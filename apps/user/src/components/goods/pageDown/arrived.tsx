import React from "react";
import { goodsInfoProps } from "@/types/goodsInfo";

const Arrived = ({ goodsInfo }: goodsInfoProps) => {
  return (
    <div className="flex flex-col w-full h-full bg-white p-3 rounded-lg">
      <p className="mb-1">🐈商品名稱： {goodsInfo.goodsName}</p>
      <p className="mb-1">🐈上市日期：{goodsInfo.releaseDtae}</p>
      <p className="mb-1">🐈品牌：{goodsInfo.brand}</p>
      <p className="mb-1">🐈價錢：NT. {goodsInfo.price}</p>
      <p>請事先規劃您的購物歷程，感謝您的配合。</p>
    </div>
  );
};

export default Arrived;
