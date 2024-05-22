import NavBar from '../../Components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useState } from 'react';
import { Chip, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormLabel, RadioGroup, Radio, FormControlLabel, Stack } from '@mui/material';

import CancelIcon from '@mui/icons-material/Cancel';


const Days = () => {


    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        period: '',
        startHour: '',
        numberOfHours: '',
        endDepartureTime: '',
        startArrivalTime: ''
    });
    const [dataTable, setDataTable] = useState([]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        setDataTable([...dataTable, formData]);
        setOpen(false);
        setFormData({
            name: '',
            address: '',
            period: '',
            startHour: '',
            numberOfHours: '',
            endDepartureTime: '',
            startArrivalTime: ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePeriodChange = (e) => {
        setFormData({ ...formData, period: e.target.value });
    };





    return (
        <div>
            <Chip
                className='m-1'
                label="الايام"
                component="a"
                href="#basic-chip"
                variant="outlined"
                clickable
                onClick={handleOpen}
            />

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                <DialogTitle
                    style={{
                        marginBottom: "15px",
                        borderBottom: "1px #000000d6 solid",
                        direction: "rtl", textAlign: "right"
                    }}>
                    إضافة موعد دوام جديد
                    <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose} />
                </DialogTitle>
                <DialogContent style={{ direction: "rtl" }}>
                    
                </DialogContent>
                <DialogActions>
                   
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Days