import React from 'react'
import ClickableCard from './ClickableCard'

const IconCard = ({children, className='', href}) => {
  return (
    <ClickableCard
      href={href}
      className={`${className} flex items-center justify-center w-[4rem] h-[4rem]`}
    >
      {children}
    </ClickableCard>
  )
}

export default IconCard
