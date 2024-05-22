import React, { useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Student from './Student'
import { Tab, Tabs } from '@mui/material';

export const MyAcount = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div>
            <NavBar />
            <div className='myacount'>
                <div className='title-class'>
                    <h2 className='text-center text-white'>حسابي</h2>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9 ml-auto mr-auto '>
                            <div
                                style={{
                                    direction: "rtl", textAlign: "right",
                                    color: "#005476", padding: ".5%",
                                }}>

                                {/* <Tabs className='tabs' sx={{ borderBottom: "1px #00000052 solid" }} value={tabValue} onChange={handleTabChange}>
                                    <Tab style={{ fontSize: "20px", fontWeight: "600" }} label="الطلاب" />
                                    <Tab style={{ fontSize: "20px", fontWeight: "600" }} label="الدفع" />
                                    <Tab style={{ fontSize: "20px", fontWeight: "600" }} label="تاريخ المعاملات" />
                                    <Tab style={{ fontSize: "20px", fontWeight: "600" }} label="معلومات الحساب" />
                                    <Tab style={{ fontSize: "20px", fontWeight: "600" }} label=" الحقول المخصصة للعائلة" />
                                    <Tab style={{ fontSize: "20px", fontWeight: "600" }} label=" تسجيل الدخول/الأمان" />
                                </Tabs> */}
                            </div>

                            {tabValue === 0 && (
                                <div>
                                    {/* <Student /> */}
                                </div>
                            )}
                            {tabValue === 1 && (
                                <div>
                                </div>
                            )}
                            {tabValue === 2 && (
                                <div>

                                </div>
                            )}
                            {tabValue === 3 && (
                                <div>

                                </div>
                            )}
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}
export default MyAcount