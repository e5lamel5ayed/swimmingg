import React from 'react'
import { Link } from 'react-router-dom'

const AccountInfo = () => {
    return (
        <div>
            <div className='pt-4 mt-3'>
                <h3
                    style={{
                        borderRight: " 5px #004c6d solid",
                        paddingRight: " 11px",
                        borderRadius: "2px",
                        color: "#000",
                    }}
                > معلومات الحساب</h3>
            </div>
            <div className=" mt-4 bg-white all-account">
                <div className='pt-4 mt-3'>
                    <h6
                        style={{
                            borderRight: " 5px #004c6d solid",
                            paddingRight: " 11px",
                            borderRadius: "2px",
                            color: "#000",
                        }}
                    >  سيد اسامة</h6>

                    <div className='mt-5 mb-4 px-4'>
                        <div className='d-flex  mb-2 account-info-location'>
                            <i className='fas fa-location-dot ml-2'></i>
                            <div>
                                <p>سيد</p>
                                <p>اسامة</p>
                                <p>شرقية</p>
                            </div>
                        </div>

                        <Link>
                            اضافة بريد الكتروني
                        </Link>
                    </div>

                    <div className='mt-5 mb-4 px-4'>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default AccountInfo