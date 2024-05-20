import React from 'react'
import { Chip, Stack } from '@mui/material';
import NavBar from '../../../Father/Components/NavBar/NavBarFather';

export const ClassesFather = () => {
    return (
        <div>
            <NavBar />
            <div className='classes pb-5'>
                <div className='title'>
                    <h2 className='text-center text-white'>الصفوف</h2>
                </div>

                <Stack direction="row" spacing={1} className='m-2'>

                    <Chip
                        className='m-1'
                        label="الكل"
                        component="a"
                        href="#basic-chip"
                        variant="outlined"
                        clickable
                    />

                    <Chip
                        className='m-1'
                        label="العمر"
                        component="a"
                        href="#basic-chip"
                        variant="outlined"
                        clickable
                    />

                    <Chip
                        className='m-1'
                        label="البرامج"
                        component="a"
                        href="#basic-chip"
                        variant="outlined"
                        clickable
                    />

                    <Chip
                        className='m-1'
                        label="الايام"
                        component="a"
                        href="#basic-chip"
                        variant="outlined"
                        clickable
                    />

                    <Chip
                        className='m-1'
                        label="المدربين"
                        component="a"
                        href="#basic-chip"
                        variant="outlined"
                        clickable
                    />

                    <Chip
                        className='m-1'
                        label="المتاح"
                        component="a"
                        href="#basic-chip"
                        variant="outlined"
                        clickable
                    />

                </Stack>

            </div>
        </div>
    )
}
export default ClassesFather