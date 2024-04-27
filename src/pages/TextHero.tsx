"use client"

import { propTypes } from '@/types';
import { slideUp } from '@/utils/motion';
import {motion} from 'framer-motion';

const TextHero = ({children,cn}:propTypes) => {
  return (
    <motion.h1 variants={slideUp} initial="hidden" animate="show" className={`${cn}`}>{children}</motion.h1>
  )
}

export default TextHero