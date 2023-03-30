import React, { useEffect, useState } from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem, Box, Input, Button, Divider, Flex, useToast
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import "../Styles/ComponentStyles/Navbar.css"
import { useDispatch, useSelector } from 'react-redux'
import { getLogin } from '../Redux/AuthReducer/action'

const Navbar = () => {
  const [data, setData] = useState({})
  const dispatch = useDispatch()
  const authdata = useSelector((store) => store.authReducer.authData)
  const { isAuth, isError } = useSelector((store) => store.authReducer)
  const toast = useToast();

  const showToast = (des, status) => {
    toast({
      description: des,
      status: status,
      duration: 3000,
      isClosable: true,
      position: "bottom"
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.email) {
      showToast("Please Enter your email", "warning")
      return
    }
    if (!data.password) {
      showToast("Please Enter your password", "warning")
      return
    }
    dispatch(getLogin(data))
  }

  useEffect(() => {
    if (isAuth) {
      showToast("Login Successful !", "success")
    }
    if (isError) {
      showToast("Login Failed !", "error")
    }
  }, [isAuth, isError])


  return (
    <div className='navbar'>
      <div>
        <Link to='/'>Home</Link>
      </div>

      <div className='loginmenu'>

        <Menu>
          <MenuButton
            bgColor="trasperent"
            aria-label='Options'
            color="white"
            h="40px"
            p="0 10px"
            border="2px solid white"
            borderRadius={"10px"}

            variant='outline'
          >SIGN IN/JOIN</MenuButton>
          <div className='menulist'>
            <MenuList
            >
              <Flex flexDirection={{
                base: 'column',
                md: 'row',
                lg: 'row'
              }}

              >


                <Box w="auto" borderRight={"1px solid green"} p="20px 20px">
                  <h1 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "15px", color: "black" }}>Not an Enterprise Plus member yet?</h1>
                  <h1 style={{ fontSize: "15px", fontWeight: "bold", marginTop: "15px", color: "green" }}>Benifitw of membership</h1>
                  <MenuItem display='flex' justifyContent='space-around'>
                    <Link to='/signup' style={{ fontSize: "15px", fontWeight: "bold", marginTop: "15px", color: "green" }}>Join now</Link>
                  </MenuItem>
                  <h1 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "15px", color: "black" }} >Need to complete your enrollment?</h1>
                  <h1 style={{ fontSize: "15px", fontWeight: "bold", marginTop: "15px", color: "green" }}>create password</h1>
                </Box>
                <Box w="auto" p="20px 20px" display={"flex"} alignItems="center" flexDirection={"column"}>
                  <h1 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "15px", color: "black" }}>Sign In to Enterprise Plus</h1>
                  <Box textAlign={'start'}>
                    <label style={{ color: "black" }}>Enter email</label>
                    <Input onChange={handleChange} name='email' color='black' type="text" borderRadius={"0"} h="40px" border="1px solid black" />
                  </Box>
                  <Box textAlign={'start'}>
                    <label style={{ marginTop: "20px", color: "black" }}>password</label>
                    <Input onChange={handleChange} name='password' color='black' type="text" h="40px" borderRadius={"0"} border="1px solid black" />
                  </Box>


                  <Box display={"flex"} marginTop="20px" alignItems={"center"}>
                    <input color='black' type="text" style={{ border: "1px solid black", height: "20px", width: "20px" }} />
                    <p style={{ marginLeft: "15px", color: "black" }}>keep me signed in</p>
                  </Box>

                  <MenuItem display='flex' justifyContent='space-around'>
                    <Button bgColor="green.500" m="auto" mt="20px" borderRadius={"20px"} color="white" w="auto" onClick={handleSubmit}>Signin</Button>
                  </MenuItem>
                  <h1 style={{ fontSize: "15px", fontWeight: "bold", marginTop: "15px", color: "green" }}>Forgot Password</h1>
                  <Divider />
                  <MenuItem textAlign='center'>
                    <Link style={{ color: "blue", fontSize: '18px' }} to='/signup'>Haven't Registered yet? Register Here !</Link>
                  </MenuItem>
                </Box>
              </Flex>
            </MenuList>
          </div>
        </Menu>
      </div>
    </div>
  )
}

export default Navbar