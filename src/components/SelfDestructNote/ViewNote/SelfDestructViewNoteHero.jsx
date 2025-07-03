import React from 'react'
import TextCard from '../../Cards/TextCard'
import CopyButtonCard from '../../Cards/CopyButtonCard';

const SelfDestructViewNoteHero = ({slug}) => {
  const url = `kavehfayyazi.com/self-destructing-note/${slug}`;

  return (
    <div>
      <TextCard className="w-64 truncate">
        {url};
      </TextCard>
      <CopyButtonCard textToCopy={url}/>
    </div>
  )
}

export default SelfDestructViewNoteHero