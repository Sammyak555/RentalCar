import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/ComponentStyles/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
        <Link to='/'>Home</Link>
        </div>
        <Link to='/cars'>Cars</Link>
        <div className='signuplogin'>
        <Link to='/signup'>
            Signup/Login
        </Link>
        </div>
    </div>
  )
}

export default Navbar