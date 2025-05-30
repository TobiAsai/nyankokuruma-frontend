"use client";

import React from "react";
import Arrived from "./arrived";
import State from "./status";
import { goodsInfoProps } from "@/types/goodsInfo";

const PageDown = ({ goodsInfo }: goodsInfoProps) => {
  const [isOneOrSecond, setIsOneOrSecond] = React.useState<boolean>(true);

  return (
    <div className="flex flex-col w-1/2 h-full m-auto mt-10">
      <ul className="flex flex-row justify-between w-40 m-auto">
        <li><button onClick={() => {setIsOneOrSecond(true)}}>商品規格</button></li>
        <li><button onClick={() => {setIsOneOrSecond(false)}}>用戶協議</button></li>
      </ul>
      <hr />
      {isOneOrSecond ? <Arrived goodsInfo={goodsInfo} /> : <State />}
    </div>
  );
};

export default PageDown;
