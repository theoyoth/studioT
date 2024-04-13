"use client"

import React, { useRef } from 'react'
import TitlePage from '@/components/TitlePage'
import { data } from './portfolioData'
import Image from 'next/image'
import { motion } from 'framer-motion'
import LenisScroll from '@/components/LenisScroll'
import { opacityAnimation } from '@/utils/motion'

const Portfolio = () => {
  const container = useRef<HTMLDivElement>(null)

  return (
    <LenisScroll>
      <div className='static'>
        <TitlePage text="Portfolio" />
        <motion.p variants={opacityAnimation} initial="hidden" animate="show" className='text-softblack text-xl text-center font-semibold'>"we are promising best user experience to our client."<br/>This is some of our portfolio</motion.p>
        <section className='flex flex-col items-center mt-[40vh] relative' ref={container}>
          {data.map((portfolio) => (
            <motion.div key={portfolio?.id} className='flex items-center w-3/4 h-screen sticky top-0'>
              <div className='relative w-full h-2/3 bg-softwhite shadow-lg shadow-blue-500 rounded-xl flex p-4'>
                <div className='w-full p-8'>
                  <h1 className='font-bold text-2xl text-blue-500'>{portfolio?.title}</h1>
                  <p className='font-semibold text-sm text-justify'>{portfolio?.p}</p>
                </div>
                <div className='w-full h-2/3 relative top-1/2 -translate-y-1/2'>
                    <Image src={portfolio?.imgUrl} alt={portfolio?.title} fill sizes="(min-width:1024px) 100vw, (min-width:768px) 50vw, 33vw" priority className='object-cover rounded-lg shadow-lg' />
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </LenisScroll>
  )
}

export default Portfolio