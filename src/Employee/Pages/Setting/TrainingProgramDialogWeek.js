import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useNavigate } from 'react-router';

function TrainingProgramDialogWeek({ open, onClose, onSubmit }) {
    const [programName, setProgramName] = useState('');
    const navigate = useNavigate();

    const handleProgramChange = (event) => {
        setProgramName(event.target.value);
    };

    const handleSave = () => {
        onSubmit(programName);
        onClose();
    };
        
    const handleDetails = () => {
        navigate('/ProgramDetailsWeekTable');
        onSubmit(programName);
        setProgramName('');
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>أضف برنامج تدريبي</DialogTitle>
            <DialogContent>
                <FormControl fullWidth>
                    <InputLabel>اختر البرنامج</InputLabel>
                    <Select
                        value={programName}
                        onChange={handleProgramChange}
                        autoFocus
                    >
                        <MenuItem value="برنامج 1">برنامج 1</MenuItem>
                        <MenuItem value="برنامج 2">برنامج 2</MenuItem>
                        <MenuItem value="برنامج 3">برنامج 3</MenuItem>
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    إلغاء
                </Button>
                <Button onClick={handleSave} color="primary">
                    حفظ
                </Button>
                <Button onClick={handleDetails} disabled={!programName} color="primary">
                    تفاصيل البرنامج
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default TrainingProgramDialogWeek;
