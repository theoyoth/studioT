"use client"

import { slideUp } from '@/utils/motion';
import {motion} from 'framer-motion';

type props = {
  children: React.ReactNode,
  cn: string,
}

const TextHero = ({children,cn}:props) => {
  return (
    <motion.h1 variants={slideUp} initial="hidden" animate="show" className={`${cn}`}>{children}</motion.h1>
  )
}

export default TextHero