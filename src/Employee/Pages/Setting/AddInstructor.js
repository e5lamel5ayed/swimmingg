import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const AddInstructor = () => {
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
                    <h2 className='text-center text-white mr-5'>اضافة مدرب</h2>
                </div>
            </div>

            <div className='bg-white add-setting'>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='mb-5 p-3 special-info bg-white'>
                                <div className='d-flex justify-content-end'>
                                    <button className='btn btn-edit' onClick={handleOpen}>اضافة مدرب</button>
                                </div>

                                <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                                    <div className="white-div p-1" style={{ backgroundColor: "#94F0FF" }}></div>
                                    <DialogTitle style={{ marginBottom: "15px", direction: "rtl", textAlign: "center" }}>
                                        اضافة مدرب
                                        <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose} />
                                    </DialogTitle>
                                    <DialogContent style={{ direction: "rtl" }}>
                                        <div className="container-fluid">
                                            <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                                                <div className="col-md-12">
                                                    <form action="">
                                                        <div className='mb-2 p-3'>
                                                            <div className="form-group d-flex justify-content-between align-items-center">
                                                                <label htmlFor="">كود المدرب :</label>
                                                                <input type="text" className="form-control w-75" value={laneCode} onChange={(e) => setLaneCode(e.target.value)} />
                                                            </div>

                                                            <div className="form-group d-flex justify-content-between align-items-center">
                                                                <label htmlFor="">اسم المدرب :</label>
                                                                <input type="text" className="form-control w-75" value={laneName} onChange={(e) => setLaneName(e.target.value)} />
                                                            </div>

                                                            <div className="form-group d-flex justify-content-between align-items-center">
                                                                <label htmlFor="class"> اسم الكلاس : </label>
                                                                <select name="class" className='form-control w-75'>
                                                                    <option value="class">
                                                                        صيف 2024 (1 يوليو 2024 - 25 أغسطس 2024) (مفتوح)
                                                                    </option>
                                                                    <option value="class">
                                                                        صيف 2024 (1 يوليو 2024 - 25 أغسطس 2024) (مفتوح)
                                                                    </option>
                                                                    <option value="class">
                                                                        صيف 2024 (1 يوليو 2024 - 25 أغسطس 2024) (مفتوح)
                                                                    </option>
                                                                    <option value="class">
                                                                        صيف 2024 (1 يوليو 2024 - 25 أغسطس 2024) (مفتوح)
                                                                    </option>
                                                                    <option value="class">
                                                                        صيف 2024 (1 يوليو 2024 - 25 أغسطس 2024) (مفتوح)
                                                                    </option>
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

                                <h4 className='my-5'>المدربون المضافون مسبقا</h4>

                                <div className="table-responsive text-center">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">كود المدرب</th>
                                                <th scope="col">اسم المدرب</th>
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

export default AddInstructor;
