// "use client";

import MainGoods from "@/components/goods/mainGoods/main";
import PageDown from "@/components/goods/pageDown/main";
import PageTop from "@/components/goods/pageTop";
import { goodsNavInfo, mainGoodsInfo } from "@/types/goodsInfo";

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
      goodsName: "【PVC預購】1/7 天使警察 艾露‧弗拉提亞",
      price: 5000,
    },
    goodsNavInfo: goodsNavInfo,
  };

  return (
    <>
      <PageTop goodsNavInfo={mainGoodsInfo.goodsNavInfo} />
      <MainGoods goodsInfo={mainGoodsInfo.goodsInfo} />
      <PageDown />
    </>
  );
};

export default Goods;
