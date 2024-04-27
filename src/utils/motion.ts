export const slideUp = {
  hidden:{
    y:"140%",
  },
  show:{
    y:0,
    transition:{
      type:"tween",
      ease:"easeInOut",
      duration:0.6,
      delay:0.5,
    }
  }
}
export const opacityAnimation = {
  hidden:{
    opacity:0,
  },
  show:{
    opacity:1,
    transition:{
      type:"tween",
      ease:"easeInOut",
      duration:0.4,
      delay:1,
    }
  }
}

export const imgAnimation = {
  hidden:{
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
  },
  show:{
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      delay:0.8,
      duration:0.5,
      type:"tween",
      ease:'easeInOut',
    }
  }
}