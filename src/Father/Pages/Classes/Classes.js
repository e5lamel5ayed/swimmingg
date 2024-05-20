import React, { useState } from 'react'
import { Tab, Tabs } from '@mui/material';
import NavBar from '../../Components/NavBar/NavBar';
import Student from '../MyAcount/Student';
import AllClasses from './AllClasses';

export const Classes = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div>
            <NavBar />
            <div className='classes bg-white'>
                <div className='title'>
                    <h2 className='text-center text-white'>الصفوف</h2>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div
                                style={{
                                    direction: "rtl",
                                    color: "#005476", paddingTop: "10px", paddingBottom: "10px",marginBottom:"20px"
                                }}>

                                <Tabs className='tabs' value={tabValue} onChange={handleTabChange}>
                                    <Tab style={{ fontSize: "16px", fontWeight: "600", border: "1px solid", borderRadius: "20px", padding: "5px", marginRight: "10px" }} label="الكل" />
                                    <Tab style={{ fontSize: "16px", fontWeight: "600", border: "1px solid", borderRadius: "20px", padding: "5px", marginRight: "10px" }} label="العمر" />
                                    <Tab style={{ fontSize: "16px", fontWeight: "600", border: "1px solid", borderRadius: "20px", padding: "5px", marginRight: "10px" }} label="البرامج" />
                                    <Tab style={{ fontSize: "16px", fontWeight: "600", border: "1px solid", borderRadius: "20px", padding: "5px", marginRight: "10px" }} label=" الايام" />
                                    <Tab style={{ fontSize: "16px", fontWeight: "600", border: "1px solid", borderRadius: "20px", padding: "5px", marginRight: "10px" }} label=" المدربين" />
                                    <Tab style={{ fontSize: "16px", fontWeight: "600", border: "1px solid", borderRadius: "20px", padding: "5px", marginRight: "10px" }} label="المتاح " />
                                </Tabs>
                            </div>

                            {tabValue === 0 && (
                                <div>
                                    <AllClasses />

                                </div>
                            )}
                            {tabValue === 1 && (
                                <div>
                                    <Student />

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
export default Classes