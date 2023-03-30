import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import "../Styles/Cars.css"
import { TbManualGearbox } from 'react-icons/tb';
import { BsFuelPump } from 'react-icons/bs';
import { BsPeople } from 'react-icons/bs';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Cars = () => {
  const stateCity = useSelector((store) => store.carReducer.stateCity)
  const navigate = useNavigate()

  const handleClick = (el) => {
      navigate(`/cardetails/${el._id}`)
  }

  return (
    <div className='carsbox'>
      {
        stateCity.length > 0 &&
        stateCity.map((el) => {
          return (
            <Card maxW='md' key={el._id} className='singlecard'>
              <CardBody>
                <Image
                  src={el.imagesrc}
                  alt=''
                  height={180}
                  width={360}
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='2'>
                  <Heading size='md' >{el.title}</Heading>
                  <Divider />
                  <ButtonGroup spacing='0.5'>
                  <Button variant='ghost'>
                    <TbManualGearbox /> {el.detailsitem}
                  </Button>
                  <Button variant='ghost'color={'green'} >
                  <BsFuelPump />{el.detailsitem2}
                  </Button>
                  <Button variant='ghost' color='blue'>
                  <BsPeople />{el.detailsitem3}
                  </Button>
                </ButtonGroup>
                <Divider />
                  <Text color='blue.600' fontSize='2xl'>
                  <p style={{marginLeft:"10px",fontWeight:"600",color:"green"}}>₹{el.pricediscounted}/hr</p>
                  <p style={{marginLeft:"10px",fontWeight:"400",textDecoration:"line-through"}}>₹{el.priceoriginal}/hr</p>
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
               
                  <Button w={'100%'} variant='solid' colorScheme='green' onClick={()=>handleClick(el)}>
                   BOOK NOW
                  </Button>
                  
                
              </CardFooter>
            </Card>
          )
        })
      }
    </div>
  )
}

export default Cars