import { motion,useInView } from 'framer-motion'
import React, { useRef } from 'react'

type props = {
  children:React.ReactNode,
}

const TextService = ({children}:props) => {
  const text = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(text,{margin:"-40% 0px -60% 0px"})

  return (
    <motion.p ref={text} className={`py-20 text-4xl font-bold transition-colors ${isInView ? 'text-softblack' : 'text-gray-300'}`}>{children}</motion.p>
  )
}

export default TextService