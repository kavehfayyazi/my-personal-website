import React from 'react'
import { motion } from 'motion/react'

const Card = ({children, className=''}) => {
  return (
    <div 
      className={['bg-white p-3 rounded-xl shadow-md shadow-black/20 hover:shadow-black/50', 
                  className
      ].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  )
}

export default Card
