import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}


const Slideshow = ({car}) => {
    let Images = []
    Images.push(car.imagesrc,car.imagesrc2,car.imagesrc3,car.imagesrc4,car.imagesrc5)
    
    return (
        <div style={{width:"95%",margin:"auto"}}>
        <Box width="95%" margin="auto">
            <Slide>
            {
                Images.length>0&&
              Images.map((item)=>(
                <Box key={Math.random()} >
                  <Image width={{
                    base:'80%',
                    sm:'80%',
                    md:'85%',
                    lg:'65%',
                    xl:'50%'
                  }} height='250' margin={'auto'} src={item}/>
                </Box>
              ))
            }
            </Slide>

        </Box>
      </div>
    )
}

export default Slideshow