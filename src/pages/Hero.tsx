"use client"

import React from 'react'
import Image from "next/image";
import Button from '../components/Button';
import {motion} from "framer-motion"
import { opacityAnimation,slideUp,imgAnimation } from '@/utils/motion';

const Hero = () => {

  return (
    <div className='h-[calc(100svh-51px)]'>
      <motion.p variants={opacityAnimation} initial="hidden" animate="show" className='font-ubuntu text-xl font-bold text-softblack translate-y-8'>visualisation, interaction, by expert</motion.p>
      <div className='overflow-hidden'>
        <motion.h1 variants={slideUp} initial="hidden" animate="show" className="font-bold text-[100px] text-blue-500">WE ARE <span className="bg-blue-500 text-softblack font-ubuntu px-2 rounded-xl">StudioT</span></motion.h1>
      </div>
      <section className="relative h-[calc(100svh-152px-51px-28px)]">
        <div className='overflow-hidden pb-2'>
          <motion.h2 variants={slideUp} initial="hidden" animate="show" className="text-6xl text-softblack font-semibold relative z-10">You design. We build</motion.h2>
        </div>
        <motion.div variants={opacityAnimation} initial="hidden" animate="show">
          <Button text="Start now" cn="translate-y-20" />
        </motion.div>
        <motion.div variants={imgAnimation} initial="hidden" animate="show" className="absolute top-20 right-0 w-1/2 h-[340px]">
          <Image src="/img/img5.webp" alt="landing page image" fill sizes="(min-width:1024px) 100vw, (min-width:768px) 50vw, 33vw" priority className="object-cover object-top" />
        </motion.div>
      </section>
    </div>
  )
}

export default Hero