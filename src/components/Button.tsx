"use client"

import { propTypes } from '@/types';
import { opacityAnimation } from '@/utils/motion';
import {motion} from 'framer-motion';

const Button = ({text,cn}:propTypes) => {
  return (
    <motion.button variants={opacityAnimation} initial="hidden" animate="show" className={`rounded-lg bg-blue-500 px-8 py-2 font-semibold hover:bg-transparent hover:text-blue-500 hover:ring-2 hover:ring-inset hover:ring-blue-500 transition-all duration-200 ease-in-out ${cn}`}>{text}
    </motion.button>
  )
}

export default Button