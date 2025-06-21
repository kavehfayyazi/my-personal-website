import React, {useState} from 'react'
import ClickableCard from '../components/Cards/ClickableCard';
import TextCard from '../components/Cards/TextCard';
import { motion } from 'motion/react';

const AboutPage = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[76vh] space-y-6">
      <h1 className="font-cooper-black text-6xl">To be continued...</h1>
      <ClickableCard 
        onClick={() => setShowMore(prev => !prev)}
        className="cursor-pointer"
      >
        <h1>click here!</h1>
      </ClickableCard>

      {showMore && (
        <motion.div className="absolute justify-center top-[48vh] z-10"
          initial= {{x: '-100vh'}}
          animate= {{x: 0}}
          transition= {{}}
        >
          <TextCard>
            Just kidding! There's nothing here 😂!
          </TextCard>
        </motion.div>
      )}

    </div>
  )
}

export default AboutPage
