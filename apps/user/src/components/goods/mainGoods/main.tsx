import React from 'react'
import MainGoodsLeft from './mainGoodsLeft'
import MainGoodsRight from './mainGoodsRight'
import { goodsInfoProps } from '@/types/goodsInfo'
import { imageInfo } from '@/types/imageInfo'

const MainGoods = ({goodsInfo}: goodsInfoProps) => {

  const images: imageInfo[] = [
    {
      url: "https://raw.githubusercontent.com/TobiAsai/imagesBed/refs/heads/main/images/goodsDetailsImg/airu/1.webp",
      title: "airu1",
      imageId: Math.random(),
    },
    {
      url: "https://raw.githubusercontent.com/TobiAsai/imagesBed/refs/heads/main/images/goodsDetailsImg/airu/2.webp",
      title: "airu2",
      imageId: Math.random(),
    },
    {
      url: "https://raw.githubusercontent.com/TobiAsai/imagesBed/refs/heads/main/images/goodsDetailsImg/airu/3.webp",
      title: "airu3",
      imageId: Math.random(),
    },
    {
      url: "https://raw.githubusercontent.com/TobiAsai/imagesBed/refs/heads/main/images/goodsDetailsImg/airu/4.webp",
      title: "airu4",
      imageId: Math.random(),
    },
  ];


  return (
    <div className='flex flex-row w-1/2 h-full m-auto mt-20'>
      <MainGoodsLeft imageInfoList={images} />
      <MainGoodsRight goodsInfo={goodsInfo} />
    </div>
  )
}

export default MainGoods