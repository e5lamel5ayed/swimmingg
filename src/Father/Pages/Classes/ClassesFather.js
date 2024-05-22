import React from 'react'
import { Chip, Stack } from '@mui/material';
import NavBar from '../../../Father/Components/NavBar/NavBarFather';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const ClassesFather = () => {
    return (
        <div>
            <NavBar />
            <div className='classes pb-5'>
                <div className='title-class d-flex'>
                    <div className='col-md-5 d-flex' style={{ alignItems: "center" }} >
                        <Link to="/ChoseClass">
                            <ArrowForwardIcon sx={{ color: "#fff", fontSize: "38px" }} />
                        </Link>
                    </div>
                    <div className='col-md-7 ml-1 d-flex' style={{ justifyContent: "flex-start" }}>

                        <h2 className='text-center text-white mr-5'>الصفوف</h2>
                    </div>
                </div>

                <div className='container'>

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
        </div>
    )
}
export default ClassesFather