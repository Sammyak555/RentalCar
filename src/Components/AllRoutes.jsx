import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CarDetails from '../Pages/CarDetails'
import Cars from '../Pages/Cars'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Thanking from '../Pages/Thanking'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

const AllRoutes = () => {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/cars' element={<Cars />} />
      <Route path='/cardetails/:id' element={
        <PrivateRoute>
          <CarDetails />
        </PrivateRoute>
      } />
      <Route path='/thanking' element={ <PrivateRoute><Thanking /></PrivateRoute>} />
    </Routes>

  )
}

export default AllRoutes