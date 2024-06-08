import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

function TrainingProgramDialog({ open, onClose, onSubmit }) {
    const [programName, setProgramName] = useState('');

    const handleProgramChange = (event) => {
        setProgramName(event.target.value);
    };

    const handleSave = () => {
        onSubmit(programName);
        onClose();
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
            </DialogActions>
        </Dialog>
    );
}

export default TrainingProgramDialog;
