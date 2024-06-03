import React from 'react'
import { Link } from 'react-router-dom'
import { FiUsers } from "react-icons/fi";
import NavBar from '../Components/NavBar/NavBar';


const ClassHome = () => {
    return (
        <div>
            <NavBar />
            <div className="container booking">
                <div className="row">

                    <div className="col-md-12 text-center text-white my-5">
                        <h5 className='font-italic'>لنري ما هو متاح</h5>
                        <h2 className='mt-3'>ماذا تريد ان تري</h2>
                    </div>

                    <div className="col-md-4 text-white m-auto">
                        <Link to='/Allclasses' className='text-decoration-none'>
                            <div className='box px-4'>
                                <h4 className='text-info'>
                                    بحث عن الصف
                                </h4>
                                <div>
                                    <FiUsers size={60} className='icon' />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassHome