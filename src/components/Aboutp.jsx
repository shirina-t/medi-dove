import React from 'react'

const Aboutp = ({ children, className = "" }) => {
  return (
    <p className={`text-[#647589] text-[14px] font-normal leading-[26px] ${className}`}>
      {children}
    </p>
  )
}

export default Aboutp
