import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import TextCard from '../../Cards/TextCard'
import ButtonCard from '../../Cards/ButtonCard';

const SelfDestructViewNoteHero = () => {
  const {slug} = useParams();
  const navigate = useNavigate();

  const [message, setMessage] = useState('');
  const [accessible, setAccessible] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.dev
    ? '/api'
    : import.meta.env.VITE_API_URL;
  const endpoint = `${API_URL}/notes/${slug}`;

  useEffect(() => {
    const fetchNote = async () => {
      setLoading(true);
      try {
        const res = await fetch(endpoint);
        if(!res.ok) throw new Error(`Server responded ${res.status}`);
        const data = await res.json();

        setAccessible(data.slug !== undefined)
        setMessage(data.message);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchNote();
  }, []);

  const resetNote = () => {
    navigate('/self-destructing-note');
  }

  // 1: There's an error
  if(error)
    return (
      <p className="flex flex-col h-[76vh] items-center justify-center text-black font-cooper-black text-3xl">
        There was an error... Please try again later.
      </p>
    )

  // 2: We have a slug so show the copy-link box component
  if(loading)
    return (
      <h1 className="flex flex-col h-[76vh] justify-center items-center font-cooper-black text-2xl">
        Please wait while we fetch your message.
      </h1>
    )

  return (
    <div className="flex flex-col h-[76vh] justify-center items-center gap-4">
      {accessible ? (
            <TextCard className="w-[40vh] h-[10vh] font-cooper-black">
              {`${message}`}
            </TextCard> 
      ) : (
          <h1 className="font-cooper-black text-3xl">{`${message}`}</h1>
      )}
      <ButtonCard onClick={resetNote}>
        Click Here to Make Another Note
      </ButtonCard>
    </div>
  )
}

export default SelfDestructViewNoteHero