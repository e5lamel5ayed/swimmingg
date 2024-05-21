import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import NavBarFather from '../../Components/NavBar/NavBarFather';
import Checkbox from '@mui/material/Checkbox';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const ChoseClass = () => {
    return (
        <div>
            <NavBarFather />
            <div className='myacount'>
                <div className='title-class d-flex'>
                    <div className='col-md-5 d-flex' style={{ alignItems: "center" }} >
                        <Link to="/bookingFather">
                            <ArrowForwardIcon sx={{ color: "#fff", fontSize: "38px" }} />
                        </Link>
                    </div>
                    <div className='col-md-7 ml-1 d-flex' style={{ justifyContent: "flex-start" }}>

                        <h2 className='text-center text-white mr-5'>الصفوف</h2>
                    </div>
                </div>
                <div className='text-center mt-3'>

                    <h4>من الذي ترغب في الالتحاق به؟</h4>
                    <span>أو قم بتخطي هذه الخطوة واعرض جميع الفصول الدراسية</span>
                </div>
                <div className='container'>
                    <div className='row mt-4 mt-2' style={{ display: "flex", justifyContent: "center" }}>

                        <div className='col-md-3 mt-3 position-relative'>

                            <Card sx={{ maxWidth: 345, position: "relative", border: " 2px #E2E2E2 solid", boxShadow: "none" }}>
                                <CardActionArea>
                                    <CardContent>
                                        <div className='text-center' >
                                            <Typography
                                                sx={{
                                                    width: "27%",
                                                    padding: "6%",
                                                    borderRadius: "50%",
                                                    backgroundColor: "#94F0FF",
                                                    border: "none",
                                                    fontWeight: "500",
                                                    boxShadow: "0 .625rem 1rem -.3125rem #0003",
                                                    fontSize: "18px"
                                                }}
                                                className='text-center  mb-3 mt-2 ml-auto mr-auto' gutterBottom variant="h5" component="div">
                                                م م
                                            </Typography>
                                        </div>
                                        <Typography className='text-center mb-0 mt-2' gutterBottom variant="h5" component="div">
                                            محمد محمود
                                        </Typography>
                                        <div className='text-center'>

                                            <span
                                                className='text-muted'
                                                style={{ fontSize: "11px", marginBottom: "7%" }}
                                            >18 سنه ذكر</span>
                                        </div>
                                        <div className='container'>
                                            <div className='row'>

                                                <div style={{ textAlign: "center" }}>
                                                    <Checkbox {...label} />
                                                </div>
                                            </div>

                                        </div>
                                    </CardContent>
                                </CardActionArea>

                            </Card>
                        </div>
                        <div className='col-md-3 mt-3 position-relative'>

                            <Card sx={{ maxWidth: 345, position: "relative", border: " 2px #E2E2E2 solid", boxShadow: "none" }}>
                                <CardActionArea>
                                    <CardContent>
                                        <div className='text-center' >
                                            <Typography
                                                sx={{
                                                    width: "27%",
                                                    padding: "6%",
                                                    borderRadius: "50%",
                                                    backgroundColor: "#94F0FF",
                                                    border: "none",
                                                    fontWeight: "900",
                                                    boxShadow: "0 .625rem 1rem -.3125rem #0003"
                                                    ,
                                                    fontSize: "18px"
                                                }}
                                                className='text-center  mb-3 mt-2 ml-auto mr-auto' gutterBottom variant="h5" component="div">
                                                إ ا
                                            </Typography>
                                        </div>
                                        <Typography className='text-center mb-0 mt-2' gutterBottom variant="h5" component="div">
                                            إسلام السيد
                                        </Typography>
                                        <div className='text-center'>

                                            <span
                                                className='text-muted'
                                                style={{ fontSize: "11px", marginBottom: "7%" }}
                                            >20 سنه ذكر</span>
                                        </div>
                                        <div className='container'>
                                            <div className='row'>

                                                <div style={{ textAlign: "center" }}>
                                                    <Checkbox {...label} />
                                                </div>
                                            </div>

                                        </div>
                                    </CardContent>
                                </CardActionArea>

                            </Card>
                        </div>
                        <div className='col-md-3 mt-3 position-relative'>

                            <Card sx={{ maxWidth: 345, position: "relative", border: " 2px #E2E2E2 solid", boxShadow: "none" }}>
                                <CardActionArea>
                                    <CardContent>
                                        <div className='text-center mb-3' >
                                            <Typography
                                                sx={{
                                                    width: "27%",
                                                    padding: "6%",
                                                    borderRadius: "50%",
                                                    backgroundColor: "#94F0FF",
                                                    border: "none",
                                                    fontWeight: "900",
                                                    boxShadow: "0 .625rem 1rem -.3125rem #0003",
                                                    fontSize: "18px"
                                                }}
                                                className='text-center mt-2 ml-auto mr-auto' gutterBottom variant="h5" component="div">
                                                س أ
                                            </Typography>
                                        </div>
                                        <Typography className='text-center mb-0 mt-2' gutterBottom variant="h5" component="div">
                                            سيد أسامه
                                        </Typography>
                                        <div className='text-center'>

                                            <span
                                                className='text-muted'
                                                style={{ fontSize: "11px", marginBottom: "7%" }}
                                            >20 سنه ذكر</span>
                                        </div>
                                        <div className='container'>
                                            <div className='row'>

                                                <div style={{ textAlign: "center" }}>
                                                    <Checkbox {...label} />
                                                </div>
                                            </div>

                                        </div>
                                    </CardContent>
                                </CardActionArea>

                            </Card>
                        </div>


                        <div className='col-md-12 text-center mt-4 '>
                            <Link to="/AllclassesFather">
                                <button className='btn btn-edit w-50'>عرض الصفوف</button>
                            </Link>

                        </div>
                        <div className='col-md-12 text-center mt-4 '>
                            <Button
                                style={{
                                    backgroundColor: "rgb(237 236 236)",
                                    color: "rgb(0, 0, 0)",
                                    borderRadius: "32px",
                                }}
                                className='btn bun-block btn-edit2 mb-2 w-50' size="" color="primary">
                                اضافه الطالب
                            </Button>

                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default ChoseClass