import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StudentDetailsDayTable = () => {
    return (
        <div>
            <NavBar />
            <div className='title-class d-flex justify-content-between align-items-center'>
                <div className='col-md-4 d-flex justify-content-between align-items-center' style={{ alignItems: "center" }}>
                    <Link to="/dayTable">
                        <ArrowForwardIcon sx={{ color: "#fff", fontSize: "38px" }} />
                    </Link>
                </div>

                <div className='col-md-7 ml-1 d-flex justify-content-between align-items-center' style={{ justifyContent: "flex-start" }}>

                    <div className="d-flex justify-content-between align-items-center">
                        <i className="fas fa-address-card"></i>
                        <h2 className='text-center text-white mr-3'>تفاصيل الطالب</h2>
                    </div>
                </div>
            </div>

            <div className='bg-white add-setting'>
                <div className="container pt-5">
                    <div className="row">
                        <div className="add-student">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-9 m-auto">

                                        <form action="" className=' mt-5' method='get'>

                                            <div className='mb-5 p-3 special-info bg-white'>
                                                <div className="form-group d-flex justify-content-between align-items-center">
                                                    <label htmlFor="">اسم الطالب :</label>
                                                    <input type="text" className="form-control w-75" value='السيد اسامة' disabled />
                                                </div>

                                                <div className="form-group d-flex justify-content-between align-items-center">
                                                    <label htmlFor=""> اسم الاب :</label>
                                                    <input type="text" className="form-control w-75" value='اسامة محمد' disabled />
                                                </div>

                                                <div className="form-group d-flex justify-content-between align-items-center">
                                                    <label htmlFor=""> اسم الام :</label>
                                                    <input type="text" className="form-control w-75" value='اسماء محمد' disabled />
                                                </div>

                                                <div className="form-group d-flex justify-content-between align-items-center">
                                                    <label htmlFor="">تاريخ الميلاد :</label>
                                                    <input type="text" className="form-control w-75" value='2000/10/1' disabled />
                                                </div>

                                                <div className="form-group d-flex justify-content-between align-items-center">
                                                    <label htmlFor=""> ظروف صحية خاصة :</label>
                                                    <input type="text" className="form-control w-75" value='لا يوجد' disabled />
                                                </div>

                                                <div className="form-group d-flex justify-content-between align-items-center">
                                                    <label htmlFor="">النوع :</label>
                                                    <input type="text" className="form-control w-75" value='ذكر' disabled />
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>)
}

export default StudentDetailsDayTable