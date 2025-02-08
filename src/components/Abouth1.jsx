import React from 'react'

const Abouth1 = ({ children, className = "" }) => {
  return (
    <h1 className={`xl:text-6xl lg:text-5xl sm:4xl tracking-wide text-[#223645] font-[600] font-poppins leading-[1.22] ${className}`}>
      {children}
    </h1>
  )
}

export default Abouth1
