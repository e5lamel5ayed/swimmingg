import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Classes from './Classes';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

export default function MediaCard() {
    return (
        <div className=''>
            <Classes />
            <div className="container-fluid allclasses">
                <div className="row">

                    <div className="col-md-4 mb-3 all-classes-col">
                        <Link>

                            <div className='white-div p-1'></div>
                            <div className='bg-white p-2'></div>
                            <Card className='allclasses-card'>
                                <CardMedia className='allclasses-img'
                                    title="all-classes"
                                />
                                <CardContent>

                                    <Typography gutterBottom variant="h5" component="div" className='text-muted fw-bold'>
                                        مجموعة الوالدين
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
                                        مجموعة الوالدين
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
                                        مجموعة الوالدين
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
                                        مجموعة الوالدين
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
                                        مجموعة الوالدين
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
                                        مجموعة الوالدين
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
    );
}
