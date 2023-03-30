import { Box, Button, ButtonGroup, Card, CardBody, CardHeader, Divider, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { TbManualGearbox } from 'react-icons/tb';
import { BsFuelPump } from 'react-icons/bs';
import { BsPeople } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { getcarDetails } from '../Redux/action'
import "../Styles/CarDetails.css"
import Slideshow from '../Components/Slideshow';
import SlotBooking from '../Components/SlotBooking';

const CarDetails = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const carDetails = useSelector((store) => store.carReducer.carDetails)

  let car = carDetails[0]
  console.log(car)

  useEffect(() => {
    dispatch(getcarDetails(params.id))
  }, [])
  return (
    <div className='cardetailspage'>
      <div>
       
      </div>
      <div className='detailsbox'>
       {
        car&&
        <Card>
        <CardHeader>
        <Slideshow car={car}/>
          <Heading size='lg'>{car.title}</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box display='flex' justifyContent='space-between'>
              <Stack spacing='3'>
              <Heading size='s' textTransform='uppercase' >
                Specifications
              </Heading>
              <ButtonGroup spacing='5'>
                <Button variant='ghost'>
                  <TbManualGearbox /> {car.detailsitem}
                </Button>
                <Button variant='ghost' >
                <BsFuelPump />{car.detailsitem2}
                </Button>
                <Button variant='ghost' >
                <BsPeople />{car.detailsitem3}
                </Button>
              </ButtonGroup>
              </Stack>
              <Heading><SlotBooking  car={car}/></Heading>
            </Box>
            <Box>
              <Heading size='s' textTransform='uppercase'>
                About the car
              </Heading>
              <Box maxW='l' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <div className='specbox'>
                    <li>Airbag</li>
                    <li>Bluetooth</li>
                    <li>Keyless Entry</li>
                    <li>ADAS</li>
                    <li>Traction control</li>
                    <li>Electric ORVM</li>
                    <li>Power steering</li>
                    <li>Spare Tyre</li>
                    <li>Air Conditioning</li>
                    <li>Air Freshener</li>
                    <li> Aux Input</li>
                    <li> Aux Cable</li>
                    <li>Child seat</li>
                    <li>USB charger</li>
                    <li> Full boot space</li>
                    <li>Power Windows</li>
                    <li>Music System</li>
                    <li>Air purifier</li>
                    <li>Cruise Control</li>
                    <li>Button Start</li>
                </div>
                </Box>
            </Box>
            <Box>
              <Heading size='s' textTransform='uppercase'>
              Ratings & Reviews
              </Heading>
              <Button variant='ghost' >
                <AiFillStar color='orange'  />{car.ratingtext}
                </Button>
            </Box>
          </Stack>
          
        </CardBody>
        
      </Card>
       }
      </div>
    </div>
  )
}

export default CarDetails