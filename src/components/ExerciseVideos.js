import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import '../App.css'

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ marginTop: { lg: '100px', xs: '20px' } }} p='20px'>
      <Typography variant='h4' mb='33px'>
        Watch <span style={{ textTransform: 'capitalize', color: '#ff2625' }} >{name}</span> exercise videos
      </Typography>

      <Stack justifyContent='center' alignItems='center'

        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '110px', xs: '0' }
        }}
      >

        {exerciseVideos.map((item, index) => (

          <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'

          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />

            <Box>

              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>

              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>

            </Box>

          
          </a>

        ))}


      </Stack>

    </Box>
  )
}




export default ExerciseVideos