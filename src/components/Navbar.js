import { Stack } from '@mui/material'
import React from 'react'
import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Stack direction='row'
            sx={{ gap: { sm: '150px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, px: '20px'}}>
            <Link to='/' >
                <img src={Logo} alt='Logo' style={{ width: '48px', height: '28px', margin: '0 20px' }} />
            </Link>

            <Stack
                direction='row'
                gap='40px'
                fontSize='24px'
                alignItems='flex-end'>

                <Link to='/' style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
                <a href='#exercises' style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
            </Stack>

        </Stack>
    )
}

export default Navbar