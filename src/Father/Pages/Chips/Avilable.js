import React, { useState } from 'react';
import { Chip, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const Avilable = () => {
    const [open, setOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOptionClick = (option) => {
        setSelectedOptions((prevSelectedOptions) =>
            prevSelectedOptions.includes(option)
                ? prevSelectedOptions.filter((o) => o !== option)
                : [...prevSelectedOptions, option]
        );
    };

    const handleClear = () => {
        setSelectedOptions([]);
    };

    const options = [
        'المفتوح فقط',
        'قائمة الانتظار فقط'
    ];

    return (
        <div>
            <Chip
                className='m-1'
                label="المتاح"
                component="a"
                href="#basic-chip"
                variant="outlined"
                clickable
                onClick={handleOpen}
            />

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <div className='white-div p-1' style={{ backgroundColor: "#94F0FF" }}></div>
                <DialogTitle
                    style={{
                        marginBottom: "15px",
                        direction: "rtl",
                        textAlign: "center"
                    }}>
                    فلتر/المتاح
                    <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose} />
                </DialogTitle>
                <DialogContent style={{ direction: "rtl" }}>
                    <div className='container-fluid'>
                        <div className='row' style={{ display: "flex", justifyContent: "center" }}>
                            <div className='col-md-12'>
                                
                                {options.map((option, index) => (
                                    <div
                                        key={index}
                                        style={{ justifyContent: "center" }}
                                        className="form-group form-check mt-3"
                                    >
                                        <div
                                            style={{
                                                width: "100%",
                                                borderRadius: "18px",
                                                height: "37px",
                                                backgroundColor: selectedOptions.includes(option) ? "#004C6D" : "transparent",
                                                color: selectedOptions.includes(option) ? "#FFF" : "#000",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer"
                                            }}
                                            className="form-control form-check-input"
                                            onClick={() => handleOptionClick(option)}
                                        >
                                            <span className="position-absolute" style={{ fontSize: "11px" }}>
                                                {option}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='col-md-12 d-flex'>
                                <div className='col-md-6 text-center mt-3'>
                                    <button
                                        style={{
                                            backgroundColor: "#94F0FF",
                                            color: "#000",
                                            borderRadius: "28px",
                                            width: "100%"
                                        }}
                                        className='btn'
                                    >
                                        تطبيق
                                    </button>
                                </div>
                                <div className='col-md-6 text-center mt-3'>
                                    <button
                                        style={{
                                            backgroundColor: "rgb(237 236 236)",
                                            color: "#000",
                                            borderRadius: "28px",
                                            width: "100%"
                                        }}
                                        className='btn'
                                        onClick={handleClear}
                                    >
                                        مسح فلتر المتاح
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions></DialogActions>
            </Dialog>
        </div>
    );
};

export default Avilable;
