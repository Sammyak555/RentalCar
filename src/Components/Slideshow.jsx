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
const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
];

const Slideshow = ({car}) => {
    let Images = []
    Images.push(car.imagesrc,car.imagesrc2,car.imagesrc3,car.imagesrc4,car.imagesrc5)
    
    return (
        <div style={{width:"60%",margin:"auto"}}>
        <Box width="95%" margin="auto">
            <Slide>
            {
                Images.length>0&&
              Images.map((item)=>(
                <Box key={Math.random()} >
                  <Image width="65%" height='250' margin={'auto'} src={item}/>
                </Box>
              ))
            }
            </Slide>

        </Box>
      </div>
    )
}

export default Slideshow