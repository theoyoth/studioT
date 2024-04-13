import React from 'react'

type props = {
  text:string,
}

const TitlePage = ({text}:props) => {
  return (
    <h1 className='text-2xl font-bold bg-blue-500 text-softblack max-w-max rounded-lg px-2 font-ubuntu translate-x-20'>
      {text}
    </h1>
  )
}

export default TitlePage