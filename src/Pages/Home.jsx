import React from 'react'
import "../Styles/Home.css"
import tesla from "../Images/TeslaModel.avif"
import BookingSlot from '../Components/BookingSlot'

const Home = () => {
  return (
    <div className='homepage'>
        <div className='homehead'>
            <div className='homeheadcontent'>
                <h2>MOBILITY</h2>
                <h1>Car Rental App</h1>
                <p>CarRental Rent-A-Car brand is part of the world’s largest car rental provider. With over 9,500 car rental locations around the world, it has never been easier to rent a car on the go.</p>
            </div>
            <div className='teslaimg'>
                <img src={tesla} alt="" />
            </div>
        </div>
        <div className='bookslot'>
            <BookingSlot />
        </div>
        <div className='tavelguide'>
            <h1>Road Trips and Driving Guides</h1>
            <br />
            <p>On a road trip, oftentimes it’s all about the journey and not the final destination. Whether you want to explore the road less traveled, or you're just looking for a way to get home, Enterprise can help. Below you’ll find a variety of road trip guides for popular destinations across the U.S. with easy-to-follow itineraries and recommendations. From visiting small New England towns along the East Coast to following the surf and sand on the West Coast, we have you covered. Start planning your road trip today!</p>
        </div>

    </div>
  )
}

export default Home