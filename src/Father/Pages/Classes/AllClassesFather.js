import { CardContent, CardMedia, CircularProgress, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ClassesFather from './ClassesFather';
import CancelIcon from '@mui/icons-material/Cancel';

const AllClassesFather = () => {
    const [open, setOpen] = useState(false);
    const [selectedProgramStatus, setSelectedProgramStatus] = useState('');

    const handleOpen = (status) => {
        setSelectedProgramStatus(status);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProgramStatus('');
    };

    const renderCard = (programName, time, status, progressValue) => (
        <div className="col-md-4 mb-3 all-classes-col">
            <Link to={status === 'مفتوح' ? '/EnrollNow' : '/classDetailsFather'}>
                <div className='white-div p-1'></div>
                <div className='bg-white p-2'></div>
                <Card className='allclasses-card'>
                    <CardMedia className='allclasses-img' title="all-classes" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" className='text-muted fw-bold'>
                            {programName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {time}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" className='mt-3'>
                            <Link className='allclasses-watch text-info' onClick={() => handleOpen(status)}>
                                مشاهدة العروض المتاحة
                            </Link>
                        </Typography>
                        <div className='d-flex justify-content-end position-relative'>
                            <CircularProgress variant="determinate" value={progressValue} className={status === 'مفتوح' ? 'text-success mt-3 ml-3' : 'text-danger mt-3 ml-3'} />
                            <span className='position-absolute allclasses-open'>{status}</span>
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
    );

    return (
        <div>
            <ClassesFather />
            <div className='allclasses'>
                <div className="container">
                    <div className='col-md-12 mb-4' style={{ borderBottom: "1px #3e3e3e63 solid" }}>
                        <div className='col-md-1 mb-0' style={{ borderBottom: "2px #004c6d solid" }}>
                            <p className='mb-2'>إسلام</p>
                        </div>
                    </div>
                    <div className="row">
                        {renderCard('برنامج 1', 'الاحد | 9.00 _ 9.30', 'مغلق', 100)}
                        {renderCard('برنامج 3', 'الاحد | 9.00 _ 9.30', 'مفتوح', 75)}
                        {renderCard('برنامج 3', 'الاحد | 9.00 _ 9.30', 'مغلق', 100)}
                        {renderCard('برنامج 4', 'الاحد | 9.00 _ 9.30', 'مغلق', 100)}
                        {renderCard('برنامج 5', 'الاحد | 9.00 _ 9.30', 'مغلق', 100)}
                        {renderCard('برنامج 6', 'الاحد | 9.00 _ 9.30', 'مغلق', 100)}
                    </div>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <div className="white-div p-1" style={{ backgroundColor: "#94F0FF" }}></div>
                <DialogTitle style={{ marginBottom: "15px", direction: "rtl", textAlign: "center" }}>
                    البرنامج
                    <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose} />
                </DialogTitle>
                <DialogContent style={{ direction: "rtl" }}>
                    <div className="container-fluid">
                        <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                            <div className="col-md-12">
                                <table className="table table-hover">
                                    <thead className='bg-light'>
                                        <tr>
                                            <th scope="col">الاسم</th>
                                            <th scope="col">التاريخ</th>
                                            <th scope="col">الحاله</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>صيف 2024</td>
                                            <td>22/5/2024</td>
                                            <td>
                                                <span className={`badge ${selectedProgramStatus === 'مفتوح' ? 'badge-success' : 'badge-danger'}`}>
                                                    {selectedProgramStatus}
                                                </span>
                                            </td>
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
};

export default AllClassesFather;
