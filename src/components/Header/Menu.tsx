import {motion} from "framer-motion"
import Image from "next/image"
import Link from "next/link"

type props = {
  click:(state:boolean) => void,
  state:boolean
}

const Menu = ({click,state}:props) => {
  const showNav = {
    show : {
      top:0,
      transition:{
        type:"tween",
        ease:"easeInOut",
        duration:0.4,
      }
    },
    exit:{
      top:"-100%",
      transition:{
        type:"tween",
        ease:"easeInOut",
        delay:0.2,
        duration:0.6,
      }
    }
  }
  const staggerList = {
    hidden:{
      opacity:0,
    },
    show: {
      opacity:1,
      transition:{
        staggerChildren:0.4,
        delayChildren:0.2,
      }
    },
  }
  const staggerLink = {
    hidden: {
      y:"100%",
    },
    show: {
      y:0,
      transition:{
        type:"tween",
        ease:"easeInOut",
        duration:0.2,
      }
    },
  }

  const showNavImage = {
    hidden : {
      scale:1.1,
      transition:{
        type:"tween",
        ease:"easeInOut"
      }
    },
    show : {
      scale:1,
      transition:{
        delay:0.1,
        type:"tween",
        ease:"linear",
        duration:1.4,
      }
    },
  }

  const showNavFooter = {
    hidden:{
      opacity:0,
    },
    show:{
      opacity:1,
      transition:{
        staggerChildren:0.4,
        delayChildren:0.2,
      }
    },
    exit:{
      opacity:0,
    }
  }

  const staggerNavFooter = {
    hidden: {
      y:"100%",
    },
    show: {
      y:0,
      transition:{
        type:"tween",
        ease:"easeInOut",
        duration:0.4,
      }
    }
  }

  const navLinks = [
    {
      name:"Home",
      url:"/"
    },
    {
      name:"Services",
      url:"services"
    },
    {
      name:"Portfolio",
      url:"portfolio"
    },
    {
      name:"About Us",
      url:"about-us"
    }
  ]

  return (
    <motion.div className="fixed left-0 -top-[100%] bg-softblack h-[100svh] w-screen text-softwhite z-10 flex justify-between" variants={showNav} animate="show" exit="exit">
      <section className="relative w-[50%] overflow-hidden">
        <motion.div className="relative w-full h-full" variants={showNavImage} initial="hidden" animate="show" exit="exit">
          <Image src="/img/shop.webp" alt="nav-image" fill priority sizes="(min-width:1024px) 100vw, (min-width:768px) 50vw, 33vw" className="object-cover opacity-70 blur-[2px]" />
        </motion.div>
      </section>
      <section className="w-[50%] p-32 relative">
        <h1 className="text-5xl font-semibold text-blue-400">MENU</h1>
        <motion.ul className="flex flex-col gap-4 mt-12" variants={staggerList} initial="hidden" animate="show">
          {
            navLinks.map((link,i) => (
              <motion.li key={`idx_${i}`} className="overflow-hidden hover:underline underline-offset-2 max-w-max">
                <motion.div variants={staggerLink} className="flex space-x-4">
                  <p>0{i+1}/</p>
                  <Link href={link.url} className="text-5xl" onClick={() => click(!state)}>{link.name}
                  </Link>
                </motion.div>
              </motion.li>
            ))
          }
        </motion.ul>
        
        <motion.div className="absolute right-20 bottom-10 text-sm" variants={showNavFooter} initial="hidden" animate="show" exit="exit">
          <motion.div className="overflow-hidden">
            <motion.p className="translate-y-50 text-blue-400" variants={staggerNavFooter}>Vision</motion.p>
          </motion.div>
          <motion.div className="overflow-hidden">
            <motion.p className="translate-y-50 text-blue-400" variants={staggerNavFooter}>Future design</motion.p>
          </motion.div>
          <motion.div className="overflow-hidden">
            <motion.p className="translate-y-50 text-blue-400" variants={staggerNavFooter}>Created by the Expert</motion.p>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default Menu