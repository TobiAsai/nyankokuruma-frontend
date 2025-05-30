"use client";

import React from "react";
import Arrived from "./arrived";
import State from "./status";
import { goodsInfoProps } from "@/types/goodsInfo";

const PageDown = ({ goodsInfo }: goodsInfoProps) => {
  const [isOneOrSecond, setIsOneOrSecond] = React.useState<boolean>(true);

  return (
    <div className="bg-red-100 p-5">
      <div className="flex flex-col w-1/2 h-full m-auto bg-white p-3 rounded-lg">
        <ul className="flex flex-row justify-between w-50 m-auto mb-3 text-gray-500 text-2xl">
          <li>
            <button
              onClick={() => {
                setIsOneOrSecond(true);
              }}
              className={`${isOneOrSecond && "text-black"}`}
            >
              商品規格
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setIsOneOrSecond(false);
              }}
              className={`${!isOneOrSecond && "text-black"}`}
            >
              用戶協議
            </button>
          </li>
        </ul>
        <hr />
        {isOneOrSecond ? <Arrived goodsInfo={goodsInfo} /> : <State />}
      </div>
    </div>
  );
};

export default PageDown;
