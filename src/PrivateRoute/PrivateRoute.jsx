import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {isAuth} = useSelector((store) => store.authReducer)
    if(!isAuth){
        alert('You need to login first !')
        return <Navigate to="/"/>
    }else{
        return children
    }
  
}

export default PrivateRoute