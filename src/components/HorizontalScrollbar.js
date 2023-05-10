import { Box } from '@mui/material'
import React from 'react'
import '../App.css'
import BodyPart from './BodyPart'



const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {


    return (
        <div className='container'>
            {data.map((item) => (
                <Box
                    key={item}
                    itemId={item}
                    title={item}
                    m=' 0 40px'
                >

                    <BodyPart item={item}
                        bodyPart={bodyPart}
                        setBodyPart={setBodyPart}
                    />




                </Box>

            ))}
        </div>
    )
}

export default HorizontalScrollbar
