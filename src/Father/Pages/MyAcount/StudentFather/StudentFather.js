import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GroupIcon from '@mui/icons-material/Group';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MultiActionAreaCard() {
    return (
        <div className='container'>
            <div className='row mt-4 mt-2'>
                <div className='col-md-4 mt-3 position-relative'>
                    {/* <div className='student_name'>
                        <h6 className='subName' >م م</h6>
                    </div> */}
                    <Card sx={{ maxWidth: 345, position: "relative" }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography className='text-center mt-2' gutterBottom variant="h5" component="div">
                                    محمد محمود
                                </Typography>
                                <div className='container'>
                                    <div className='row'>
                                        <div
                                            style={{
                                                borderBottom: " 0.5px #000 solid",
                                                borderLeft: ".5px #000 solid",
                                            }}
                                            className='col-md-6 mt-2 text-center'>
                                            <Link to="/Enrollments">
                                                <GroupIcon sx={{ color: "#8b8be1" }} />
                                                <p>التسجيلات</p>

                                            </Link>
                                        </div>
                                        <div
                                            style={{
                                                borderBottom: " .5px #000 solid",
                                            }}
                                            className='col-md-6 mt-2 text-center'>
                                            <Link to="/Rating">
                                                <StarIcon sx={{ color: "#f1d45f" }} />
                                                <p>التقيمات</p>
                                            </Link>

                                        </div>
                                        <div
                                            style={{
                                                borderLeft: ".5px #000 solid",
                                            }}
                                            className='col-md-6 text-center'>
                                            <CheckIcon sx={{ color: "#19c819" }} className='mt-3 ' />
                                            <p>الحضور</p>

                                        </div>
                                        <div
                                            style={{
                                            }}
                                            className='col-md-6 text-center'>
                                            <HighlightOffIcon sx={{ color: "#e43434" }} className='mt-3' />
                                            <p >الغياب</p>

                                        </div>

                                    </div>

                                </div>
                            </CardContent>
                        </CardActionArea>
                        <Link to='/addstudentFather2'>
                            <Button
                                style={{
                                    backgroundColor: "rgb(237 236 236)",
                                    color: "rgb(0, 0, 0)",
                                    borderRadius: "32px",
                                }}
                                className='btn btn-block w-100 mb-3' size="" color="primary">
                                تعديل الطالب
                            </Button>
                        </Link>
                    </Card>
                </div>

                <div className='col-md-4 mt-3 position-relative'>
                    {/* <div className='student_name'>
                        <h6 className='subName' >م م</h6>
                    </div> */}
                    <Card sx={{ maxWidth: 345, position: "relative" }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography className='text-center mt-2' gutterBottom variant="h5" component="div">
                                    اسلام السيد
                                </Typography>
                                <div className='container'>
                                    <div className='row'>

                                        <div
                                            style={{
                                                borderBottom: " 0.5px #000 solid",
                                                borderLeft: ".5px #000 solid",
                                            }}
                                            className='col-md-6 mt-2 text-center'>
                                            <Link to="/Enrollments">
                                                <GroupIcon sx={{ color: "#8b8be1" }} />
                                                <p>التسجيلات</p>

                                            </Link>
                                        </div>

                                        <div
                                            style={{
                                                borderBottom: " .5px #000 solid",
                                            }}
                                            className='col-md-6 mt-2 text-center'>
                                            <Link to="/Rating">
                                                <StarIcon sx={{ color: "#f1d45f" }} />
                                                <p>التقيمات</p>
                                            </Link>

                                        </div>
                                        <div
                                            style={{
                                                borderLeft: ".5px #000 solid",
                                            }}
                                            className='col-md-6 text-center'>
                                            <CheckIcon sx={{ color: "#19c819" }} className='mt-3 ' />
                                            <p>الحضور</p>

                                        </div>
                                        <div
                                            style={{
                                            }}
                                            className='col-md-6 text-center'>
                                            <HighlightOffIcon sx={{ color: "#e43434" }} className='mt-3' />
                                            <p >الغياب</p>

                                        </div>

                                    </div>

                                </div>
                            </CardContent>
                        </CardActionArea>
                        <Link to='/addstudentFather2'>
                            <Button
                                style={{
                                    backgroundColor: "rgb(237 236 236)",
                                    color: "rgb(0, 0, 0)",
                                    borderRadius: "32px",
                                }}
                                className='btn btn-block w-100 mb-3' size="" color="primary">
                                تعديل الطالب
                            </Button>
                        </Link>
                    </Card>
                </div>

                <div className='col-md-4 mt-3 position-relative'>
                    {/* <div className='student_name'>
                        <h6 className='subName' >م م</h6>
                    </div> */}
                    <Card sx={{ maxWidth: 345, position: "relative" }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography className='text-center mt-2' gutterBottom variant="h5" component="div">
                                    سيد اسامه
                                </Typography>
                                <div className='container'>
                                    <div className='row'>


                                        <div
                                            style={{
                                                borderBottom: " 0.5px #000 solid",
                                                borderLeft: ".5px #000 solid",
                                            }}
                                            className='col-md-6 mt-2 text-center'>
                                            <Link to="/Enrollments">
                                                <GroupIcon sx={{ color: "#8b8be1" }} />
                                                <p>التسجيلات</p>

                                            </Link>
                                        </div>

                                        <div
                                            style={{
                                                borderBottom: " .5px #000 solid",
                                            }}
                                            className='col-md-6 mt-2 text-center'>
                                            <Link to="/Rating">
                                                <StarIcon sx={{ color: "#f1d45f" }} />
                                                <p>التقيمات</p>
                                            </Link>

                                        </div>
                                        <div
                                            style={{
                                                borderLeft: ".5px #000 solid",
                                            }}
                                            className='col-md-6 text-center'>
                                            <CheckIcon sx={{ color: "#19c819" }} className='mt-3 ' />
                                            <p>الحضور</p>

                                        </div>
                                        <div
                                            style={{
                                            }}
                                            className='col-md-6 text-center'>
                                            <HighlightOffIcon sx={{ color: "#e43434" }} className='mt-3' />
                                            <p >الغياب</p>

                                        </div>

                                    </div>

                                </div>
                            </CardContent>
                        </CardActionArea>
                        <Link to='/addstudentFather2'>
                            <Button
                                style={{
                                    backgroundColor: "rgb(237 236 236)",
                                    color: "rgb(0, 0, 0)",
                                    borderRadius: "32px",
                                }}
                                className='btn btn-block w-100 mb-3' size="" color="primary">
                                تعديل الطالب
                            </Button>
                        </Link>
                    </Card>
                </div>

                <div className='col-md-12 text-center mt-4 '>
                    <Link to='/addstudentFather'>
                        <button className='btn btn-edit'>اضف طالب</button>
                    </Link>
                        

                </div>
            </div>

        </div>


    );
}
