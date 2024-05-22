import NavBar from '../../Components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';
import { Stack } from '@mui/material';

import All from '../Chips/All';
import Age from '../Chips/Age';
import Programs from '../Chips/Programs';
import Days from '../Chips/Days';
import Instructors from '../Chips/Instructors';
import Avilable from '../Chips/Avilable';


export const Classes = () => {

    return (
        <div>
            <NavBar />
            <div className='classes pb-3'>

                <div className='title-class d-flex'>
                    <div className='col-md-5 d-flex' style={{ alignItems: "center" }} >
                        <Link to="/booking">
                            <ArrowForwardIcon sx={{ color: "#fff", fontSize: "38px" }} />
                        </Link>
                    </div>
                    <div className='col-md-7 ml-1 d-flex' style={{ justifyContent: "flex-start" }}>
                        <h2 className='text-center text-white mr-5'>الصفوف</h2>
                    </div>
                </div>

                <div className='container'>

                    <Stack direction="row" spacing={1} className='m-2 mt-4'>
                        <All/>
                        <Age/>
                        <Programs/>
                        <Days/>
                        <Instructors/>
                        <Avilable/>
                        

                    </Stack>
                </div>

            </div>


        </div>
    )
}
export default Classes