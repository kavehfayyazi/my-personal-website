import React, { useState , useEffect} from 'react'
import ButtonCard from '../../Cards/ButtonCard';
import SelfDestructCopyLinkBox from './SelfDestructNoteCopyLinkBox';

const SelfDestructCreateNoteForm = () => {
  const API_URL = import.meta.env.dev
                  ? '/api'
                  : import.meta.env.VITE_API_URL;

  const [note, setNote] = useState('');
  const [slug, setSlug] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showWaitMsg, setShowWaitMsg] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/notes`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message:note}),
      });
      if(!res.ok) throw new Error(`Server responded ${res.status}`);
      const {slug: newSlug} = await res.json();
      if(!newSlug) throw new Error('No slug returned from server');
      setSlug(newSlug);
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let timer;
    if(loading) timer = setTimeout(() => setShowWaitMsg(true), 5000);
    else setShowWaitMsg(false);
    return () => clearTimeout(timer);
  }, [loading]);

  const resetNote = () => {
    setNote('');
    setSlug('');
    setLoading(false);
  }

  // 1: There's an error
  if(error)
    return (
      <p className="flex items-center justify-center text-black font-cooper-black text-3xl">There was an error... Please try again later.</p>
    )

  // 2: We have a slug so show the copy-link box component
  if(slug)
    return (
      <>
        <SelfDestructCopyLinkBox slug={slug}/>
        <ButtonCard onClick={resetNote}>
          Click Here to Make Another Note
        </ButtonCard>
      </>
    )

  // 3: Default
  return (
    <>
      <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
        <input 
          required
          type="text" 
          placeholder="Type your note here!"
          value={note}
          onChange={(e) => {setNote(e.target.value);}}
          className="p-3 border rounded-xl bg-white"
        />

        <ButtonCard disabled={loading}>
          {loading ? 'Creating...' : 'Create Your Message!'}
        </ButtonCard>

        {showWaitMsg && (
          <p>
            Please wait for the API...
          </p>
        )}
      </form>
    </>
  )
}

export default SelfDestructCreateNoteForm