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
    Select,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getallcarDetails, getstatecityDetails } from '../Redux/action'


const BookingSlot = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [state, setState] = useState()
    const [cities, setCities] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cars = useSelector((store) => store.carReducer.allcars)

    var arr = []
    var StatewiseCities = []
    let city = []

    useEffect(() => {
        dispatch(getallcarDetails)
    }, [])

    if (cars) {
        cars.forEach((el) => {
            if (el.state != undefined) {
                arr.push(el.state)
            }
        })
    }
    var uniqueState = arr.filter((value, index, array) => array.indexOf(value) === index)

    if (state) {
        StatewiseCities = cars.filter((el) => {
            return el.state == state
        })
    }

    if (StatewiseCities) {
        StatewiseCities.forEach((el) => {
            if (el.city !== undefined) {
                city.push(el.city)
            }
        })
    }
    var uniqueCity = city.filter((value, index, array) => array.indexOf(value) === index)
    console.log(uniqueCity)

    const handleadd = (e) => {
        e.preventDefault();
        console.log(cities, state)
        let payload = {
            city: cities,
            state: state
        }
        dispatch(getstatecityDetails(payload)).then(() => {
            navigate("/cars")
        })
    }


    return (
        <>
            <Button color={'white'} colorScheme='white' bgColor={"green.400"} w={"fit-content"} onClick={onOpen} variant={'ghost'}>BOOKING SLOT</Button>
            <Container>
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                    size="2xl"
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Select Location</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>

                            <Stack spacing={3}>
                                <label>Select State</label>
                                <Select onChange={(e) => setState(e.target.value)} name='state' size='md'>
                                    <option value="">Select State</option>
                                    {
                                        uniqueState &&
                                        uniqueState.map((el) => {
                                            return (
                                                <option key={el} value={el}>{el}</option>
                                            )
                                        })
                                    }
                                </Select>
                                {
                                    state &&
                                    <div>
                                        <label>Select City</label>
                                        <Select onChange={(e) => setCities(e.target.value)} name='city' size='md' >
                                            <option value="">Select City</option>
                                            {
                                                uniqueCity &&
                                                uniqueCity.map((el) => {
                                                    return (
                                                        <option key={el} value={el}>{el}</option>
                                                    )
                                                })
                                            }
                                        </Select>
                                    </div>
                                }
                            </Stack>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={(e) => { handleadd(e); onClose() }} colorScheme="green" mr={3}>
                                Find Cars
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Container>
        </>
    )
}

export default BookingSlot