import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { exerciseOptions, youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { Box } from '@mui/material'

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])


  const { id } = useParams()

  useEffect(() => {

    fetch(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions)
      .then(response => response.json())
      .then((data) => {
        setExerciseDetail(data)


        // API for youtube videos

        fetch(`https://youtube-search-and-download.p.rapidapi.com/search?query=${data.name}`, youtubeOptions)
          .then(response => response.json())
          .then((data) => {
            setExerciseVideos(data.contents.slice(0, 3))

          })

        fetch(`https://exercisedb.p.rapidapi.com/exercises/target/${data.target}`, exerciseOptions)
          .then(response => response.json())
          .then((data) => {

            console.log('target', data)

            setTargetMuscleExercises(data)

          })

        fetch(`https://exercisedb.p.rapidapi.com/exercises/equipment/${data.equipment}`, exerciseOptions)
          .then(response => response.json())
          .then((data) => {

            console.log('equipment', data)
            setEquipmentExercises(data)

          })

      })





  }, [id])


  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail