import React from 'react'
import Card from './Card.jsx'
import { motion } from 'motion/react'

const TextCard = ({children, className=''}) => {
  return (
    <Card className={`${className} font-funnel-sans whitespace-nowrap`}>
      {children}
    </Card>
  )
}

export default TextCard