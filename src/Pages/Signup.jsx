import React, { useState } from 'react'
import {
  Box, Button, Input
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const register = (data) => {
  return axios.post('https://nice-gold-crocodile-hat.cyclic.app/users/Register', data)

}

const Signup = () => {
  const [data, setData] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data)
    register(data).then((r) => {
      // console.log(r)
      navigate('/')
    })
      .catch((e) => console.log(e))
  }


  return (
    <Box w={{
      base: '90%',
      md: '60%',
      lg: "60%",
      xl: '50%'
    }} m="auto" marginTop='20' p="20px 10px" bgColor="#f3f3f3" >
      <Box w="100%"><h1 style={{ fontWeight: "bold", fontSize: "20px" }}>Registration</h1></Box>
      <Box w="75%" m="auto" mt="20px" display={"flex"} flexDirection="column" alignItems="center" >
        <Box w="100%" m="auto" justifyContent={"space-around"}>
          <Box display={"flex"} w="auto" flexDirection="column">
            <label style={{ textAlign: 'start', fontWeight: "bold" }}>Enter Name*</label>
            <input name='username' onChange={handleChange} type="text" style={{ boxShadow: "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px ", width: "100%", height: "40px" }} />
          </Box>


        </Box>
        <Box display={"flex"} w="100%" m="auto" mt="20px" flexDirection="column">
          <label style={{ textAlign: 'start', fontWeight: "bold" }}>Email Address*</label>
          <input name='email' onChange={handleChange} type="email" style={{ boxShadow: "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px ", width: "100%", height: "40px" }} />

        </Box>

        <Box display={"flex"} w="100%" m="auto" mt="20px" flexDirection="column">
          <label style={{ textAlign: 'start', fontWeight: "bold" }}> Password*</label>
          <input name='password' onChange={handleChange} type="password" style={{ boxShadow: "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px ", width: "100%", height: "40px" }} />
        </Box>
        <Box display={"block"} w="100%" mt="20px" >
          <Link style={{ color: 'blue', fontSize: "20px" }} to={'/'}>Already Have an Account ? Login !</Link>
          <br />
          <Button bgColor="green.500" borderRadius={"15px"} onClick={handleSubmit} color="white">Continue</Button>

        </Box>
      </Box>
    </Box>
  )
}

export default Signup