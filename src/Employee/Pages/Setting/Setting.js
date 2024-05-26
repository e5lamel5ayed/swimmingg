import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const Setting = () => {
    return (
        <div>
            <NavBar />

            <div className='title-class d-flex justify-content-between align-items-center'>
                <div className='col-md-4 d-flex justify-content-between align-items-center' style={{ alignItems: "center" }} >
                    <Link to="/choosestudent">
                        <ArrowForwardIcon sx={{ color: "#fff", fontSize: "38px" }} />
                    </Link>
                </div>

                <div className='col-md-8 ml-1 d-flex justify-content-between align-items-center' style={{ justifyContent: "flex-start" }}>
                    <h2 className='text-center text-white mr-5'>الاعدادت</h2>
                </div>
            </div>
        </div>
    )
}

export default Setting