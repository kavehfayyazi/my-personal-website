import React from 'react'
import ClickableCard from './ClickableCard'

const ButtonCard = ({children, className='', onClick}) => {
  return (
    <ClickableCard 
      className={`${className}`}
      onClick={onClick}
      asButton={true}
    >
      {children}
    </ClickableCard>
  )
}

export default ButtonCard