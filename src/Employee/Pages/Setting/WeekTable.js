import React, { useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import StudentDialogWeek from "./StudentDialogWeek";
import TrainingProgramDialogWeek from "./TrainingProgramDialogWeek";

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

function WeekTable() {
    const [selectedPool, setSelectedPool] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [currentLane, setCurrentLane] = useState(null);
    const [openStudentDialog, setOpenStudentDialog] = useState(false);  // State for StudentDialog

    const handlePoolChange = (e) => {
        setSelectedPool(e.target.value);
        setSelectedTime('');  // Reset time selection when pool changes
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
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

    const handleProgramSubmit = (programName) => {
        if (selectedPool && selectedTime && currentLane && programName) {
            // Update the data with the new program
            poolData[selectedPool][selectedTime] = poolData[selectedPool][selectedTime].map(item => {
                if (item.lane === currentLane.lane) {
                    return { ...item, program: programName, status: 'مغلق' };
                }
                return item;
            });
        }
    };

    const renderData = () => {
        if (!selectedPool || !selectedTime) return null;
        const data = poolData[selectedPool][selectedTime] || [];

        return (
            <div className="d-flex flex-column">
                {['السبت', 'الاحد', 'الاثنين', 'الثلاثاء', 'الابعاء', 'الخميس', 'الجمعه'].map(day => (
                    <div key={day} className="mb-3">
                        <h4>{day}</h4>
                        <div className="d-flex">
                            {data.map((item, index) => (
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
                    <Link to="/Employee">
                        <ArrowForwardIcon sx={{ color: "#fff", fontSize: "38px" }} />
                    </Link>
                </div>

                <div className='col-md-7 ml-1 d-flex justify-content-between align-items-center' style={{ justifyContent: "flex-start" }}>

                    <div className="d-flex justify-content-between align-items-center">
                        <i className="fas fa-calendar-days"></i>
                        <h2 className='text-center text-white mr-3'>جدول الاسبوع</h2>
                    </div>
                </div>
            </div>

            <div className='bg-white add-setting'>
                <div className="container pt-5">
                    <div className="row">
                        <div className="d-flex justify-content-center align-items-center mb-5">
                            <div className="ml-3">
                                <select className="mt-1 select-day-table" onChange={handlePoolChange} value={selectedPool}>
                                    <option value="">اختر الحمام</option>
                                    <option value="حمام 1">حمام 1</option>
                                    <option value="حمام 2">حمام 2</option>
                                    <option value="حمام 3">حمام 3</option>
                                </select>
                            </div>
                            <div className="">
                                <select className="mt-1 select-day-table" onChange={handleTimeChange} value={selectedTime} disabled={!selectedPool}>
                                    <option value="">اختر الساعة</option>
                                    <option value="9.00 - 10.00 ص">9.00 - 10.00 ص</option>
                                    <option value="10.00 - 11.00 ص">10.00 - 11.00 ص</option>
                                    <option value="11.00 - 12.00 م">11.00 - 12.00 م</option>
                                    <option value="12.00 - 1.00 م">12.00 - 1.00 م</option>
                                    <option value="1.00 - 2.00 م">1.00 - 2.00 م</option>
                                    <option value="2.00 - 3.00 م">2.00 - 3.00 م</option>
                                    <option value="3.00 - 4.00 م">3.00 - 4.00 م</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12">
                            {renderData()}
                        </div>
                    </div>
                </div>
            </div>

            <TrainingProgramDialogWeek
                open={openDialog}
                onClose={handleDialogClose}
                onSubmit={handleProgramSubmit}
            />
            <StudentDialogWeek open={openStudentDialog} onClose={handleStudentDialogClose} onSubmit={handleStudentSubmit} />

        </div>
    );
}

export default WeekTable;

