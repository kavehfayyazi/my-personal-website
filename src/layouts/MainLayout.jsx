import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import {Outlet} from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
        <div className="fixed inset-0 -z-10 h-screen w-screen transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(251,231,206,1)_100%)]"/>
        <div className="relative z-0 pt-20">
            <Navbar />
            <Outlet />
        </div>
    </>
  )
}

export default MainLayout