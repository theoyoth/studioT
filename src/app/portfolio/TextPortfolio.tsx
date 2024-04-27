"use client"

import { motion } from 'framer-motion'
import { useImageStore } from '@/store/useImageStore'
import { slideUp } from '@/utils/motion'
import { FaArrowRight } from 'react-icons/fa'

type props = {
  id:number,
  title:string,
}

const TextPortfolio = ({id,title}:props) => {
  const stateIndexPortfolioState = useImageStore(state => state.setIndexImagePortfolio )

  return (
    <div key={`port_${id}`} className='p-4 mb-6 rounded-lg bg-gray-200 max-w-max hover:text-blue-500 cursor-pointer group overflow-hidden' onClick={() => stateIndexPortfolioState(id)}>
      <motion.h1 variants={slideUp} initial="hidden" animate="show"  className='font-bold text-2xl flex items-center space-x-4'>
        <span>{title}</span>
        <FaArrowRight className='text-lg group-hover:rotate-[45deg] transition-transform ease-in-out' />
      </motion.h1>
    </div>
  )
}

export default TextPortfolio