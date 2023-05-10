import React, { useEffect, useState } from 'react'
import { Box, Pagination, Stack, Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard'
import { exerciseOptions } from '../utils/fetchData'

const Exercises = ({ exercises, bodyPart, setExercises }) => {

  useEffect(() => {

    if (bodyPart === 'all') {

      fetch('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
        .then(response => response.json())
        .then(data => setExercises(data))

    }

    else {

      fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
        .then(response => response.json())
        .then(data => setExercises(data))

    }

  }, [bodyPart])



  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9

  const indexOfLastExercise = currentPage * exercisesPerPage

  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage

  const currentExercises = exercises && exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1250, behavior: 'smooth' })
  }


  return (
    <Box
      id="exercises"
      sx={{ mt: { lg: '110px' } }}
      mt="50px"
      p='20px'
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>

      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap='wrap' justifyContent='center'
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}


      </Stack>

      <Stack mt='100px' alignItems='center'>
        <Pagination color='standard'
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          size='large'
          onChange={paginate}

        >

        </Pagination>
      </Stack>

    </Box>
  )
}

export default Exercises