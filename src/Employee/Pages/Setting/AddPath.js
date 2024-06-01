import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

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
                [day]: 0
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
        setTrainingDuration({
            ...trainingDuration,
            [day]: value
        });
    };

    const handleAddHours = (day) => {
        if (!daysAndHours[day]?.from || !daysAndHours[day]?.to) {
            alert('يرجى إدخال الوقت.');
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
        // تحديث حمام السباحة الحالي بالبيانات الجديدة
        const updatedBathrooms = bathrooms.map(bathroom => {
            if (bathroom.code === bathroomCode) {
                return {
                    ...bathroom,
                    totalLanes: {
                        ...bathroom.totalLanes,
                        [currentDay]: { ...totalLanes[currentDay] }
                    },
                    lanesDistribution: {
                        ...bathroom.lanesDistribution,
                        [currentDay]: { ...lanesDistribution[currentDay] }
                    }
                };
            }
            return bathroom;
        });

        // تحديث حالة الحمامات في الحالة العامة للتطبيق
        setBathrooms(updatedBathrooms);

        // إغلاق الديالوج بعد حفظ البيانات
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
        const [toHour, toMinute] = toTime.split(':').map(Number);

        while (true) {
            const [currentHour, currentMinute] = currentTime.split(':').map(Number);
            let endTime = new Date();
            endTime.setHours(currentHour);
            endTime.setMinutes(currentMinute + parseInt(duration));
            const endHour = endTime.getHours();
            const endMinute = endTime.getMinutes();
            const endTimeStr = `${String(endHour).padStart(2, '0')}:${String(endMinute).padStart(2, '0')}`;

            if (endHour < toHour || (endHour === toHour && endMinute <= toMinute)) {
                intervals.push({ from: currentTime, to: endTimeStr });
                let newTime = new Date();
                newTime.setHours(currentHour);
                newTime.setMinutes(currentMinute + 60); // الفاصل الزمني هو ساعة واحدة
                const newHour = newTime.getHours();
                const newMinute = newTime.getMinutes();
                currentTime = `${String(newHour).padStart(2, '0')}:${String(newMinute).padStart(2, '0')}`;
                if (newHour > toHour || (newHour === toHour && newMinute > toMinute)) break;
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
                            <div className="d-flex justify-content-end align-items-center">
                                <button className='btn btn-edit' onClick={handleOpen}>إضافة حمام</button>
                            </div>

                            <table className="table table-bordered mt-4">
                                <thead>
                                    <tr>
                                        <th>كود الحمام</th>
                                        <th>اسم الحمام</th>
                                        <th>الايام و الساعات</th>
                                        <th>مدة التدريب (دقائق)</th>
                                        <th>فترات التدريب</th>
                                        <th>عدد الحارات</th>
                                        <th>توزيع الحارات</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bathrooms.map((bathroom, index) => (
                                        <tr key={index}>
                                            <td>{bathroom.code}</td>
                                            <td>{bathroom.name}</td>
                                            <td>
                                                {Object.entries(bathroom.daysAndHours).map(([day, times], idx) => (
                                                    <div key={idx}>
                                                        {day}: {times.from} - {times.to}
                                                    </div>
                                                ))}
                                            </td>
                                            <td>
                                                {Object.entries(bathroom.trainingDuration).map(([day, duration], idx) => (
                                                    <div key={idx}>
                                                        {day}: {duration} دقائق
                                                    </div>
                                                ))}
                                            </td>
                                            <td>
                                                {Object.entries(bathroom.intervals).map(([day, dayIntervals], idx) => (
                                                    <div key={idx}>
                                                        {day}:
                                                        {dayIntervals.map((interval, intIdx) => (
                                                            <div key={intIdx}>
                                                                {interval.from} - {interval.to}
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </td>
                                            <td>
                                                <p>السبت</p>
                                                <p>10 حارات </p>
                                                <hr />
                                                <p>السبت</p>
                                                <p>10 حارات </p>
                                            </td>
                                            <td>
                                                <div>
                                                    <div>السبت</div>
                                                    <div>مبتدأ: 3</div>
                                                    <div>متوسط: 2</div>
                                                    <div>محترف: 5</div>
                                                    <hr />
                                                    <div>مبتدأ: 3</div>
                                                    <div>متوسط: 2</div>
                                                    <div>محترف: 5</div>
                                                </div>
                                            </td>


                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                <DialogTitle>إضافة حمام</DialogTitle>
                <DialogContent>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="bathroomCode">كود الحمام:</label>
                            <input type="text" className="form-control" id="bathroomCode" value={bathroomCode} onChange={(e) => setBathroomCode(e.target.value)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="bathroomName">اسم الحمام:</label>
                            <input type="text" className="form-control" id="bathroomName" value={bathroomName} onChange={(e) => setBathroomName(e.target.value)} />
                        </div>

                    </div>
                    <div className="form-group d-flex flex-wrap">
                        <label>الأيام:</label>
                        {daysOfWeek.map((day) => (
                            <div key={day.value}>
                                <input className='mr-3 ml-1' type="checkbox" id={day.value} checked={selectedDays.includes(day.value)} onChange={() => handleDayCheckboxChange(day.value)} />
                                <label htmlFor={day.value}>{day.label}</label>
                            </div>
                        ))}
                    </div>
                    {selectedDays.map((day) => (
                        <div key={day}>
                            <h4>{day}</h4>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>من:</label>
                                    <input type="time" className="form-control" value={daysAndHours[day]?.from} onChange={(e) => handleTimeChange(day, 'from', e.target.value)} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>إلى:</label>
                                    <input type="time" className="form-control" value={daysAndHours[day]?.to} onChange={(e) => handleTimeChange(day, 'to', e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label>مدة التدريب (دقائق):</label>
                                <input type="number" className="form-control" value={trainingDuration[day]} onChange={(e) => handleTrainingDurationChange(day, e.target.value)} />
                            </div>
                            <button className="btn btn-primary" onClick={() => handleAddHours(day)}>إضافة فترات التدريب</button>
                        </div>
                    ))}
                    <button className="btn btn-primary mt-3" onClick={handleSave}>حفظ</button>
                </DialogContent>
            </Dialog>

            <Dialog open={openHourDialog} onClose={handleSaveHours} fullWidth maxWidth="md">
                <DialogTitle>إضافة حارات لكل فترة</DialogTitle>
                <DialogContent>
                    {currentIntervals.map((interval, index) => (
                        <div key={index}>
                            <div className="row border px-3 pt-3 m-auto mb-3">
                                <div className='col-md-6'>
                                    <p>بداية وانتهاء التدريب </p>
                                    <p className='fw-bold'>{interval.from} - {interval.to}</p>
                                </div>
                                <div className="form-group col-md-6 d-flex">
                                    <label> عدد الحارات الكلي :  </label>
                                    <input type="number" className="form-control" value={totalLanes[currentDay]?.[index]} onChange={(e) => handleTotalLanesChange(currentDay, index, e.target.value)} />
                                </div>
                            </div>

                            <div className="row">
                                {levels.map(level => (
                                    <div className="form-group col-md-4 d-flex" key={level.value}>
                                        <label>عدد الحارات لـ{level.label}</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={lanesDistribution[currentDay]?.[index]?.[level.value] || 0}
                                            onChange={(e) => handleLaneDistributionChange(currentDay, index, level.value, e.target.value)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button className="btn btn-primary" onClick={handleSaveHours}>حفظ</button>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AddPath;
