import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { exerciseOptions } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'
import axios from 'axios'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState(['all'])


  useEffect(() => {

    fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      .then(response => response.json())
      .then((data) => {
        setBodyParts(['all', ...data])

      })



  }, [])

  async function handleSearch() {

    if (search) {


      fetch('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
        .then(response => response.json())
        .then((exerciseData) => {
          const searchedExercises = exerciseData && exerciseData.filter(
            (exercise) => exercise.name.toLowerCase().includes(search)
              || exercise.target.toLowerCase().includes(search)
              || exercise.equipment.toLowerCase().includes(search)
              || exercise.bodyPart.toLowerCase().includes(search)
          )
          setSearch('')
          setExercises(searchedExercises)
        })

    }


  }

  return (
    <Stack alignItems='center' mt='37px'>
      <Typography fontWeight={700} sx={{
        fontSize: { lg: '44px', xs: '30px' },
        mb: '50px', textAlign: 'center'
      }}>
        Awesome Exercises You should know
      </Typography>

      <Box mb='72px'>
        <TextField
          sx={{
            input: { fontWeight: '700' },
            width: { lg: '1170px', xs: '350px' },
            backgroundColor: '#fff',
          }}
          height='72px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
        />

        <Button variant='contained' color='error' className='search-btn'
          sx={{
            bgcolor: 'FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px'
          }}

          onClick={handleSearch}
        >
          Search
        </Button>

      </Box>

      <Box sx={{ width: '100%', padding: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>

    </Stack>
  )
}

export default SearchExercises