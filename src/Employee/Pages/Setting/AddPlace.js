import React, { useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

import {Dialog, DialogContent, DialogTitle } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';

const AddPlace = () => {
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

            <div className='title-class d-flex justify-content-between align-items-center'>
                <div className='col-md-4 d-flex justify-content-between align-items-center' style={{ alignItems: "center" }} >
                    <Link to="/Emploee">
                        <ArrowForwardIcon sx={{ color: "#fff", fontSize: "38px" }} />
                    </Link>
                </div>

                <div className='col-md-8 ml-1 d-flex justify-content-between align-items-center' style={{ justifyContent: "flex-start" }}>
                    <h2 className='text-center text-white mr-5'>اضافة مكان</h2>
                </div>
            </div>
            <div className='bg-white add-setting'>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-12 m-auto">

                            <div className='mb-5 p-3 special-info bg-white'>

                                <div className='d-flex justify-content-end'>
                                    <button className='btn btn-edit' onClick={handleOpen}>اضافة مكان</button>
                                </div>

                                <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                                    <div className="white-div p-1" style={{ backgroundColor: "#94F0FF" }}></div>
                                    <DialogTitle style={{ marginBottom: "15px", direction: "rtl", textAlign: "center" }}>
                                        اضافة مكان
                                        <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose} />
                                    </DialogTitle>
                                    <DialogContent style={{ direction: "rtl" }}>
                                        <div className="container-fluid">
                                            <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                                                <div className="col-md-12">

                                                    <form action="">
                                                        <div className='mb-2 p-3'>
                                                            <div className="form-group d-flex justify-content-between align-items-center">
                                                                <label htmlFor="">كود المكان :</label>
                                                                <input type="text" className="form-control w-75" />
                                                            </div>

                                                            <div className="form-group d-flex justify-content-between align-items-center">
                                                                <label htmlFor="">اسم المكان :</label>
                                                                <input type="text" className="form-control w-75" />
                                                            </div>

                                                            <div class="form-group d-flex">
                                                                <label htmlFor="" className='ml-5'>الحالة :</label>
                                                                <div class="input-group-prepend">
                                                                    <div class=" d-flex justify-content-center align-items-center">
                                                                        <input type="radio" className='ml-2' value='close' name='condition-health' /> مغلق
                                                                        <input type="radio" className='mr-2 ml-2' value='open' name='condition-health' /> مفتوح
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button className='btn ml-2 mb-3 w-100 btn-edit'>حفظ</button>

                                                    </form>

                                                </div>


                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>



                                <h4 className='my-5'>الاماكن المضافة مسبقا</h4>

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">كود المكان</th>
                                            <th scope="col">اسم المكان</th>
                                            <th scope="col">الحالة</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>05124</td>
                                            <td>اكاديميه الزقازيق</td>
                                            <td>مغلق</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>0124</td>
                                            <td>اكاديمية طنطا</td>
                                            <td>مفتوح</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>8975</td>
                                            <td>اكاديمية الجيزة</td>
                                            <td>مغلق</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPlace