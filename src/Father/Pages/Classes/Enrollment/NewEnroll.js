import React from 'react'
import NavBar from '../../../Components/NavBar/NavBarFather'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
const NewEnroll = () => {


    return (
        <div>
            <NavBar />

            <div className='title-class d-flex justify-content-between align-items-center'>
                <div className='col-md-4 d-flex justify-content-between align-items-center' style={{ alignItems: "center" }} >
                    <Link to="/AllClassesFather">
                        <ArrowForwardIcon sx={{ color: "#fff", fontSize: "38px" }} />
                    </Link>
                </div>

                <div className='col-md-8 ml-1 d-flex justify-content-between align-items-center' style={{ justifyContent: "flex-start" }}>
                    <h2 className='text-center text-white mr-5'> تسجيل جديد </h2>
                </div>
            </div>

            <div className="add-student editemail">

                <div className="container">
                    <div className="row">
                        <div className="col-md-9 m-auto">
                            <form action="" className=' mt-5' method='get'>

                                <div className='mb-5 p-3 special-info bg-white'>
                                    <div className='mb-4'>
                                        <h3
                                            style={{
                                                borderRight: " 5px #004c6d solid",
                                                paddingRight: " 11px",
                                                borderRadius: "2px",
                                                color: "#000",
                                            }}
                                        > تدريب خاص</h3>
                                    </div>
                                    <div class="form-group d-flex">
                                        <label htmlFor="" className='ml-5 gender'>تسجيل الطالب</label>
                                        <div class="input-group-prepend">
                                            <div class="">
                                                <input type="radio" className='ml-2' value='male' name='gender' /> اسلام
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group d-flex justify-content-between align-items-center">
                                        <label htmlFor="class"> الجلسه </label>
                                        <select name="class" className='form-control w-75'>
                                            <option value="class">
                                                صيف 2024 (1 يوليو 2024 - 25 أغسطس 2024) (مفتوح)
                                            </option>

                                        </select>
                                    </div>


                                    <div className='mb-5 p-3 '>
                                        <div className="form-group d-flex justify-content-between align-items-center">
                                            <label htmlFor="">  أي شيء آخر نحن بحاجة إلى معرفته؟
                                            </label>
                                            <textarea type="" className="form-control w-75" placeholder='' />
                                        </div>
                                    </div>





                                </div>

                                <div className='add-student-btn d-flex justify-content-end align-items-center my-5 '>
                                    <button className='btn ml-2 mb-3 w-100 btn-edit'>اضف الى العربه</button>
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

export default NewEnroll