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
    const [selectedDay, setSelectedDay] = useState(null);
    const [bathrooms, setBathrooms] = useState([]);
    const [bathroomCode, setBathroomCode] = useState('');
    const [bathroomName, setBathroomName] = useState('');
    const [selectedDays, setSelectedDays] = useState([]);
    const [daysAndHours, setDaysAndHours] = useState({});
    const [trainingDuration, setTrainingDuration] = useState({});
    const [intervals, setIntervals] = useState({});
    const [lanes, setLanes] = useState({});
    const [openHourDialog, setOpenHourDialog] = useState(false);
    const [currentIntervals, setCurrentIntervals] = useState([]);
    const [currentDay, setCurrentDay] = useState(null);
    const [totalLanes, setTotalLanes] = useState({});
    const [lanesDistribution, setLanesDistribution] = useState({});

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
            const newTrainingDuration = { ...trainingDuration };
            delete newTrainingDuration[day];
            setTrainingDuration(newTrainingDuration);
            const newIntervals = { ...intervals };
            delete newIntervals[day];
            setIntervals(newIntervals);
            const newLanes = { ...lanes };
            delete newLanes[day];
            setLanes(newLanes);
            const newTotalLanes = { ...totalLanes };
            delete newTotalLanes[day];
            setTotalLanes(newTotalLanes);
            const newLanesDistribution = { ...lanesDistribution };
            delete newLanesDistribution[day];
            setLanesDistribution(newLanesDistribution);
        } else {
            setSelectedDays([...selectedDays, day]);
            setDaysAndHours({
                ...daysAndHours,
                [day]: { from: '', to: '' }
            });
            setTrainingDuration({
                ...trainingDuration,
                [day]: ''
            });
            setLanesDistribution({
                ...lanesDistribution,
                [day]: {}
            });
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

    const handleTrainingDurationChange = (day, value) => {
        if (value > 60) {
            alert('مدة التدريب لا يمكن أن تتجاوز 60 دقيقة.');
            return;
        }
        setTrainingDuration({
            ...trainingDuration,
            [day]: value
        });
    };

    const handleAddHours = (day) => {
        if (!daysAndHours[day]?.from || !daysAndHours[day]?.to || !trainingDuration[day]) {
            alert('يرجى إدخال الوقت ومدة التدريب.');
            return;
        }
        const calculatedIntervals = calculateIntervals(daysAndHours[day]?.from, daysAndHours[day]?.to, trainingDuration[day]);
        setIntervals({
            ...intervals,
            [day]: calculatedIntervals
        });
        setCurrentIntervals(calculatedIntervals);
        setCurrentDay(day);
        setOpenHourDialog(true);
    };

    const handleTotalLanesChange = (day, intervalIndex, value) => {
        const newTotalLanes = { ...totalLanes };
        const numLanes = parseInt(value);
        if (!newTotalLanes[day]) newTotalLanes[day] = {};
        newTotalLanes[day][intervalIndex] = numLanes;
        setTotalLanes(newTotalLanes);
    };

    const handleLaneDistributionChange = (day, intervalIndex, level, value) => {
        const newLanesDistribution = { ...lanesDistribution };
        const numLanes = parseInt(value);

        if (!newLanesDistribution[day]) newLanesDistribution[day] = {};
        if (!newLanesDistribution[day][intervalIndex]) newLanesDistribution[day][intervalIndex] = { beginner: 0, intermediate: 0, advanced: 0 };
        newLanesDistribution[day][intervalIndex][level] = numLanes;

        const totalLanesForInterval = Object.values(newLanesDistribution[day][intervalIndex]).reduce((a, b) => a + b, 0);
        if (totalLanesForInterval > totalLanes[day][intervalIndex]) {
            alert('مجموع عدد الحارات للمستويات المختلفة يجب ألا يتجاوز العدد الكلي للحارات.');
            newLanesDistribution[day][intervalIndex][level] -= numLanes;
            return;
        }

        setLanesDistribution(newLanesDistribution);
    };

    const handleSaveHours = () => {
        setOpenHourDialog(false);
    };

    const handleSave = () => {
        const newBathroom = {
            code: bathroomCode,
            name: bathroomName,
            daysAndHours: daysAndHours,
            trainingDuration: trainingDuration,
            intervals: intervals,
            lanes: lanes,
            totalLanes: totalLanes,
            lanesDistribution: lanesDistribution
        };
        setBathrooms([...bathrooms, newBathroom]);
        setBathroomCode('');
        setBathroomName('');
        setSelectedDays([]);
        setDaysAndHours({});
        setTrainingDuration({});
        setIntervals({});
        setLanes({});
        setTotalLanes({});
        setLanesDistribution({});
        handleClose();
    };

    const calculateIntervals = (fromTime, toTime, duration) => {
        let intervals = [];
        let currentTime = fromTime;

        while (currentTime < toTime) {
            const [currentHour, currentMinute] = currentTime.split(':').map(Number);
            let nextTime = new Date();
            nextTime.setHours(currentHour);
            nextTime.setMinutes(currentMinute + parseInt(duration));

            const nextHour = nextTime.getHours();
            const nextMinute = nextTime.getMinutes();
            const nextTimeStr = `${String(nextHour).padStart(2, '0')}:${String(nextMinute).padStart(2, '0')}`;

            if (nextTimeStr <= toTime) {
                intervals.push({ from: currentTime, to: nextTimeStr });
                currentTime = `${String(nextHour).padStart(2, '0')}:${String(nextMinute + 1).padStart(2, '0')}`; // إضافة دقيقة واحدة للفترة التالية
            } else {
                break;
            }
        }
        return intervals;
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
                                    <div className="white-div p-1" style={{ backgroundColor: "#94F0F0" }}></div>
                                    <DialogTitle style={{ marginBottom: "15px", direction: "rtl", textAlign: "center" }}>
                                        اضافة حمام
                                        <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose} />
                                    </DialogTitle>
                                    <DialogContent>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <label htmlFor="bathroomCode" style={{ display: "block", textAlign: "right", fontSize: "20px" }}>كود الحمام</label>
                                                <input id="bathroomCode" type="text" value={bathroomCode} onChange={(e) => setBathroomCode(e.target.value)} style={{ width: "100%", height: "45px", borderRadius: "5px", padding: "5px" }} />
                                            </div>
                                            <div className='col-md-6'>
                                                <label htmlFor="bathroomName" style={{ display: "block", textAlign: "right", fontSize: "20px" }}>اسم الحمام</label>
                                                <input id="bathroomName" type="text" value={bathroomName} onChange={(e) => setBathroomName(e.target.value)} style={{ width: "100%", height: "45px", borderRadius: "5px", padding: "5px" }} />
                                            </div>
                                        </div>
                                        <div className='row mt-4'>
                                            <div className='col-md-12'>
                                                <h3 className='text-center'>الأيام المتاحة</h3>
                                                <div className='d-flex justify-content-around'>
                                                    {daysOfWeek.map((day) => (
                                                        <label key={day.value}>
                                                            <input type="checkbox" checked={selectedDays.includes(day.value)} onChange={() => handleDayCheckboxChange(day.value)} />
                                                            {day.label}
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        {selectedDays.map((day) => (
                                            <div
                                                style={{
                                                    border: "1px #000 solid",
                                                    padding: "25px",
                                                    borderRadius: "15px"
                                                }}
                                                key={day} className='mt-4'>
                                                <h3 className='text-center'>{day}</h3>
                                                <div className='d-flex justify-content-around'>
                                                    <div className='col-md-6'>
                                                        <label style={{ display: "block", textAlign: "right", fontSize: "20px" }}>من</label>
                                                        <input type="time" value={daysAndHours[day]?.from} onChange={(e) => handleTimeChange(day, 'from', e.target.value)} style={{ width: "100%", height: "45px", borderRadius: "5px", padding: "5px" }} />
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <label style={{ display: "block", textAlign: "right", fontSize: "20px" }}>إلى</label>
                                                        <input type="time" value={daysAndHours[day]?.to} onChange={(e) => handleTimeChange(day, 'to', e.target.value)} style={{ width: "100%", height: "45px", borderRadius: "5px", padding: "5px" }} />
                                                    </div>
                                                </div>
                                                <div className='d-flex justify-content-around mt-3'>
                                                    <div className='col-md-6'>
                                                        <label style={{ display: "block", textAlign: "right", fontSize: "20px" }}>مدة التدريب (بالدقائق)</label>
                                                        <input type="number" value={trainingDuration[day]} onChange={(e) => handleTrainingDurationChange(day, e.target.value)} style={{ width: "100%", height: "45px", borderRadius: "5px", padding: "5px" }} />
                                                    </div>
                                                    <div className='col-md-6 d-flex align-items-end'>
                                                        <button className='btn btn-edit' onClick={() => handleAddHours(day)}>إضافة الساعات</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </DialogContent>
                                    <div className='d-flex justify-content-center mb-3'>
                                        <button className='btn btn-edit' onClick={handleSave}>حفظ</button>
                                    </div>
                                </Dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Dialog open={openHourDialog} onClose={() => setOpenHourDialog(false)} fullWidth maxWidth="md">
                <DialogTitle style={{ marginBottom: "15px", direction: "rtl", textAlign: "center" }}>
                    إضافة حارات لـ {currentDay}
                    <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={() => setOpenHourDialog(false)} />
                </DialogTitle>
                <DialogContent>

                    {currentIntervals.map((interval, index) => (
                        <div key={index}
                            style={{
                                border: "1px #000 solid",
                                padding: "25px",
                                borderRadius: "15px"
                            }}
                            className='mt-3'>
                            <div className='d-flex justify-content-around'>
                                <h3 className='text-center d-flex ' style={{ alignItems: "end" }} >من {interval.from} إلى {interval.to}</h3>
                                <div className='col-md-6'>
                                    <label style={{ display: "block", textAlign: "right", fontSize: "20px" }}>عدد الحارات الكلي</label>
                                    <input type="number" value={totalLanes[currentDay]?.[index] || ''} onChange={(e) => handleTotalLanesChange(currentDay, index, e.target.value)} style={{ width: "100%", height: "45px", borderRadius: "5px", padding: "5px" }} />
                                </div>
                            </div>
                            {totalLanes[currentDay]?.[index] && (
                                <div className='mt-3 d-flex'>
                                    {levels.map((level, levelIndex) => (
                                        <div key={level.value} className='mt-3 col-md-4'>
                                            <label style={{ display: "block", textAlign: "right", fontSize: "20px" }}>عدد الحارات - {level.label}</label>
                                            <input type="number" value={lanesDistribution[currentDay]?.[index]?.[level.value] || 0} onChange={(e) => handleLaneDistributionChange(currentDay, index, level.value, e.target.value)} style={{ width: "100%", height: "45px", borderRadius:"5px", padding: "5px" }} disabled={Object.values(lanesDistribution[currentDay]?.[index] || {}).reduce((a, b) => a + b, 0) >= totalLanes[currentDay][index]} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </DialogContent>
                <div className='d-flex justify-content-center mb-3'>
                    <button className='btn btn-edit' onClick={handleSaveHours}>حفظ</button>
                </div>
            </Dialog>
        </div >
    );
};

export default AddPath;


