import React from 'react'
import ClickableCard from './ClickableCard'

const EmailCard = ({email='', className=''}) => {
  return (
    <ClickableCard
      href={`mailto:${email}`}
      className={`${className} flex items-center justify-center`}
    >
      <span className="font-funnel-sans whitespace-nowrap">
        {email}
      </span>
    </ClickableCard>
  )
}

export default EmailCard
