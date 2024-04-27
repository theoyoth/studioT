"use client"

import { FaBars,FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "./Menu";
import { useState } from "react";

const Bar = () => {
  const [open,setOpen] = useState(false)
  const [disable,setDisable] = useState(false)

  const runAndDisabled = () => {
    disableButton()
    setOpen(!open)
  }
  
  const disableButton = () => {
    setDisable(!disable)

    setTimeout(() => {
      setDisable(false)
    },1000)
  }

  return (
    <motion.div className="rounded-md p-2 z-50">
      {open ? (
        <button onClick={() => runAndDisabled()} disabled={disable}>
          <FaTimes size="20" className={`cursor-pointer fixed top-4 right-12 z-50 ${open ? 'text-white' : 'text-softblack'}`} />
        </button>
      ) : (
        <button onClick={() => runAndDisabled()} disabled={disable}>
          <FaBars size="20" className={`cursor-pointer fixed top-4 right-12 z-50 ${open ? 'text-white' : 'text-softblack'}`} />
        </button>
        )
      }

      <AnimatePresence mode="wait">
      {
        open ? (
          <Menu click={setOpen} state={open} />
        ) : null
      }
      </AnimatePresence>
    </motion.div>
  )
}

export default Bar