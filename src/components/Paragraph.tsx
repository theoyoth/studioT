"use client"

import {motion} from 'framer-motion';
import { opacityAnimation } from '@/utils/motion';

type props = {
  children:React.ReactNode
  cn:string,
}

const Paragraph = ({children,cn}:props) => {
  return (
    <motion.p variants={opacityAnimation} initial="hidden" animate="show" className={`text-softblack font-semibold ${cn}`}>
      {children}
    </motion.p>
  )
}

export default Paragraph