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
    const [instructorName, setInstructorName] = useState('');
    const [rating, setRating] = useState('');
    const [salary, setSalary] = useState('');
    const [percentage, setPercentage] = useState('');
    const [ClassName, setClassName] = useState('');
    const [level, setLevel] = useState('');
    const [trainingType, setTrainingType] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        const newLane = {
            code: laneCode,
            name: instructorName,
            rating: rating,
            salary: salary,
            percentage: percentage,
            class: ClassName,
            level: level,
            trainingType: trainingType
        };
        setLanes([...lanes, newLane]);
        setLaneCode('');
        setInstructorName('');
        setRating('');
        setSalary('');
        setPercentage('');
        setClassName('');
        setLevel('');
        setTrainingType('');
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
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label htmlFor="">كود المدرب :</label>
                                                                        <input type="text" className="form-control" value={laneCode} onChange={(e) => setLaneCode(e.target.value)} />
                                                                    </div>

                                                                    <div className="form-group">
                                                                        <label htmlFor="">اسم المدرب :</label>
                                                                        <input type="text" className="form-control" value={instructorName} onChange={(e) => setInstructorName(e.target.value)} />
                                                                    </div>

                                                                    <div className="form-group">
                                                                        <label htmlFor="">تقييم المدرب :</label>
                                                                        <input type="text" className="form-control" value={rating} onChange={(e) => setRating(e.target.value)} />
                                                                    </div>

                                                                    <div className="form-group">
                                                                        <label htmlFor="">قيمة المرتب :</label>
                                                                        <input type="text" className="form-control" value={salary} onChange={(e) => setSalary(e.target.value)} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label htmlFor="">نسبة المدرب :</label>
                                                                        <input type="text" className="form-control" value={percentage} onChange={(e) => setPercentage(e.target.value)} />
                                                                    </div>

                                                                    <div className="form-group">
                                                                        <label htmlFor="class"> اسم الكلاس : </label>
                                                                        <select name="class" className='form-control' value={ClassName} onChange={(e) => setClassName(e.target.value)}>
                                                                            <option>اختر كلاس</option>
                                                                            <option value="صيف 2024 (1 يوليو 2024 - 25 أغسطس 2024) (مفتوح)">
                                                                                صيف 2024 (1 يوليو 2024 - 25 أغسطس 2024) (مفتوح)
                                                                            </option>
                                                                            <option value="صيف 2025 (1 يوليو 2025 - 25 أغسطس 2025) (مفتوح)">
                                                                                صيف 2025 (1 يوليو 2025 - 25 أغسطس 2025) (مفتوح)
                                                                            </option>
                                                                            <option value="صيف 2026 (1 يوليو 2026 - 25 أغسطس 2026) (مغلق)">
                                                                                صيف 2026 (1 يوليو 2026 - 25 أغسطس 2026) (مغلق)
                                                                            </option>
                                                                            {/* أضف المزيد من الخيارات هنا إذا لزم الأمر */}
                                                                        </select>
                                                                    </div>

                                                                    <div className="form-group">
                                                                        <label htmlFor="level">المستويات :</label>
                                                                        <select name="level" className='form-control' value={level} onChange={(e) => setLevel(e.target.value)}>
                                                                            <option>اختر مستوي</option>
                                                                            <option value="مبتدئ">مبتدئ</option>
                                                                            <option value="متوسط">متوسط</option>
                                                                            <option value="محترف">محترف</option>
                                                                        </select>
                                                                    </div>

                                                                    <div className="form-group">
                                                                        <label htmlFor="trainingType">نوع التدريبات :</label>
                                                                        <select name="trainingType" className='form-control' value={trainingType} onChange={(e) => setTrainingType(e.target.value)}>
                                                                            <option value="">اختر نوع</option>
                                                                            <option value="خاص">خاص</option>
                                                                            <option value="عام">عام</option>
                                                                            <option value="جماعي">جماعي</option>
                                                                        </select>
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

                                <h4 className='my-5'>المدربون المضافون مسبقا</h4>

                                <div className="table-responsive text-center">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">كود المدرب</th>
                                                <th scope="col">اسم المدرب</th>
                                                <th scope="col">تقييم المدرب</th>
                                                <th scope="col">قيمة المرتب</th>
                                                <th scope="col">نسبة المدرب</th>
                                                <th scope="col">اسم الكلاس</th>
                                                <th scope="col">المستوى</th>
                                                <th scope="col">نوع التدريبات</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {lanes.map((lane, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{lane.code}</td>
                                                    <td>{lane.name}</td>
                                                    <td>{lane.rating}</td>
                                                    <td>{lane.salary}</td>
                                                    <td>{lane.percentage}</td>
                                                    <td>{lane.class}</td>
                                                    <td>{lane.level}</td>
                                                    <td>{lane.trainingType}</td>
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
