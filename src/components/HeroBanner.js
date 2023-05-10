import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'
import '../App.css'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px' },
      ml: { sm: '50px' },
    }} p='20px'>
      <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
        Fitness Club
      </Typography>

      <Typography m='30px 0 23px' fontWeight='700' sx={{
        fontSize: { lg: '44px', xs: '40px' }
      }}>
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize='22px' lineHeight='35px' mb={2}>
        Check out the most effective exercises
      </Typography>

      <Button sx={{backgroundColor: '#ff2625', padding: '10px'}} href='#exercises' variant='contained' color='error'>Explore Exercises</Button>

      <Typography 
      fontWeight={600}
      color='#ff2625'
      fontSize='200px'
      sx={{
        opacity: 0.1,
        display: {lg: 'block', xs: 'none'}

      }}>
        Exercises
      </Typography>


      <img className='hero-banner-img' src={HeroBannerImage} alt='banner' />

    </Box>
  )
}

export default HeroBanner