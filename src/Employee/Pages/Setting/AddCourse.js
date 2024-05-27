import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const AddCourse = () => {
    const [open, setOpen] = useState(false);
    const [lanes, setLanes] = useState([]);
    const [laneCode, setLaneCode] = useState('');
    const [laneName, setLaneName] = useState('');
    const [level, setLevel] = useState('');
    const [bathroomName, setBathroomName] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        const newLane = {
            code: laneCode,
            name: laneName,
            level: level,
            bathroom: bathroomName,
        };
        setLanes([...lanes, newLane]);
        setLaneCode('');
        setLaneName('');
        setLevel('');
        setBathroomName('');
        handleClose();
    };

    return (
        <div>
            <NavBar />

            <div className='title-class d-flex justify-content-between align-items-center'>
                <div className='col-md-4 d-flex justify-content-between align-items-center' style={{ alignItems: "center" }}>
                    <Link to="/Emploee">
                        <ArrowForwardIcon sx={{ color: "#fff", fontSize: "38px" }} />
                    </Link>
                </div>

                <div className='col-md-8 ml-1 d-flex justify-content-between align-items-center' style={{ justifyContent: "flex-start" }}>
                    <h2 className='text-center text-white mr-5'>اضافة كورس</h2>
                </div>
            </div>

            <div className='bg-white add-setting'>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='mb-5 p-3 special-info bg-white'>
                                <div className='d-flex justify-content-end'>
                                    <button className='btn btn-edit' onClick={handleOpen}>اضافة كورس</button>
                                </div>

                                <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                                    <div className="white-div p-1" style={{ backgroundColor: "#94F0FF" }}></div>
                                    <DialogTitle style={{ marginBottom: "15px", direction: "rtl", textAlign: "center" }}>
                                        اضافة كورس
                                        <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose} />
                                    </DialogTitle>
                                    <DialogContent style={{ direction: "rtl" }}>
                                        <div className="container-fluid">
                                            <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                                                <div className="col-md-12">
                                                    <form action="">
                                                        <div className='mb-2 p-3'>
                                                            <div className="form-group d-flex justify-content-between align-items-center">
                                                                <label htmlFor="">كود الكورس :</label>
                                                                <input type="text" className="form-control w-75" value={laneCode} onChange={(e) => setLaneCode(e.target.value)} />
                                                            </div>

                                                            <div className="form-group d-flex justify-content-between align-items-center">
                                                                <label htmlFor="">اسم الكورس :</label>
                                                                <input type="text" className="form-control w-75" value={laneName} onChange={(e) => setLaneName(e.target.value)} />
                                                            </div>

                                                            <div className="form-group d-flex justify-content-between align-items-center">
                                                                <label htmlFor="">عدد الطلاب  :</label>
                                                                <input type="number" className="form-control w-75" value={laneName} onChange={(e) => setLaneName(e.target.value)} />
                                                            </div>

                                                            <div className="form-group d-flex justify-content-between align-items-center">
                                                                <label htmlFor="level">المستوي :</label>
                                                                <select name="level" className='form-control w-75' value={level} onChange={(e) => setLevel(e.target.value)}>
                                                                    <option value="">اختر مستوي</option>
                                                                    <option value="مبتدئ">مبتدئ</option>
                                                                    <option value="متوسط">متوسط</option>
                                                                    <option value="محترف">محترف</option>
                                                                </select>
                                                            </div>
                                                            {/* 
                                                            <div className="form-group d-flex justify-content-between align-items-center">
                                                                <label htmlFor="">عدد الحارات :</label>
                                                                <input type="number" className="form-control w-75" />
                                                            </div> */}
                                                            <div class="form-group d-flex">
                                                                <label htmlFor="" className='ml-5'>الحالة :</label>
                                                                <div class="input-group-prepend">
                                                                    <div class=" d-flex justify-content-center align-items-center">
                                                                        <input type="radio" className='ml-2' value='close' name='condition-health' /> مغلق
                                                                        <input type="radio" className='mr-2 ml-2' value='open' name='condition-health' /> مفتوح
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="form-group d-flex justify-content-between align-items-center">
                                                                <label htmlFor="bathroom">اختر اسم الحمام :</label>
                                                                <select name="bathroom" className='form-control w-75' value={bathroomName} onChange={(e) => setBathroomName(e.target.value)}>
                                                                    <option value="">اختر حمام</option>
                                                                    <option value="حمام 1">حمام 1</option>
                                                                    <option value="حمام 2">حمام 2</option>
                                                                    <option value="حمام 3">حمام 3</option>
                                                                </select>
                                                            </div>

                                                        </div>
                                                        <button type="button" className='btn ml-2 mb-3 w-100 btn-edit' onClick={handleSave}>حفظ</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>

                                <h4 className='my-5'>الكورسات المضافة مسبقا</h4>

                                <div className="table-responsive text-center">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">كود الكورس</th>
                                                <th scope="col">اسم الكورس</th>
                                                <th scope="col">المستوى</th>
                                                <th scope="col">اسم الحمام</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {lanes.map((lane, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{lane.code}</td>
                                                    <td>{lane.name}</td>
                                                    <td>{lane.level}</td>
                                                    <td>{lane.bathroom}</td>

                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;
