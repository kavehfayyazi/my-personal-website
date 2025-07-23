import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import {Outlet, useLocation} from 'react-router-dom';
import { AnimatePresence, m, motion } from 'motion/react';
import { blurVariants } from '../animations/blurVariants';

const MainLayout = () => {
  const location = useLocation();

  return (
    <>
        <div className="fixed inset-0 -z-10 h-screen w-screen transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(251,231,206,1)_100%)]"/>
        <div className="relative z-0 pt-20">
            <Navbar />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                variants = {blurVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key={location.pathname}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
        </div>
    </>
  )
}

export default MainLayout