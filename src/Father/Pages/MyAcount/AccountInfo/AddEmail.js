import React from 'react'
import NavBar from '../../../Components/NavBar/NavBarFather'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
const AddEmail = () => {


    return (
        <div>
            <NavBar />

            <div className='title-class d-flex justify-content-between align-items-center'>
                <div className='col-md-4 d-flex justify-content-between align-items-center' style={{ alignItems: "center" }} >
                    <Link to="/MyAcountFather">
                        <ArrowForwardIcon sx={{ color: "#fff", fontSize: "38px" }} />
                    </Link>
                </div>

                <div className='col-md-8 ml-1 d-flex justify-content-between align-items-center' style={{ justifyContent: "flex-start" }}>
                    <h2 className='text-center text-white mr-5'>اضافة بريد الكتروني</h2>
                </div>
            </div>

            <div className="add-student editemail">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 m-auto">

                            <form action="" className=' mt-5' method='get'>

                                <div className='mb-5 p-3 special-info bg-white'>
                                    <div className="form-group d-flex justify-content-between align-items-center">
                                        <label htmlFor="">عنوان البريد الإلكتروني لتسجيل الدخول:</label>
                                        <input type="text" className="form-control w-75" placeholder='sayedosama@gmail.com' />
                                    </div>

                                    <div className="form-group d-flex justify-content-between align-items-center">
                                        <label htmlFor="">نوع البريد الإلكتروني لتسجيل الدخول :</label>
                                        <select name="class" className='form-control w-75'>

                                            <option value="class">
                                                نوع الايميل
                                            </option>
                                            <option value="class">
                                                ايميل 1
                                            </option>
                                            <option value="class">
                                                ايميل 2
                                            </option>
                                            <option value="class">
                                                اخري
                                            </option>

                                        </select>
                                    </div>


                                </div>

                                <div className='add-student-btn d-flex justify-content-end align-items-center my-5 '>
                                    <button className='btn ml-2 mb-3 w-100 btn-edit'>تعديل</button>
                                    <button className='btn w-100  mb-3 btn-edit2'>الغاء</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmail