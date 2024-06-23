import { CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavBarFather from '../../../Components/NavBar/NavBarFather';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Enrollments = () => {

    return (
        <div>
            <NavBarFather />
            <div className='classes pb-3'>
                <div className='title-class d-flex'>
                    <div className='col-md-5 d-flex' style={{ alignItems: "center" }} >
                        <Link to="/MyAcountFather">
                            <ArrowForwardIcon sx={{ color: "#fff", fontSize: "38px" }} />
                        </Link>
                    </div>
                    <div className='col-md-7 ml-1 d-flex' style={{ justifyContent: "flex-start" }}>

                        <h2 className='text-center text-white mr-5'>البرامج المحجوزه</h2>
                    </div>
                </div>
            </div>

            <div className='allclasses'>
                <div className="container ">
                    <div className='col-md-12 mb-4 d-flex justify-content-between align-items-center' style={{ borderBottom: " 1px #3e3e3e63 solid" }}>
                        <div className='col-md-1 mb-0' style={{ borderBottom: " 2px #004c6d solid" }}>

                            <p className='mb-2'>إسلام</p>
                        </div>
                        <Link to='/AllclassesAccountFather'>
                            <button type="button" className='btn btn-edit m-auto mb-3'>اضافة كورس</button>
                        </Link>
                    </div>
                    <div className="row mt-5">

                        <div className="col-md-4 mb-3 all-classes-col">
                            <div className='white-div p-1'></div>
                            <div className='bg-white p-2'></div>
                            <Card className='allclasses-card'>
                                <CardMedia className='allclasses-img'
                                    title="all-classes"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='text-muted fw-bold'>
                                        برنامج 1
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        الاحد | 9.00 _ 9.30
                                    </Typography>


                                    <hr className='text-muted' />
                                    <Link className='text-info'>
                                        <span className='text-info mr-2'>s</span>
                                    </Link>
                                    <Link>
                                        <span className='text-muted mr-2'>m</span>
                                    </Link>
                                    <Link>
                                        <span className='text-muted mr-2'>t</span>
                                    </Link>
                                    <Link>
                                        <span className='text-muted mr-2'>w</span>
                                    </Link>
                                    <Link>
                                        <span className='text-muted mr-2'>t</span>
                                    </Link>
                                    <Link>
                                        <span className='text-muted mr-2'>s</span>
                                    </Link>
                                    <Link>
                                        <span className='text-muted mr-2'>f</span>
                                    </Link>
                                </CardContent>

                            </Card>
                        </div>

                        <div className="col-md-4 mb-3 all-classes-col">
                            <div className='white-div p-1'></div>
                            <div className='bg-white p-2'></div>
                            <Card className='allclasses-card'>
                                <CardMedia className='allclasses-img'
                                    title="all-classes"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className='text-muted fw-bold'>
                                        برنامج 2
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        الاحد | 9.00 _ 9.30
                                    </Typography>


                                    <hr className='text-muted' />
                                    <Link className='text-info'>
                                        <span className='text-info mr-2'>s</span>
                                    </Link>
                                    <Link>
                                        <span className='text-muted mr-2'>m</span>
                                    </Link>
                                    <Link>
                                        <span className='text-muted mr-2'>t</span>
                                    </Link>
                                    <Link>
                                        <span className='text-muted mr-2'>w</span>
                                    </Link>
                                    <Link>
                                        <span className='text-muted mr-2'>t</span>
                                    </Link>
                                    <Link>
                                        <span className='text-muted mr-2'>s</span>
                                    </Link>
                                    <Link>
                                        <span className='text-muted mr-2'>f</span>
                                    </Link>
                                </CardContent>

                            </Card>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enrollments