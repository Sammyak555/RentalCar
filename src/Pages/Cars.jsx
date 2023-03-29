import React from 'react'
import { useSelector } from 'react-redux'

const Cars = () => {
  const stateCity = useSelector((store) => store.carReducer.stateCity)
  
  console.log(stateCity)
  return (
    <div>Cars</div>
  )
}

export default Cars