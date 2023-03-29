import { Link } from '@chakra-ui/react'
import React from 'react'
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