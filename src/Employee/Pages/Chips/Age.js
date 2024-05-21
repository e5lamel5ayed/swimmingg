import NavBar from '../../Components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useState } from 'react';
import { Chip, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormLabel, RadioGroup, Radio, FormControlLabel, Stack } from '@mui/material';

import CancelIcon from '@mui/icons-material/Cancel';


const Age = () => {

    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        period: '',
        startHour: '',
        numberOfHours: '',
        endDepartureTime: '',
        startArrivalTime: ''
    });
    const [dataTable, setDataTable] = useState([]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        setDataTable([...dataTable, formData]);
        setOpen(false);
        setFormData({
            name: '',
            address: '',
            period: '',
            startHour: '',
            numberOfHours: '',
            endDepartureTime: '',
            startArrivalTime: ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePeriodChange = (e) => {
        setFormData({ ...formData, period: e.target.value });
    };





    return (
        <div>
            <Chip
                className='m-1'
                label="العمر"
                component="a"
                href="#basic-chip"
                variant="outlined"
                clickable
                onClick={handleOpen}
            />

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">

                <div className='white-div p-1' style={{backgroundColor:"#94F0FF"}}></div>
                <DialogTitle
                    style={{
                        marginBottom: "15px",
                        direction: "rtl", textAlign: "center"
                    }}>
                    فلتر/العمر
                    <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose} />
                </DialogTitle>
                <DialogContent style={{ direction: "rtl" }}>
                    <div className='container-fluid'>
                        <div className='row ' style={{ display: "flex", justifyContent: "center" }}>

                            <div className='col-md-12 mt-2' style={{ display: "flex", justifyContent: "center" }}>

                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>&lt;1</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>2</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>3</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>4</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>5</span>
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-12  mt-2' style={{ display: "flex", justifyContent: "center" }}>

                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>6</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>6</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>7</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>8</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>9</span>
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-12  mt-2' style={{ display: "flex", justifyContent: "center" }}>

                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>10</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>11</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>12</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>13</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>14</span>
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-12  mt-2' style={{ display: "flex", justifyContent: "center" }}>

                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>15</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>16</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>17</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>18</span>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-md-2'>
                                    <div class="form-group form-check">
                                        <label class="number-checkbox">
                                            <input type="checkbox" id="exampleCheck1" />
                                            <span>18&lt;</span>
                                        </label>
                                    </div>
                                </div>

                            </div>

                            {/* =========================================== */}
                            <div className='col-md-12 d-flex'>
                                <div className='col-md-6 text-center mt-3'>
                                    <button
                                        style={{
                                            backgroundColor: "#94F0FF",
                                            color: " #000",
                                            borderRadius: "28px",
                                            width: "100%"
                                        }}
                                        className='btn'>
                                        تطبيق
                                    </button>

                                </div>
                                <div
                                    className='col-md-6 text-center mt-3'>
                                    <button
                                        style={{
                                            backgroundColor: "rgb(237 236 236)",
                                            color: " #000",
                                            borderRadius: "28px",
                                            width: "100%"
                                        }}
                                        className='btn'>
                                        مسح فلتر العمر
                                    </button>

                                </div>

                            </div>
                        </div>

                    </div>





                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Age