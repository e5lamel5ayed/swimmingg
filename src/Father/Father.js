import React from 'react'
import NavBar from '../Father/Components/NavBar/NavBar'
import { Link } from 'react-router-dom';

const Father = () => {
    return (
        <div>
            <div className="container home">
                <div className="row">
                    <NavBar />

                    <div className="col-md-12 text-center text-white my-5">
                        <h5 className='font-italic'>اهلا وسهلا</h5>
                        <h2 className='mt-3'>كيف يمكننا المساعده</h2>
                    </div>

                    <div className="col-md-4 mb-4">
                        <Link to='' className='text-decoration-none'>
                            <div className="box box_hover text-white border bg-white text-center">
                                <h4 className='bg-white text-info text-center py-2'>الاخبار</h4>
                                <img className='img-fluid' src="/images/home/speaker.jpg" alt="" />
                                <h6 className='text-white'>لمشاهده الجدول والتسجيل</h6>
                                <div className='p-2'></div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 mb-4">
                        <Link to='/MyAcount' className='text-decoration-none'>
                            <div className="box box_hover text-white border bg-white text-center">
                                <h4 className='bg-white text-info text-center py-2'>حسابي</h4>
                                <img className='img-fluid' src="/images/home/my-account.png" alt="" />
                                <h6 className='text-white'>لمشاهده الجدول والتسجيل</h6>
                                <div className='p-2'></div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 mb-4">
                        <Link to='/booking' className='text-decoration-none'>
                            <div className="box box_hover text-white border bg-white text-center">
                                <h4 className='bg-white text-info text-center py-2'>الحجز</h4>
                                <img className='img-fluid' src="/images/home/booking.png" alt="" />
                                <h6 className='text-white'>لمشاهده الجدول والتسجيل</h6>
                                <div className='p-2'></div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md 6 text-white home-login ml-4 mb-4">
                        <Link to='/login' className='text-decoration-none'>
                            <div className='box box_hover login_hover d-flex justify-content-between align-items-center'>
                                <i className='fa fa-user text-dark'></i>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <i className='fas fa-angle-right pb-2'></i>
                                    <h5 className='pl-4 text-white'> تسجيل الدخول</h5>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md 6 text-white home-login mb-4">
                        <Link to='/register' className='text-decoration-none'>
                            <div className='box box_hover login_hover d-flex justify-content-between align-items-center'>
                                <i class="fa-solid fa-credit-card text-dark"></i>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <i className='fas fa-angle-right pb-2'></i>
                                    <h5 className='pl-4 text-white'>انشاء حساب</h5>
                                </div>
                            </div>
                        </Link>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Father