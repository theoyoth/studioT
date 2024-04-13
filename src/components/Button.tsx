import React from 'react'

type props = {
  text: string,
  cn: string,
}

const Button = ({text,cn}:props) => {
  return (
    <button className={`rounded-lg bg-blue-500 px-8 py-2 font-semibold hover:bg-transparent hover:text-blue-500 hover:ring-2 hover:ring-inset hover:ring-blue-500 transition-all duration-200 ease-in-out ${cn}`}>{text}
    </button>
  )
}

export default Button