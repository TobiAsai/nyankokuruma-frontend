'use client'

import { useParams } from "next/navigation"

const Goods = () => {
  return (
    <div>Goods {useParams().goodsID}</div>
  )
}

export default Goods