import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getcarDetails } from '../Redux/action'
import "../Styles/CarDetails.css"

const CarDetails = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const carDetails = useSelector((store) => store.carReducer.carDetails)
  console.log(carDetails)

  useEffect(()=> {
    dispatch(getcarDetails(params.id))
  },[])
  return (
    <div className='cardetailspage'>
      <div></div>
      <div className='detailsbox'> 
          
      </div>
    </div>
  )
}

export default CarDetails