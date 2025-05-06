"use client";

import { goodsNavInfo, mainGoodsInfo } from "@/types/goodsInfo";
import Link from "next/link";
import { useParams } from "next/navigation";

const Goods = () => {
  let goodsNavInfo = new Map<string, goodsNavInfo>();
  goodsNavInfo.set("first", {
    navId: Math.random(),
    name: "🐈PVC預購",
    linkTo: "/pvc",
  });
  goodsNavInfo.set("second", {
    navId: Math.random(),
    name: "香香妹子",
    linkTo: "/gril",
  });

  const mainGoodsInfo: mainGoodsInfo = {
    goodsInfo: {
      url: "https://raw.githubusercontent.com/TobiAsai/imagesBed/refs/heads/main/images/goodsImg/airu.jpg",
      title: "airu",
      goodsId: Math.random(),
      classification: "香香妹子",
      goodsName: "【PVC預購】1/7 天使警察 艾露‧弗拉提亞;",
      price: 5000,
      linkTo: "/goods/1",
    },
    goodsNavInfo: goodsNavInfo,
  };

  return (
    <div>
      <ul className="list-none flex">
        <li className="mx-1 text-orange-100">
          <Link href={"/"}>首頁</Link>
        </li>
        <li className="mx-1">/</li>
        <li className="mx-1">
          <Link href={"/goods"}>商品</Link>
        </li>
        <li className="mx-1">/</li>
        <li className="mx-1">
          <Link href={mainGoodsInfo.goodsNavInfo.get("first")!!.linkTo}>
            {mainGoodsInfo.goodsNavInfo.get("first")!!.name}
          </Link>
        </li>
        <li className="mx-1">/</li>
        <li className="mx-1">
          <Link href={mainGoodsInfo.goodsNavInfo.get("second")!!.linkTo}>
            {mainGoodsInfo.goodsNavInfo.get("second")!!.name}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Goods;
