import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Dialog, DialogContent, DialogTitle, Button } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';

const daysOfWeek = [
    { value: 'السبت', label: 'السبت' },
    { value: 'الأحد', label: 'الأحد' },
    { value: 'الاثنين', label: 'الاثنين' },
    { value: 'الثلاثاء', label: 'الثلاثاء' },
    { value: 'الأربعاء', label: 'الأربعاء' },
    { value: 'الخميس', label: 'الخميس' },
    { value: 'الجمعة', label: 'الجمعة' }
];

const bathrooms = [
    { value: 'حمام 1', label: 'حمام 1' },
    { value: 'حمام 2', label: 'حمام 2' },
    { value: 'حمام 3', label: 'حمام 3' }
];

const hours = [
    { value: '08:00-09:00', label: '08:00-09:00' },
    { value: '09:00-10:00', label: '09:00-10:00' },
    { value: '10:00-11:00', label: '10:00-11:00' }
];

const programs = [
    { value: 'برنامج 1', label: 'برنامج 1' },
    { value: 'برنامج 2', label: 'برنامج 2' },
    { value: 'برنامج 3', label: 'برنامج 3' }
];

const initialLanes = [
    { number: 1, status: 'مفتوح' },
    { number: 2, status: 'مفتوح' },
    { number: 3, status: 'مغلق', program: 'برنامج 1' }
];

const DayTable = () => {
    const [entries, setEntries] = useState([
        { day: '', bathroom: '', hour: '', lanes: initialLanes }
    ]);
    const [openProgramDialog, setOpenProgramDialog] = useState(false);
    const [currentLane, setCurrentLane] = useState(null);
    const [currentEntryIndex, setCurrentEntryIndex] = useState(null);
    const [selectedProgram, setSelectedProgram] = useState('');
    const [selectedDays, setSelectedDays] = useState([]);

    useEffect(() => {
        const lastEntry = entries[entries.length - 1];
        if (lastEntry.day && lastEntry.bathroom && lastEntry.hour) {
            setEntries([...entries, { day: '', bathroom: '', hour: '', lanes: initialLanes }]);
        }
    }, [entries]);

    const handleProgramSave = () => {
        const updatedEntries = [...entries];
        const updatedLanes = updatedEntries[currentEntryIndex].lanes.map(lane =>
            lane.number === currentLane ? { ...lane, status: 'مغلق', program: selectedProgram } : lane
        );
        updatedEntries[currentEntryIndex].lanes = updatedLanes;
        setEntries(updatedEntries);
        setOpenProgramDialog(false);
        setSelectedProgram('');
    };

    const handleChange = (index, field, value) => {
        const updatedEntries = [...entries];
        updatedEntries[index][field] = value;
        if (field === 'day') {
            const updatedSelectedDays = [...selectedDays];
            updatedSelectedDays[index] = value;
            setSelectedDays(updatedSelectedDays);
        }
        setEntries(updatedEntries);
    };

    const getFilteredDays = (index) => {
        const usedDays = selectedDays.filter((day, i) => i !== index);
        return daysOfWeek.filter(day => !usedDays.includes(day.value));
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
                    <div className='d-flex align-items-center mr-5'>
                        <CalendarMonthIcon className='ml-3' />
                        <h2 className='text-center text-white'>جدول اليوم</h2>
                    </div>
                </div>
            </div>

            <div className='bg-white add-setting'>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='mb-5 p-3 special-info bg-white'>
                                <table className="table table-bordered mt-4">
                                    <thead>
                                        <tr>
                                            <th>اليوم</th>
                                            <th>اسم الحمام</th>
                                            <th>الساعات</th>
                                            <th>الحارات</th>
                                            <th>اسم البرنامج</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {entries.map((entry, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <select value={entry.day} onChange={(e) => handleChange(index, 'day', e.target.value)} style={{ width: "100%", height: "45px", borderRadius: "5px", padding: "5px" }}>
                                                        <option value="" disabled>{entry.day || "اختر اليوم"}</option>
                                                        {getFilteredDays(index).map(day => (
                                                            <option key={day.value} value={day.value}>{day.label}</option>
                                                        ))}
                                                    </select>
                                                </td>
                                                <td>
                                                    <select value={entry.bathroom} onChange={(e) => handleChange(index, 'bathroom', e.target.value)} style={{ width: "100%", height: "45px", borderRadius: "5px", padding: "5px" }} disabled={!entry.day}>
                                                        <option value="" disabled>{entry.bathroom || "اختر الحمام"}</option>
                                                        {bathrooms.map(bathroom => (
                                                            <option key={bathroom.value} value={bathroom.value}>{bathroom.label}</option>
                                                        ))}
                                                    </select>
                                                </td>
                                                <td>
                                                    <select value={entry.hour} onChange={(e) => handleChange(index, 'hour', e.target.value)} style={{ width: "100%", height: "45px", borderRadius: "5px", padding: "5px" }} disabled={!entry.bathroom}>
                                                        <option value="" disabled>{entry.hour || "اختر الساعة"}</option>
                                                        {hours.map(hour => (
                                                            <option key={hour.value} value={hour.value}>{hour.label}</option>
                                                        ))}
                                                    </select>
                                                </td>
                                                <td>
                                                    {entry.hour && entry.lanes.map(lane => (
                                                        <div key={lane.number} className='d-flex align-items-center mb-3'>
                                                            <CheckCircleIcon sx={{ color: lane.status === 'مفتوح' ? 'green' : 'red', fontSize: '24px', marginRight: '8px' }} />
                                                            <span>حارة {lane.number}</span>
                                                        </div>
                                                    ))}
                                                </td>
                                                <td>
                                                    {entry.hour && entry.lanes.map(lane => (
                                                        <div key={lane.number} className='d-flex align-items-center mb-3'>
                                                            {lane.status === 'مفتوح' ? (
                                                                <button className='btn btn-add-program ml-3' style={{ padding: "2px 6px", fontSize: "14px" }} onClick={() => { setOpenProgramDialog(true); setCurrentLane(lane.number); setCurrentEntryIndex(index); }}>
                                                                    <AddIcon sx={{ fontSize: '14px', marginRight: '4px' }} /> إضافة برنامج
                                                                </button>
                                                            ) : (
                                                                <span>{lane.program}</span>
                                                            )}
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

            <Dialog  open={openProgramDialog} onClose={() => setOpenProgramDialog(false)} fullWidth maxWidth="sm">
                <div className="white-div p-1" style={{ backgroundColor: "#94F0FF" }}></div>
                <DialogTitle style={{ marginBottom: "15px", direction: "rtl", textAlign: "center" }}>
                إضافة برنامج لحارة {currentLane}
                    <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={() => setOpenProgramDialog(false)}  />
                </DialogTitle>
                <DialogContent style={{overflow: "hidden"}}>
                    <div className='row' >
                        <div className='col-md-6 m-auto'>
                            <select value={selectedProgram} onChange={(e) => setSelectedProgram(e.target.value)} style={{ width: "100%", height: "45px", borderRadius: "5px", padding: "5px" }}>
                                <option value="" disabled>اختر البرنامج</option>
                                {programs.map(program => (
                                    <option key={program.value} value={program.value}>{program.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </DialogContent>
                <div className="row justify-content-center my-3 w-100">
                    <Button className="col-md-4"  onClick={handleProgramSave} variant="contained" style={{ background: "#4caf50", color: "white" }}>حفظ</Button>
                </div>
            </Dialog>
        </div>
    );
}

export default DayTable;
