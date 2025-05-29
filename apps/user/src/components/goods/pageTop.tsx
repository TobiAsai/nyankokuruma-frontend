import React from "react";
import Link from "next/link";
import { pageTopProps } from "@/types/goodsInfo";

const PageTop = ({ goodsNavInfo }: pageTopProps) => {
  return (
    <div>
      <ul className="list-none flex">
        <li className="mx-1 text-orange-200">
          <Link href={"/"}>首頁</Link>
        </li>
        <li className="mx-1 ">/</li>
        <li className="mx-1 text-orange-200">
          <Link href={"/goods"}>商品</Link>
        </li>
        <li className="mx-1">/</li>
        <li className="mx-1 text-orange-200">
          <Link href={goodsNavInfo.get("first")!!.linkTo}>
            {goodsNavInfo.get("first")!!.name}
          </Link>
        </li>
        <li className="mx-1">/</li>
        <li className="mx-1 text-orange-200">
          <Link href={goodsNavInfo.get("second")!!.linkTo}>
            {goodsNavInfo.get("second")!!.name}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PageTop;
