import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const daysOfWeek = [
    { value: 'السبت', label: 'السبت' },
    { value: 'الأحد', label: 'الأحد' },
    { value: 'الاثنين', label: 'الاثنين' },
    { value: 'الثلاثاء', label: 'الثلاثاء' },
    { value: 'الأربعاء', label: 'الأربعاء' },
    { value: 'الخميس', label: 'الخميس' },
    { value: 'الجمعة', label: 'الجمعة' }
];

const levels = [
    { value: 'مبتدأ', label: 'مبتدأ' },
    { value: 'متوسط', label: 'متوسط' },
    { value: 'محترف', label: 'محترف' }
];

const AddPath = () => {
    const [open, setOpen] = useState(false);
    const [bathrooms, setBathrooms] = useState([]);
    const [bathroomCode, setBathroomCode] = useState('');
    const [bathroomName, setBathroomName] = useState('');
    const [selectedDays, setSelectedDays] = useState([]);
    const [daysAndHours, setDaysAndHours] = useState({});

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDayCheckboxChange = (day) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day));
            const newDaysAndHours = { ...daysAndHours };
            delete newDaysAndHours[day];
            setDaysAndHours(newDaysAndHours);
        } else {
            setSelectedDays([...selectedDays, day]);
        }
    };

    const handleTimeChange = (day, field, value) => {
        setDaysAndHours({
            ...daysAndHours,
            [day]: {
                ...daysAndHours[day],
                [field]: value
            }
        });
    };

    const handleLaneChange = (day, value) => {
        setDaysAndHours({
            ...daysAndHours,
            [day]: {
                ...daysAndHours[day],
                lanes: {
                    ...daysAndHours[day]?.lanes,
                    count: value
                }
            }
        });
    };

    const handleLevelChange = (day, value) => {
        setDaysAndHours({
            ...daysAndHours,
            [day]: {
                ...daysAndHours[day],
                lanes: {
                    ...daysAndHours[day]?.lanes,
                    level: value
                }
            }
        });
    };

    const handleSave = () => {
        const newBathroom = {
            code: bathroomCode,
            name: bathroomName,
            daysAndHours: daysAndHours,
        };
        setBathrooms([...bathrooms, newBathroom]);
        setBathroomCode('');
        setBathroomName('');
        setSelectedDays([]);
        setDaysAndHours({});
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

            <div className='bg-white add-setting'>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='mb-5 p-3 special-info bg-white'>
                                <div className='d-flex justify-content-end'>
                                    <button className='btn btn-edit' onClick={handleOpen}>اضافة حمام</button>
                                </div>

                                <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
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
                                                            <div className='d-flex'>

                                                                <div className="form-group d-flex justify-content-between align-items-center col-md-6">
                                                                    <label htmlFor="">كود الحمام </label>
                                                                    <input type="text" className="form-control w-75" value={bathroomCode} onChange={(e) => setBathroomCode(e.target.value)} />
                                                                </div>

                                                                <div className="form-group d-flex justify-content-between align-items-center col-md-6">
                                                                    <label htmlFor="">اسم الحمام </label>
                                                                    <input type="text" className="form-control w-75" value={bathroomName} onChange={(e) => setBathroomName(e.target.value)} />
                                                                </div>
                                                            </div>

                                                            <div className='mb-2 p-3'>
                                                                <label>اختر الأيام :</label>
                                                                <div className="d-flex flex-wrap">
                                                                    {daysOfWeek.map(day => (
                                                                        <div key={day.value} className="form-check ">
                                                                            <input
                                                                                type="checkbox"
                                                                                className="form-check-input ml-0"
                                                                                id={day.value} checked={selectedDays.includes(day.value)}
                                                                                onChange={() => handleDayCheckboxChange(day.value)}
                                                                            />
                                                                            <label className="form-check-label mr-0" htmlFor={day.value}>{day.label}</label>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {selectedDays.map(day => (
                                                                <div key={day} className="mb-2">
                                                                    <label>{day} :</label>
                                                                    <div className="form-group d-flex  align-items-center  ">
                                                                        <div className='d-flex justify-content-between align-items-center flex-wrap'>
                                                                            <div className="form-group d-flex justify-content-between align-items-center col-md-3">
                                                                                <label htmlFor="">من</label>
                                                                                <input type="time" className="form-control w-75" value={daysAndHours[day]?.from || ''} onChange={(e) => handleTimeChange(day, 'from', e.target.value)} />
                                                                            </div>
                                                                            <div className="form-group d-flex justify-content-between align-items-center col-md-3">
                                                                                <label htmlFor="">إلى</label>
                                                                                <input type="time" className="form-control w-75" value={daysAndHours[day]?.to || ''} onChange={(e) => handleTimeChange(day, 'to', e.target.value)} />
                                                                            </div>
                                                                            <div className="form-group d-flex justify-content-between align-items-center col-md-3">
                                                                                <label htmlFor="">عدد الحارات </label>
                                                                                <input type="number" className="form-control w-75" value={daysAndHours[day]?.lanes?.count || ''} onChange={(e) => handleLaneChange(day, e.target.value)} />
                                                                            </div>
                                                                            <div className="form-group d-flex justify-content-between align-items-center col-md-3">
                                                                                <label htmlFor="">المستوى </label>
                                                                                <select className="form-control w-75" value={daysAndHours[day]?.lanes?.level || ''} onChange={(e) => handleLevelChange(day, e.target.value)}>
                                                                                    <option value="">اختر مستوى</option>
                                                                                    {levels.map(level => (
                                                                                        <option key={level.value} value={level.value}>{level.label}</option>
                                                                                    ))}
                                                                                </select>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    <div className='d-flex'>

                                                                    </div>
                                                                </div>
                                                            ))}
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
                                                <th scope="col">الأيام</th>
                                                <th scope="col">الساعات</th>
                                                <th scope="col">عدد الحارات</th>
                                                <th scope="col"> المستوى</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bathrooms.map((bathroom, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{bathroom.code}</td>
                                                    <td>{bathroom.name}</td>
                                                    <td>
                                                        {Object.keys(bathroom.daysAndHours).map(day => (
                                                            <div key={day}>{day}</div>
                                                        ))}
                                                    </td>
                                                    <td>
                                                        {Object.keys(bathroom.daysAndHours).map(day => (
                                                            <div key={day}>{bathroom.daysAndHours[day].from} - {bathroom.daysAndHours[day].to}</div>
                                                        ))}
                                                    </td>
                                                    <td>
                                                        {Object.keys(bathroom.daysAndHours).map(day => (
                                                            <div key={day}>{bathroom.daysAndHours[day].lanes.count}</div>
                                                        ))}
                                                    </td>
                                                    <td>
                                                        {Object.keys(bathroom.daysAndHours).map(day => (
                                                            <div key={day}>{bathroom.daysAndHours[day].lanes.level}</div>
                                                        ))}
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

