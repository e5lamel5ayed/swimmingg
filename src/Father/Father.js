import React from 'react'
import NavBar from '../Father/Components/NavBar/NavBarFather'
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
                                <h6 className='text-white'>لمشاهده الاخبار</h6>
                                <div className='p-2'></div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 mb-4">
                        <Link to='/MyAcountFather' className='text-decoration-none'>
                            <div className="box box_hover text-white border bg-white text-center">
                                <h4 className='bg-white text-info text-center py-2'>حسابي</h4>
                                <img className='img-fluid' src="/images/home/my-account.png" alt="" />
                                <h6 className='text-white'>لمشاهده حسابي</h6>
                                <div className='p-2'></div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-4 mb-4">
                        <Link to='/bookingFather' className='text-decoration-none'>
                            <div className="box box_hover text-white border bg-white text-center">
                                <h4 className='bg-white text-info text-center py-2'>الحجز</h4>
                                <img className='img-fluid' src="/images/home/booking.png" alt="" />
                                <h6 className='text-white'>لمشاهده الحجز</h6>
                                <div className='p-2'></div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Father