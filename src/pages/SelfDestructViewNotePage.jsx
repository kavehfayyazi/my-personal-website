import React from 'react'
import { useParams } from 'react-router-dom';
import SelfDestructViewNoteHero from '../components/SelfDestructNote/ViewNote/SelfDestructViewNoteHero';

const SelfDestructViewNotePage = () => {
  const {slug} = useParams();

  return (
    <div>
      <SelfDestructViewNoteHero slug={slug}/>
    </div>
  )
}

export default SelfDestructViewNotePage
