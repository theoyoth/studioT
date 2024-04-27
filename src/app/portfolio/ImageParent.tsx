"use client"

import ImageContainer from '@/components/ImageContainer'
import { useImageStore } from '@/store/useImageStore'

const ImageParent = () => {
  const indexPortfolioState = useImageStore(state => state.indexImagePortfolio)

  return (
    <>
      <ImageContainer cn="relative w-full h-[350px]" src={`/img/portfolio/${indexPortfolioState}.webp`} />
    </>
  )
}

export default ImageParent