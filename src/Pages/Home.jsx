import React from 'react'
import "../Styles/Home.css"
import tesla from "../Images/TeslaModel.avif"
import BookingSlot from '../Components/BookingSlot'
import { Box, Img, Text } from '@chakra-ui/react'

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
        <div>
        </div>
        <div className='homehalf'>
      <Box w="95%" margin="auto"  >
                        <Box w="100%" textAlign="start" padding="15px" >
                            <Box fontSize="18px" fontWeight="600" paddingLeft="10px" marginTop="20px">
                                <Text>SELF DRIVE CARS IN MUMBAI</Text>
                            </Box>
                            <Box fontSize="15px" padding="10px">The financial capital of India, Mumbai is a city which never sleeps. Buzzing with activity, it also holds the distinction of being the entertainment hub of the country. With a beach in its backyard and the picturesque Western Ghats a stone’s throw away, the city attracts visitors from all over the word. From the Gateway of India which opens the doors to India’s mysteries, to the ancient caves of Elephanta Island, and from the iconic Stock Exchange to the many studios where Bollywood movies are made, the city offers a multitude of sights and experiences.
                                The downside of life in Mumbai is the difficulty commuting poses. Overloaded public transport and increasing distances add to the stress of living in Mumbai. Whether you are a visitor to this melting-pot of cultures, or a resident of the city, it is important to have a self-drive car at your disposal to make the most of your time. If you do not plan to buy a car of your own, Zoomcar offers the perfect solution by making the process of self- drive car booking in Mumbai convenient and affordable. The Zoomcar app allows you the freedom of booking a car at your fingertips.
                            </Box>

                            <Box fontSize="18px" fontWeight="600" paddingLeft="10px" marginTop="20px">
                                <Text>CAR ON RENT IN MUMBAI</Text>
                            </Box>
                            <Box fontSize="15px" padding="10px">
                                On many occasions, working professionals and business persons want to commute to different parts of the city in the same day. Usually, they hire a chauffeur driven car and pay extra for the waiting charges. This option, while popular, is also more expensive. It is more economical to opt for a self-drive car rental in Mumbai. You can spend any amount of time at a meeting without having to worry about the waiting charges, and use the car to explore Mumbai after work at your leisure. Zoomcar also provides Mumbai airport taxi service, using which you can pick up one of our cars right at the airport when you land. We have a variety of cars in our fleet including luxury brands which makes it easier to book luxury cars on rent in Mumbai.
                            </Box>

                            <Box fontSize="18px" fontWeight="600" paddingLeft="10px" marginTop="20px">
                                <Text>CAR RENTAL IN MUMBAI</Text>
                            </Box>
                            <Box fontSize="15px" padding="10px">
                                An ideal way to relax after a stressful week at the office is to go on a long drive from Mumbai to Pune or from Mumbai to Nasik. Enjoy the drive on the wide 6-lane Mumbai – Pune expressway with your loved ones by taking a car on hire in Mumbai. There are many religious sites, parks, and museums in Nasik which makes it an ideal location to unwind.
                            </Box>

                            <Box fontSize="18px" fontWeight="600" paddingLeft="10px" marginTop="20px">
                                <Text>ABOUT ZOOMCAR</Text>
                            </Box>
                            <Box fontSize="15px" padding="10px">
                                No more worries about petrol mileage, insurance, and car breakdowns! Zoomcar has enabled driving convenience for travellers around the country and is fast expanding its reach to cities including Ahmedabad, India, Chandigarh, Chennai, Coimbatore, Delhi-NCR, Hyderabad, Jaipur, Kochi, Kolkata, Ludhiana, Mangalore, Mumbai, Mysore, Pune, Siliguri and Vizag. 
                                Self-drive cars from Zoomcar have given customers more control, privacy, and freedom. Book a self-drive car in any city you visit with the Zoomcar app on your phone and feel at home wherever you go. 
                            </Box>

                        </Box>
                    </Box>
               

                

                <Box w="100%" height="auto" 
                // border="solid red 18px" 
            bgColor="#fff" >
                    <Box padding="20px" marginTop="40px">
                        <Img boxSize="17%" src="https://www.zoomcar.com/build/6b51f1464b17dbb1d002f16e26572662.png" />
                    </Box>

                    <Box margin="auto" >
                        <Text fontSize="12px">© Copyright 2023 RentalCar India Private Ltd. All rights reserved</Text>
                    </Box>
                </Box> 
                
        </div>
    </div>
  )
}

export default Home