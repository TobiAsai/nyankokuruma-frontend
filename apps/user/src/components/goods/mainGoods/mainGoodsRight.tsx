import React from "react";
import { goodsInfoProps } from "@/types/goodsInfo";

const MainGoodsRight = ({ goodsInfo }: goodsInfoProps) => {
  return (
    <div className="ml-10">
      <h2 className="mb-10 text-neutral-500 text-2xl font-semibold">
        {goodsInfo.goodsName}
      </h2>
      <p className="text-red-500 text-2xl font-semibold mb-1">
        ${goodsInfo.price}
      </p>
      <p className="text-xl text-neutral-400 mb-2">{goodsInfo.goodsName}</p>
      <hr />
      <div className="mt-2 text-2xl text-neutral-500 ">
        <form>
          <span>數量:&nbsp;</span>
          <input
            placeholder="1"
            type="number"
            className="mt-2 text-xl text-neutral-400 border-b-2 border-neutral-500 w-20 focus:border-red-500"
          />
          <button className="ml-5 rounded-sm bg-red-200 text-sm text-white font-semibold py-1 px-2 ">
            加入購物車
          </button>
        </form>
      </div>
      <div className="mt-5 text-base text-neutral-500 font-bold">
        <div>分類:&nbsp;{goodsInfo.classification}</div>
        <div>運送方式:&nbsp;宅配到府/超商取貨</div>
        <div>付款方式:&nbsp;超商取貨付款/信用卡/ATM轉帳/超商繳費</div>
      </div>
    </div>
  );
};

export default MainGoodsRight;
