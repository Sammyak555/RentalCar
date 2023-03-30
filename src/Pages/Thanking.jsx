import React, { useEffect } from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css';
import "../Styles/Thanking.css"

const Thanking = () => {
  useEffect(() => {
    AOS.init({ duration: "1500" });
  }, [])
  return (
    
      <div className='thankyou'>
        <h1 data-aos='fade-top' data-aos-duration='1500'>Thank You !</h1>
        <Link style={{fontSize:'40px',color:'lightblue'}} to='/' data-aos='fade-top' data-aos-duration='1500'>Continue Exploring !</Link>
      </div>
    
  )
}

export default Thanking