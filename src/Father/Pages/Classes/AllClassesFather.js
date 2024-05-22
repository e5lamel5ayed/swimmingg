import { CardContent, CardMedia, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ClassesFather from './ClassesFather'

const AllClassesFather = () => {
    return (
        <div>

            <ClassesFather />
            <div className='allclasses'>
                <div className="container ">
                    <div className='col-md-12 mb-4' style={{ borderBottom: " 1px #3e3e3e63 solid" }}>
                        <div className='col-md-1 mb-0' style={{ borderBottom: " 2px #004c6d solid" }}>

                            <p className='mb-2'>إسلام</p>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-4 mb-3 all-classes-col">
                            <Link to='/classDetailsFather'>
                                <div className='white-div p-1'></div>
                                <div className='bg-white p-2'></div>
                                <Card className='allclasses-card'>
                                    <CardMedia className='allclasses-img'
                                        title="all-classes"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" className='text-muted fw-bold'>
                                            مجموعة 1
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            الاحد | 9.00 _ 9.30
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary" className='mt-3'>
                                            <Link className='allclasses-watch text-info'>
                                                مشاهدة العروض المتاحة
                                            </Link>
                                        </Typography>
                                        <div className='d-flex justify-content-end position-relative'>
                                            <CircularProgress variant="determinate" value={100} className='text-danger mt-3 ml-3 ' />
                                            <span className='position-absolute allclasses-open'>مغلق</span>
                                        </div>
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
                            </Link>
                        </div>

                        <div className="col-md-4 mb-3 all-classes-col">
                            <Link>
                                <div className=' white-div p-1'></div>
                                <div className='bg-white p-2'></div>
                                <Card className='allclasses-card'>
                                    <CardMedia className='allclasses-img'
                                        title="all-classes"
                                    />
                                    <CardContent>

                                        <Typography gutterBottom variant="h5" component="div" className='text-muted fw-bold'>
                                            مجموعة 2
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            الاحد | 9.00 _ 9.30
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary" className='mt-3'>
                                            <Link className='allclasses-watch text-info'>
                                                مشاهدة العروض المتاحة
                                            </Link>
                                        </Typography>
                                        <div className='d-flex justify-content-end position-relative'>
                                            <CircularProgress variant="determinate" value={100} className='text-danger mt-3 ml-3 ' />
                                            <span className='position-absolute allclasses-open'>مغلق</span>
                                        </div>
                                        <hr className='text-muted' />
                                        <Link className='text-decoration-none text-info'>
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
                            </Link>
                        </div>

                        <div className="col-md-4 mb-3 all-classes-col">
                            <Link>
                                <div className=' white-div p-1'></div>
                                <div className='bg-white p-2'></div>
                                <Card className='allclasses-card'>
                                    <CardMedia className='allclasses-img'
                                        title="all-classes"
                                    />
                                    <CardContent>

                                        <Typography gutterBottom variant="h5" component="div" className='text-muted fw-bold'>
                                            مجموعة 3
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            الاحد | 9.00 _ 9.30
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary" className='mt-3'>
                                            <Link className='allclasses-watch text-info'>
                                                مشاهدة العروض المتاحة
                                            </Link>
                                        </Typography>
                                        <div className='d-flex justify-content-end position-relative'>
                                            <CircularProgress variant="determinate" value={100} className='text-danger mt-3 ml-3 ' />
                                            <span className='position-absolute allclasses-open'>مغلق</span>
                                        </div>
                                        <hr className='text-muted' />
                                        <Link className='text-decoration-none text-info'>
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
                            </Link>
                        </div>

                        <div className="col-md-4 mb-3 all-classes-col">
                            <Link>
                                <div className=' white-div p-1'></div>
                                <div className='bg-white p-2'></div>
                                <Card className='allclasses-card'>
                                    <CardMedia className='allclasses-img'
                                        title="all-classes"
                                    />
                                    <CardContent>

                                        <Typography gutterBottom variant="h5" component="div" className='text-muted fw-bold'>
                                            مجموعة 4
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            الاحد | 9.00 _ 9.30
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary" className='mt-3'>
                                            <Link className='allclasses-watch text-info'>
                                                مشاهدة العروض المتاحة
                                            </Link>
                                        </Typography>
                                        <div className='d-flex justify-content-end position-relative'>
                                            <CircularProgress variant="determinate" value={100} className='text-danger mt-3 ml-3 ' />
                                            <span className='position-absolute allclasses-open'>مغلق</span>
                                        </div>
                                        <hr className='text-muted' />
                                        <Link className='text-decoration-none text-info'>
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
                            </Link>
                        </div>

                        <div className="col-md-4 mb-3 all-classes-col">
                            <Link>
                                <div className=' white-div p-1'></div>
                                <div className='bg-white p-2'></div>
                                <Card className='allclasses-card'>
                                    <CardMedia className='allclasses-img'
                                        title="all-classes"
                                    />
                                    <CardContent>

                                        <Typography gutterBottom variant="h5" component="div" className='text-muted fw-bold'>
                                            مجموعة 5
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            الاحد | 9.00 _ 9.30
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary" className='mt-3'>
                                            <Link className='allclasses-watch text-info'>
                                                مشاهدة العروض المتاحة
                                            </Link>
                                        </Typography>
                                        <div className='d-flex justify-content-end position-relative'>
                                            <CircularProgress variant="determinate" value={100} className='text-danger mt-3 ml-3 ' />
                                            <span className='position-absolute allclasses-open'>مغلق</span>
                                        </div>
                                        <hr className='text-muted' />
                                        <Link className='text-decoration-none text-info'>
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
                            </Link>
                        </div>

                        <div className="col-md-4 mb-3 all-classes-col">
                            <Link>
                                <div className=' white-div p-1'></div>
                                <div className='bg-white p-2'></div>
                                <Card className='allclasses-card'>
                                    <CardMedia className='allclasses-img'
                                        title="all-classes"
                                    />
                                    <CardContent>

                                        <Typography gutterBottom variant="h5" component="div" className='text-muted fw-bold'>
                                            مجموعة 6
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            الاحد | 9.00 _ 9.30
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary" className='mt-3'>
                                            <Link className='allclasses-watch text-info'>
                                                مشاهدة العروض المتاحة
                                            </Link>
                                        </Typography>
                                        <div className='d-flex justify-content-end position-relative'>
                                            <CircularProgress variant="determinate" value={100} className='text-danger mt-3 ml-3 ' />
                                            <span className='position-absolute allclasses-open'>مغلق</span>
                                        </div>
                                        <hr className='text-muted' />
                                        <Link className='text-decoration-none text-info'>
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
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllClassesFather