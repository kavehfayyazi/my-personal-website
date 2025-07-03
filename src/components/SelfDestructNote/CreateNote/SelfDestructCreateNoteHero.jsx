import React from 'react'
import SelfDestructCreateNoteForm from './SelfDestructCreateNoteForm'

const SelfDestructCreateNoteHero = () => {
  return (
    <div className="flex flex-col min-h-[76vh] space-y-6 items-center justify-center overflow-hidden">
      <h1 className="text-4xl font-cooper-black mb-1">A shareable note that can only be seen once...</h1>
      <h1 className="text-4xl font-cooper-black mt-0 mb-13">or else it explodes in 6 hours</h1>
      <SelfDestructCreateNoteForm />
    </div>
  )
}

export default SelfDestructCreateNoteHero