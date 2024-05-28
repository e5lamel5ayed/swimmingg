/* eslint-disable no-loop-func */
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
    const [intervalOpen, setIntervalOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);
    const [bathrooms, setBathrooms] = useState([]);
    const [bathroomCode, setBathroomCode] = useState('');
    const [bathroomName, setBathroomName] = useState('');
    const [selectedDays, setSelectedDays] = useState([]);
    const [daysAndHours, setDaysAndHours] = useState({});
    const [currentInterval, setCurrentInterval] = useState({ from: '', to: '', count: '', level: '' });

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleIntervalOpen = (day) => {
        setSelectedDay(day);
        setIntervalOpen(true);
    };

    const handleIntervalClose = () => {
        setIntervalOpen(false);
        setCurrentInterval({ from: '', to: '', count: '', level: '' });
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
                [field]: value,
                intervals: daysAndHours[day]?.intervals || []
            }
        });
    };

    const handleSaveDayHours = (day) => {
        if (daysAndHours[day]?.from && daysAndHours[day]?.to) {
            setDaysAndHours({
                ...daysAndHours,
                [day]: {
                    ...daysAndHours[day],
                    saved: true
                }
            });
        } else {
            alert("Please specify both 'from' and 'to' times.");
        }
    };

    const handleIntervalChange = (field, value) => {
        setCurrentInterval({ ...currentInterval, [field]: value });
    };

    const handleSaveInterval = () => {
        const dayHours = daysAndHours[selectedDay];
        const newIntervals = [...dayHours.intervals, currentInterval].sort((a, b) => a.from.localeCompare(b.from));
        setDaysAndHours({
            ...daysAndHours,
            [selectedDay]: {
                ...dayHours,
                intervals: newIntervals,
                availableFrom: dayHours.from,
                availableTo: dayHours.to,
            }
        });
        handleIntervalClose();
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

    const getAvailableHours = (day) => {
        const dayHours = daysAndHours[day];
        if (!dayHours) return [];

        const fromTime = dayHours.from;
        const toTime = dayHours.to;

        const intervals = dayHours.intervals || [];

        let availableHours = [];
        let currentTime = fromTime;

        while (currentTime < toTime) {
            const [currentHour, currentMinute] = currentTime.split(':').map(Number);
            const nextHour = currentMinute === 0 ? currentHour : currentHour + 1;
            const nextMinute = currentMinute === 0 ? 30 : 0;

            const nextTime = `${String(nextHour).padStart(2, '0')}:${String(nextMinute).padStart(2, '0')}`;
            if (nextTime > toTime) break;

            const isAvailable = !intervals.some(interval => (
                (interval.from <= currentTime && interval.to > currentTime) ||
                (interval.from < nextTime && interval.to >= nextTime)
            ));

            if (isAvailable) availableHours.push({ from: currentTime, to: nextTime });

            currentTime = nextTime;
        }

        return availableHours;
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

            <div className='bg-white add-setting pt-5'>
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
                                                                <div key={day} className="mb-3 p-3 border rounded">
                                                                    <h5 className="mb-3">{day}</h5>
                                                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                                        <div className="form-group d-flex justify-content-between align-items-center col-md-4">
                                                                            <label htmlFor="">من</label>
                                                                            <input type="time" className="form-control" value={daysAndHours[day]?.from || ''} onChange={(e) => handleTimeChange(day, 'from', e.target.value)} />
                                                                        </div>

                                                                        <div className="form-group d-flex justify-content-between align-items-center col-md-4">
                                                                            <label htmlFor="">إلى</label>
                                                                            <input type="time" className="form-control" value={daysAndHours[day]?.to || ''} onChange={(e) => handleTimeChange(day, 'to', e.target.value)} />
                                                                        </div>

                                                                        {daysAndHours[day]?.from && daysAndHours[day]?.to && !daysAndHours[day]?.saved && (
                                                                            <div className="form-group d-flex justify-content-between align-items-center col-md-3">
                                                                                <button type="button" className="btn btn-primary" onClick={() => handleSaveDayHours(day)}>حفظ الساعات</button>
                                                                            </div>
                                                                        )}

                                                                        {daysAndHours[day]?.saved && (
                                                                            <div className="form-group d-flex justify-content-between align-items-center col-md-3">
                                                                                <button type="button" className="btn btn-primary" onClick={() => handleIntervalOpen(day)}>إضافة فترة</button>
                                                                            </div>
                                                                        )}
                                                                    </div>

                                                                    <div className="mt-3">
                                                                        <h6>الفترات الزمنية</h6>
                                                                        {daysAndHours[day]?.intervals && daysAndHours[day].intervals.map((interval, index) => (
                                                                            <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                                                                                <div>{interval.from} - {interval.to}</div>
                                                                                <div>عدد الحارات: {interval.count}</div>
                                                                                <div>المستوى: {interval.level}</div>
                                                                            </div>
                                                                        ))}
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

                                <Dialog open={intervalOpen} onClose={handleIntervalClose} fullWidth maxWidth="sm">
                                    <DialogTitle style={{ marginBottom: "15px", direction: "rtl", textAlign: "center" }}>
                                        إضافة فترة زمنية
                                        <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleIntervalClose} />
                                    </DialogTitle>
                                    <DialogContent style={{ direction: "rtl" }}>
                                        <div className="container-fluid">
                                            <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                                                <div className="col-md-12">
                                                    <form action="">
                                                        <div className='d-flex'>

                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="">من</label>
                                                            <select className="form-control" value={currentInterval.from} onChange={(e) => handleIntervalChange('from', e.target.value)}>
                                                                <option value="">اختر الوقت</option>
                                                                {getAvailableHours(selectedDay).map((timeSlot, index) => (
                                                                    <option key={index} value={timeSlot.from}>{timeSlot.from}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="">إلى</label>
                                                            <select className="form-control" value={currentInterval.to} onChange={(e) => handleIntervalChange('to', e.target.value)}>
                                                                <option value="">اختر الوقت</option>
                                                                {getAvailableHours(selectedDay).map((timeSlot, index) => (
                                                                    <option key={index} value={timeSlot.to}>{timeSlot.to}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        </div>
                                                        
                                                        <div className='d-flex'>

                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="">عدد الحارات</label>
                                                            <input type="number" className="form-control" value={currentInterval.count} onChange={(e) => handleIntervalChange('count', e.target.value)} />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="">المستوى</label>
                                                            <select className="form-control" value={currentInterval.level} onChange={(e) => handleIntervalChange('level', e.target.value)}>
                                                                <option value="">اختر مستوى</option>
                                                                {levels.map(level => (
                                                                    <option key={level.value} value={level.value}>{level.label}</option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        </div>
                                                        <button type="button" className="btn btn-primary" onClick={handleSaveInterval}>حفظ</button>
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
                                                <th scope="col">المستوى</th>
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
                                                            <div key={day}>
                                                                {bathroom.daysAndHours[day].intervals.map((interval, index) => (
                                                                    <div key={index}>{interval.from} - {interval.to}</div>
                                                                ))}
                                                            </div>
                                                        ))}
                                                    </td>
                                                    <td>
                                                        {Object.keys(bathroom.daysAndHours).map(day => (
                                                            <div key={day}>
                                                                {bathroom.daysAndHours[day].intervals.map((interval, index) => (
                                                                    <div key={index}>{interval.count}</div>
                                                                ))}
                                                            </div>
                                                        ))}
                                                    </td>
                                                    <td>
                                                        {Object.keys(bathroom.daysAndHours).map(day => (
                                                            <div key={day}>
                                                                {bathroom.daysAndHours[day].intervals.map((interval, index) => (
                                                                    <div key={index}>{interval.level}</div>
                                                                ))}
                                                            </div>
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
