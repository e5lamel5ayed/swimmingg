import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useNavigate } from 'react-router';

const students = [
    'السيد اسامة',
    'اسلام السيد',
    'احمد علي',
    'يونس محمد',
    'ندا السيد',
];

function StudentDialog({ open, onClose, onSubmit }) {
    const [selectedStudent, setSelectedStudent] = useState('');
    const navigate = useNavigate();

    const handleStudentChange = (event) => {
        setSelectedStudent(event.target.value);
    };

    const handleSubmit = () => {
        onSubmit(selectedStudent);
        setSelectedStudent('');
    };

    const handleDetails = () => {
        navigate('/StudentDetailsDayTable');
    };


    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>اختر طالب</DialogTitle>
            <DialogContent>
                <FormControl fullWidth>
                    <InputLabel id="select-student-label">اختر طالب</InputLabel>
                    <Select
                        labelId="select-student-label"
                        value={selectedStudent}
                        onChange={handleStudentChange}
                    >
                        {students.map((student, index) => (
                            <MenuItem key={index} value={student}>
                                {student}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>إلغاء</Button>
                <Button onClick={handleSubmit} disabled={!selectedStudent}>إضافة</Button>
                <Button onClick={handleDetails} disabled={!selectedStudent}>تفاصيل الطالب</Button>
            </DialogActions>
        </Dialog>
    );
}

export default StudentDialog;
