import React, { useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const DayTable = () => {
    return (
        <div>
            <NavBar />

            <div className='title-class d-flex justify-content-between align-items-center'>
                <div className='col-md-4 d-flex justify-content-between align-items-center' style={{ alignItems: "center" }}>
                    <Link to="/Emploee">
                        <ArrowForwardIcon sx={{ color: "#fff", fontSize: "38px" }} />
                    </Link>
                </div>

                <div className='col-md-8 ml-1 d-flex justify-content-between align-items-center' style={{ justifyContent: "flex-start" }}>
                    <div className='d-flex align-items-center mr-5'>
                        <CalendarMonthIcon className='ml-3' />
                        <h2 className='text-center text-white'>جدول اليوم</h2>
                    </div>
                </div>
            </div>

            <div className='bg-white add-setting'>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='mb-5 p-3 special-info bg-white'>
                            <table className="table table-bordered mt-4">
                                <thead>
                                    <tr>
                                        <th>اليوم</th>
                                        <th>اسم الحمام</th>
                                        <th>الساعات</th>
                                        <th>الحارات</th>
                                        <th>اسم البرنامج</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DayTable