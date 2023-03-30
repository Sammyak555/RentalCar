import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Container,
    Stack,
    Box, ButtonGroup, Card, CardBody, CardHeader, Heading, StackDivider, Text, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const booking = async(data) =>{
    return await axios.post('http://localhost:5050/users/booking',data)
}

const SlotBooking = ({ car }) => {
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const authdata = useSelector((store) => store.authReducer.authData)
    const [data,setdata] = useState({
        userId:authdata.userId,
        carId:car._id
    })
    let totalmrp = 0;
    let total = 0;
    
     totalmrp = Number(car.pricediscounted*20)
     total = totalmrp+289 
    
    const handlechange =(e) => {
        const {name,value} = e.target
        setdata({...data,[name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        data["total"]=total
        booking(data).then((r)=>{
            console.log(r)
            navigate('/thanking')
        })
        .catch((e)=>console.log(e))
    }
    

    return (
        <>
            <Button color={'white'} colorScheme='green' onClick={onOpen} variant={'solid'}>SLOT BOOKING</Button>
            <Container>
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                    size="2xl"
                    scrollBehavior='inside'
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Confirm Booking</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>

                            <Card>
                                <CardHeader>
                                    <Heading size='md'>{car.title}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Stack divider={<StackDivider />} spacing='4'>
                                        <Box display='flex' justifyContent='space-between'>
                                            <Stack spacing='2'>
                                                <Heading size='xs' textTransform='uppercase' >
                                                    slot timing
                                                </Heading>
                                               
                                                
                                                <label>From</label>
                                                <input type="date" name='from' onChange={handlechange}/>
                                               
                                                
                                                <label>to</label>
                                                <input type="date" name='to' onChange={handlechange}/>
                                                
                                            </Stack>
                                        </Box>
                                        <Box display='flex' justifyContent='space-between'>
                                            <Stack spacing='2'>
                                                <Heading size='xs' textTransform='uppercase' >
                                                    Specifications
                                                </Heading>
                                                <ButtonGroup spacing='5'>
                                                    <Button variant='ghost'>
                                                        {car.detailsitem}
                                                    </Button>
                                                    <Button variant='ghost' >
                                                        {car.detailsitem2}
                                                    </Button>
                                                    <Button variant='ghost' >
                                                        {car.detailsitem3}
                                                    </Button>
                                                </ButtonGroup>
                                            </Stack>
                                        </Box>
                                        <Box>
                                            <Heading size='xs' textTransform='uppercase' marginBottom='8px'>
                                                total ammount
                                            </Heading>
                                            <Box maxW='l' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                                {
                                                    (data.from&&data.to)&&
                                                    <TableContainer>
                                                    <Table variant='simple'>
                                                        <Thead>
                                                            <Tr>
                                                                <Th>Fare Details</Th>
                                                                <Th isNumeric></Th>
                                                            </Tr>
                                                        </Thead>
                                                        <Tbody>
                                                            <Tr>
                                                                <Td>Trip Fare</Td>
                                                                <Td isNumeric>₹ {totalmrp}</Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td>Damage Protection Fee</Td>
                                                                <Td isNumeric>+₹289</Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td>Convenience Fees<p style={{ color: "orangered", fontWeight: "600" }}>Know More</p></Td>
                                                                <Td isNumeric >
                                                                    <p style={{ textDecoration: "line-through" }}>₹99 </p>
                                                                    <p style={{ color: "green", fontWeight: "500" }}>FREE</p>
                                                                </Td>
                                                            </Tr>
                                                        </Tbody>
                                                        <Tfoot>
                                                            <Tr>
                                                                <Th>total Amount Payable</Th>
                                                                <Th isNumeric>₹{total}</Th>
                                                            </Tr>
                                                        </Tfoot>
                                                    </Table>
                                                </TableContainer>
                                                }
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Heading size='xs' textTransform='uppercase' marginBottom='8px'>
                                                Cancellation Policy
                                            </Heading>
                                            <Text >
                                            <label>We allow free Cancellations up to 24 hours before the Booking starts time.</label>
                                               <ul style={{marginLeft:'17px'}}> 
                                               
                                                <li>If you cancel between 0-24 Hr of your booking start time, only a partial refund will be provided.</li>
                                                <li>We allow booking modification even for the last moment changes, with nominal charges up to ₹ 200</li>
                                                <li>For more details, please see Zoomcar's policy</li></ul>
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading size='xs' textTransform='uppercase' marginBottom='8px'>
                                                Payment
                                            </Heading>
                                            <input type="radio" name="payment" value='cash' onChange={handlechange}/> Cash Payment
                                            <br />
                                            <input type="radio" name="payment" value='card' onChange={handlechange}/> Card Payment
                                        </Box>
                                       
                                    </Stack>

                                </CardBody>

                            </Card>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={(e) => {handleSubmit(e); onClose() }} colorScheme="green" mr={3}>
                                confirm booking
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Container>
        </>
    )
}

export default SlotBooking