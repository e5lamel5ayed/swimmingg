import React, { useState } from 'react'
import NavBar from '../../Components/NavBar/NavBarFather'
import Student from './StudentFather'
import { Tab, Tabs } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TransactionHistory from './TransactionHistory';
import Payment from './Payment';
import AccountInfo from './AccountInfo/AccountInfo';
import FamilyCustomFields from './FamilyCustomFields';


export const MyAcount = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div>
            <NavBar />
            <div className='myacount'>
                <div className='title-class d-flex'>
                    <div className='col-md-5 d-flex' style={{ alignItems: "center" }} >
                        <Link to="/bookingFather">
                            <ArrowForwardIcon sx={{ color: "#fff", fontSize: "38px" }} />
                        </Link>
                    </div>
                    <div className='col-md-7 ml-1 d-flex' style={{ justifyContent: "flex-start" }}>

                        <h2 className='text-center text-white mr-5'>حسابي</h2>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9 ml-auto mr-auto '>
                            <div
                                style={{
                                    direction: "rtl", textAlign: "right",
                                    color: "#005476", padding: ".5%",
                                }}>

                                <Tabs className='tabs' sx={{ borderBottom: "1px #00000052 solid" }} value={tabValue} onChange={handleTabChange}>
                                    <Tab style={{ fontSize: "20px", fontWeight: "600" }} label="الطلاب" />
                                    <Tab style={{ fontSize: "20px", fontWeight: "600" }} label="الدفع" />
                                    <Tab style={{ fontSize: "20px", fontWeight: "600" }} label="تاريخ المعاملات" />
                                    <Tab style={{ fontSize: "20px", fontWeight: "600" }} label="معلومات الحساب" />
                                    <Tab style={{ fontSize: "20px", fontWeight: "600" }} label=" الحقول المخصصة للعائلة" />
                                    <Tab style={{ fontSize: "20px", fontWeight: "600" }} label=" تسجيل الدخول/الأمان" />
                                </Tabs>
                            </div>

                            {tabValue === 0 && (
                                <div>
                                    <AccountInfo/>
                                    <Student />

                                </div>
                            )}
                            {tabValue === 1 && (
                                <div>
                                    <Payment />

                                </div>
                            )}
                            {tabValue === 2 && (
                                <div>
                                    <TransactionHistory/>
                                </div>
                            )}
                            {tabValue === 3 && (
                                <div>

                                </div>
                            )}
                            {tabValue === 4 && (
                                <div>
                                    <FamilyCustomFields/>
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