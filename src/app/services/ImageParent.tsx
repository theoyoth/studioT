"use client"

import ImageContainer from '@/components/ImageContainer'
import { useImageStore } from '@/store/useImageStore';

const ImageParent = () => {
  const indexServiceState = useImageStore(state => state.indexImageService);
  
  return (
    <>
      <ImageContainer cn="relative w-[500px] h-[400px]" src={`/img/service/${indexServiceState}.webp`} />
    </>
  )
}

export default ImageParent