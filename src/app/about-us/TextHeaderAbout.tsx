"use client"

import { slideUp } from '@/utils/motion';
import {motion} from 'framer-motion';

const TextHeaderAbout = () => {
  return (
    <motion.h1 variants={slideUp} initial="hidden" animate="show" className='w-[800px] text-4xl font-bold text-softblack text-justify relative left-20 top-4'>StudioT is a professional website development agency. We are committed to providing you the best visualisation, interactifity, dan modern website.<br/>
    <span className='text-blue-500'>Thank you For Visiting Our Site.</span>
    </motion.h1>
  )
}

export default TextHeaderAbout