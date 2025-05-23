interface goodsNavInfo {
  navId: number
  name: string
  linkTo: string
}

interface goodsImageInfo {
  url: string;
  title: string;
  imageId: number;
}

interface goodsInfo {
  url: string;
  title: string;
  goodsId: number;
  classification: string;
  goodsName: string;
  price: number;
  linkTo?: string;
}

interface goodsInfoProps {
  goodsInfo: goodsInfo;
}
interface goodsInfoListProps {
  goodsInfoList: goodsInfo[];
}

interface goodsImageInfoProps {
  goodsImageInfoList: goodsImageInfo[];
}

interface mainGoodsInfo {
  goodsInfo: goodsInfo
  goodsNavInfo: Map<string, goodsNavInfo>
}

interface pageTopProps {
  goodsNavInfo: Map<string, goodsNavInfo>
}

export type { goodsInfo, goodsImageInfo, goodsInfoProps, goodsImageInfoProps, goodsNavInfo, mainGoodsInfo, pageTopProps, goodsInfoListProps };
