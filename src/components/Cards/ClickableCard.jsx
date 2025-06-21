import React from 'react'
import Card from './Card.jsx'
import { motion } from 'motion/react'

const ClickableCard = ({children, className='', href, onClick}) => {
  const Component = href ? motion.a : motion.div

  const isMailto = typeof href === 'string' && href.startsWith('mailto:')

  const sharedProps = {
    whileHover: {scale: 1.1, boxShadow: '0 4px 10px rgba(0,0,0,1)'},
    whileTap: {scale: 0.90},
    transition: {type: 'spring', stiffness: 250},
    className: ['cursor-pointer', 'inline-block', 'rounded-xl', className].filter(Boolean).join(' '),
  }

  if(href){
    sharedProps.href = href

    if(!isMailto){ // Does not open a mailto in new tab
      sharedProps.target = '_blank',
      sharedProps.rel = 'noopener noreferrer'
    }
  }

  if(onClick) sharedProps.onClick = onClick

  return (
    <Component {...sharedProps}><Card>{children}</Card></Component>
  )
}

export default ClickableCard