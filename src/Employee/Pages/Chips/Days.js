import React, { useState } from 'react';
import { Chip, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const Days = () => {
    const [open, setOpen] = useState(false);
    const [selectedDays, setSelectedDays] = useState([]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDayClick = (day) => {
        setSelectedDays((prevSelectedDays) =>
            prevSelectedDays.includes(day)
                ? prevSelectedDays.filter((d) => d !== day)
                : [...prevSelectedDays, day]
        );
    };

    const handleClear = () => {
        setSelectedDays([]);
    };

    const daysOfWeek = ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'];

    return (
        <div>
            <Chip
                className="m-1"
                label="الايام"
                component="a"
                href="#basic-chip"
                variant="outlined"
                clickable
                onClick={handleOpen}
            />

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <div className="white-div p-1" style={{ backgroundColor: "#94F0FF" }}></div>
                <DialogTitle style={{ marginBottom: "15px", direction: "rtl", textAlign: "center" }}>
                    فلتر/البرامج
                    <CancelIcon style={{ position: "absolute", left: "15px", cursor: "pointer" }} onClick={handleClose} />
                </DialogTitle>
                <DialogContent style={{ direction: "rtl" }}>
                    <div className="container-fluid">
                        <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                            <div className="col-md-12">
                                <form className="form-inline my-2 my-lg-0">
                                    <input
                                        className="form-control w-100 mr-sm-2"
                                        style={{ borderRadius: "35px" }}
                                        type="search"
                                        placeholder="البحث"
                                        aria-label="Search"
                                    />
                                </form>

                                {daysOfWeek.map((day, index) => (
                                    <div key={index} style={{ justifyContent: "center" }} className="form-group form-check mt-2">
                                        <div
                                            style={{
                                                width: "100%",
                                                borderRadius: "18px",
                                                height: "37px",
                                                backgroundColor: selectedDays.includes(day) ? "#004C6D" : "transparent",
                                                color: selectedDays.includes(day) ? "#FFF" : "#000",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                cursor: "pointer"
                                            }}
                                            className="form-control form-check-input"
                                            onClick={() => handleDayClick(day)}
                                        >
                                            <span className="position-absolute" style={{ fontSize: "11px" }}>{day}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="col-md-12 d-flex">
                                <div className="col-md-6 text-center mt-2">
                                    <button
                                        style={{
                                            backgroundColor: "#94F0FF",
                                            color: "#000",
                                            borderRadius: "28px",
                                            width: "100%"
                                        }}
                                        className="btn"
                                    >
                                        تطبيق
                                    </button>
                                </div>
                                <div className="col-md-6 text-center mt-2">
                                    <button
                                        style={{
                                            backgroundColor: "rgb(237 236 236)",
                                            color: "#000",
                                            borderRadius: "28px",
                                            width: "100%"
                                        }}
                                        className="btn"
                                        onClick={handleClear}
                                    >
                                        مسح فلتر العمر
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

export default Days;
