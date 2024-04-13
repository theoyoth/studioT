"use client"

import {motion} from "framer-motion"

const Logo = () => {
  const showText = {
    hidden:{
      y:"100%",
      opacity:1,
    },
    show:{
      y:0,
      opacity:1,
      transition:{
        delay:0.4,
        type:"tween",
      }
    }
  }

  const moveT = {
    show:{
      x:61,
    }
  }
  return (
    <motion.div className="relative w-[200px] flex flex-col justify-center overflow-hidden font-ubuntu" whileHover="show" initial="hidden">
      <motion.h1 className="text-2xl font-bold flex cursor-pointer text-softblack">
        <span>S</span>
        <motion.span variants={moveT} transition={{type:"tween",ease:"easeInOut",delay:0.1}}>T</motion.span>
      </motion.h1>
      <motion.h1 className="absolute text-2xl font-bold text-softblack" variants={showText}><span className="opacity-0">S</span>tudio<span className="opacity-0">T</span></motion.h1>
    </motion.div>
  )
}

export default Logo