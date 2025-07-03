import React, { useState } from 'react'
import ButtonCard from './ButtonCard';

const CopyButtonCard = ({textToCopy}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }

  return (
    <ButtonCard onClick={handleCopy}>
      {copied ? 'Copied!' : 'Copy'}
    </ButtonCard>
  )
}

export default CopyButtonCard
