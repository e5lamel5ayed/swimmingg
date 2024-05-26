import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const AddPath = () => {
    const [open, setOpen] = useState(false);
    const [bathrooms, setBathrooms] = useState([]);
    const [bathroomCode, setBathroomCode] = useState('');
    const [bathroomName, setBathroomName] = useState('');
    const [daysAndHours, setDaysAndHours] = useState([{ day: '', from: '', to: '' }]);
    const [status, setStatus] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddDay = () => {
        setDaysAndHours([...daysAndHours, { day: '', from: '', to: '' }]);
    };

    const handleDayChange = (index, field, value) => {
        const newDaysAndHours = [...daysAndHours];
        newDaysAndHours[index][field] = value;
        setDaysAndHours(newDaysAndHours);
    };

    const handleSave = () => {
        const newBathroom = {
            code: bathroomCode,
            name: bathroomName,
            daysAndHours: daysAndHours,
            status: status,
        };
        setBathrooms([...bathrooms, newBathroom]);
        setBathroomCode('');
        setBathroomName('');
        setDaysAndHours([{ day: '', from: '', to: '' }]);
        setStatus('');
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
                    <h2 className='text-center text-white mr-5'>اضافة حمام</h2>
                </div>
            </div>

            <div className='bg-white'>
                <div className="container bg-white pt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='mb-5 p-3 special-info bg-white'>
                                <div className='d-flex justify-content-end'>
                                    <button className='btn btn-edit' onClick={handleOpen}>اضافة حمام</button>
                                </div>

                                <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                                    <div className="white-div p-1" style={{ backgroundColor: "#94F0FF" }}></div>
                                    <DialogTitle style={{ marginBottom: "15px", direction: "rtl", textAlign: "center" }}>
                                        اضافة حمام
                                        <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose} />
                                    </DialogTitle>
                                    <DialogContent style={{ direction: "rtl" }}>
                                        <div className="container-fluid">
                                            <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                                                <div className="col-md-12">
                                                    <form action="">
                                                        <div className='mb-2 p-3'>
                                                            <div className="form-group d-flex justify-content-between align-items-center">
                                                                <label htmlFor="">كود الحمام :</label>
                                                                <input type="text" className="form-control w-75" value={bathroomCode} onChange={(e) => setBathroomCode(e.target.value)} />
                                                            </div>

                                                            <div className="form-group d-flex justify-content-between align-items-center">
                                                                <label htmlFor="">اسم الحمام :</label>
                                                                <input type="text" className="form-control w-75" value={bathroomName} onChange={(e) => setBathroomName(e.target.value)} />
                                                            </div>

                                                            {daysAndHours.map((dayAndHour, index) => (
                                                                <div key={index} className="mb-2">
                                                                    <div className="form-group d-flex justify-content-between align-items-center">
                                                                        <label htmlFor="">اليوم :</label>
                                                                        <select className="form-control w-75" value={dayAndHour.day} onChange={(e) => handleDayChange(index, 'day', e.target.value)}>
                                                                            <option value="">اختر يوما</option>
                                                                            <option value="السبت">السبت</option>
                                                                            <option value="الأحد">الأحد</option>
                                                                            <option value="الاثنين">الاثنين</option>
                                                                            <option value="الثلاثاء">الثلاثاء</option>
                                                                            <option value="الأربعاء">الأربعاء</option>
                                                                            <option value="الخميس">الخميس</option>
                                                                            <option value="الجمعة">الجمعة</option>
                                                                        </select>
                                                                    </div>
                                                                    <div className='d-flex justify-content-between align-items-center'>

                                                                        <div className="form-group d-flex justify-content-between align-items-center col-md-6">
                                                                            <label htmlFor="">من :</label>
                                                                            <input type="time" className="form-control w-75" value={dayAndHour.from} onChange={(e) => handleDayChange(index, 'from', e.target.value)} />
                                                                        </div>
                                                                        <div className="form-group d-flex justify-content-between align-items-center col-md-6">
                                                                            <label htmlFor="">إلى :</label>
                                                                            <input type="time" className="form-control w-75" value={dayAndHour.to} onChange={(e) => handleDayChange(index, 'to', e.target.value)} />
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            ))}

                                                            <div className='d-flex justify-content-end mb-3'>
                                                                <button type="button" className='btn bg-info' onClick={handleAddDay}>اضافة يوم آخر</button>
                                                            </div>

                                                            <div className="form-group d-flex">
                                                                <label htmlFor="" className='ml-5'>الحالة :</label>
                                                                <div className="input-group-prepend">
                                                                    <div className="d-flex justify-content-center align-items-center">
                                                                        <input type="radio" className='ml-2' value='close' name='condition-health' onChange={(e) => setStatus(e.target.value)} /> مغلق
                                                                        <input type="radio" className='mr-2 ml-2' value='open' name='condition-health' onChange={(e) => setStatus(e.target.value)} /> مفتوح
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button type="button" className='btn ml-2 mb-3 w-100 btn-edit' onClick={handleSave}>حفظ</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>

                                <h4 className='my-5'>الحمامات المضافة مسبقا</h4>

                                <div className="table-responsive text-center">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">كود الحمام</th>
                                                <th scope="col">اسم الحمام</th>
                                                <th scope="col">الحالة</th>
                                                <th scope="col">الأيام والساعات المتاحة</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bathrooms.map((bathroom, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{bathroom.code}</td>
                                                    <td>{bathroom.name}</td>
                                                    <td>{bathroom.status}</td>
                                                    <td>
                                                        <ul>
                                                            {bathroom.daysAndHours.map((dayAndHour, idx) => (
                                                                <li key={idx}><span>{dayAndHour.day}</span><span>{dayAndHour.from} - {dayAndHour.to}</span></li>
                                                            ))}
                                                        </ul>
                                                    </td>
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

export default AddPath;
