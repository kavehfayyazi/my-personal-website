import React from 'react'
import TextCard from '../../Cards/TextCard';
import CopyButtonCard from '../../Cards/CopyButtonCard';

const SelfDestructCopyLinkBox = ({slug}) => {
  const url = `http://${window.location.host}/self-destructing-note/${slug}`;
  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-2">
        <TextCard className="w-124 truncate">{url}</TextCard>
        <CopyButtonCard textToCopy={url}/>
      </div>
    </div>
  )
}

export default SelfDestructCopyLinkBox
