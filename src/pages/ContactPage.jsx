import React from 'react';
import TextCard from '../components/Cards/TextCard';
import IconCard from '../components/Cards/IconCard';
import EmailCard from '../components/Cards/EmailCard';
import {IconBrandLinkedin} from '@tabler/icons-react'
import {IconBrandGithub} from '@tabler/icons-react'
import { motion } from 'motion/react';

const ContactPage = () => {
  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <motion.div className="absolute w-screen h-8/12 flex items-center justify-center z-0"
          initial= {{y: -400}}
          animate= {{y: 0, scale: 1.4}}
        >
          <TextCard>
              if you want to have a chat about anything, please don't hesitate to reach out.
          </TextCard>
        </motion.div>

        <div className="min-h-screen place-items-center z-10">
          <motion.div
            // initial= {{opacity: 0}}
            // animate= {{opacity: 1}}
            // transition={{delay: 0.33, duration: 1.5}}
            className="absolute top-[20%] left-[60%] transform -translate-x-1/2"
          >
            <IconCard 
              href="https://www.linkedin.com/in/kavehf"
            >
              <IconBrandLinkedin size={40}/>
            </IconCard>
          </motion.div>

          <IconCard
            href="https://www.github.com"
            className="absolute top-[20%] left-[40%] transform -translate-x-1/2"
          >
            <IconBrandGithub size={40}/>
          </IconCard>

          <EmailCard
            email="kfayyazi@andrew.cmu.edu"
            className="absolute top-[48%] left-[50%] transform -translate-x-1/2"
          />

          <TextCard className="absolute top-[40vh] left-[50%] transform -translate-x-1/2">
            (484) 714-9135
          </TextCard>
        </div>
      </section>
    </>
  )
}

export default ContactPage
