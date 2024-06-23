import React, { useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import StudentDialog from "./StudentDialogDay";
import TrainingProgramDialogDay from "./TrainingProgramDialogDay";

const poolData = {
    'حمام 1': {
        '9.00 - 10.00 ص': [
            { lane: 'حارة 1', status: 'مغلق', program: 'برنامج 1', students: [] },
            { lane: 'حارة 2', status: 'مفتوح', students: [] },
            { lane: 'حارة 3', status: 'مفتوح', students: [] },
            { lane: 'حارة 4', status: 'مغلق', program: 'برنامج 2', students: [] },
            { lane: 'حارة 5', status: 'مغلق', program: 'برنامج 5', students: [] },
            { lane: 'حارة 6', status: 'مفتوح', students: [] },
            { lane: 'حارة 7', status: 'مفتوح', students: [] },
            { lane: 'حارة 8', status: 'مغلق', program: 'برنامج 6', students: [] },
        ],
        '10.00 - 11.00 ص': [
            { lane: 'حارة 1', status: 'مغلق', program: 'برنامج 9', students: [] },
            { lane: 'حارة 2', status: 'مفتوح', students: [] },
            { lane: 'حارة 3', status: 'مفتوح', students: [] },
            { lane: 'حارة 4', status: 'مغلق', program: 'برنامج 10', students: [] },
            { lane: 'حارة 5', status: 'مغلق', program: 'برنامج 11', students: [] },
            { lane: 'حارة 6', status: 'مفتوح', students: [] },
            { lane: 'حارة 7', status: 'مفتوح', students: [] },
            { lane: 'حارة 8', status: 'مغلق', program: 'برنامج 12', students: [] },
        ],
        // Add more time slots...
    },
    'حمام 2': {
        '9.00 - 10.00 ص': [
            { lane: 'حارة 1', status: 'مغلق', program: 'برنامج 7', students: [] },
            { lane: 'حارة 2', status: 'مفتوح', students: [] },
            { lane: 'حارة 3', status: 'مفتوح', students: [] },
            { lane: 'حارة 4', status: 'مغلق', program: 'برنامج 8', students: [] },
        ],
        '10.00 - 11.00 ص': [
            { lane: 'حارة 1', status: 'مغلق', program: 'برنامج 13', students: [] },
            { lane: 'حارة 2', status: 'مفتوح', students: [] },
            { lane: 'حارة 3', status: 'مفتوح', students: [] },
            { lane: 'حارة 4', status: 'مغلق', program: 'برنامج 14', students: [] },
        ],
        // Add more time slots...
    },
    'حمام 3': {
        '9.00 - 10.00 ص': [
            { lane: 'حارة 1', status: 'مغلق', program: 'برنامج 13', students: [] },
            { lane: 'حارة 2', status: 'مفتوح', students: [] },
            { lane: 'حارة 3', status: 'مفتوح', students: [] },
        ],
        '10.00 - 11.00 ص': [
            { lane: 'حارة 1', status: 'مغلق', program: 'برنامج 14', students: [] },
            { lane: 'حارة 2', status: 'مفتوح', students: [] },
            { lane: 'حارة 3', status: 'مفتوح', students: [] },
        ],
        // Add more time slots...
    },
};

function DayTable() {
    const [selectedPool, setSelectedPool] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [openStudentDialog, setOpenStudentDialog] = useState(false);  // State for StudentDialog
    const [currentLane, setCurrentLane] = useState(null);

    const handlePoolChange = (e) => {
        setSelectedPool(e.target.value);
        setSelectedDay('');  // Reset day selection when pool changes
    };

    const handleDayChange = (e) => {
        setSelectedDay(e.target.value);
    };

    const handleAddProgramClick = (lane) => {
        setCurrentLane(lane);
        setOpenDialog(true);
    };

    const handleAddStudentClick = (lane) => {
        setCurrentLane(lane);
        setOpenStudentDialog(true);  // Open StudentDialog
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleStudentDialogClose = () => {
        setOpenStudentDialog(false);  // Close StudentDialog
    };

    const handleProgramSubmit = (programName) => {
        if (selectedPool && currentLane && programName) {
            Object.keys(poolData[selectedPool]).forEach(time => {
                poolData[selectedPool][time] = poolData[selectedPool][time].map(item => {
                    if (item.lane === currentLane.lane) {
                        return { ...item, program: programName, status: 'مغلق' };
                    }
                    return item;
                });
            });
        }
        setOpenDialog(false);
    };

    const handleStudentSubmit = (studentName) => {
        if (selectedPool && currentLane && studentName) {
            Object.keys(poolData[selectedPool]).forEach(time => {
                poolData[selectedPool][time] = poolData[selectedPool][time].map(item => {
                    if (item.lane === currentLane.lane) {
                        return { ...item, students: [...item.students, studentName] };
                    }
                    return item;
                });
            });
        }
        setOpenStudentDialog(false);
    };

    const renderData = () => {
        if (!selectedPool || !selectedDay) return null;
        const times = Object.keys(poolData[selectedPool]) || [];

        return (
            <div className="d-flex flex-column">
                <h3 className="text-center mb-4">يوم {selectedDay}</h3>
                {times.map(time => (
                    <div key={time} className="mb-3">
                        <h4>{time}</h4>
                        <div className="d-flex">
                            {poolData[selectedPool][time].map((item, index) => (
                                <div key={index} className="box-info border p-1">
                                    <span className="my-0 fw-light ml-5 lane-name">{item.lane}</span>
                                    <span className={item.status === 'مفتوح' ? 'status-lane' : 'status-lane-close'}>
                                        {item.status}
                                    </span>
                                    {item.program && (
                                        <>
                                            <br />
                                            <p className="m-0 fw-light">{item.program}</p>
                                            <button className="border-0 btn-block text-info" onClick={() => handleAddStudentClick(item)}>
                                                إضافة طالب
                                            </button>
                                        </>
                                    )}
                                    {item.status === 'مفتوح' && (
                                        <button className="border-0 btn-block text-info" onClick={() => handleAddProgramClick(item)}>
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
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

                <div className='col-md-7 ml-1 d-flex justify-content-between align-items-center' style={{ justifyContent: "flex-start" }}>

                    <div className="d-flex justify-content-between align-items-center">
                        <i className="fas fa-calendar-days"></i>
                        <h2 className='text-center text-white mr-3'>جدول اليوم</h2>
                    </div>
                </div>
            </div>

            <div className='bg-white add-setting'>
                <div className="container pt-5">
                    <div className="row">
                        <div className='d-flex justify-content-center align-items-center mb-5' style={{ alignItems: "center" }}>
                            <select onChange={handlePoolChange} value={selectedPool} className="mt-1 select-day-table">
                                <option value="">اختر الحمام</option>
                                {Object.keys(poolData).map(pool => (
                                    <option key={pool} value={pool}>{pool}</option>
                                ))}
                            </select>
                            <select className="mt-1 mr-3 select-day-table" onChange={handleDayChange} value={selectedDay}>
                                <option value="">اختر اليوم</option>
                                <option value="السبت">السبت</option>
                                <option value="الأحد">الأحد</option>
                                <option value="الاثنين">الاثنين</option>
                                <option value="الثلاثاء">الثلاثاء</option>
                                <option value="الأربعاء">الأربعاء</option>
                                <option value="الخميس">الخميس</option>
                                <option value="الجمعة">الجمعة</option>
                            </select>
                        </div>
                    </div>
                    {renderData()}
                    <TrainingProgramDialogDay open={openDialog} onClose={handleDialogClose} onSubmit={handleProgramSubmit} />
                    <StudentDialog open={openStudentDialog} onClose={handleStudentDialogClose} onSubmit={handleStudentSubmit} />
                </div>
            </div>
        </div>
    );
}

export default DayTable;
