"use client"

import React from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const AnimatePresences = ({children}:{children:React.ReactNode}) => {
  const router = usePathname()
  
  return (
    <AnimatePresence mode="wait">
      <motion.main>
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

export default AnimatePresences