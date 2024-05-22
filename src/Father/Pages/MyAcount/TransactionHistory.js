import { Button, Pagination, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react'

const TransactionHistory = () => {

    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div>
            <div className=' border mt-3'>
                <div className='row'>
                    <div className='col-md-12 mt-3'>
                        <h3
                            style={{
                                borderRight: " 5px #004c6d solid",
                                paddingRight: " 11px",
                                borderRadius: "2px",
                                color: "#000",
                            }}
                        >تاريخ المعاملات</h3>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-9 ml-auto mr-auto '>
                                <div
                                    style={{
                                        direction: "rtl", textAlign: "right",
                                        color: "#005476", padding: ".5%", justifyContent: "space-between"
                                    }}>

                                    <Tabs className='tabs' sx={{ borderBottom: "1px #00000052 solid", display: "flex", justifyContent: "space-between" }} value={tabValue} onChange={handleTabChange}>
                                        <Tab style={{ fontSize: "20px", fontWeight: "600" }} label="الكل" />
                                        <Tab style={{ fontSize: "20px", fontWeight: "600" }} label="الرسوم" />
                                        <Tab style={{ fontSize: "20px", fontWeight: "600" }} label=" الدفع" />
                                        <Tab style={{ fontSize: "20px", fontWeight: "600" }} label=" المبالغ المستردة" />

                                    </Tabs>
                                </div>

                                {tabValue === 0 && (
                                    <div>
                                        <p className='text-center mt-5'>لم يتم العثور على معاملات للجميع</p>
                                        <Pagination count={1} className='d-flex justify-content-center mt-5 ' color="primary" />
                                        <div className='d-flex justify-content-center mt-4 '>
                                            <Button
                                                style={{
                                                    backgroundColor: "rgb(237 236 236)",
                                                    color: "rgb(0, 0, 0)",
                                                    borderRadius: "32px",
                                                }}
                                                className='btn w-50 mb-2  ' size="" color="primary">
                                                إنشاء بيان لهذا الموقع                                        </Button>
                                        </div>
                                        <div className='d-flex justify-content-center mt-2 mb-3'>
                                            <Button
                                                style={{
                                                    backgroundColor: "rgb(237 236 236)",
                                                    color: "rgb(0, 0, 0)",
                                                    borderRadius: "32px",
                                                }}
                                                className='btn w-50 mb-2  ' size="" color="primary">
                                                إنشاء دفتر الأستاذ لهذا الموقع                                            </Button>
                                        </div>
                                    </div>
                                )}
                                {tabValue === 1 && (
                                    <div>
                                    <p className='text-center mt-5'>لم يتم العثور على معاملات للرسوم</p>
                                    <Pagination count={1} className='d-flex justify-content-center mt-5 ' color="primary" />
                                    <div className='d-flex justify-content-center mt-4 '>
                                        <Button
                                            style={{
                                                backgroundColor: "rgb(237 236 236)",
                                                color: "rgb(0, 0, 0)",
                                                borderRadius: "32px",
                                            }}
                                            className='btn w-50 mb-2  ' size="" color="primary">
                                            إنشاء بيان لهذا الموقع                                        </Button>
                                    </div>
                                    <div className='d-flex justify-content-center mt-2 mb-3'>
                                        <Button
                                            style={{
                                                backgroundColor: "rgb(237 236 236)",
                                                color: "rgb(0, 0, 0)",
                                                borderRadius: "32px",
                                            }}
                                            className='btn w-50 mb-2  ' size="" color="primary">
                                            إنشاء دفتر الأستاذ لهذا الموقع                                            </Button>
                                    </div>
                                </div>
                                )}
                                {tabValue === 2 && (
                                    <div>
                                    <p className='text-center mt-5'>لم يتم العثور على معاملات للدفع</p>
                                    <Pagination count={1} className='d-flex justify-content-center mt-5 ' color="primary" />
                                    <div className='d-flex justify-content-center mt-4 '>
                                        <Button
                                            style={{
                                                backgroundColor: "rgb(237 236 236)",
                                                color: "rgb(0, 0, 0)",
                                                borderRadius: "32px",
                                            }}
                                            className='btn w-50 mb-2  ' size="" color="primary">
                                            إنشاء بيان لهذا الموقع                                        </Button>
                                    </div>
                                    <div className='d-flex justify-content-center mt-2 mb-3'>
                                        <Button
                                            style={{
                                                backgroundColor: "rgb(237 236 236)",
                                                color: "rgb(0, 0, 0)",
                                                borderRadius: "32px",
                                            }}
                                            className='btn w-50 mb-2  ' size="" color="primary">
                                            إنشاء دفتر الأستاذ لهذا الموقع                                            </Button>
                                    </div>
                                </div>
                                )}
                                {tabValue === 3 && (
                                    <div>
                                    <p className='text-center mt-5'>لم يتم العثور على معاملات للمبالغ المسترده</p>
                                    <Pagination count={1} className='d-flex justify-content-center mt-5 ' color="primary" />
                                    <div className='d-flex justify-content-center mt-4 '>
                                        <Button
                                            style={{
                                                backgroundColor: "rgb(237 236 236)",
                                                color: "rgb(0, 0, 0)",
                                                borderRadius: "32px",
                                            }}
                                            className='btn w-50 mb-2  ' size="" color="primary">
                                            إنشاء بيان لهذا الموقع                                        </Button>
                                    </div>
                                    <div className='d-flex justify-content-center mt-2 mb-3'>
                                        <Button
                                            style={{
                                                backgroundColor: "rgb(237 236 236)",
                                                color: "rgb(0, 0, 0)",
                                                borderRadius: "32px",
                                            }}
                                            className='btn w-50 mb-2  ' size="" color="primary">
                                            إنشاء دفتر الأستاذ لهذا الموقع                                            </Button>
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default TransactionHistory