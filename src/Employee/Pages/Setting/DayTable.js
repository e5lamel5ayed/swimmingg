import React from "react";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";

import NavBar from "../../Components/NavBar/NavBar";

function DayTable() {


    return (
        <div>
            <NavBar />

            <div className='title-class d-flex justify-content-between align-items-center'>
                <div className='col-md-4 d-flex justify-content-between align-items-center' style={{ alignItems: "center" }}>
                    <Link to="/Employee">
                        <ArrowForwardIcon sx={{ color: "#fff", fontSize: "38px" }} />
                    </Link>
                </div>

                <div className='col-md-7 ml-1 d-flex justify-content-between align-items-center' style={{ justifyContent: "flex-start" }}>
                    <h2 className='text-center text-white mr-5'>جدول اليوم</h2>
                </div>
            </div>

            <div className='bg-white add-setting'>
                <div className="container pt-5">
                    <div className="row">

                        <div className="col-md-2  border">
                            <div className="time-box">الساعات</div>
                            <hr />
                            <div className="time"></div>
                            <div className="box-time fw-bold">9.00 - 10.00 ص</div>
                            <div className="box-time fw-bold">10.00 - 11.00 ص</div>
                            <div className="box-time fw-bold">11.00 - 12.00 م</div>
                            <div className="box-time fw-bold">12.00 - 1.00 م</div>
                        </div>

                        <div className="col-md-10">
                            <div className="d-flex">
                                <div className="box-day border">السبت</div>
                                <div className="box-day border">الاحد</div>
                                <div className="box-day border">الاثنين</div>
                                <div className="box-day border">الثلاثاء</div>
                                <div className="box-day border">الابعاء</div>
                                <div className="box-day border">الخميس</div>
                                <div className="box-day border">الجمعه</div>
                            </div>

                            <div className="d-flex ">
                                <div className="box-day border">
                                    <select name="" id="" className="mt-1">
                                        <option name="" id="">اختر حمام</option>
                                        <option name="" id="">حمام 1</option>
                                        <option name="" id="">حمام 2</option>
                                        <option name="" id="">حمام 3</option>
                                    </select>
                                </div>
                                <div className="box-day border">
                                    <select name="" id="" className="mt-1">
                                        <option name="" id="">اختر حمام</option>
                                        <option name="" id="">حمام 1</option>
                                        <option name="" id="">حمام 2</option>
                                        <option name="" id="">حمام 3</option>
                                    </select>
                                </div>
                                <div className="box-day border">
                                    <select name="" id="" className="mt-1">
                                        <option name="" id="">اختر حمام</option>
                                        <option name="" id="">حمام 1</option>
                                        <option name="" id="">حمام 2</option>
                                        <option name="" id="">حمام 3</option>
                                    </select>
                                </div>
                                <div className="box-day border">
                                    <select name="" id="" className="mt-1">
                                        <option name="" id="">اختر حمام</option>
                                        <option name="" id="">حمام 1</option>
                                        <option name="" id="">حمام 2</option>
                                        <option name="" id="">حمام 3</option>
                                    </select>
                                </div>
                                <div className="box-day border">
                                    <select name="" id="" className="mt-1">
                                        <option name="" id="">اختر حمام</option>
                                        <option name="" id="">حمام 1</option>
                                        <option name="" id="">حمام 2</option>
                                        <option name="" id="">حمام 3</option>
                                    </select>
                                </div>
                                <div className="box-day border">
                                    <select name="" id="" className="mt-1">
                                        <option name="" id="">اختر حمام</option>
                                        <option name="" id="">حمام 1</option>
                                        <option name="" id="">حمام 2</option>
                                        <option name="" id="">حمام 3</option>
                                    </select>
                                </div>
                                <div className="box-day border">
                                    <select name="" id="" className="mt-1">
                                        <option name="" id="">اختر حمام</option>
                                        <option name="" id="">حمام 1</option>
                                        <option name="" id="">حمام 2</option>
                                        <option name="" id="">حمام 3</option>
                                    </select>
                                </div>

                            </div>

                            <div className="d-flex">

                                <div className="box-info border p-1">
                                    <div className="">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <i className="fas fa-check text-danger mr-2"></i>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-1" />
                                    <div className=" d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-check text-success m2-1"></i>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-1" />
                                    <div className=" d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-check text-success m2-1"></i>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />

                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                            </div>
                            <div className="d-flex">

                                <div className="box-info border p-1">
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />

                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                            </div>
                            <div className="d-flex">

                                <div className="box-info border p-1">
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />

                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                            </div>
                            <div className="d-flex">

                                <div className="box-info border p-1">
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                                <div className="box-info border p-1">
                                    <div className="bg-danger p-1 text-white">
                                        <span className="mx-0 fw-light">حارة 1</span>
                                        <br />
                                        <p className="m-0 fw-light">برنامج 1</p>
                                    </div>
                                    <hr className="m-0" />
                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 2</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                    <hr className="m-0" />

                                    <div className="bg-success p-1 text-white d-flex justify-content-between align-items-center">
                                        <span className="mx-0 fw-light">حارة 3</span>
                                        <i className="fas fa-plus text-dark rounded-circle bg-info p-1 add-btn" title="اضافة برنامج"></i>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DayTable;
