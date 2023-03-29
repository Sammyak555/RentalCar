import { Link } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/signup'>Signup/Login</Link>
        <Link to='/cars'>Cars</Link>
    </div>
  )
}

export default Navbar