import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CarDetails from '../Pages/CarDetails'
import Cars from '../Pages/Cars'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Thanking from '../Pages/Thanking'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/cars' element={<Cars/>} />
            <Route path='/cardetails' element={<CarDetails/>} />
            <Route path='/thanking' element={<Thanking/>} />
            
        </Routes>
    </div>
  )
}

export default AllRoutes