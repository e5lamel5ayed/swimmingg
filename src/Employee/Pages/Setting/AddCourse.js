import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const AddCourse = () => {
    const [open, setOpen] = useState(false);
    const [courses, setCourses] = useState([]);
    const [courseCode, setCourseCode] = useState('');
    const [courseName, setCourseName] = useState('');
    const [level, setLevel] = useState('');
    const [bathroomName, setBathroomName] = useState('');
    const [trainerName, setTrainerName] = useState('');
    const [numberOfStudents, setNumberOfStudents] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [daysOfWeek, setDaysOfWeek] = useState([]);
    const [numberOfLanes, setNumberOfLanes] = useState('');
    const [status, setStatus] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        const newCourse = {
            code: courseCode,
            name: courseName,
            level: level,
            bathroom: bathroomName,
            trainer: trainerName,
            students: numberOfStudents,
            startDate: startDate,
            endDate: endDate,
            daysOfWeek: daysOfWeek,
            lanes: numberOfLanes,
            status: status
        };
        setCourses([...courses, newCourse]);
        setCourseCode('');
        setCourseName('');
        setLevel('');
        setBathroomName('');
        setTrainerName('');
        setNumberOfStudents('');
        setStartDate('');
        setEndDate('');
        setDaysOfWeek([]);
        setNumberOfLanes('');
        setStatus('');
        handleClose();
    };

    const handleDayChange = (e) => {
        const value = e.target.value;
        setDaysOfWeek(prev =>
            prev.includes(value) ? prev.filter(day => day !== value) : [...prev, value]
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

                                <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
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
                                                            <div className="row">
                                                                <div className="form-group col-md-6 d-flex justify-content-between align-items-center">
                                                                    <label htmlFor="">كود الكورس</label>
                                                                    <input type="text" className="form-control w-75" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} />
                                                                </div>
                                                                <div className="form-group col-md-6 d-flex justify-content-between align-items-center">
                                                                    <label htmlFor="">اسم الكورس</label>
                                                                    <input type="text" className="form-control w-75" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="form-group col-md-6 d-flex justify-content-between align-items-center">
                                                                    <label htmlFor="">عدد الطلاب</label>
                                                                    <input type="number" className="form-control w-75" value={numberOfStudents} onChange={(e) => setNumberOfStudents(e.target.value)} />
                                                                </div>
                                                                <div className="form-group col-md-6 d-flex justify-content-between align-items-center">
                                                                    <label htmlFor="bathroom">اختر اسم الحمام</label>
                                                                    <select name="bathroom" className='form-control w-75' value={bathroomName} onChange={(e) => setBathroomName(e.target.value)}>
                                                                        <option value="">اختر حمام</option>
                                                                        <option value="حمام 1">حمام 1</option>
                                                                        <option value="حمام 2">حمام 2</option>
                                                                        <option value="حمام 3">حمام 3</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="form-group col-md-6 d-flex justify-content-between align-items-center">
                                                                    <label htmlFor="trainer">اختر اسم المدرب</label>
                                                                    <select name="trainer" className='form-control w-75' value={trainerName} onChange={(e) => setTrainerName(e.target.value)}>
                                                                        <option value="">اختر المدرب</option>
                                                                        <option value="احمد علي">احمد علي</option>
                                                                        <option value="السيد بدوي">السيد بدوي</option>
                                                                        <option value="اسلام حسين">اسلام حسين</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-group col-md-6 d-flex justify-content-between align-items-center">
                                                                    <label htmlFor="level">المستوي</label>
                                                                    <select name="level" className='form-control w-75' value={level} onChange={(e) => setLevel(e.target.value)}>
                                                                        <option value="">اختر مستوي</option>
                                                                        <option value="مبتدئ">مبتدئ</option>
                                                                        <option value="متوسط">متوسط</option>
                                                                        <option value="محترف">محترف</option>
                                                                    </select>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="form-group col-md-6 d-flex justify-content-between align-items-center">
                                                                    <label htmlFor="startDate">بداية التاريخ</label>
                                                                    <input type="date" className="form-control w-75" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                                                                </div>
                                                                <div className="form-group col-md-6 d-flex justify-content-between align-items-center">
                                                                    <label htmlFor="endDate">انتهاء التاريخ</label>
                                                                    <input type="date" className="form-control w-75" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                                                                </div>
                                                            </div>

                                                            <div className="row my-3">
                                                                <div className="form-group col-md-12 d-flex justify-content-between align-items-center">
                                                                    <label htmlFor="daysOfWeek">اختر أيام الأسبوع</label>
                                                                    <div className='d-flex flex-wrap w-75'>
                                                                        {['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'].map((day, index) => (
                                                                            <div key={index} className='form-check form-check-inline'>
                                                                                <input
                                                                                    className='form-check-input ml-1'
                                                                                    type='checkbox'
                                                                                    id={`day-${index}`}
                                                                                    value={day}
                                                                                    checked={daysOfWeek.includes(day)}
                                                                                    onChange={handleDayChange}
                                                                                />
                                                                                <label className='form-check-label mr-1' htmlFor={`day-${index}`}>{day}</label>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="form-group col-md-6 d-flex justify-content-between align-items-center col-md-6">
                                                                    <label htmlFor="lanes">عدد الحارات</label>
                                                                    <input type="number" className="form-control w-75" value={numberOfLanes} onChange={(e) => setNumberOfLanes(e.target.value)} />
                                                                </div>
                                                            <div className="form-group d-flex justify-content-start align-items-center col-md-6">
                                                                <label htmlFor="" className='ml-2'>الحالة :</label>
                                                                <div className="input-group-prepend">
                                                                    <div className=" d-flex justify-content-center align-items-center">
                                                                        <input type="radio" className='ml-2' value='مغلق' name='condition-health' onChange={(e) => setStatus(e.target.value)} /> مغلق
                                                                        <input type="radio" className='mr-2 ml-2' value='مفتوح' name='condition-health' onChange={(e) => setStatus(e.target.value)} /> مفتوح
                                                                    </div>
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
                                                <th scope="col">اسم المدرب</th>
                                                <th scope="col">عدد الطلاب</th>
                                                <th scope="col">بداية التاريخ</th>
                                                <th scope="col">انتهاء التاريخ</th>
                                                <th scope="col">الأيام</th>
                                                <th scope="col">عدد الحارات</th>
                                                <th scope="col">الحالة</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {courses.map((course, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{course.code}</td>
                                                    <td>{course.name}</td>
                                                    <td>{course.level}</td>
                                                    <td>{course.bathroom}</td>
                                                    <td>{course.trainer}</td>
                                                    <td>{course.students}</td>
                                                    <td>{course.startDate}</td>
                                                    <td>{course.endDate}</td>
                                                    <td>{course.daysOfWeek.join(', ')}</td>
                                                    <td>{course.lanes}</td>
                                                    <td>{course.status}</td>
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
