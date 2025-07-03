import React from 'react'
import Card from './Card.jsx'

const TextCard = ({children, className=''}) => {
  return (
    <Card className={`${className} font-funnel-sans whitespace-nowrap`}>
      {children}
    </Card>
  )
}

export default TextCard