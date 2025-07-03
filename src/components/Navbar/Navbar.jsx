import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-serenade/50 backdrop-blur-sm px-4 py-3 shadow-sm shadow-black/15 grid grid-cols-3 items-center">
        
        <div className="justify-self-start">
          <NavLink className="nav-link mr-auto" to="/">kavehfayyazi.com</NavLink>
        </div>
        <div className="justify-self-center">
          <NavLink className="nav-link hidden sm:inline-block font-cooper-black" to="/self-destructing-note">Click Here to Make a Self Destructing Note!</NavLink>
        </div>

        <div className="justify-self-end space-x-4">
          <NavLink className="nav-link" to="/about">about</NavLink>
          <NavLink className="nav-link" to="/contact">contact</NavLink>
        </div>
      </nav>
    </>
  )
}

export default Navbar