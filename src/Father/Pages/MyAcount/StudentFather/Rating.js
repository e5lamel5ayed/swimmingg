import { CardContent, CardMedia, CircularProgress, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CancelIcon from '@mui/icons-material/Cancel';
import NavBarFather from '../../../Components/NavBar/NavBarFather';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Rating = () => {

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
            <NavBarFather />
            <div className='classes pb-3 '>
                <div className='title-class d-flex'>
                    <div className='col-md-5 d-flex' style={{ alignItems: "center" }} >
                        <Link to="/MyAcountFather">
                            <ArrowForwardIcon sx={{ color: "#fff", fontSize: "38px" }} />
                        </Link>
                    </div>
                    <div className='col-md-7 ml-1 d-flex' style={{ justifyContent: "flex-start" }}>

                        <h2 className='text-center text-white mr-5'>التقيمات </h2>
                    </div>
                </div>
            </div>

            <div className='allclasses add-setting pt-4'>
                <div className="container ">
                    <div className='col-md-12 mb-4' style={{ borderBottom: " 1px #3e3e3e63 solid" }}>
                        <div className='col-md-1 mb-0' style={{ borderBottom: " 2px #004c6d solid" }}>

                            <p className='mb-2'>إسلام</p>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-4 mb-3 all-classes-col">
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



                                    <div className='d-flex justify-content-between align-item-center position-relative'>
                                        <Typography variant="" style={{ fontSize: "20px" }} color="text.secondary" className='mt-3 '>
                                            التقييم
                                        </Typography>
                                        <CircularProgress variant="determinate" value={75} className='text-success mt-3 ml-3 ' />
                                        <span className='position-absolute allclasses-open'>75%</span>
                                    </div>

                                </CardContent>

                            </Card>
                        </div>

                        <div className="col-md-4 mb-3 all-classes-col">
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



                                    <div className='d-flex justify-content-between align-item-center position-relative'>
                                        <Typography variant="" style={{ fontSize: "20px" }} color="text.secondary" className='mt-3 '>
                                            التقييم
                                        </Typography>
                                        <CircularProgress variant="determinate" value={90} className='text-success mt-3 ml-3 ' />
                                        <span className='position-absolute allclasses-open'>90%</span>
                                    </div>

                                </CardContent>

                            </Card>
                        </div>




                    </div>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <div className="white-div p-1" style={{ backgroundColor: "#94F0FF" }}></div>
                <DialogTitle style={{ marginBottom: "15px", direction: "rtl", textAlign: "center" }}>
                    الجلسات
                    <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose} />
                </DialogTitle>
                <DialogContent style={{ direction: "rtl" }}>
                    <div className="container-fluid">
                        <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                            <div className="col-md-12">
                                <table class="table table-hover">
                                    <thead className='bg-light'>
                                        <tr>
                                            <th scope="col">الاسم</th>
                                            <th scope="col">التاريخ</th>
                                            <th scope="col">الحاله</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>صيف 2024 </td>
                                            <td>22/5/2024</td>
                                            <td><span class="badge badge-danger">مغلق</span></td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>


                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Rating