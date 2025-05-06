import { imageInfo } from "@/types/imageInfo";
import { menuInfo } from "@/types/menuInfo";
import { goodsInfo } from "@/types/goodsInfo";
import HeaderImage from "./components/headerImage";
import BrandsImage from "./components/brandsImage";
import GoodsInfoList from "./components/recommendGoodsInfoList";
import Menu from "./components/menu";

const Main = () => {
  const headerImagesList: imageInfo[] = [
    {
      url: "https://raw.githubusercontent.com/TobiAsai/imagesBed/refs/heads/main/images/topImg/1.jpeg",
      title: "top1",
      imageId: Math.random(),
      linkTo: null,
    },
    {
      url: "https://raw.githubusercontent.com/TobiAsai/imagesBed/refs/heads/main/images/topImg/2.jpg",
      title: "top2",
      imageId: Math.random(),
      linkTo: null,
    },
  ];

  const brandsImagesList: imageInfo[] = [
    {
      url: "https://raw.githubusercontent.com/TobiAsai/imagesBed/refs/heads/main/images/brands/1.png",
      title: "aniplex",
      imageId: Math.random(),
      linkTo: "/aniplex",
    },
    {
      url: "https://raw.githubusercontent.com/TobiAsai/imagesBed/refs/heads/main/images/brands/2.png",
      title: "annulus",
      imageId: Math.random(),
      linkTo: "/annulus",
    },
    {
      url: "https://raw.githubusercontent.com/TobiAsai/imagesBed/refs/heads/main/images/brands/3.png",
      title: "binding",
      imageId: Math.random(),
      linkTo: "/binding",
    },
    {
      url: "https://raw.githubusercontent.com/TobiAsai/imagesBed/refs/heads/main/images/brands/4.png",
      title: "freeing",
      imageId: Math.random(),
      linkTo: "/freeing",
    },
    {
      url: "https://raw.githubusercontent.com/TobiAsai/imagesBed/refs/heads/main/images/brands/5.png",
      title: "goodsmile",
      imageId: Math.random(),
      linkTo: "/goodsmile",
    },
  ];

  const menuList: menuInfo[] = [
    {
      mainInfo: "商品分類",
      url: "/",
      mainInfoId: Math.random(),
      haveSecondary: true,
      secondaryNav: [
        { info: "🐈PVC現貨", infoId: Math.random(), url: "/pvcNow" },
        { info: "🐈海外代購現貨", infoId: Math.random(), url: "/kaigai" },
        { info: "🐈PVC預購", infoId: Math.random(), url: "/pvc" },
        { info: "🐈吉伊卡哇", infoId: Math.random(), url: "/chiikawa" },
        { info: "🐈貓車福箱", infoId: Math.random(), url: "/box" },
        { info: "🐈GK現貨", infoId: Math.random(), url: "/gkNow" },
        { info: "🐈貓車周年慶", infoId: Math.random(), url: "/syuunen" },
      ],
    },
    {
      mainInfo: "商品標籤",
      url: "/classification",
      mainInfoId: Math.random(),
      haveSecondary: true,
      secondaryNav: [
        { info: "Hololive", infoId: Math.random(), url: "/hololive" },
        { info: "Nijisanji彩虹社", infoId: Math.random(), url: "/ninjisanji" },
        { info: "香香妹子", infoId: Math.random(), url: "/gril" },
        { info: "Lycoris 莉可麗絲", infoId: Math.random(), url: "/lycoris" },
        { info: "OVERLORD", infoId: Math.random(), url: "/overlord" },
        { info: "火影忍者", infoId: Math.random(), url: "/naruto" },
        { info: "初音未來miku", infoId: Math.random(), url: "/miku" },
        { info: "🐈福箱專區", infoId: Math.random(), url: "/box" },
        { info: "米哈遊", infoId: Math.random(), url: "/mihoyo" },
      ],
    },
  ];

  const goodsInfoList: goodsInfo[] = [
    {
      url: "https://raw.githubusercontent.com/TobiAsai/imagesBed/refs/heads/main/images/goodsImg/airu.jpg",
      title: "airu",
      goodsId: Math.random(),
      classification: "香香妹子",
      goodsName: "【PVC預購】1/7 天使警察 艾露‧弗拉提亞;",
      price: 5000,
      linkTo: "/goods/1",
    },
    {
      url: "https://raw.githubusercontent.com/TobiAsai/imagesBed/refs/heads/main/images/goodsImg/dusk.jpg",
      title: "dusk",
      goodsId: Math.random(),
      classification: "香香妹子",
      goodsName: "【PVC預購】1/7 PVC人形 明日方舟 夕 Dusk",
      price: 8650,
      linkTo: "/goods/2",
    },
    {
      url: "https://raw.githubusercontent.com/TobiAsai/imagesBed/refs/heads/main/images/goodsImg/hyperBody.webp",
      title: "hyperBody",
      goodsId: Math.random(),
      classification: "香香妹子",
      goodsName: "【PVC現貨】Hyper Body 神罰",
      price: 3090,
      linkTo: "/goods/3",
    },
    {
      url: "https://raw.githubusercontent.com/TobiAsai/imagesBed/refs/heads/main/images/goodsImg/miku.jpg",
      title: "miku",
      goodsId: Math.random(),
      classification: "香香妹子",
      goodsName: "【PVC預購】1/8 PVC人形 RISE UP+系列 初音未來 Fantasia Witch Ver.",
      price: 1400,
      linkTo: "/goods/4",
    },
    {
      url: "https://raw.githubusercontent.com/TobiAsai/imagesBed/refs/heads/main/images/goodsImg/noel.jpg",
      title: "noel",
      goodsId: Math.random(),
      classification: "Hololive",
      goodsName: "【PVC現貨】1/7 hololive 白銀諾艾爾",
      price: 5980,
      linkTo: "/goods/5",
    },
    {
      url: "https://raw.githubusercontent.com/TobiAsai/imagesBed/refs/heads/main/images/goodsImg/rokixi.jpg",
      title: "rokixi",
      goodsId: Math.random(),
      classification: "香香妹子",
      goodsName: "【PVC現貨】1/7洛琪希·米格路迪亞",
      price: 4380,
      linkTo: "/goods/6",
    },
  ];

  return (
    <div>
      <HeaderImage imageInfoList={headerImagesList} />
      <BrandsImage imageInfoList={brandsImagesList} />
      <ul className="w-45 absolute">
        {menuList.map((menu, index) => {
          return <Menu key={index} menuInfo={menu} />;
        })}
      </ul>
      <GoodsInfoList goodsInfoList={goodsInfoList} />
    </div>
  );
};

export default Main;
