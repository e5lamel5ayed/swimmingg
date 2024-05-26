import React, { useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Student from './Student'
import { Tab, Tabs } from '@mui/material';
import { CardContent, CardMedia, CircularProgress, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const MyAcount = () => {
    const [open, setOpen] = useState(false);
    const [selectedDays, setSelectedDays] = useState([]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDayClick = (day) => {
        setSelectedDays((prevSelectedDays) =>
            prevSelectedDays.includes(day)
                ? prevSelectedDays.filter((d) => d !== day)
                : [...prevSelectedDays, day]
        );
    };

    const handleClear = () => {
        setSelectedDays([]);
    };


    return (
        <div>
            <NavBar />
            <div className='myacount'>
                <div className='title-class'>
                    <h2 className='text-center text-white'>حسابي</h2>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                        <h4>المجموعات المحجوزة للطلاب</h4>

                        <div className='col-md-4 ml-auto mr-auto mt-5 all-classes-col'>
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

                                    <p className='mt-3'>
                                        تم الحجز للطالب
                                    </p>

                                    <h6 className='mt-3 text-danger'>
                                        آدم محمد
                                    </h6>
                                    <p className='mt-3'>
                                        تاريخ الحجز
                                    </p>
                                    <p className='mt-3 text-danger'>
                                        ( 25 أغسطس 2024 )
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className='col-md-4 ml-auto mr-auto mt-5 all-classes-col'>
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

                                    <p className='mt-3'>
                                        تم الحجز للطالب
                                    </p>

                                    <h6 className='mt-3 text-danger'>
                                        السيد اسامة
                                    </h6>
                                    <p className='mt-3'>
                                        تاريخ الحجز
                                    </p>
                                    <p className='mt-3 text-danger'>
                                        ( 25 أغسطس 2024 )
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className='col-md-4 ml-auto mr-auto mt-5 all-classes-col'>
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

                                    <p className='mt-3'>
                                        تم الحجز للطالب
                                    </p>

                                    <h6 className='mt-3 text-danger'>
                                        اسلام السيد
                                    </h6>
                                    <p className='mt-3'>
                                        تاريخ الحجز
                                    </p>
                                    <p className='mt-3 text-danger'>
                                        ( 25 أغسطس 2024 )
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className='col-md-4 ml-auto mr-auto mt-5 all-classes-col'>
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

                                    <p className='mt-3'>
                                        تم الحجز للطالب
                                    </p>

                                    <h6 className='mt-3 text-danger'>
                                        محمد احمد
                                    </h6>
                                    <p className='mt-3'>
                                        تاريخ الحجز
                                    </p>
                                    <p className='mt-3 text-danger'>
                                        ( 25 أغسطس 2024 )
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className='col-md-4 ml-auto mr-auto mt-5 all-classes-col'>
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

                                    <p className='mt-3'>
                                        تم الحجز للطالب
                                    </p>

                                    <h6 className='mt-3 text-danger'>
                                        اسلام علي
                                    </h6>
                                    <p className='mt-3'>
                                        تاريخ الحجز
                                    </p>
                                    <p className='mt-3 text-danger'>
                                        ( 25 أغسطس 2024 )
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className='col-md-4 ml-auto mr-auto mt-5 all-classes-col'>
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

                                    <p className='mt-3'>
                                        تم الحجز للطالب
                                    </p>

                                    <h6 className='mt-3 text-danger'>
                                        متولي سعد
                                    </h6>
                                    <p className='mt-3'>
                                        تاريخ الحجز
                                    </p>
                                    <p className='mt-3 text-danger'>
                                        ( 25 أغسطس 2024 )
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className='col-md-4 ml-auto mr-auto mt-5 all-classes-col'>
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

                                    <p className='mt-3'>
                                        تم الحجز للطالب
                                    </p>

                                    <h6 className='mt-3 text-danger'>
                                        ادم محمد
                                    </h6>
                                    <p className='mt-3'>
                                        تاريخ الحجز
                                    </p>
                                    <p className='mt-3 text-danger'>
                                        ( 25 أغسطس 2024 )
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}
export default MyAcount