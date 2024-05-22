import { CardContent, CardMedia, CircularProgress, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CancelIcon from '@mui/icons-material/Cancel';
import Classes from './Classes';

export default function MediaCard() {

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
            <Classes/>
            <div className='allclasses'>
                <div className="container ">
                    <div className="row">

                        <div className="col-md-4 mb-3 all-classes-col">
                            <div className='white-div p-1'></div>
                            <div className='bg-white p-2'></div>
                            <Link to='/classDetails'>
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
                                            <Link className='allclasses-watch text-info' onClick={handleOpen}>
                                                مشاهدة العروض المتاحة
                                            </Link>
                                        </Typography>
                                        <div className='d-flex justify-content-end position-relative'>
                                            <CircularProgress variant="determinate" value={75} className='text-success mt-3 ml-3 ' />
                                            <span className='position-absolute allclasses-open'>مفتوح</span>
                                        </div>
                                        <hr className='text-muted' />
                                        <Link className='text-decoration-none text-info'>
                                            <span className='mr-2'>s</span>
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
                                            <Link className='allclasses-watch text-info' onClick={handleOpen}>
                                                مشاهدة العروض المتاحة
                                            </Link>
                                        </Typography>
                                        <div className='d-flex justify-content-end position-relative'>
                                            <CircularProgress variant="determinate" value={75} className='text-success mt-3 ml-3 ' />
                                            <span className='position-absolute allclasses-open'>مفتوح</span>
                                        </div>
                                        <hr className='text-muted' />
                                        <Link className='text-decoration-none text-info'>
                                            <span className='mr-2'>s</span>
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
                                            <Link className='allclasses-watch text-info' onClick={handleOpen}>
                                                مشاهدة العروض المتاحة
                                            </Link>
                                        </Typography>
                                        <div className='d-flex justify-content-end position-relative'>
                                            <CircularProgress variant="determinate" value={75} className='text-success mt-3 ml-3 ' />
                                            <span className='position-absolute allclasses-open'>مفتوح</span>
                                        </div>
                                        <hr className='text-muted' />
                                        <Link className='text-decoration-none text-info'>
                                            <span className='mr-2'>s</span>
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
                                            <Link className='allclasses-watch text-info' onClick={handleOpen}>
                                                مشاهدة العروض المتاحة
                                            </Link>
                                        </Typography>
                                        <div className='d-flex justify-content-end position-relative'>
                                            <CircularProgress variant="determinate" value={75} className='text-success mt-3 ml-3 ' />
                                            <span className='position-absolute allclasses-open'>مفتوح</span>
                                        </div>
                                        <hr className='text-muted' />
                                        <Link className='text-decoration-none text-info'>
                                            <span className='mr-2'>s</span>
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
                                            <Link className='allclasses-watch text-info' onClick={handleOpen}>
                                                مشاهدة العروض المتاحة
                                            </Link>
                                        </Typography>
                                        <div className='d-flex justify-content-end position-relative'>
                                            <CircularProgress variant="determinate" value={75} className='text-success mt-3 ml-3 ' />
                                            <span className='position-absolute allclasses-open'>مفتوح</span>
                                        </div>
                                        <hr className='text-muted' />
                                        <Link className='text-decoration-none text-info'>
                                            <span className='mr-2'>s</span>
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
                                            <Link className='allclasses-watch text-info' onClick={handleOpen}>
                                                مشاهدة العروض المتاحة
                                            </Link>
                                        </Typography>
                                        <div className='d-flex justify-content-end position-relative'>
                                            <CircularProgress variant="determinate" value={75} className='text-success mt-3 ml-3 ' />
                                            <span className='position-absolute allclasses-open'>مفتوح</span>
                                        </div>
                                        <hr className='text-muted' />
                                        <Link className='text-decoration-none text-info'>
                                            <span className='mr-2'>s</span>
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
                                            <td><span class="badge badge-success">مفتوح</span></td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>


                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>

    );
}
