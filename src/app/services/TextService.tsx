"use client"

import { useImageStore } from '@/store/useImageStore'
import { motion,useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

type props = {
  index: number,
  children:React.ReactNode,
}

const TextService = ({index,children}:props) => {
  const text = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(text,{margin:"-40% 0px -60% 0px"})
  const serviceState = useImageStore(state => state.setIndexImageService)
  const setServiceState = useImageStore(state => state.indexImageService)

  useEffect(() => {
    if(isInView) serviceState(index)
  },[setServiceState,serviceState,isInView])

  return (
    <motion.p ref={text} className={`py-20 text-4xl font-bold transition-colors ${isInView ? 'text-softblack' : 'text-gray-300'}`}>{children}</motion.p>
  )
}

export default TextService