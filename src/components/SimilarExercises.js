import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import ExerciseCard from './ExerciseCard'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {

  console.log(targetMuscleExercises)

  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>

      <Typography variant='h3'
      >
        Similar <span style={{ textTransform: 'capitalize', color: '#ff2625' }}>Target Muscle</span> Exercises

      </Typography>

      <Stack direction='row'
        padding='30px 10px'
        gap='40px'
        sx={{ overflowX: 'auto', overflowY: 'hidden' }}

      >

        {targetMuscleExercises.map((exercise) => (
          <ExerciseCard exercise={exercise} />
        ))}

      </Stack>


      <Typography mt='50px'
        variant='h3'
      >
        Similar <span style={{ textTransform: 'capitalize', color: '#ff2625' }}>Equipment</span> Exercises

      </Typography>

      <Stack direction='row'
        padding='30px 10px'
        gap='40px'
        sx={{ overflowX: 'auto', overflowY: 'hidden' }}

      >

        {equipmentExercises.map((exercise) => (
          <ExerciseCard exercise={exercise} />
        ))}

      </Stack>

    </Box>
  )
}

export default SimilarExercises