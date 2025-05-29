import React from "react";
import { goodsInfoProps } from "@/types/goodsInfo";

const MainGoodsRight = ({ goodsInfo }: goodsInfoProps) => {
  return (
    <div className="ml-10">
      <h2 className="mb-10 text-neutral-500 text-2xl font-semibold">
        {goodsInfo.goodsName}
      </h2>
      <p className="text-red-500 text-2xl font-semibold mb-1">${goodsInfo.price}</p>
      <p>{goodsInfo.goodsName}</p>
      <hr />
      <div>
        <form>
          <span>數量:&nbsp;</span>
          <input placeholder="1" type="number" />
          <button>加入購物車</button>
        </form>
      </div>
      <div>分類:&nbsp;{goodsInfo.classification}</div>
      <div>運送方式:&nbsp;宅配到府/超商取貨</div>
      <div>付款方式:&nbsp;超商取貨付款/信用卡/ATM轉帳/超商繳費</div>
    </div>
  );
};

export default MainGoodsRight;
