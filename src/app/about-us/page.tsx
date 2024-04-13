"use client"

import TitlePage from '@/components/TitlePage'
import Image from 'next/image'
import {motion} from "framer-motion"
import { imgAnimation,opacityAnimation,slideUp } from '@/utils/motion'

const About = () => {
  return (
    <div className='relative h-[calc(100svh-51px)] overflow-hidden'>
      <TitlePage text="About us" />
      <section className='overflow-hidden pb-8'>
        <motion.p variants={slideUp} initial="hidden" animate="show" className='w-[800px] text-4xl font-bold text-softblack text-justify relative left-20 top-4'>StudioT is a Professional website agent maker Platform. We are committed to providing you the best visualisation, interactifity, dan modern.<br/>
        <span className='text-blue-500'>Thank you For Visiting Our Site.</span>
        </motion.p>
      </section>
      <motion.div variants={imgAnimation} initial="hidden" animate="show" className='w-[800px] h-[300px] absolute bottom-0 left-20'>
        <Image src="/img/about/img-about.webp" alt="image about" fill priority sizes="(min-width:1024px) 100vw, (min-width:768px) 50vw, 33vw" className="object-cover" />
      </motion.div>
      <motion.p variants={opacityAnimation} initial="hidden" animate="show" className='text-sm italic font-semibold text-softblack absolute bottom-20 right-0 w-[300px] text-justify'>“To become successful online, you only need to remember the following : Good Heart + Passion + Web Design + SEO + Digital Marketing + Dedication + Positiveness + Patience = Success”.<br/>
      <span>-Dr. Christopher Dayagdag-</span>
      </motion.p>
    </div>
  )
}

export default About