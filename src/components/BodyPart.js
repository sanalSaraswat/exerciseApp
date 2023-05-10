import { Stack, Typography } from '@mui/material'
import React from 'react'
import Icon from '../assets/icons/gym.png'
import '../App.css'

const BodyPart = ({ item, bodyPart, setBodyPart }) => {


  return (

    <Stack

      type='button'
      justifyContent='center'
      alignItems='center'
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item && '4px solid #ff2625',
        width: '270px',
        height: '282px',
        borderBotomLeftRadius: '20px',
        cursor: 'pointer',
        gap: '27px',
        backgroundColor: '#fff'
      }}

      onClick={(() => {
        setBodyPart(item)
      })}

    >

      <img src={Icon} alt='dumbell' style={{ width: '40px', height: '40px' }} ></img>

      <Typography fontSize='24px'
        fontWeight='bold'
        color='#3Z1212'
        textTransform='capitalize'
      >

        {item}

      </Typography>

    </Stack>
  )
}

export default BodyPart